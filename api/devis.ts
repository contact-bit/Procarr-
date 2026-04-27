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

    console.log(`[${requestId}] RAW`, body);

    // ---------- SANITIZE ----------
    const name = sanitize(body?.name);
    const email = sanitize(body?.email);
    const phone = sanitize(body?.phone);
    const city = sanitize(body?.city);
    const message = sanitize(body?.message);

    // 🔥 important : normalisation
    const projectTypeRaw = normalize(body?.projectType);
    const projectType = ALLOWED_PROJECTS.includes(projectTypeRaw)
      ? projectTypeRaw
      : 'interieur'; // fallback SAFE

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
      value ? `<li><strong>${label} :</strong> ${value}</li>` : '';

    const subject = `Nouvelle demande de devis - ${name}`;

    // 🔥 VERSION TEXTE (IMPORTANT DELIVERABILITY)
    const text = `
Nouvelle demande de devis

Nom: ${name}
Email: ${email}
Téléphone: ${phone || '-'}
Ville: ${city || '-'}

Type: ${projectType}
Profil: ${role || '-'}
Projet: ${projectKind || '-'}
Délai: ${delay || '-'}
Bâtiment: ${building || '-'}

Message:
${message}
`;

    const html = `
<div style="font-family:Arial;padding:20px;color:#333">
  
  <p>Bonjour,</p>

  <p>Vous avez reçu une nouvelle demande de devis depuis votre site.</p>

  <h3>Coordonnées</h3>
  <ul>
    ${field('Nom', name)}
    ${field('Email', email)}
    ${field('Téléphone', phone)}
    ${field('Ville', city)}
  </ul>

  <h3>Projet</h3>
  <ul>
    ${field('Type de projet', projectType)}
    ${field('Profil', role)}
    ${field('Nature du projet', projectKind)}
    ${field('Délai', delay)}
    ${field('Bâtiment', building)}
  </ul>

  <h3>Message</h3>
  <p>${message.replace(/\n/g, '<br/>')}</p>

  <hr/>
  <p style="font-size:12px;color:#777">
    Email automatique - procarre.fr
  </p>

</div>
`;

    // ---------- ENVOI ----------
    const { error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // 🔥 IMPORTANT
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject,
      text, // 🔥 CRUCIAL anti-spam
      html,
    });

    if (error) {
      console.error(`[${requestId}] RESEND ERROR`, error);
      return res.status(500).json({ error: 'Email failed' });
    }

    console.log(`[${requestId}] SUCCESS`);

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error(`[${requestId}] SERVER ERROR`, err);
    return res.status(500).json({ error: 'Server error' });
  }
}