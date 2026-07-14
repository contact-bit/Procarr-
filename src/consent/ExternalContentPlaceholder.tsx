import { useCookieConsent } from './CookieConsentContext';

type ExternalContentPlaceholderProps = {
  title: string;
  description: string;
};

export function ExternalContentPlaceholder({
  title,
  description,
}: ExternalContentPlaceholderProps) {
  const { acceptExternalMedia, openSettings } = useCookieConsent();

  return (
    <div className="external-content-placeholder">
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
        <button
          type="button"
          className="cookie-button cookie-button-primary"
          onClick={acceptExternalMedia}
        >
          Autoriser les contenus externes
        </button>{' '}
        <button type="button" className="cookie-button" onClick={openSettings}>
          Gérer mes choix
        </button>
      </div>
    </div>
  );
}
