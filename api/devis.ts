import { Resend } from 'resend';

const ALLOWED_PROJECTS = ['interieur', 'exterieur', 'sdb', 'cuisine', 'renov'];

// ---------------- UTILS ----------------
function sanitize(str = '') {
  return String(str)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
}

function normalize(str = '') {
  return sanitize(str).toLowerCase();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return !phone || /^[0-9\s+().-]{6,20}$/.test(phone);
}

// ---------------- HANDLER ----------------
export default async function handler(req, res) {
  const requestId = Math.random().toString(36).slice(2, 8);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    if (!body) {
      console.error(`[${requestId}] EMPTY BODY`);
      return res.status(400).json({ error: 'Empty body' });
    }

    console.log(`[${requestId}] RAW`, body);

    // ---------- SANITIZE ----------
    const name = sanitize(body?.name);
    const email = sanitize(body?.email);
    const phone = sanitize(body?.phone);
    const city = sanitize(body?.city);
    const message = sanitize(body?.message);

    const projectTypeRaw = normalize(body?.projectType);
    const projectType = ALLOWED_PROJECTS.includes(projectTypeRaw)
      ? projectTypeRaw
      : 'interieur';

    const role = sanitize(body?.role);
    const projectKind = sanitize(body?.projectKind);
    const delay = sanitize(body?.delay);
    const building = sanitize(body?.building);

    console.log(`[${requestId}] CLEAN`, {
      name,
      email,
      projectType,
    });

    // ---------- VALIDATION ----------
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Nom, email et message requis' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Email invalide' });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({ error: 'Téléphone invalide' });
    }

    if (message.length < 5) {
      return res.status(400).json({ error: 'Message trop court' });
    }

    if (message.length > 2000) {
      return res.status(400).json({ error: 'Message trop long' });
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.FROM_EMAIL ||
      !process.env.TO_EMAIL
    ) {
      console.error(`[${requestId}] ENV ERROR`);
      return res.status(500).json({ error: 'Server misconfigured' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // ---------- TEMPLATE ----------
  const field = (label, value) =>
  value ? `<tr><td style="padding:6px 0;"><strong>${label}</strong></td><td style="padding:6px 0;">${value}</td></tr>` : '';

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
    ${safeMessage.replace(/\n/g, '<br/>')}
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
      to: process.env.TO_EMAIL,
      replyTo: isValidEmail(email) ? email : undefined, // ✅ safe
      subject,
      text,
      html,
    });

    console.log(`[${requestId}] RESEND RESULT`, result);

    if (result.error) {
      console.error(`[${requestId}] RESEND ERROR`, result.error);
      return res.status(500).json({
        error: result.error.message || 'Email failed',
      });
    }

    console.log(`[${requestId}] SUCCESS`);

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error(`[${requestId}] SERVER ERROR`, err);
    return res.status(500).json({
      error: err?.message || 'Server error',
    });
  }
}
