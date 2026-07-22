import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent, type CookiePreferences } from './CookieConsentContext';
import './CookieConsent.css';

export function CookieConsentManager() {
  const {
    hasChoice,
    settingsOpen,
    acceptAll,
    rejectAll,
    openSettings,
  } = useCookieConsent();

  return (
    <>
      {!hasChoice && !settingsOpen && (
        <aside className="cookie-banner" aria-label="Choix des cookies">
          <div className="cookie-banner-copy">
            <p className="cookie-banner-message">
              <strong>Un site qui s’améliore avec vous</strong>
              <span>
                Avec votre accord, nous mesurons l’utilisation du site et affichons les contenus
                externes. Aucun suivi publicitaire.
              </span>{' '}
              <Link to="/politique-de-confidentialite">Notre politique de confidentialité</Link>
            </p>
          </div>
          <div className="cookie-banner-actions">
            <button type="button" className="cookie-button cookie-button-choice" onClick={acceptAll}>
              J’accepte
            </button>
            <button type="button" className="cookie-button cookie-button-choice" onClick={rejectAll}>
              Je refuse
            </button>
            <button type="button" className="cookie-button cookie-button-text" onClick={openSettings}>
              Personnaliser
            </button>
          </div>
        </aside>
      )}

      {settingsOpen && <CookieSettingsModal />}
    </>
  );
}

function CookieSettingsModal() {
  const {
    preferences,
    rejectAll,
    savePreferences,
    closeSettings,
  } = useCookieConsent();
  const [draft, setDraft] = useState<CookiePreferences>(preferences);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeSettings();
    };

    document.addEventListener('keydown', closeOnEscape);
    return () => document.removeEventListener('keydown', closeOnEscape);
  }, [closeSettings]);

  return (
    <div className="cookie-modal-backdrop" role="presentation">
      <section
        className="cookie-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="cookie-settings-title"
      >
        <div className="cookie-modal-header">
          <div>
            <p className="cookie-eyebrow">Confidentialité</p>
            <h2 id="cookie-settings-title">Gérer mes préférences</h2>
          </div>
          <button
            type="button"
            className="cookie-modal-close"
            onClick={closeSettings}
            aria-label="Fermer les préférences"
          >
            ×
          </button>
        </div>

        <div className="cookie-category">
          <div>
            <h3>Fonctionnement du site</h3>
            <p>Conservation de votre choix et fonctions indispensables. Aucun suivi publicitaire.</p>
          </div>
          <span className="cookie-required">Toujours actif</span>
        </div>

        <label className="cookie-category">
          <div>
            <h3>Mesure d’audience</h3>
            <p>Vercel Analytics et Google Analytics.</p>
          </div>
          <input
            type="checkbox"
            checked={draft.analytics}
            onChange={(event) => setDraft({ ...draft, analytics: event.target.checked })}
          />
        </label>

        <label className="cookie-category">
          <div>
            <h3>Contenus externes</h3>
            <p>Vidéos Facebook ou YouTube et carte Google Maps intégrée.</p>
          </div>
          <input
            type="checkbox"
            checked={draft.externalMedia}
            onChange={(event) => setDraft({ ...draft, externalMedia: event.target.checked })}
          />
        </label>

        <div className="cookie-modal-actions">
          <button type="button" className="cookie-button" onClick={rejectAll}>
            Tout refuser
          </button>
          <button
            type="button"
            className="cookie-button cookie-button-primary"
            onClick={() => savePreferences(draft)}
          >
            Enregistrer mes choix
          </button>
        </div>
      </section>
    </div>
  );
}
