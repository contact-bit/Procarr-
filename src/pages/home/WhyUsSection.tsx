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
            Pourquoi choisir Procarré &amp; Fils pour vos travaux de carrelage et de rénovation à Manosque ?
          </h2>
          <p className="section-subtitle">
            Entreprise familiale de carreleurs à Manosque, Procarré &amp; Fils met son expérience en pose de carrelage
            et en rénovation intérieure au service de vos projets de sols, murs, salles de bain, terrasses et
            rénovations complètes en Alpes-de-Haute-Provence (04).
          </p>
        </header>

        <div className="whyus-grid">
          <article className="reason-card">
            <h3 className="reason-title">Entreprise familiale locale, +20 ans d’expérience</h3>
            <p className="reason-text">
              Implantée à Manosque depuis plus de vingt ans, Procarré &amp; Fils accompagne les projets de&nbsp;
              <Link to="/prestations/sols-interieurs" className="reason-link">
                carrelage intérieur
              </Link>
              , de rénovation de pièces de vie et de&nbsp;
              <Link to="/prestations/terrasses" className="reason-link">
                terrasses extérieures
              </Link>
              &nbsp;dans tout le bassin manosquin et en Alpes-de-Haute-Provence.
              Cette connaissance du terrain local nous permet de vous conseiller au mieux sur les matériaux,
              les contraintes climatiques et les habitudes de vie.
            </p>
          </article>

          <article className="reason-card">
            <h3 className="reason-title">Carreleurs spécialisés + réseau d’artisans pour vos rénovations</h3>
            <p className="reason-text">
              Vos travaux de carrelage sont réalisés par des artisans carreleurs Procarré &amp; Fils, spécialistes
              de la pose de carrelage, sans sous-traitance pour la partie carrelage. Pour les chantiers de
              rénovation plus complets, nous travaillons avec un réseau d’artisans du bâtiment (maçonnerie, placo,
              plomberie, électricité) soigneusement sélectionnés, afin de vous proposer un chantier coordonné et
              clé en main, avec un seul interlocuteur.
            </p>
          </article>

          <article className="reason-card">
            <h3 className="reason-title">Conseils personnalisés et accompagnement de A à Z</h3>
            <p className="reason-text">
              Nous vous aidons à choisir le carrelage, les formats et les finitions adaptés à votre pièce, votre
              budget et votre usage (pièces de vie, cuisine, salle de bain, extérieur). De la première prise de
              contact via la page&nbsp;
              <Link to="/contact" className="reason-link">
                contact
              </Link>
              &nbsp;jusqu’à la réception du chantier, nous restons votre interlocuteur unique pour vos travaux
              de carrelage et, si besoin, de rénovation complète de votre appartement ou maison.
            </p>
          </article>

          <article className="reason-card">
            <h3 className="reason-title">Qualité de pose, finitions soignées et chantiers propres</h3>
            <p className="reason-text">
              Procarré &amp; Fils met l’accent sur la qualité de pose (alignement des joints, découpes, raccords
              avec les autres revêtements) et sur la propreté du chantier. Nos interventions en&nbsp;
              <Link to="/prestations/salles-de-bain" className="reason-link">
                salles de bain
              </Link>
              &nbsp;et&nbsp;
              <Link to="/prestations/douches-italiennes" className="reason-link">
                douches à l’italienne
              </Link>
              &nbsp;sont pensées pour être durables, étanches et conformes aux règles de l’art.
              Vous pouvez consulter nos&nbsp;
              <Link to="/realisations" className="reason-link">
                réalisations de chantiers
              </Link>
              &nbsp;à Manosque et dans le 04 pour voir la qualité de notre travail.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
