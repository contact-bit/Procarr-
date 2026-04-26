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

    console.log('BODY RECEIVED:', JSON.stringify(body, null, 2));

    // 🔐 SANITIZE
    const name = sanitize(body?.name);
    const email = sanitize(body?.email);
    const phone = sanitize(body?.phone);
    const city = sanitize(body?.city);
    const message = sanitize(body?.message);
    const projectType = sanitize(body?.projectType);

    const interior = body?.interior || {};
    const exterior = body?.exterior || {};
    const bathroom = body?.bathroom || {};
    const kitchen = body?.kitchen || {};
    const renov = body?.renov || {};

    // 🛑 VALIDATION GLOBALE
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

    // 🔐 ENV CHECK
    if (
      !process.env.RESEND_API_KEY ||
      !process.env.FROM_EMAIL ||
      !process.env.TO_EMAIL
    ) {
      console.error('Missing env');
      return res.status(500).json({ error: 'Server misconfigured' });
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    // 🎯 VALIDATION PAR TYPE
    let warnings = [];

    function safe(v) {
      return sanitize(v) || '-';
    }

    let details = '';

    switch (projectType) {
      case 'interieur':
        if (!interior.surface) warnings.push('Surface manquante');
        details = `
          <h3>Carrelage intérieur</h3>
          <ul>
            <li><strong>Pièce :</strong> ${safe(interior.pieceType)}</li>
            <li><strong>Surface :</strong> ${safe(interior.surface)}</li>
            <li><strong>Sol actuel :</strong> ${safe(interior.solType)}</li>
          </ul>
        `;
        break;

      case 'exterieur':
        if (!exterior.surface) warnings.push('Surface manquante');
        details = `
          <h3>Terrasse / extérieur</h3>
          <ul>
            <li><strong>Surface :</strong> ${safe(exterior.surface)}</li>
            <li><strong>Support :</strong> ${safe(exterior.supportType)}</li>
            <li><strong>Exposition :</strong> ${safe(exterior.exposure)}</li>
          </ul>
        `;
        break;

      case 'sdb':
        if (!bathroom.floorSurface) warnings.push('Surface sol manquante');
        details = `
          <h3>Salle de bain</h3>
          <ul>
            <li><strong>Douche :</strong> ${safe(bathroom.hasWalkInShower)}</li>
            <li><strong>Sol :</strong> ${safe(bathroom.floorSurface)}</li>
            <li><strong>Murs :</strong> ${safe(bathroom.wallsSurface)}</li>
            <li><strong>Étanchéité :</strong> ${safe(bathroom.waterproofing)}</li>
          </ul>
        `;
        break;

      case 'cuisine':
        details = `
          <h3>Cuisine</h3>
          <ul>
            <li><strong>Crédence :</strong> ${safe(kitchen.credenceLength)}</li>
            <li><strong>Sol :</strong> ${safe(kitchen.floorSurface)}</li>
            <li><strong>Meubles :</strong> ${safe(kitchen.furnitureState)}</li>
          </ul>
        `;
        break;

      case 'renov':
        details = `
          <h3>Rénovation complète</h3>
          <ul>
            <li><strong>Pièces :</strong> ${safe(renov.rooms)}</li>
            <li><strong>Surface :</strong> ${safe(renov.globalSurface)}</li>
            <li><strong>Travaux :</strong> ${safe(renov.structuralChanges)}</li>
          </ul>
        `;
        break;
    }

    // ⚠️ WARNINGS visibles dans le mail
    let warningBlock = '';
    if (warnings.length > 0) {
      warningBlock = `
        <div style="background:#fff3cd;padding:10px;border-radius:6px;margin:10px 0;">
          ⚠️ <strong>Données incomplètes :</strong>
          <ul>${warnings.map(w => `<li>${w}</li>`).join('')}</ul>
        </div>
      `;
    }

    const { error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject: `📩 Nouveau devis - ${name}`,
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2>Nouvelle demande de devis</h2>

          <h3>Client</h3>
          <ul>
            <li><strong>Nom :</strong> ${name}</li>
            <li><strong>Email :</strong> ${email}</li>
            <li><strong>Téléphone :</strong> ${phone || '-'}</li>
            <li><strong>Ville :</strong> ${city || '-'}</li>
          </ul>

          ${warningBlock}

          ${details}

          <h3>Message</h3>
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