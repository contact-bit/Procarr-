import { Helmet } from 'react-helmet-async';
import {
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_HREF,
} from '../config/contact';
import { Link } from 'react-router-dom';
import './LegalPage.css';

export function MentionsLegalesPage() {
  return (
    <div id="main-content" className="legal-page">
      <Helmet>
        <title>Mentions légales | Procarré &amp; Fils</title>
        <meta
          name="description"
          content="Mentions légales du site Procarré & Fils, entreprise de carrelage et de rénovation à Manosque."
        />
        <link rel="canonical" href="https://procarre.fr/mentions-legales" />
      </Helmet>

      <header className="legal-hero">
        <p className="legal-kicker">Informations légales</p>
        <h1>Mentions légales</h1>
        <p className="legal-intro">
          Informations relatives à l’éditeur, à l’hébergement et à l’utilisation du site
          procarre.fr.
        </p>
        <span className="legal-updated">Dernière mise à jour : 14 juillet 2026</span>
      </header>

      <div className="legal-content">
        <section className="legal-section">
          <h2>1. Éditeur du site</h2>
          <address className="legal-address">
            <strong>PROCARRE</strong><br />
            Société à responsabilité limitée (SARL) au capital social de 10 000 €<br />
            Siège social : 302 chemin des Vannades, 04100 Manosque, France<br />
            SIREN : 441 248 184<br />
            SIRET du siège : 441 248 184 00026<br />
            RCS Manosque : 441 248 184<br />
            Numéro de TVA intracommunautaire : FR17 441248184<br />
            Téléphone : <a href={BUSINESS_PHONE_HREF}>{BUSINESS_PHONE_DISPLAY}</a><br />
            E-mail :{' '}
            <a href="mailto:procarre.dussert@wanadoo.fr">
              procarre.dussert@wanadoo.fr
            </a>
          </address>
        </section>

        <section className="legal-section">
          <h2>2. Direction de la publication</h2>
          <p>
            Le directeur de la publication est <strong>Denis Dussert</strong>, en sa qualité de
            gérant de la société PROCARRE.
          </p>
        </section>

        <section className="legal-section">
          <h2>3. Hébergement</h2>
          <address className="legal-address">
            <strong>Vercel Inc.</strong><br />
            440 N Barranca Avenue #4133<br />
            Covina, CA 91723, États-Unis<br />
            Site :{' '}
            <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
              vercel.com
            </a>
          </address>
        </section>

        <section className="legal-section">
          <h2>4. Conception et réalisation</h2>
          <address className="legal-address">
            Site conçu et réalisé par <strong>HDCONNECTS</strong><br />
            Aurélien Haudecoeur – Entrepreneur individuel<br />
            34 avenue Ollivary, 13008 Marseille, France<br />
            SIREN : 909 385 312<br />
            SIRET : 909 385 312 00022<br />
            Activité : création et hébergement de sites internet
          </address>
        </section>

        <section className="legal-section">
          <h2>5. Propriété intellectuelle</h2>
          <p>
            Le site, sa structure et l’ensemble de ses contenus — notamment les textes,
            photographies, illustrations, logos, éléments graphiques et vidéos — sont protégés
            par le droit de la propriété intellectuelle. Sauf mention contraire, ils sont la
            propriété de PROCARRE ou sont utilisés avec l’autorisation de leurs titulaires.
          </p>
          <p>
            Toute reproduction, représentation, adaptation, publication ou exploitation, totale
            ou partielle, sans autorisation écrite préalable de PROCARRE est interdite, hors
            exceptions prévues par la loi.
          </p>
        </section>

        <section className="legal-section">
          <h2>6. Responsabilité</h2>
          <p>
            PROCARRE s’efforce de fournir des informations exactes et à jour. Ces informations
            sont toutefois données à titre général et ne constituent ni un devis ni un engagement
            contractuel. PROCARRE ne peut garantir l’absence totale d’erreurs, d’interruptions ou
            d’indisponibilités temporaires du site.
          </p>
          <p>
            Les liens externes sont fournis pour faciliter la navigation. PROCARRE n’exerce aucun
            contrôle sur le contenu ou les pratiques des sites tiers et ne saurait en être tenue
            responsable.
          </p>
        </section>

        <section className="legal-section legal-callout">
          <h2>7. Données personnelles</h2>
          <p>
            Les modalités de collecte et de traitement des données personnelles sont détaillées
            dans notre <Link to="/politique-de-confidentialite">politique de confidentialité</Link>.
          </p>
        </section>
      </div>
    </div>
  );
}
