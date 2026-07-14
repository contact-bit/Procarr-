import ReactGA from 'react-ga4';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

export type AnalyticsValue = string | number | boolean | undefined;
export type AnalyticsParameters = Record<string, AnalyticsValue>;

export function isAnalyticsReady() {
  if (!GA_MEASUREMENT_ID || !ReactGA.isInitialized) return false;

  const gaWindow = window as unknown as Record<string, boolean>;
  return gaWindow[`ga-disable-${GA_MEASUREMENT_ID}`] !== true;
}

/**
 * Envoie uniquement des données techniques ou métier non personnelles.
 * Ne jamais ajouter ici de nom, e-mail, téléphone, adresse ou texte libre.
 */
export function trackEvent(eventName: string, parameters: AnalyticsParameters = {}) {
  if (!isAnalyticsReady()) return;

  const cleanParameters = Object.fromEntries(
    Object.entries(parameters).filter(([, value]) => value !== undefined && value !== ''),
  );

  ReactGA.event(eventName, cleanParameters);
}

export function normalizeAnalyticsText(value: string | null | undefined, maxLength = 100) {
  return value?.replace(/\s+/g, ' ').trim().slice(0, maxLength) || undefined;
}

