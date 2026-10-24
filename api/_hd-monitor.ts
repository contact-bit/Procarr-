// Supervision HDConnects : signale au monitor une demande acceptée (sans aucun contenu du formulaire).
// Le préfixe « _ » empêche Vercel d'en faire une route publique.
// Variables Vercel : HD_MONITOR_URL et HD_MONITOR_SERVER_KEY (installées depuis le monitor).

import { randomUUID } from 'node:crypto';

type Report = {
  form: 'contact' | 'devis';
  /** Identifiant Resend de l'e-mail envoyé, pour suivre sa livraison. */
  emailId?: string | null;
  /** Requête de test (en-tête x-hd-test: 1) : exclue des statistiques. */
  test?: boolean;
};

/** Ne bloque jamais la réponse au visiteur : 2 s maximum, erreurs seulement journalisées. */
export async function reportSubmission({ form, emailId, test }: Report) {
  const url = process.env.HD_MONITOR_URL?.replace(/\/+$/, '');
  const key = process.env.HD_MONITOR_SERVER_KEY;
  if (!url || !key) return;
  try {
    const res = await fetch(`${url}/api/ingest/submission`, {
      method: 'POST',
      headers: { authorization: `Bearer ${key}`, 'content-type': 'application/json' },
      body: JSON.stringify({
        id: randomUUID().replace(/-/g, ''),
        form,
        t: Date.now(),
        emailId: emailId ?? undefined,
        test: test || undefined,
      }),
      signal: AbortSignal.timeout(2000),
    });
    if (!res.ok) console.error(`HD monitor: HTTP ${res.status}`);
  } catch (error) {
    console.error('HD monitor: envoi impossible', error instanceof Error ? error.message : error);
  }
}

export function isTestRequest(headers: Record<string, string | string[] | undefined> | undefined) {
  return headers?.['x-hd-test'] === '1';
}
