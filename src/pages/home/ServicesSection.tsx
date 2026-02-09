// src/pages/home/ServicesSection.tsx
import './ServicesSection.css';
import { Link } from 'react-router-dom';

export function ServicesSection() {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="services-shell">
        <header className="services-intro section-header-center">
          <span className="section-kicker">Services</span>
          <h2 id="services-title" className="section-title">
            Services de carrelage et rénovation à Manosque
          </h2>
          <p className="section-subtitle">
            Procarré &amp; Fils réalise vos projets de carrelage, de la préparation des supports
            jusqu&apos;aux finitions, pour les pièces de vie, salles de bain et extérieurs.
          </p>
        </header>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-card-header">
              <span className="service-tag">Intérieur</span>
              <h3 className="service-title">
                Pose de carrelage intérieur à Manosque
              </h3>
            </div>
            <p className="service-text">
              Carrelage de sols et murs pour salons, cuisines, pièces de vie et locaux professionnels,
              en neuf comme en rénovation. Possibilité de projets complets visibles dans nos&nbsp;
              <Link to="/realisations" className="service-link">
                réalisations
              </Link>
              .
            </p>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-tag">Salles de bain</span>
              <h3 className="service-title">
                Rénovation de salle de bain et douche à l&apos;italienne
              </h3>
            </div>
            <p className="service-text">
              Création ou rénovation complète de salles de bain, douches à l&apos;italienne étanches
              et faciles d&apos;entretien. Nous gérons la préparation des supports, l&apos;étanchéité
              et la pose du carrelage.
            </p>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-tag">Extérieur</span>
              <h3 className="service-title">
                Terrasses carrelées et revêtements extérieurs
              </h3>
            </div>
            <p className="service-text">
              Pose de carrelage, dalles et pierres pour terrasses, escaliers et abords de piscine,
              avec des matériaux adaptés au climat des Alpes-de-Haute-Provence et aux contraintes
              extérieures.
            </p>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-tag">Préparation</span>
              <h3 className="service-title">
                Préparation des supports et petite maçonnerie
              </h3>
            </div>
            <p className="service-text">
              Ragréages, chapes, reprises de niveaux et petites démolitions pour une pose de carrelage
              durable, plane et conforme aux recommandations des fabricants.
            </p>
          </article>
        </div>

        <div className="services-footer">
          <p className="services-note">
            Vous ne trouvez pas exactement votre projet ? Décrivez-le dans la page&nbsp;
            <Link to="/contact" className="service-link">
              contact
            </Link>
            &nbsp;ou demandez un devis : nous étudions aussi des projets de carrelage sur mesure à
            Manosque et dans le 04.
          </p>
        </div>
      </div>
    </section>
  );
}
