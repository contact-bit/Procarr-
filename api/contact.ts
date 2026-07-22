import { Resend } from 'resend';

const CLIENT_EMAIL = 'procarre.dussert@wanadoo.fr';
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_PATTERN = /^[0-9\s+().-]{6,20}$/;

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  setHeader(name: string, value: string): void;
  status(code: number): ApiResponse;
  json(payload: unknown): ApiResponse;
};

type ContactBody = Record<string, unknown>;

function parseBody(rawBody: unknown): ContactBody | null {
  const parsed = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
  return parsed as ContactBody;
}

function clean(value: unknown = '') {
  return String(value).trim();
}

function cleanSingleLine(value: unknown = '') {
  return clean(value).replace(/[\r\n]+/g, ' ');
}

function escapeHtml(value: unknown = '') {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function getErrorMessage(error: unknown) {
  if (!error) return 'Email failed';
  if (typeof error === 'string') return error;
  if (error instanceof Error) return error.message;
  if (typeof error === 'object') {
    if ('message' in error && typeof error.message === 'string') return error.message;
    if ('error' in error && typeof error.error === 'string') return error.error;
  }
  return JSON.stringify(error);
}

export default async function handler(req: ApiRequest, res: ApiResponse) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Méthode non autorisée.' });
  }

  try {
    const body = parseBody(req.body);

    if (!body) {
      return res.status(400).json({ error: 'Le formulaire est vide.' });
    }

    // Champ invisible : un visiteur réel ne le remplit jamais.
    if (clean(body.website)) {
      return res.status(200).json({ ok: true });
    }

    const name = cleanSingleLine(body.name);
    const email = cleanSingleLine(body.email).toLowerCase();
    const phone = cleanSingleLine(body.phone);
    const subject = cleanSingleLine(body.subject);
    const message = clean(body.message);

    const fieldErrors: Record<string, string> = {};

    if (!name) fieldErrors.name = 'Merci d’indiquer votre nom.';
    else if (name.length < 2) fieldErrors.name = 'Votre nom doit contenir au moins 2 caractères.';
    else if (name.length > 80) fieldErrors.name = 'Votre nom est trop long.';

    if (!email) fieldErrors.email = 'Merci d’indiquer votre email.';
    else if (email.length > 120 || !EMAIL_PATTERN.test(email)) {
      fieldErrors.email = 'Saisissez une adresse email valide.';
    }

    if (phone && !PHONE_PATTERN.test(phone)) {
      fieldErrors.phone = 'Saisissez un numéro de téléphone valide.';
    }

    if (subject.length > 120) fieldErrors.subject = 'L’objet est trop long.';

    if (!message) fieldErrors.message = 'Merci de préciser votre demande.';
    else if (message.length < 5) fieldErrors.message = 'Votre message doit contenir au moins 5 caractères.';
    else if (message.length > 2000) fieldErrors.message = 'Votre message ne doit pas dépasser 2 000 caractères.';

    if (Object.keys(fieldErrors).length > 0) {
      return res.status(400).json({
        error: 'Vérifiez les champs indiqués avant l’envoi.',
        fieldErrors,
      });
    }

    if (!process.env.RESEND_API_KEY || !process.env.FROM_EMAIL) {
      console.error('Contact API: missing environment variables');
      return res.status(500).json({ error: 'Le service d’envoi est temporairement indisponible.' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone || '-');
    const safeSubject = escapeHtml(subject || '-');
    const safeMessage = escapeHtml(message).replace(/\n/g, '<br/>');

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: [CLIENT_EMAIL],
      replyTo: email,
      subject: subject ? `Contact Procarré - ${subject}` : `Nouveau message - ${name}`,
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
        <p><strong>Nom :</strong> ${safeName}</p>
        <p><strong>Email :</strong> ${safeEmail}</p>
        <p><strong>Téléphone :</strong> ${safePhone}</p>
        <p><strong>Objet :</strong> ${safeSubject}</p>
        <p><strong>Message :</strong></p>
        <p>${safeMessage}</p>
      `,
    });

    if (error) {
      console.error('Contact API Resend error:', getErrorMessage(error));
      return res.status(502).json({
        error: 'Le message n’a pas pu être envoyé. Merci de réessayer dans quelques instants.',
      });
    }

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error('Contact API server error:', error);
    return res.status(500).json({
      error: 'Une erreur inattendue est survenue. Merci de réessayer.',
    });
  }
}
