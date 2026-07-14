import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from 'react';

const CONSENT_STORAGE_KEY = 'procarre-cookie-consent';
const CONSENT_VERSION = 1;
const CONSENT_DURATION_MS = 180 * 24 * 60 * 60 * 1000;

export type CookiePreferences = {
  analytics: boolean;
  externalMedia: boolean;
};

type StoredConsent = CookiePreferences & {
  version: number;
  updatedAt: string;
};

type CookieConsentContextValue = {
  preferences: CookiePreferences;
  hasChoice: boolean;
  settingsOpen: boolean;
  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (preferences: CookiePreferences) => void;
  acceptExternalMedia: () => void;
  openSettings: () => void;
  closeSettings: () => void;
};

const DEFAULT_PREFERENCES: CookiePreferences = {
  analytics: false,
  externalMedia: false,
};

const CookieConsentContext = createContext<CookieConsentContextValue | null>(null);

function readStoredConsent(): StoredConsent | null {
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;

    const stored = JSON.parse(raw) as Partial<StoredConsent>;
    if (
      stored.version !== CONSENT_VERSION ||
      typeof stored.analytics !== 'boolean' ||
      typeof stored.externalMedia !== 'boolean' ||
      typeof stored.updatedAt !== 'string'
    ) {
      return null;
    }

    const updatedAt = Date.parse(stored.updatedAt);
    if (!Number.isFinite(updatedAt) || Date.now() - updatedAt >= CONSENT_DURATION_MS) {
      window.localStorage.removeItem(CONSENT_STORAGE_KEY);
      return null;
    }

    return stored as StoredConsent;
  } catch {
    return null;
  }
}

export function CookieConsentProvider({ children }: { children: ReactNode }) {
  const [initialConsent] = useState(readStoredConsent);
  const [preferences, setPreferences] = useState<CookiePreferences>(
    initialConsent ?? DEFAULT_PREFERENCES,
  );
  const [hasChoice, setHasChoice] = useState(Boolean(initialConsent));
  const [settingsOpen, setSettingsOpen] = useState(false);

  const savePreferences = useCallback((next: CookiePreferences) => {
    const stored: StoredConsent = {
      ...next,
      version: CONSENT_VERSION,
      updatedAt: new Date().toISOString(),
    };

    try {
      window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
    } catch {
      // Le choix reste appliqué pour la session si le stockage local est indisponible.
    }
    setPreferences(next);
    setHasChoice(true);
    setSettingsOpen(false);
  }, []);

  const acceptAll = useCallback(() => {
    savePreferences({ analytics: true, externalMedia: true });
  }, [savePreferences]);

  const rejectAll = useCallback(() => {
    savePreferences(DEFAULT_PREFERENCES);
  }, [savePreferences]);

  const acceptExternalMedia = useCallback(() => {
    savePreferences({ ...preferences, externalMedia: true });
  }, [preferences, savePreferences]);

  const value = useMemo<CookieConsentContextValue>(
    () => ({
      preferences,
      hasChoice,
      settingsOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      acceptExternalMedia,
      openSettings: () => setSettingsOpen(true),
      closeSettings: () => setSettingsOpen(false),
    }),
    [
      preferences,
      hasChoice,
      settingsOpen,
      acceptAll,
      rejectAll,
      savePreferences,
      acceptExternalMedia,
    ],
  );

  return (
    <CookieConsentContext.Provider value={value}>
      {children}
    </CookieConsentContext.Provider>
  );
}

// Le hook partage volontairement le même contexte que son Provider.
// eslint-disable-next-line react-refresh/only-export-components
export function useCookieConsent() {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used inside CookieConsentProvider');
  }
  return context;
}
