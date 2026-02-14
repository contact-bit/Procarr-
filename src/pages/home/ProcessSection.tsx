// src/pages/home/ProcessSection.tsx
import './ProcessSection.css';
import { Link } from 'react-router-dom';

export function ProcessSection() {
  return (
    <section className="process-section" aria-labelledby="process-title">
      <div className="process-shell">
        <header className="process-intro">
          <span className="section-kicker">Déroulement</span>
          <h2 id="process-title" className="section-title">
            Comment se déroule un chantier de carrelage ou de rénovation avec Procarré &amp; Fils ?
          </h2>
          <p className="section-subtitle">
            Nous assurons un accompagnement simple et clair pour vos travaux de carrelage et de rénovation
            à Manosque et dans les Alpes-de-Haute-Provence (04), de la première prise de contact jusqu’à
            la réception du chantier.
          </p>
        </header>

        <ol className="process-timeline">
          <li className="process-step">
            <div className="process-step-header">
              <span className="process-step-index">01</span>
              <h3 className="process-step-title">Prise de contact, visite et devis détaillé</h3>
            </div>
            <p className="process-step-text">
              Vous nous présentez votre projet de carrelage ou de rénovation via la page&nbsp;
              <Link to="/contact" className="process-link">
                contact
              </Link>
              &nbsp;ou par téléphone. Nous convenons d’une visite sur place à Manosque ou dans les communes
              voisines pour échanger sur vos besoins, prendre les mesures et vérifier l’état des supports.
              À l’issue de cette visite, nous réalisons un devis gratuit et détaillé pour vos travaux
              (carrelage intérieur, salle de bain, terrasse, ou rénovation complète de votre logement).
            </p>
          </li>

          <li className="process-step">
            <div className="process-step-header">
              <span className="process-step-index">02</span>
              <h3 className="process-step-title">
                Conseils techniques, choix des matériaux et préparation du chantier
              </h3>
            </div>
            <p className="process-step-text">
              Nous vous conseillons sur le choix des carreaux, formats et finitions adaptés à vos&nbsp;
              <Link to="/prestations/sols-interieurs" className="process-link">
                sols intérieurs
              </Link>
              , vos&nbsp;
              <Link to="/prestations/salles-de-bain" className="process-link">
                salles de bain
              </Link>
              &nbsp;et vos&nbsp;
              <Link to="/prestations/terrasses" className="process-link">
                terrasses extérieures
              </Link>
              , en tenant compte de l’usage, de l’esthétique et de l’entretien. Selon le projet, nous
              planifions aussi les interventions de notre réseau d’artisans (gros œuvre, cloisonnement,
              plomberie, électricité). Nous préparons les supports (démolition si nécessaire, ragréage,
              chape, étanchéité, calepinage) pour garantir une pose durable, plane et conforme aux règles
              de l’art.
            </p>
          </li>

          <li className="process-step">
            <div className="process-step-header">
              <span className="process-step-index">03</span>
              <h3 className="process-step-title">
                Réalisation des travaux, finitions et réception du chantier
              </h3>
            </div>
            <p className="process-step-text">
              Procarré &amp; Fils réalise la pose du carrelage (sols et murs), les découpes, les joints
              et les finitions, en coordination avec les autres corps de métier si votre chantier comprend
              de la rénovation complète. Nous veillons à la protection des zones de passage, au nettoyage
              du chantier et à une réception en votre présence pour vérifier le rendu final. Vous pouvez
              ensuite découvrir d’autres chantiers de carrelage et de rénovation réalisés à Manosque et
              en Alpes-de-Haute-Provence sur la page&nbsp;
              <Link to="/realisations" className="process-link">
                réalisations
              </Link>
              .
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
