import { Resend } from 'resend';

export default async function handler(req, res) {
  console.log("METHOD:", req.method);

  if (req.method !== 'POST') {
    return res.status(405).send('Method Not Allowed');
  }

  try {
    console.log("RAW BODY:", req.body);

    const body =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    console.log("PARSED BODY:", body);

    const { name, email, phone, subject, message } = body || {};

    if (!name || !email || !message) {
      console.log("VALIDATION FAILED");
      return res.status(400).json({ error: 'Missing fields' });
    }

    console.log("ENV:", {
      key: process.env.RESEND_API_KEY ? "OK" : "MISSING",
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
    });

    const resend = new Resend(process.env.RESEND_API_KEY);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // 🔥 TEMPORAIRE POUR TEST
      to: process.env.TO_EMAIL,
      reply_to: email,
      subject: subject || `Test ${name}`,
      html: `<p>${message}</p>`,
    });

    console.log("RESEND RESULT:", { data, error });

    if (error) {
      console.error("RESEND ERROR:", error);
      return res.status(500).json({ error: error.message });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error("CATCH ERROR:", err);
    return res.status(500).json({ error: 'Server crash' });
  }
}