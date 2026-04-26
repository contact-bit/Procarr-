import { Resend } from 'resend';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);

    // 🔥 IMPORTANT : parser le body correctement
    const body = typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    const { name, email, phone, subject, message } = body || {};

    console.log("BODY:", body);

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing fields' });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      reply_to: email,
      subject: subject || `Nouveau message de ${name}`,
      html: `<p>${message}</p>`,
    });

    console.log("RESEND:", { data, error });

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error("ERROR:", err);
    return res.status(500).json({ error: 'Server error' });
  }
}