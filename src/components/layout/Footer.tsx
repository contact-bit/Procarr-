// src/components/layout/Footer.tsx
import './Footer.css';
import { Link } from 'react-router-dom';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer" aria-labelledby="footer-title">
      <div className="footer-shell">
        {/* ================= LOGO / IDENTITÉ ================= */}
        <div className="footer-col footer-col-brand">
          <Link
            to="/"
            className="brand footer-logo"
            aria-label="Procarré & Fils - Carreleur à Manosque"
          >
            <div className="brand-line">
              <span className="brand-pro">PRO</span>
              <span className="brand-carre">carré</span>
            </div>
            <span className="brand-bottom">&amp; Fils</span>
          </Link>

          <h2 id="footer-title" className="footer-title">
            Carreleurs à Manosque et en Alpes-de-Haute-Provence
          </h2>

          <p className="footer-lead">
            Entreprise familiale de carrelage basée à Manosque Procarré &amp; Fils, carreleurs
            spécialistes en rénovation à Manosque et en Alpes-de-Haute-Provence (04).
          </p>

          <div className="footer-nap">
            <span className="footer-nap-name">Procarré &amp; Fils</span>
            <span className="footer-nap-line">
              04100 Manosque – Alpes-de-Haute-Provence
            </span>

            <a href="tel:+336 03 12 30 65" className="footer-nap-link">
              Tél. 06 03 12 30 65
            </a>

            <a href="mailto:contact@procarre.fr" className="footer-nap-link">
              contact@procarre.fr
            </a>
          </div>
        </div>

        {/* ================= SERVICES ================= */}
        <nav className="footer-col" aria-label="Liens services carrelage">
          <h3 className="footer-heading">Services de carrelage</h3>

          <ul className="footer-links">
            <li>
              <Link to="/prestations/sols-murs">
                Carrelage de sols et murs intérieurs
              </Link>
            </li>

            <li>
              <Link to="/prestations/salles-de-bain">
                Rénovation salles de bain &amp; douches italiennes
              </Link>
            </li>

            <li>
              <Link to="/prestations/terrasses">
                Terrasses carrelées &amp; abords de piscine
              </Link>
            </li>

            <li>
              <Link to="/prestations/preparation-supports">
                Préparation supports &amp; petite maçonnerie
              </Link>
            </li>

            <li>
              <Link to="/realisations">
                Nos réalisations à Manosque
              </Link>
            </li>
          </ul>
        </nav>

        {/* ================= ZONE ================= */}
        <nav
          className="footer-col"
          aria-label="Zone d'intervention et navigation"
        >
          <h3 className="footer-heading">Intervention Manosque &amp; PACA</h3>

          <ul className="footer-links">
            <li>
              <Link to="/zone-intervention">
                Manosque, Volx, Oraison, Forcalquier
              </Link>
            </li>

            <li>
              <Link to="/a-propos">
                À propos Procarré &amp; Fils
              </Link>
            </li>

            <li>
              <Link to="/devis">
                Devis gratuit carrelage
              </Link>
            </li>

            <li>
              <Link to="/avant-apres">
                Avant/Après chantiers
              </Link>
            </li>

            <li>
              <a
                href="https://www.google.com/maps/place/Manosque/"
                target="_blank"
                rel="noopener noreferrer"
              >
                📍 Manosque sur Google Maps
              </a>
            </li>
          </ul>

          <p className="footer-text-small">
            Travaux carrelage à Manosque (04), Sainte-Tulle, Pierrevert et Alpes-de-Haute-Provence.
          </p>
        </nav>

        {/* ================= LÉGAL ================= */}
        <div className="footer-col footer-col-meta">
          <h3 className="footer-heading">Informations</h3>

          <ul className="footer-links">
            <li>
              <Link to="/mentions-legales">Mentions légales</Link>
            </li>

            <li>
              <Link to="/politique-de-confidentialite">
                Politique de confidentialité
              </Link>
            </li>

            <li>
              <Link to="/actualites">Actualités carrelage</Link>
            </li>
          </ul>

          <p className="footer-text-small">
            Artisan carreleur à Manosque (04) pour vos travaux de carrelage,
            salles de bain, terrasses et rénovations en Alpes-de-Haute-Provence.
          </p>

          <p className="footer-copy">
            © {year} Procarré &amp; Fils – Artisan carreleur Manosque (04). Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
