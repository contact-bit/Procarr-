import { Resend } from 'resend';

const CLIENT_EMAIL = 'procarre.dussert@wanadoo.fr';

function getErrorMessage(error) {
  if (!error) return 'Email failed';
  if (typeof error === 'string') return error;
  if (error.message) return error.message;
  if (error.error) return error.error;
  return JSON.stringify(error);
}

export default async function handler(req, res) {
  // Autoriser seulement POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // Parse body propre (Vercel compatible)
    const body =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const { name, email, phone, subject, message } = body || {};

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    // Vérif env (sécurité)
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.FROM_EMAIL
    ) {
      console.error('Missing environment variables');
      return res.status(500).json({ error: 'Server misconfigured' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL, // ✅ ton vrai domaine
      to: [CLIENT_EMAIL],
      replyTo: email, // ✅ corrigé
      subject: subject
        ? `Contact Procarré - ${subject}`
        : `Nouveau message - ${name}`,
      text: `
Nouveau message contact

Nom : ${name}
Email : ${email}
Téléphone : ${phone || '-'}
Objet : ${subject || '-'}

Message :
${message}
      `.trim(),
      html: `
        <h2>Nouveau message contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || '-'}</p>
        <p><strong>Objet :</strong> ${subject || '-'}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      const details = getErrorMessage(error);
      console.error('Resend error:', JSON.stringify(error));
      return res.status(500).json({ error: 'Email failed', details });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({
      error: 'Server error',
      details: err?.message || 'Unexpected server error',
    });
  }
}
