import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { isHDMonitorOptedOut } from './hdMonitorPrivacy';

/**
 * Supervision HDConnects : compte les pages vues (chargement + navigations internes).
 * Aucun cookie, aucun identifiant de visiteur, aucune IP, aucun paramètre d'URL :
 * exemptée de consentement (CNIL), avec droit d'opposition (politique de confidentialité).
 * Les envois passent par /_hd/e, relayé vers le monitor par vercel.json.
 */

// Identifiant public du site dans le monitor (ce n'est pas un secret).
const SITE_KEY = import.meta.env.VITE_HD_SITE_KEY?.trim() || 'hd_pk_iUoOdO4XQpzyI-CN';
const ENDPOINT = '/_hd/e';
// Partagé entre les montages : React.StrictMode monte deux fois en développement.
let lastPath: string | null = null;
let lastAt = 0;
let firstSent = false;

function eventId(): string {
  if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) return crypto.randomUUID().replace(/-/g, '');
  return Math.random().toString(36).slice(2) + Date.now().toString(36);
}

function send(payload: object) {
  const body = JSON.stringify(payload);
  try {
    if (navigator.sendBeacon?.(ENDPOINT, new Blob([body], { type: 'text/plain' }))) return;
  } catch {
    // on retombe sur fetch
  }
  fetch(ENDPOINT, { method: 'POST', body, keepalive: true, headers: { 'content-type': 'text/plain' } }).catch(() => {});
}

export function HDMonitor() {
  const { pathname } = useLocation();

  useEffect(() => {
    const host = window.location.hostname;
    // Uniquement en production : ni localhost, ni prévisualisations Vercel.
    if (host === 'localhost' || host === '127.0.0.1' || host.endsWith('.vercel.app')) return;
    if (isHDMonitorOptedOut()) return;

    const now = Date.now();
    if (pathname === lastPath && now - lastAt < 1500) return;
    lastPath = pathname;
    lastAt = now;

    send({
      k: SITE_KEY,
      id: eventId(),
      p: pathname,
      // Le référent n'a de sens qu'à l'arrivée sur le site.
      r: firstSent ? undefined : document.referrer || undefined,
      t: now,
      w: window.innerWidth,
      test: navigator.webdriver === true || undefined,
    });
    firstSent = true;
  }, [pathname]);

  return null;
}
