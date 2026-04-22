import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const {
      name,
      email,
      phone,
      city,
      projectType,
      budget,
      surface,
      message,
    } = await req.json();

    if (!name || !email || !message || !projectType) {
      return new Response(JSON.stringify({ error: 'Missing fields' }), {
        status: 400,
      });
    }

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL!,
      to: process.env.TO_EMAIL!,
      reply_to: email,
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
      return new Response(JSON.stringify({ error: 'Email failed' }), {
        status: 500,
      });
    }

    return Response.json({ ok: true });
  } catch (err) {
    return new Response(JSON.stringify({ error: 'Server error' }), {
      status: 500,
    });
  }
}