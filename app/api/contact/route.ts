import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, phone, subject, message } = await req.json();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
      });
    }

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      reply_to: email,
      subject: subject || `Nouveau message de ${name}`,
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
      console.error(error);
      return new Response(JSON.stringify({ error: 'Email failed' }), {
        status: 500,
      });
    }

    return Response.json({ ok: true });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: 'Unexpected error' }), {
      status: 500,
    });
  }
}