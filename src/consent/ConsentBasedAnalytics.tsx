import { useEffect, useRef } from 'react';
import ReactGA from 'react-ga4';
import { Analytics } from '@vercel/analytics/react';
import { useLocation } from 'react-router-dom';
import {
  onCLS,
  onFCP,
  onINP,
  onLCP,
  onTTFB,
  type MetricWithAttribution,
} from 'web-vitals/attribution';
import { useCookieConsent } from './CookieConsentContext';
import { normalizeAnalyticsText, trackEvent } from '../analytics/analytics';

const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

type PageMetadata = {
  pageType: string;
  contentGroup: string;
  serviceName?: string;
};

const PAGE_METADATA: Record<string, PageMetadata> = {
  '/': { pageType: 'home', contentGroup: 'accueil' },
  '/prestations': { pageType: 'service_hub', contentGroup: 'prestations' },
  '/prestations/sols-murs': {
    pageType: 'service_detail',
    contentGroup: 'prestations',
    serviceName: 'sols_murs',
  },
  '/prestations/salles-de-bain': {
    pageType: 'service_detail',
    contentGroup: 'prestations',
    serviceName: 'salles_de_bain',
  },
  '/prestations/terrasses': {
    pageType: 'service_detail',
    contentGroup: 'prestations',
    serviceName: 'terrasses',
  },
  '/prestations/preparation-supports': {
    pageType: 'service_detail',
    contentGroup: 'prestations',
    serviceName: 'preparation_supports',
  },
  '/realisations': { pageType: 'portfolio', contentGroup: 'realisations' },
  '/avant-apres': { pageType: 'portfolio', contentGroup: 'realisations' },
  '/devis': { pageType: 'lead_form', contentGroup: 'conversion' },
  '/contact': { pageType: 'contact', contentGroup: 'conversion' },
  '/zone-intervention': { pageType: 'local_seo', contentGroup: 'zone_intervention' },
  '/actualites': { pageType: 'content_hub', contentGroup: 'actualites' },
  '/a-propos': { pageType: 'about', contentGroup: 'entreprise' },
  '/mentions-legales': { pageType: 'legal', contentGroup: 'legal' },
  '/politique-de-confidentialite': { pageType: 'legal', contentGroup: 'legal' },
};

function getPageMetadata(pathname: string): PageMetadata {
  return PAGE_METADATA[pathname] ?? { pageType: 'not_found', contentGroup: 'erreur' };
}

function getClickLocation(element: Element) {
  const explicitLocation = element.closest<HTMLElement>('[data-analytics-location]')?.dataset
    .analyticsLocation;
  if (explicitLocation) return explicitLocation;
  if (element.closest('header')) return 'header';
  if (element.closest('footer')) return 'footer';
  if (element.closest('main')) return 'main_content';
  return 'other';
}

