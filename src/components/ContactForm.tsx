'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [errors, setErrors] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setErrors([])
    setSuccess(false)

    const form = e.target as HTMLFormElement
    const formData = new FormData(form)

    const body = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      })

      const data = await res.json()

      if (data.result === 'success') {
        setSuccess(true)
        form.reset()
      } else {
        const rawErrors = data.errors || {}
        const errorList = Object.entries(rawErrors).map(
          ([field, msg]) => `${field}: ${msg}`
        )
        setErrors(errorList)
      }
    } catch (error: any) {
      setErrors(['Error al enviar el formulario. Inténtalo más tarde.'])
    } finally {
      setLoading(false)
    }
  }

  return (
    <form id="contact_form" onSubmit={handleSubmit} className="space-y-4">
      <input name="name" placeholder="Nombre" required className="border p-2 w-full" />
      <input name="email" type="email" placeholder="Email" required className="border p-2 w-full" />
      <textarea name="message" placeholder="Mensaje" required className="border p-2 w-full" />

      <button type="submit" className="btn-main" disabled={loading}>
        {loading ? 'Enviando...' : 'Enviar'}
      </button>

      {success && (
        <div id="success_message" className="text-green-600">Mensaje enviado con éxito.</div>
      )}
      {errors.length > 0 && (
        <div id="error_message" className="text-red-600">
          <ul>
            {errors.map((err, i) => (
              <li key={i}>{err}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  )
}
