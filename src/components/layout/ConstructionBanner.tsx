import './ConstructionBanner.css';

import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
} from '../../config/contact';

export function ConstructionBanner() {
  return (
    <aside className="construction-banner" aria-label="Information importante">
      <div className="construction-banner__inner">
        <div>
          <span className="construction-banner__label">
            <span className="construction-banner__dot" aria-hidden="true" />
            Site en construction
          </span>
          <p className="construction-banner__text">
            Le site se finalise petit à petit. Pour une demande rapide ou un devis,
            <strong> appelez-nous directement</strong>.
          </p>
        </div>

        <a className="construction-banner__phone" href={BUSINESS_PHONE_HREF}>
          Appeler le {BUSINESS_PHONE_DISPLAY}
        </a>
      </div>
    </aside>
  );
}
