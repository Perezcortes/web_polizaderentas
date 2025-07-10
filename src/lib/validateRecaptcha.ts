// src/lib/validateRecaptcha.ts
export async function validateRecaptcha(token: string, ip?: string): Promise<boolean> {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey || !token) return false;

  const params = new URLSearchParams();
  params.append('secret', secretKey);
  params.append('response', token);
  if (ip) params.append('remoteip', ip);

  const res = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: params.toString(),
  });

  const data = await res.json();
  return data.success === true;
}
