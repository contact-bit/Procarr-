import { useState } from 'react';
import { isHDMonitorOptedOut, setHDMonitorOptOut } from './hdMonitorPrivacy';

/** Bouton d'opposition à la mesure d'audience sans cookie (politique de confidentialité). */
export function HDMonitorOptOut() {
  // Site rendu uniquement dans le navigateur : lecture directe à l'initialisation.
  const [optedOut, setOptedOut] = useState(isHDMonitorOptedOut);
  const gpc = (navigator as Navigator & { globalPrivacyControl?: boolean }).globalPrivacyControl === true;

  if (gpc) {
    return (
      <p role="status">
        Votre navigateur envoie le signal « Global Privacy Control » : vos visites ne sont pas comptées.
      </p>
    );
  }

  const toggle = () => {
    setHDMonitorOptOut(!optedOut);
    setOptedOut(!optedOut);
  };

  return (
    <p>
      <span role="status">
        {optedOut
          ? 'Vos visites ne sont pas comptées dans cette mesure d’audience (choix mémorisé dans ce navigateur).'
          : 'Vos visites sont actuellement comptées de façon anonyme.'}
      </span>{' '}
      <button type="button" className="legal-optout-button" onClick={toggle}>
        {optedOut ? 'Être de nouveau compté' : 'Ne plus être compté'}
      </button>
    </p>
  );
}
