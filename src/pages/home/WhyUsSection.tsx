// src/pages/home/WhyUsSection.tsx
import './WhyUsSection.css';
import { Link } from 'react-router-dom';

export function WhyUsSection() {
  return (
    <section className="whyus-section" aria-labelledby="whyus-title">
      <div className="whyus-shell">
        <header className="whyus-intro">
          <span className="section-kicker">Atouts</span>
          <h2 id="whyus-title" className="section-title">
            Pourquoi choisir Procarré &amp; Fils pour vos travaux de carrelage à Manosque ?
          </h2>
          <p className="section-subtitle">
            Entreprise familiale de carreleurs à Manosque, Procarré &amp; Fils réalise des chantiers
            de carrelage et de rénovation pour les sols, murs, salles de bain et terrasses
            en Alpes-de-Haute-Provence.
          </p>
        </header>

        <div className="whyus-grid">
          <article className="reason-card">
            <h3 className="reason-title">Entreprise familiale locale</h3>
            <p className="reason-text">
              Basée à Manosque depuis plus de vingt ans, Procarré &amp; Fils accompagne les projets
              de&nbsp;
              <Link to="/prestations/sols-interieurs" className="reason-link">
                carrelage intérieur
              </Link>
              &nbsp;et de&nbsp;
              <Link to="/prestations/terrasses" className="reason-link">
                terrasses extérieures
              </Link>
              &nbsp;dans tout le bassin manosquin.
            </p>
          </article>

          <article className="reason-card">
            <h3 className="reason-title">Artisan carreleur, sans sous-traitance</h3>
            <p className="reason-text">
              Vos travaux de carrelage sont réalisés par des artisans carreleurs Procarré &amp; Fils,
              sans sous-traitance, du devis à la pose. Découvrez nos&nbsp;
              <Link to="/realisations" className="reason-link">
                réalisations de chantiers
              </Link>
              &nbsp;à Manosque et en Alpes-de-Haute-Provence.
            </p>
          </article>

          <article className="reason-card">
            <h3 className="reason-title">Accompagnement et conseils sur mesure</h3>
            <p className="reason-text">
              Nous vous aidons à choisir le carrelage adapté à votre pièce, votre budget et votre usage,
              de la première prise de contact via la page&nbsp;
              <Link to="/contact" className="reason-link">
                contact
              </Link>
              &nbsp;jusqu&apos;à la réception du chantier.
            </p>
          </article>

          <article className="reason-card">
            <h3 className="reason-title">Finitions soignées et chantiers propres</h3>
            <p className="reason-text">
              Procarré &amp; Fils met l&apos;accent sur les finitions, l&apos;alignement des joints
              et la propreté du chantier. Nos interventions en&nbsp;
              <Link to="/prestations/salles-de-bain" className="reason-link">
                salles de bain
              </Link>
              &nbsp;et&nbsp;
              <Link to="/prestations/douches-italiennes" className="reason-link">
                douches à l&apos;italienne
              </Link>
              &nbsp;sont pensées pour durer dans le temps.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