function getWebVitalDetails(metric: MetricWithAttribution) {
  switch (metric.name) {
    case 'CLS':
      return {
        debug_target: normalizeAnalyticsText(metric.attribution.largestShiftTarget, 150),
        largest_shift_value: metric.attribution.largestShiftValue,
        load_state: metric.attribution.loadState,
      };
    case 'INP':
      return {
        debug_target: normalizeAnalyticsText(metric.attribution.interactionTarget, 150),
        interaction_type: metric.attribution.interactionType,
        input_delay: Math.round(metric.attribution.inputDelay),
        processing_duration: Math.round(metric.attribution.processingDuration),
        presentation_delay: Math.round(metric.attribution.presentationDelay),
        load_state: metric.attribution.loadState,
      };
    case 'LCP':
      return {
        debug_target: normalizeAnalyticsText(metric.attribution.target, 150),
        time_to_first_byte: Math.round(metric.attribution.timeToFirstByte),
        resource_load_delay: Math.round(metric.attribution.resourceLoadDelay),
        resource_load_duration: Math.round(metric.attribution.resourceLoadDuration),
        element_render_delay: Math.round(metric.attribution.elementRenderDelay),
      };
    case 'FCP':
      return {
        time_to_first_byte: Math.round(metric.attribution.timeToFirstByte),
        first_byte_to_fcp: Math.round(metric.attribution.firstByteToFCP),
        load_state: metric.attribution.loadState,
      };
    case 'TTFB':
      return {
        waiting_duration: Math.round(metric.attribution.waitingDuration),
        cache_duration: Math.round(metric.attribution.cacheDuration),
        dns_duration: Math.round(metric.attribution.dnsDuration),
        connection_duration: Math.round(metric.attribution.connectionDuration),
        request_duration: Math.round(metric.attribution.requestDuration),
      };
  }
}

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
  const lastPage = useRef<string | null>(null);
  const previousPagePath = useRef<string | null>(null);
  const webVitalsStarted = useRef(false);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;

    const gaWindow = window as unknown as Record<string, boolean>;
    gaWindow[`ga-disable-${GA_MEASUREMENT_ID}`] = !preferences.analytics;

    if (preferences.analytics) {
      if (!initialized.current) {
        ReactGA.initialize(GA_MEASUREMENT_ID, {
          gtagOptions: {
            // Les pages SPA sont envoyées manuellement ci-dessous pour éviter les doublons.
            send_page_view: false,
          },
        });
        initialized.current = true;
      }
    } else {
      lastPage.current = null;
      removeGoogleAnalyticsCookies();
    }
  }, [preferences.analytics]);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID || !preferences.analytics || !initialized.current) return;

    const pagePath = location.pathname;
    const pageKey = `${location.pathname}${location.search}`;
    if (lastPage.current === pageKey) return;

    const metadata = getPageMetadata(pagePath);
    ReactGA.send({
      hitType: 'pageview',
      page: pageKey,
      title: document.title,
      location: window.location.href,
      content_group: metadata.contentGroup,
      page_type: metadata.pageType,
      service_name: metadata.serviceName,
      previous_page_path: previousPagePath.current ?? undefined,
    });

    previousPagePath.current = pagePath;
    lastPage.current = pageKey;
  }, [preferences.analytics, location.pathname, location.search]);

  useEffect(() => {
    if (!preferences.analytics || webVitalsStarted.current) return;
    webVitalsStarted.current = true;

    const reportWebVital = (metric: MetricWithAttribution) => {
      const scaledValue = metric.name === 'CLS' ? metric.value * 1000 : metric.value;

      trackEvent('web_vital', {
        metric_name: metric.name,
        value: Math.round(scaledValue),
        metric_value: metric.value,
        metric_delta: metric.delta,
        metric_id: metric.id,
        metric_rating: metric.rating,
        navigation_type: metric.navigationType,
        page_path: window.location.pathname,
        ...getWebVitalDetails(metric),
      });
    };

    onCLS(reportWebVital);
    onFCP(reportWebVital);
    onINP(reportWebVital);
    onLCP(reportWebVital);
    onTTFB(reportWebVital);
  }, [preferences.analytics]);

  useEffect(() => {
    if (!preferences.analytics) return;

    const sentThresholds = new Set<number>();
    const thresholds = [25, 50, 75, 90];

    const reportScrollDepth = () => {
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollableHeight <= 0) return;

      const depth = Math.min(100, Math.round((window.scrollY / scrollableHeight) * 100));
      thresholds.forEach((threshold) => {
        if (depth >= threshold && !sentThresholds.has(threshold)) {
          sentThresholds.add(threshold);
          trackEvent('scroll_depth', {
            percent_scrolled: threshold,
            page_path: location.pathname,
            content_group: getPageMetadata(location.pathname).contentGroup,
          });
        }
      });
    };

    window.addEventListener('scroll', reportScrollDepth, { passive: true });
    reportScrollDepth();
    return () => window.removeEventListener('scroll', reportScrollDepth);
  }, [preferences.analytics, location.pathname]);

  useEffect(() => {
    if (!preferences.analytics) return;

    const handleClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const element = target.closest<HTMLElement>('a, button[data-analytics-event]');
      if (!element) return;

      const explicitEvent = element.dataset.analyticsEvent;
      const linkText = normalizeAnalyticsText(
        element.dataset.analyticsLabel || element.textContent,
      );
      const linkLocation = element.dataset.analyticsLocation || getClickLocation(element);

      if (explicitEvent) {
        trackEvent(explicitEvent, {
          link_text: linkText,
          link_location: linkLocation,
          destination: element.dataset.analyticsDestination,
        });
        return;
      }

      if (!(element instanceof HTMLAnchorElement)) return;
      const rawHref = element.getAttribute('href');
      if (!rawHref) return;

      if (rawHref.startsWith('tel:')) {
        trackEvent('contact_click', {
          contact_method: 'phone',
          link_location: linkLocation,
          page_path: location.pathname,
        });
        return;
      }

      if (rawHref.startsWith('mailto:')) {
        trackEvent('contact_click', {
          contact_method: 'email',
          link_location: linkLocation,
          page_path: location.pathname,
        });
        return;
      }

      const url = new URL(element.href, window.location.href);
      if (url.origin !== window.location.origin) {
        trackEvent('outbound_click', {
          link_domain: url.hostname,
          link_path: url.pathname,
          link_text: linkText,
          link_location: linkLocation,
          page_path: location.pathname,
        });
        return;
      }

      if (url.pathname === '/devis') {
        trackEvent('cta_click', {
          cta_name: 'demande_devis',
          link_text: linkText,
          link_location: linkLocation,
          destination: `${url.pathname}${url.search}`,
          page_path: location.pathname,
        });
        return;
      }

      trackEvent('internal_link_click', {
        link_path: url.pathname,
        link_text: linkText,
        link_location: linkLocation,
        source_page_path: location.pathname,
      });
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, [preferences.analytics, location.pathname]);

  return preferences.analytics ? <Analytics /> : null;
}
