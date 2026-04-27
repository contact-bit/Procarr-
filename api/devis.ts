// src/pages/api/devis.ts

import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ---------------- CONFIG ----------------
const ALLOWED_PROJECTS = ["interieur", "exterieur", "sdb", "cuisine", "renov"] as const;

// ---------------- UTILS ----------------
function sanitize(input: unknown = ""): string {
  return String(input)
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .trim();
}

function normalize(input: unknown = ""): string {
  return sanitize(input).toLowerCase();
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ---------------- HANDLER ----------------
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const requestId = Math.random().toString(36).slice(2, 8);

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // ---------- SANITIZE ----------
    const name = sanitize(body?.name);
    const email = sanitize(body?.email);
    const phone = sanitize(body?.phone);
    const city = sanitize(body?.city);
    const message = sanitize(body?.message);

    const projectTypeRaw = normalize(body?.projectType);
    const projectType = ALLOWED_PROJECTS.includes(
      projectTypeRaw as any
    )
      ? projectTypeRaw
      : "interieur";

    const role = sanitize(body?.role);
    const projectKind = sanitize(body?.projectKind);
    const delay = sanitize(body?.delay);
    const building = sanitize(body?.building);

    console.log(`[${requestId}] NEW LEAD`, {
      name,
      email,
      projectType,
    });

    // ---------- VALIDATION ----------
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Nom, email et message obligatoires",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ error: "Email invalide" });
    }

    // ---------- SUBJECT ----------
    const subject = `Nouvelle demande de devis - ${name}`;

    // ---------- VERSION TEXTE (ANTI-SPAM) ----------
    const text = `
Nouvelle demande de devis

Nom: ${name}
Email: ${email}
Téléphone: ${phone || "-"}
Ville: ${city || "-"}

Type de projet: ${projectType}
Profil: ${role || "-"}
Nature du projet: ${projectKind || "-"}
Délai: ${delay || "-"}
Bâtiment: ${building || "-"}

Message:
${message}
`;

    // ---------- VERSION HTML ----------
    const html = `
<!DOCTYPE html>
<html lang="fr">
<body style="margin:0;background:#f5f5f5;font-family:Arial">

<table width="100%" style="padding:20px">
<tr><td align="center">

<table width="600" style="background:#fff;border-radius:8px">

<tr>
<td style="background:#111;color:#fff;padding:20px;text-align:center">
<h1 style="margin:0">Procarre</h1>
<p style="margin:5px 0 0;font-size:12px;color:#ccc">
Nouvelle demande de devis
</p>
</td>
</tr>

<tr>
<td style="padding:25px;color:#333;font-size:14px;line-height:1.6">

<p>Bonjour,</p>

<p>
Vous avez reçu une nouvelle demande de devis depuis votre site
<strong>procarre.fr</strong>.
</p>

<h3>Coordonnées</h3>
<p>
<strong>Nom :</strong> ${name}<br/>
<strong>Email :</strong> ${email}<br/>
<strong>Téléphone :</strong> ${phone || "-"}<br/>
<strong>Ville :</strong> ${city || "-"}
</p>

<h3>Projet</h3>
<p>
<strong>Type :</strong> ${projectType}<br/>
<strong>Profil :</strong> ${role || "-"}<br/>
<strong>Projet :</strong> ${projectKind || "-"}<br/>
<strong>Délai :</strong> ${delay || "-"}<br/>
<strong>Bâtiment :</strong> ${building || "-"}
</p>

<h3>Message</h3>
<p style="background:#f9f9f9;padding:10px;border-radius:6px">
${message.replace(/\n/g, "<br/>")}
</p>

<p style="margin-top:20px">
Vous pouvez répondre directement à cet email pour contacter le client.
</p>

</td>
</tr>

<tr>
<td style="background:#eee;padding:10px;text-align:center;font-size:12px;color:#777">
procarre.fr • ${new Date().toLocaleString()}
</td>
</tr>

</table>

</td></tr>
</table>

</body>
</html>
`;

    // ---------- ENVOI ----------
    const { error } = await resend.emails.send({
      from: "Procarre <contact@procarre.fr>", // ✅ PARFAIT
      to: process.env.TO_EMAIL,
      replyTo: email,
      subject,
      text, // 🔥 IMPORTANT
      html,
    });

    if (error) {
      console.error(`[${requestId}] EMAIL ERROR`, error);
      return res.status(500).json({ error: "Email failed" });
    }

    console.log(`[${requestId}] SUCCESS`);

    return res.status(200).json({ ok: true });

  } catch (err) {
    console.error("SERVER ERROR:", err);
    return res.status(500).json({ error: "Server error" });
  }
}