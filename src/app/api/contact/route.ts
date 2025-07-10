// src/app/api/contact/route.ts

import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import { z } from 'zod'
import { validateRecaptcha } from '../../../lib/validateRecaptcha'

const ContactFormSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  message: z.string().min(5),
  'g-recaptcha-response': z.string().min(1), // añadimos validación del token
})

export async function POST(req: NextRequest) {
  const body = await req.json()

  const result = ContactFormSchema.safeParse(body)

  if (!result.success) {
    return NextResponse.json({ result: 'validation_failed', errors: result.error.flatten().fieldErrors }, { status: 400 })
  }

  const { name, email, message, 'g-recaptcha-response': token } = result.data

  // Validación reCAPTCHA
  const isHuman = await validateRecaptcha(token, req.headers.get('x-forwarded-for') || undefined)
  if (!isHuman) {
    return NextResponse.json({ result: 'captcha_failed', errors: { captcha: 'reCAPTCHA validation failed.' } }, { status: 400 })
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    await transporter.sendMail({
      from: `"Formulario Web" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL || 'tu-email@dominio.com',
      subject: 'Nuevo mensaje del formulario',
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje:\n${message}`,
    })

    return NextResponse.json({ result: 'success' })
  } catch (error: any) {
    return NextResponse.json({ result: 'error_sending_email', errors: { mail: error.message } }, { status: 500 })
  }
}
