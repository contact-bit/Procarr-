import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';
import { Analytics } from '@vercel/analytics/react';
import { useLocation } from 'react-router-dom';
import { useCookieConsent } from './CookieConsentContext';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

function removeGoogleAnalyticsCookies() {
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0]?.trim();
    if (!name || (!name.startsWith('_ga') && name !== '_gid')) return;

    document.cookie = `${name}=; Max-Age=0; path=/; SameSite=Lax`;
    document.cookie = `${name}=; Max-Age=0; path=/; domain=.${window.location.hostname}; SameSite=Lax`;
  });
}

export function ConsentBasedAnalytics() {
  const { preferences } = useCookieConsent();
  const location = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const gaWindow = window as unknown as Record<string, boolean>;
    gaWindow[`ga-disable-${GA_MEASUREMENT_ID}`] = !preferences.analytics;

    if (preferences.analytics) {
      if (!initialized.current) {
        ReactGA.initialize(GA_MEASUREMENT_ID);
        initialized.current = true;
      }
      ReactGA.send({ hitType: 'pageview', page: window.location.pathname + window.location.search });
    } else {
      removeGoogleAnalyticsCookies();
    }
  }, [preferences.analytics, location.pathname, location.search]);

  return preferences.analytics ? <Analytics /> : null;
}
