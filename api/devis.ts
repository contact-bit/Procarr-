import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    // ✅ parsing safe pour Vercel
    const body =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const {
      name,
      email,
      phone,
      city,
      projectType,
      budget,
      surface,
      message,
    } = body || {};

    // ✅ validation
    if (!name || !email || !message || !projectType) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    // ✅ sécurité env
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.FROM_EMAIL ||
      !process.env.TO_EMAIL
    ) {
      console.error('Missing env');
      return res.status(500).json({ error: 'Server misconfigured' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email, // ✅ corrigé
      subject: `Nouveau devis - ${name}`,
      html: `
        <h2>Nouvelle demande de devis</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || '-'}</p>
        <p><strong>Ville :</strong> ${city || '-'}</p>
        <p><strong>Type projet :</strong> ${projectType}</p>
        <p><strong>Budget :</strong> ${budget || '-'}</p>
        <p><strong>Surface :</strong> ${surface || '-'}</p>
        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Email failed' });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}