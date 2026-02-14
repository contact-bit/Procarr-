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
          <span className="section-kicker">Zone d&apos;intervention</span>
          <h2 id="zone-title" className="section-title">
            Carreleurs à Manosque, intervenant dans le bassin manosquin et en Alpes-de-Haute-Provence
          </h2>
          <p className="section-subtitle">
            Procarré &amp; Fils est une entreprise de carrelage basée à Manosque. Nous réalisons des
            chantiers de carrelage, de rénovation de salles de bain, de douches à l&apos;italienne
            et de terrasses carrelées dans plusieurs communes des Alpes-de-Haute-Provence (04).
          </p>

          <p className="zone-text">
            Pour les projets situés en dehors de ces secteurs, nous étudions chaque demande au cas
            par cas. Le plus simple est de nous décrire votre chantier via la page&nbsp;
            <Link to="/contact" className="zone-link">
              contact
            </Link>
            &nbsp;ou de&nbsp;
            <Link to="/devis" className="zone-link">
              demander un devis de carrelage
            </Link>
            &nbsp;dès maintenant.
          </p>
        </div>

        {/* Colonne “carte des villes” */}
        <aside
          className="zone-card"
          aria-label="Communes où Procarré & Fils intervient en carrelage"
        >
          <div className="zone-card-header">
            <span className="zone-chip">Bassin manosquin</span>
            <p className="zone-card-title">
              Villes et secteurs régulièrement desservis par Procarré &amp; Fils pour vos travaux de carrelage
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
                  Chantiers de carrelage intérieur, salles de bain, douches à l&apos;italienne
                  et terrasses autour de Manosque.
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
                  Projets de carrelage pour pièces de vie, cuisines et rénovations complètes
                  dans la commune de Volx.
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
                  Travaux de carrelage pour sols, murs et salles de bain à Oraison et proximité.
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
                  Carrelage de pièces de vie, escaliers et extérieurs dans le secteur de Forcalquier.
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
                  Plusieurs réalisations récentes en carrelage dans ce secteur du bassin manosquin.
                </span>
              </div>
            </li>
          </ul>

          <button
            type="button"
            onClick={handleClick}
            className="btn btn-outline-light zone-cta"
          >
            Vérifier si nous intervenons chez vous
          </button>

          <p className="zone-note">
            Vous pouvez aussi consulter nos&nbsp;
            <Link to="/realisations" className="zone-link">
              réalisations de carrelage à Manosque et alentours
            </Link>
            &nbsp;pour voir des exemples de chantiers effectués dans les communes environnantes.
          </p>
        </aside>
      </div>
    </section>
  );
}
