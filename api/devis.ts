import { Resend } from 'resend';

const ALLOWED_PROJECTS = ['interieur', 'exterieur', 'sdb', 'cuisine', 'renov'];

function sanitize(str = '') {
  return String(str)
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .trim();
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return !phone || /^[0-9\s+().-]{6,20}$/.test(phone);
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const body =
      typeof req.body === 'string' ? JSON.parse(req.body) : req.body;

    // 🔐 SANITIZE (UNIQUEMENT CE QUE TON FORM ENVOIE)
    const name = sanitize(body?.name);
    const email = sanitize(body?.email);
    const phone = sanitize(body?.phone);
    const city = sanitize(body?.city);
    const message = sanitize(body?.message);

    const projectType = sanitize(body?.projectType);
    const role = sanitize(body?.role);
    const projectKind = sanitize(body?.projectKind);
    const delay = sanitize(body?.delay);
    const building = sanitize(body?.building);

    // ✅ VALIDATION
    if (!name || !email || !message || !projectType) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: 'Invalid email' });
    }

    if (!isValidPhone(phone)) {
      return res.status(400).json({ error: 'Invalid phone' });
    }

    if (!ALLOWED_PROJECTS.includes(projectType)) {
      return res.status(400).json({ error: 'Invalid project type' });
    }

    if (message.length < 5) {
      return res.status(400).json({ error: 'Message too short' });
    }

    if (message.length > 2000) {
      return res.status(400).json({ error: 'Message too long' });
    }

    if (
      !process.env.RESEND_API_KEY ||
      !process.env.FROM_EMAIL ||
      !process.env.TO_EMAIL
    ) {
      return res.status(500).json({ error: 'Server misconfigured' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // ✅ helper pour afficher uniquement si rempli
    const field = (label, value) =>
      value ? `<li><strong>${label} :</strong> ${value}</li>` : '';

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `📩 Nouveau devis - ${name}`,
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>Nouvelle demande de devis</h2>

          <h3>Vos coordonnées</h3>
          <ul>
            ${field('Nom', name)}
            ${field('Email', email)}
            ${field('Téléphone', phone)}
            ${field('Ville', city)}
          </ul>

          <h3>Votre profil & projet</h3>
          <ul>
            ${field('Type de projet', projectType)}
            ${field('Profil', role)}
            ${field('Nature du projet', projectKind)}
            ${field('Délai', delay)}
            ${field('Bâtiment', building)}
          </ul>

          <h3>Détails complémentaires</h3>
          <p>${message.replace(/\n/g, '<br/>')}</p>

          <hr/>
          <p style="font-size:12px;color:#777">procarre.fr</p>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return res.status(500).json({ error: 'Email failed' });
    }

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Server error' });
  }
}