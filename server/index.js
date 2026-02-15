// server/index.js
import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = 3001;

const resend = new Resend(process.env.RESEND_API_KEY);

// Middlewares
app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
);
app.use(express.json());

// Route de test
app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'Procarré API' });
});

// ----- helpers -----
const formatDevisEmailText = (payload) => {
  const {
    projectType,
    common,
    meta,
    interior,
    exterior,
    bathroom,
    kitchen,
    renov,
  } = payload;

  const lignes = [];

  lignes.push('════════════════════════════');
  lignes.push('   NOUVELLE DEMANDE DE DEVIS');
  lignes.push('════════════════════════════');
  lignes.push('');
  lignes.push(`Type de projet : ${projectType || '-'}`);
  lignes.push('');
  lignes.push('👤 CLIENT');
  lignes.push(`- Nom       : ${common.name}`);
  lignes.push(`- Email     : ${common.email}`);
  lignes.push(`- Téléphone : ${common.phone || '-'}`);
  lignes.push(`- Ville     : ${common.city || '-'}`);
  lignes.push('');
  lignes.push('📌 CONTEXTE');
  lignes.push(`- Profil   : ${meta?.role || '-'}`);
  lignes.push(`- Projet   : ${meta?.projectKind || '-'}`);
  lignes.push(`- Délai    : ${meta?.delay || '-'}`);
  lignes.push(`- Bâtiment : ${meta?.building || '-'}`);
  lignes.push('');

  // Détails spécifiques lisibles
  if (projectType === 'interieur' && interior) {
    lignes.push('📋 DÉTAILS INTÉRIEUR');
    lignes.push(`- Pièce       : ${interior.pieceType || '-'}`);
    lignes.push(`- Surface     : ${interior.surface || '-'} m²`);
    lignes.push(`- Support sol : ${interior.solType || '-'}`);
    lignes.push('');
  }

  if (projectType === 'exterieur' && exterior) {
    lignes.push('📋 DÉTAILS EXTÉRIEUR');
    lignes.push(`- Zone        : ${exterior.zoneType || '-'}`);
    lignes.push(`- Surface     : ${exterior.surface || '-'} m²`);
    lignes.push(`- Support     : ${exterior.support || '-'}`);
    lignes.push('');
  }

  if (projectType === 'salle-de-bain' && bathroom) {
    lignes.push('📋 DÉTAILS SALLE DE BAIN');
    lignes.push(`- Douche / bain : ${bathroom.bathType || '-'}`);
    lignes.push(`- Sol           : ${bathroom.floorSurface || '-'} m²`);
    lignes.push(`- Murs          : ${bathroom.wallSurface || '-'} m²`);
    lignes.push('');
  }

  if (projectType === 'cuisine' && kitchen) {
    lignes.push('📋 DÉTAILS CUISINE');
    lignes.push(`- Crédence : ${kitchen.credence || '-'}`);
    lignes.push(`- Sol      : ${kitchen.floorType || '-'}`);
    lignes.push('');
  }

  if (projectType === 'renovation' && renov) {
    lignes.push('📋 DÉTAILS RÉNOVATION');
    lignes.push(`- Support existant : ${renov.oldSupport || '-'}`);
    lignes.push(`- Dépose à prévoir : ${renov.needRemoval || '-'}`);
    lignes.push('');
  }

  lignes.push('📝 MESSAGE DU CLIENT');
  lignes.push(common.message || '-');
  lignes.push('');
  lignes.push('────────────');
  lignes.push('Email généré automatiquement par le site Procarré & Fils.');

  return lignes.join('\n');
};

// ----- DEVIS -----
app.post('/api/devis', async (req, res) => {
  const {
    projectType,
    common,
    meta,
    interior,
    exterior,
    bathroom,
    kitchen,
    renov,
  } = req.body;

  const errors = {};
  if (!common?.name || !common.name.trim()) {
    errors.name = 'Nom requis';
  }
  if (!common?.email || !common.email.trim()) {
    errors.email = 'Email requis';
  }
  if (!common?.message || !common.message.trim()) {
    errors.message = 'Message requis';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  console.log('Nouvelle demande de devis:', req.body);

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `Nouveau devis Procarré - ${common.name} (${projectType || 'projet'})`,
      text: formatDevisEmailText({
        projectType,
        common,
        meta,
        interior,
        exterior,
        bathroom,
        kitchen,
        renov,
      }),
    });

    if (error) {
      console.error('Erreur Resend (devis):', error);
      return res.status(500).json({ ok: false, error: 'email_failed' });
    }

    console.log('Email devis envoyé:', data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Erreur envoi email devis:', err);
    return res.status(500).json({ ok: false, error: 'email_failed' });
  }
});

// ----- CONTACT -----
app.post('/api/contact', async (req, res) => {
  const body = req.body;
  console.log('Nouveau message contact:', body);

  const { name, email, phone, subject, message } = body;

  const errors = {};
  if (!name || !name.trim()) {
    errors.name = 'Nom requis';
  }
  if (!email || !email.trim()) {
    errors.email = 'Email requis';
  }
  if (!message || !message.trim()) {
    errors.message = 'Message requis';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject:
        subject && subject.trim()
          ? `Contact Procarré - ${subject}`
          : `Nouveau message contact - ${name}`,
      text: `
NOUVEAU MESSAGE CONTACT PROCARRÉ
--------------------------------

Coordonnées :
- Nom       : ${name}
- Email     : ${email}
- Téléphone : ${phone || '-'}

Objet : ${subject || '-'}

Message :
${message}
      `.trim(),
    });

    if (error) {
      console.error('Erreur Resend (contact):', error);
      return res.status(500).json({ ok: false, error: 'email_failed' });
    }

    console.log('Email contact envoyé:', data);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('Erreur envoi email contact:', err);
    return res.status(500).json({ ok: false, error: 'email_failed' });
  }
});

app.listen(PORT, () => {
  console.log(`API Procarré en écoute sur http://localhost:${PORT}`);
});
