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

// ----- DEVIS -----
app.post('/api/devis', async (req, res) => {
  const body = req.body;

  const errors = {};
  if (!body.name || !body.name.trim()) {
    errors.name = 'Nom requis';
  }
  if (!body.email || !body.email.trim()) {
    errors.email = 'Email requis';
  }
  if (!body.message || !body.message.trim()) {
    errors.message = 'Message requis';
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  console.log('Nouvelle demande de devis:', body);

  try {
    const { data, error } = await resend.emails.send({
      from: process.env.FROM_EMAIL,
      to: process.env.TO_EMAIL,
      subject: `Nouveau devis Procarré - ${body.name}`,
      text: `
NOUVELLE DEMANDE DE DEVIS

Nom: ${body.name}
Email: ${body.email}
Téléphone: ${body.phone || '-'}
Ville: ${body.city || '-'}
Type de projet: ${body.projectType || '-'}
Budget: ${body.budget || '-'}

Message:
${body.message}
      `.trim(),
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
NOUVEAU MESSAGE CONTACT

Nom: ${name}
Email: ${email}
Téléphone: ${phone || '-'}

Objet: ${subject || '-'}

Message:
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
