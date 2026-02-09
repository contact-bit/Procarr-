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
            Comment se déroule un chantier de carrelage avec Procarré &amp; Fils ?
          </h2>
          <p className="section-subtitle">
            Un accompagnement simple et clair, de la première prise de contact jusqu&apos;à la
            réception de votre chantier de carrelage à Manosque et en Alpes-de-Haute-Provence.
          </p>
        </header>

        <ol className="process-timeline">
          <li className="process-step">
            <div className="process-step-header">
              <span className="process-step-index">01</span>
              <h3 className="process-step-title">Prise de contact et devis</h3>
            </div>
            <p className="process-step-text">
              Vous nous présentez votre projet via la page&nbsp;
              <Link to="/contact" className="process-link">
                contact
              </Link>
              &nbsp;ou par téléphone. Nous convenons d&apos;une visite à Manosque ou dans les
              environs pour prendre les mesures et établir un devis gratuit détaillé pour vos
              travaux de carrelage.
            </p>
          </li>

          <li className="process-step">
            <div className="process-step-header">
              <span className="process-step-index">02</span>
              <h3 className="process-step-title">
                Conseils, choix des matériaux et préparation
              </h3>
            </div>
            <p className="process-step-text">
              Nous vous conseillons sur le carrelage adapté à vos&nbsp;
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
              . Nous préparons les supports et le calepinage pour garantir une pose durable,
              esthétique et alignée avec votre projet.
            </p>
          </li>

          <li className="process-step">
            <div className="process-step-header">
              <span className="process-step-index">03</span>
              <h3 className="process-step-title">Pose, finitions et réception du chantier</h3>
            </div>
            <p className="process-step-text">
              Procarré &amp; Fils réalise la pose du carrelage, les joints et les finitions,
              puis nettoie le chantier avant la réception avec vous. Vous pouvez ensuite découvrir
              d&apos;autres chantiers réalisés à Manosque et en Alpes-de-Haute-Provence sur la
              page&nbsp;
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
