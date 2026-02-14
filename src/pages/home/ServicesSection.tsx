// src/pages/home/ServicesSection.tsx
import './ServicesSection.css';
import { Link } from 'react-router-dom';

export function ServicesSection() {
  return (
    <section className="services-section" aria-labelledby="services-title">
      <div className="services-shell">
        <header className="services-intro section-header-center">
          <span className="section-kicker">Nos expertises</span>
          <h2 id="services-title" className="section-title">
            Carrelage spécialiste et rénovation intérieure à Manosque (04)
          </h2>
          <p className="section-subtitle">
            Procarré &amp; Fils est une entreprise familiale spécialisée dans la pose de carrelage
            et la rénovation intérieure à Manosque, dans le département des Alpes-de-Haute-Provence (04).
            Nous intervenons pour des travaux de carrelage, de rénovation de salle de bain, de création
            de douche à l’italienne, d’aménagement de cuisine, de terrasses carrelées et de chantiers
            complets de rénovation grâce à un réseau d’artisans du bâtiment qualifiés : maçons, plaquistes,
            plombiers et électriciens.
          </p>
        </header>

        <div className="services-grid">
          <article className="service-card">
            <div className="service-card-header">
              <span className="service-tag">Carrelage intérieur</span>
              <h3 className="service-title">
                Pose de carrelage sols et murs à Manosque et Alpes-de-Haute-Provence
              </h3>
            </div>
            <p className="service-text">
              Nous réalisons la pose de carrelage pour les sols et les murs de vos pièces de vie :
              salons, séjours, cuisines, couloirs, entrées, ainsi que pour les locaux professionnels
              et commerces, en neuf comme en rénovation. Nous travaillons avec différents types de
              carrelages (grès cérame, faïence, grands formats, imitation parquet, carreaux décoratifs)
              pour créer des intérieurs durables, faciles d’entretien et adaptés à votre style.
              Découvrez des exemples de chantiers de carrelage intérieur dans nos&nbsp;
              <Link to="/realisations" className="service-link">
                réalisations
              </Link>
              &nbsp;à Manosque et dans le 04.
            </p>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-tag">Salles de bain</span>
              <h3 className="service-title">
                Rénovation de salle de bain et création de douche à l’italienne
              </h3>
            </div>
            <p className="service-text">
              Procarré &amp; Fils vous accompagne pour la création et la rénovation complète de salles
              de bain à Manosque : dépose de l’existant, préparation des supports, étanchéité, pose
              de carrelage mural et au sol, habillage de baignoire, receveurs et meubles.
              Nous réalisons des douches à l’italienne esthétiques et parfaitement étanches, en
              coordination avec notre réseau de plombiers pour la plomberie, la robinetterie et les
              évacuations. Vous bénéficiez d’une salle de bain clé en main, prête à l’emploi et
              conforme aux normes en vigueur.
            </p>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-tag">Terrasses et extérieurs</span>
              <h3 className="service-title">
                Terrasses carrelées, dallage extérieur et abords de piscine
              </h3>
            </div>
            <p className="service-text">
              Nous créons et rénovons des terrasses carrelées, plages de piscine, escaliers extérieurs
              et allées dans le secteur de Manosque. Selon votre projet, nous posons carrelage extérieur,
              dalles sur plots, pierres naturelles ou dalles antidérapantes adaptées au climat des
              Alpes-de-Haute-Provence et au gel. Nous veillons aux pentes, à l’évacuation de l’eau et à
              la préparation du support pour garantir une terrasse esthétique, durable et sécurisée.
            </p>
          </article>

          <article className="service-card">
            <div className="service-card-header">
              <span className="service-tag">Rénovation complète</span>
              <h3 className="service-title">
                Chantiers de rénovation globale, gros œuvre, placo, plomberie, électricité
              </h3>
            </div>
            <p className="service-text">
              Au-delà de notre cœur de métier, le carrelage, nous coordonnons des chantiers complets de
              rénovation intérieure à Manosque et dans le 04 : ouverture ou modification de cloisons,
              création de nouvelles pièces, redistribution d’espaces, mise en place de faux plafonds,
              isolation, doublage en placo, mises aux normes électriques et travaux de plomberie.
              Nous travaillons avec un réseau d’artisans partenaires de confiance (maçonnerie, placo,
              plomberie, électricité) et assurons la gestion globale du chantier jusqu’aux finitions
              de carrelage pour vous offrir un projet clé en main avec un seul interlocuteur.
            </p>
          </article>
        </div>

        <div className="services-footer">
          <p className="services-note">
            Vous avez un projet de carrelage, de rénovation de salle de bain, de terrasse ou de
            rénovation complète à Manosque ou dans les Alpes-de-Haute-Provence ?
            Décrivez votre besoin sur la page&nbsp;
            <Link to="/contact" className="service-link">
              contact
            </Link>
            &nbsp;ou demandez un devis. Nous étudions les projets de carrelage sur mesure et
            de rénovation intérieure pour les particuliers et les professionnels dans tout le 04.
          </p>
        </div>
      </div>
    </section>
  );
}
