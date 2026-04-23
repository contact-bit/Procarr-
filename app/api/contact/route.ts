import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// ✅ évite le 405 quand quelqu’un ouvre l’URL
export async function GET() {
  return new Response(
    JSON.stringify({ ok: true, message: 'API contact OK' }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
}

export async function POST(req: Request) {
  try {
    console.log('API CONTACT HIT'); // 🔥 debug

    // 🔥 parse body sécurisé
    let body;
    try {
      body = await req.json();
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    const { name, email, phone, subject, message } = body || {};

    // 🔒 validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 🔒 vérif env
    const API_KEY = process.env.RESEND_API_KEY;
    const FROM = process.env.FROM_EMAIL;
    const TO = process.env.TO_EMAIL;

    if (!API_KEY || !FROM || !TO) {
      console.error('ENV ERROR:', { API_KEY, FROM, TO });
      return new Response(
        JSON.stringify({ error: 'Server misconfigured' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 📩 envoi email
    const { error } = await resend.emails.send({
      from: FROM,
      to: TO,
      reply_to: email,
      subject: subject?.trim()
        ? `Contact Procarré - ${subject}`
        : `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message depuis le formulaire Procarré</h2>

        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Téléphone :</strong> ${phone || '-'}</p>
        <p><strong>Objet :</strong> ${subject || '-'}</p>

        <p><strong>Message :</strong></p>
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    });

    if (error) {
      console.error('RESEND ERROR:', error);
      return new Response(
        JSON.stringify({ error: 'Email failed' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    console.log('EMAIL SENT ✅');

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (err) {
    console.error('UNEXPECTED ERROR:', err);
    return new Response(
      JSON.stringify({ error: 'Unexpected error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}