// src/pages/home/ZoneSection.tsx
import './ZoneSection.css';
import { Link, useNavigate } from 'react-router-dom';

type ZoneSectionProps = {
  onOpenDevis?: () => void;
};

export function ZoneSection({ onOpenDevis }: ZoneSectionProps) {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onOpenDevis) {
      onOpenDevis();
    } else {
      navigate('/devis');
    }
  };

  return (
    <section className="zone-section" aria-labelledby="zone-title">
      <div className="zone-shell">
        {/* Colonne édito */}
        <div className="zone-intro">
          <span className="section-kicker">Zone d'intervention</span>
          <h2 id="zone-title" className="section-title">
            Carreleurs à Manosque, intervenant autour de Manosque et en Alpes-de-Haute-Provence (04)
          </h2>
          <p className="section-subtitle">
            Procarré &amp; Fils est une entreprise familiale de carrelage et de rénovation basée à Manosque.
            Nous réalisons des chantiers de carrelage intérieur, de rénovation de salles de bain,
            de douches à l'italienne, de terrasses carrelées et de rénovation intérieure dans plusieurs
            communes autour de Manosque et plus largement des Alpes-de-Haute-Provence (04).
          </p>

          <p className="zone-text">
            Pour les projets situés en dehors de ces secteurs, notamment dans le reste autour de Manosque
            et des communes limitrophes, nous étudions chaque demande au cas par cas. Le plus simple est
            de nous décrire votre chantier via la page&nbsp;
            <Link to="/contact" className="zone-link">
              contact
            </Link>
            &nbsp;ou de&nbsp;
            <Link to="/devis" className="zone-link">
              demander un devis de carrelage ou de rénovation
            </Link>
            &nbsp;dès maintenant.
          </p>
        </div>

        {/* Colonne “carte des villes” */}
        <aside
          className="zone-card"
          aria-label="Communes où Procarré & Fils intervient en carrelage et rénovation"
        >
          <div className="zone-card-header">
            <span className="zone-chip">Autour de Manosque</span>
            <p className="zone-card-title">
              Villes et secteurs régulièrement desservis par Procarré &amp; Fils pour vos travaux
              de carrelage et de rénovation intérieure
            </p>
          </div>

          <ul className="zone-list">
            <li className="zone-item">
              <span className="zone-dot" aria-hidden="true" />
              <div className="zone-item-main">
                <a
                  href="https://www.google.com/maps/place/Manosque/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zone-city-link"
                >
                  Manosque
                </a>
                <span className="zone-item-detail">
                  Chantiers de carrelage intérieur, salles de bain, douches à l'italienne,
                  terrasses carrelées et rénovations complètes d'appartements et maisons.
                </span>
              </div>
            </li>

            <li className="zone-item">
              <span className="zone-dot" aria-hidden="true" />
              <div className="zone-item-main">
                <a
                  href="https://www.google.com/maps/place/Volx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zone-city-link"
                >
                  Volx
                </a>
                <span className="zone-item-detail">
                  Projets de carrelage pour pièces de vie, cuisines, escaliers et rénovations
                  intérieures partielles ou complètes dans la commune de Volx.
                </span>
              </div>
            </li>

            <li className="zone-item">
              <span className="zone-dot" aria-hidden="true" />
              <div className="zone-item-main">
                <a
                  href="https://www.google.com/maps/place/Oraison/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zone-city-link"
                >
                  Oraison
                </a>
                <span className="zone-item-detail">
                  Travaux de carrelage pour sols, murs, salles de bain et terrasses à Oraison
                  et dans les villages voisins autour de Manosque.
                </span>
              </div>
            </li>

            <li className="zone-item">
              <span className="zone-dot" aria-hidden="true" />
              <div className="zone-item-main">
                <a
                  href="https://www.google.com/maps/place/Forcalquier/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zone-city-link"
                >
                  Forcalquier
                </a>
                <span className="zone-item-detail">
                  Carrelage de pièces de vie, escaliers, cuisines et extérieurs dans le secteur
                  de Forcalquier et des communes alentour.
                </span>
              </div>
            </li>

            <li className="zone-item">
              <span className="zone-dot" aria-hidden="true" />
              <div className="zone-item-main">
                <a
                  href="https://www.google.com/maps/place/Sainte-Tulle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="zone-city-link"
                >
                  Sainte-Tulle et communes voisines
                </a>
                <span className="zone-item-detail">
                  Plusieurs réalisations récentes en carrelage, rénovation de salle de bain et
                  aménagements extérieurs dans ce secteur autour de Manosque.
                </span>
              </div>
            </li>
          </ul>

          <button
            type="button"
            onClick={handleClick}
            className="btn btn-outline-light zone-cta"
          >
            Vérifier notre zone d’intervention.
          </button>

          <p className="zone-note">
            Vous pouvez aussi consulter nos&nbsp;
            <Link to="/realisations" className="zone-link">
              réalisations de carrelage et rénovation à Manosque et alentours
            </Link>
            &nbsp;pour voir des exemples de chantiers effectués dans les communes environnantes
            autour de Manosque.
          </p>
        </aside>
      </div>
    </section>
  );
}
