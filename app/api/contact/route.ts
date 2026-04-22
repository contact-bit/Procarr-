import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// (optionnel) évite le 405 quand quelqu’un ouvre l’URL dans le navigateur
export async function GET() {
  return new Response(
    JSON.stringify({ ok: true, message: 'API contact OK' }),
    { status: 200 }
  );
}

export async function POST(req: Request) {
  try {
    // 🔥 parse body
    const body = await req.json().catch(() => null);

    if (!body) {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON body' }),
        { status: 400 }
      );
    }

    const { name, email, phone, subject, message } = body;

    // 🔒 validation
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    // 🔒 sécurité env
    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL || !process.env.TO_EMAIL) {
      console.error('Missing env variables');
      return new Response(
        JSON.stringify({ error: 'Server misconfigured' }),
        { status: 500 }
      );
    }

    // 📩 envoi email
    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
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
      console.error('Resend error:', error);
      return new Response(
        JSON.stringify({ error: 'Email failed' }),
        { status: 500 }
      );
    }

    return new Response(
      JSON.stringify({ ok: true }),
      { status: 200 }
    );
  } catch (err) {
    console.error('Unexpected error:', err);
    return new Response(
      JSON.stringify({ error: 'Unexpected error' }),
      { status: 500 }
    );
  }
}