import { Resend } from 'resend';

const ALLOWED_PROJECTS = ['interieur', 'exterieur', 'sdb', 'cuisine', 'renov'];
const CLIENT_EMAIL = 'procarre.dussert@wanadoo.fr';

type ApiRequest = {
  method?: string;
  body?: unknown;
};

type ApiResponse = {
  status(code: number): ApiResponse;
  json(payload: unknown): ApiResponse;
};

type DevisBody = Record<string, unknown>;

function parseBody(rawBody: unknown): DevisBody | null {
  const parsed = typeof rawBody === 'string' ? JSON.parse(rawBody) : rawBody;
  if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return null;
  return parsed as DevisBody;
}

// ---------------- UTILS ----------------
function sanitize(str: unknown = '') {
  return String(str).trim();
}

function sanitizeSingleLine(str: unknown = '') {
  return sanitize(str).replace(/[\r\n]+/g, ' ');
}

function escapeHtml(str: unknown = '') {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function normalize(str: unknown = '') {
  return sanitize(str).toLowerCase();
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string) {
  return !phone || /^[0-9\s+().-]{6,20}$/.test(phone);
}

// ---------------- HANDLER ----------------
export default async function handler(req: ApiRequest, res: ApiResponse) {
  const requestId = Math.random().toString(36).slice(2, 8);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body = parseBody(req.body);

    if (!body) {
      console.error(`[${requestId}] EMPTY BODY`);
      return res.status(400).json({ error: 'Empty body' });
    }

    if (sanitize(body?.website)) {
      return res.status(200).json({ ok: true });
    }

    // ---------- SANITIZE ----------
    const name = sanitizeSingleLine(body?.name);
    const email = sanitizeSingleLine(body?.email).toLowerCase();
    const phone = sanitizeSingleLine(body?.phone);
    const city = sanitizeSingleLine(body?.city);
    const message = sanitize(body?.message);

    const projectTypeRaw = normalize(body?.projectType);
    const projectType = ALLOWED_PROJECTS.includes(projectTypeRaw)
      ? projectTypeRaw
      : 'interieur';

    const role = sanitizeSingleLine(body?.role);
    const projectKind = sanitizeSingleLine(body?.projectKind);
    const delay = sanitizeSingleLine(body?.delay);
    const building = sanitizeSingleLine(body?.building);

    // ---------- VALIDATION ----------
    const fieldErrors: Record<string, string> = {};

    if (!name) fieldErrors.name = 'Merci d’indiquer votre nom.';
    else if (name.length < 2) fieldErrors.name = 'Votre nom doit contenir au moins 2 caractères.';
    else if (name.length > 80) fieldErrors.name = 'Votre nom est trop long.';

    if (!email) fieldErrors.email = 'Merci d’indiquer votre email.';
    else if (email.length > 120 || !isValidEmail(email)) {
      fieldErrors.email = 'Saisissez une adresse email valide.';
    }

    if (!isValidPhone(phone)) fieldErrors.phone = 'Saisissez un numéro de téléphone valide.';
    if (city.length > 100) fieldErrors.city = 'Le nom de la ville est trop long.';

    if (!message) fieldErrors.message = 'Merci de décrire votre projet.';
    else if (message.length < 5) fieldErrors.message = 'Ajoutez quelques détails (5 caractères minimum).';
    else if (message.length > 2000) fieldErrors.message = 'Votre message ne doit pas dépasser 2 000 caractères.';

    if ([role, projectKind, delay, building].some(value => value.length > 80)) {
      return res.status(400).json({ error: 'Une des options sélectionnées est invalide.' });
    }

    if (Object.keys(fieldErrors).length > 0) {
      return res.status(400).json({
        error: 'Vérifiez les champs indiqués avant l’envoi.',
        fieldErrors,
      });
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.FROM_EMAIL
    ) {
      console.error(`[${requestId}] ENV ERROR`);
      return res.status(500).json({ error: 'Le service d’envoi est temporairement indisponible.' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);
    // ---------- TEMPLATE ----------
  const field = (label: string, value: string) =>
  value ? `<tr><td style="padding:6px 0;"><strong>${label}</strong></td><td style="padding:6px 0;">${escapeHtml(value)}</td></tr>` : '';

const subject = `Demande de devis reçue – ${name}`;

const safeMessage = message || '';

// ---------- TEXTE (IMPORTANT) ----------
const text = `
Bonjour,

Vous avez reçu une nouvelle demande de devis via votre site procarre.fr.

Informations du client :

Nom : ${name}
Email : ${email}
Téléphone : ${phone || '-'}
Ville : ${city || '-'}

Détails du projet :

Type : ${projectType}
Profil : ${role || '-'}
Nature du projet : ${projectKind || '-'}
Délai : ${delay || '-'}
Bâtiment : ${building || '-'}

Message du client :
${safeMessage}

---

Ce message a été envoyé depuis le formulaire de contact du site procarre.fr.
Vous pouvez répondre directement à cet email pour contacter le client.
`;

// ---------- HTML ----------
const html = `
<div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;padding:20px;color:#333;line-height:1.5">

  <p>Bonjour,</p>

  <p>
    Une nouvelle demande de devis a été envoyée depuis votre site 
    <strong>procarre.fr</strong>.
  </p>

  <h3 style="margin-top:25px;">Informations du client</h3>
  <table style="width:100%;border-collapse:collapse;">
    ${field('Nom', name)}
    ${field('Email', email)}
    ${field('Téléphone', phone || '-')}
    ${field('Ville', city || '-')}
  </table>

  <h3 style="margin-top:25px;">Détails du projet</h3>
  <table style="width:100%;border-collapse:collapse;">
    ${field('Type de projet', projectType)}
    ${field('Profil', role || '-')}
    ${field('Nature du projet', projectKind || '-')}
    ${field('Délai', delay || '-')}
    ${field('Bâtiment', building || '-')}
  </table>

  <h3 style="margin-top:25px;">Message</h3>
  <p style="background:#f6f6f6;padding:12px;border-radius:6px;">
    ${escapeHtml(safeMessage).replace(/\n/g, '<br/>')}
  </p>

  <p style="margin-top:30px;">
    Vous pouvez répondre directement à cet email pour contacter le client.
  </p>

  <hr style="margin:30px 0;border:none;border-top:1px solid #eee;" />

  <p style="font-size:12px;color:#777;">
    Email envoyé automatiquement depuis le formulaire du site procarre.fr.
  </p>

</div>
`;

    // ---------- ENVOI ----------
    const result = await resend.emails.send({
      from: process.env.FROM_EMAIL, // ✅ domaine validé
      to: [CLIENT_EMAIL],
      replyTo: isValidEmail(email) ? email : undefined, // ✅ safe
      subject,
      text,
      html,
    });

    if (result.error) {
      console.error(`[${requestId}] RESEND ERROR`, result.error);
      return res.status(502).json({
        error: 'La demande n’a pas pu être envoyée. Merci de réessayer dans quelques instants.',
      });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error(`[${requestId}] SERVER ERROR`, err);
    return res.status(500).json({
      error: 'Une erreur inattendue est survenue. Merci de réessayer.',
    });
  }
}
