// src/pages/PrestationsPage.tsx
import { Link } from 'react-router-dom';
import './PrestationsPage.css';

export function PrestationsPage() {
  return (
    <div id="main-content" className="prestations-page">
      {/* HERO */}
      <section className="prestations-hero">
        <div className="container">
          <p className="prestations-kicker">Carreleur spécialiste & rénovation à Manosque – Procarré &amp; Fils</p>
          <h1>
            Prestations de carrelage intérieur, salles de bain, terrasses, piscines et rénovation intérieure
            en Alpes-de-Haute-Provence (04)
          </h1>
          <p className="prestations-hero-text">
            Procarré &amp; Fils est une entreprise familiale de carreleurs basée à Manosque (04).
            Nous réalisons des travaux de carrelage intérieur, de rénovation de salles de bain,
            de douches à l'italienne, de terrasses carrelées et de préparation de supports,
            et nous coordonnons également des rénovations intérieures plus complètes grâce à
            un réseau d'artisans partenaires sélectionnés (maçonnerie, placo, plomberie, électricité)
            dans les Alpes-de-Haute-Provence et communes voisines.
          </p>

          <div className="prestations-hero-cta">
            <Link to="/devis" className="btn-primary btn-large prestations-hero-btn">
              Demander un devis gratuit de carrelage ou de rénovation à Manosque
            </Link>
            <p className="prestations-hero-note">
              Devis gratuit et sans engagement pour vos projets de carrelage intérieur, salle de bain,
              terrasse, piscine ou rénovation complète d'appartement et de maison.
            </p>
          </div>

          <p className="prestations-hero-links">
            Découvrez aussi nos pages&nbsp;
            <Link to="/a-propos">À propos de Procarré &amp; Fils</Link>,&nbsp;
            <Link to="/realisations">réalisations de chantiers de carrelage et rénovation</Link>&nbsp;et&nbsp;
            <Link to="/zone-intervention">zone d'intervention autour de Manosque</Link>.
          </p>
        </div>
      </section>

      {/* BLOCS PRINCIPAUX */}
      <section className="prestations-section">
        <div className="container">
          <h2>Travaux de carrelage réalisés par Procarré &amp; Fils à Manosque</h2>
          <p className="prestations-section-intro">
            Basée à Manosque, l'entreprise Procarré &amp; Fils intervient pour des chantiers de carrelage
            de A à Z : préparation des supports, pose du carrelage, joints et finitions. La partie
            carrelage est réalisée sans sous-traitance, directement par notre équipe. Pour les projets
            de rénovation plus globaux, nous pouvons également coordonner d'autres corps de métier
            (maçonnerie, placo, plomberie, électricité) via des artisans partenaires sélectionnés,
            afin de vous proposer des rénovations complètes et clé en main en Alpes-de-Haute-Provence.
          </p>

          <div className="prestations-grid">
            {/* Intérieur */}
            <article className="service-card">
              <h3>Carrelage de sols et murs intérieurs</h3>
              <p>
                Nous posons du carrelage pour salons, séjours, cuisines, couloirs, pièces de vie
                et locaux professionnels. Procarré &amp; Fils travaille sur des projets neufs
                et en rénovation, avec un calepinage soigné, des découpes précises et des finitions propres.
              </p>
              <ul className="service-list">
                <li>Carrelage grand format, imitation parquet, béton ou pierre naturelle.</li>
                <li>Rénovation de carrelage existant, reprise de niveaux et ragréages.</li>
                <li>Solutions adaptées aux zones de passage intensif et aux locaux professionnels.</li>
              </ul>
              <Link to="/prestations/sols-murs" className="btn-secondary">
                En savoir plus sur le carrelage intérieur
              </Link>
            </article>

            {/* Salles de bain */}
            <article className="service-card">
              <h3>Rénovation de salles de bain &amp; douches à l'italienne</h3>
              <p>
                Procarré &amp; Fils réalise la création et la rénovation complète de salles de bain :
                préparation des supports, étanchéité, faïence murale et carrelage au sol.
                Nous concevons des douches à l'italienne modernes, pratiques et faciles d'entretien,
                en coordination avec des plombiers partenaires pour la partie plomberie et robinetterie.
              </p>
              <ul className="service-list">
                <li>Étanchéité sous carrelage (pièces d'eau, douches à l'italienne).</li>
                <li>Pose de receveurs extra-plats, habillage de baignoires et espaces douche.</li>
                <li>Carrelage mural, niches, bancs, tablettes et finitions haut de gamme.</li>
              </ul>
              <Link to="/prestations/salles-de-bain" className="btn-secondary">
                Découvrir nos salles de bain carrelées
              </Link>
            </article>

            {/* Extérieur */}
            <article className="service-card">
              <h3>Terrasses carrelées, escaliers extérieurs &amp; abords de piscine</h3>
              <p>
                Nous posons carrelage, dalles et pierres naturelles pour vos terrasses,
                escaliers extérieurs, balcons et plages de piscine. Les matériaux sont choisis
                pour résister au gel, aux intempéries et au climat des Alpes-de-Haute-Provence,
                avec des finitions adaptées pour limiter le risque de glissance.
              </p>
              <ul className="service-list">
                <li>Terrasses carrelées, dalles sur plots et margelles de piscine.</li>
                <li>Escaliers extérieurs carrelés, accès de maison et allées.</li>
                <li>Conseils sur les formats, finitions antidérapantes et entretien.</li>
              </ul>
              <Link to="/prestations/terrasses" className="btn-secondary">
                Voir les prestations extérieures
              </Link>
            </article>
          </div>

          {/* Préparation supports */}
          <article className="service-card service-card-wide">
            <div className="service-card-wide-content">
              <div>
                <h3>Préparation des supports &amp; petite maçonnerie</h3>
                <p>
                  Un carrelage durable commence par un support bien préparé. Procarré &amp; Fils
                  réalise les travaux de préparation nécessaires avant la pose : ragréages, chapes,
                  reprises de niveaux et petites démolitions, afin d'obtenir des surfaces planes
                  et adaptées à la pose de carrelage.
                </p>
                <ul className="service-list">
                  <li>Ragréages pour rattraper les défauts de planéité des sols.</li>
                  <li>Chapes et reprises de pentes (salles de bain, terrasses, douches).</li>
                  <li>Dépose d'anciens carrelages et préparation des surfaces à carreler.</li>
                </ul>
              </div>
              <div className="service-card-wide-cta">
                <Link to="/prestations/preparation-supports" className="btn-secondary">
                  Détails sur la préparation des supports
                </Link>
              </div>
            </div>
          </article>

          {/* Rénovation complète */}
          <article className="service-card service-card-wide">
            <div className="service-card-wide-content">
              <div>
                <h3>Rénovation intérieure complète coordonnée par Procarré &amp; Fils</h3>
                <p>
                  Pour les projets de rénovation intérieure plus importants (redistribution de pièces,
                  ouverture de cloisons, création de nouvelles salles de bain, modernisation globale
                  d'un appartement ou d'une maison), Procarré &amp; Fils reste votre interlocuteur unique.
                  Nous réalisons nous-mêmes la partie carrelage et coordonnons un réseau d'artisans
                  partenaires sélectionnés (maçons, plaquistes, plombiers, électriciens), sous-traitants
                  de confiance avec lesquels nous avons l'habitude de travailler.
                </p>
                <ul className="service-list">
                  <li>Organisation et planification des différents corps de métier.</li>
                  <li>Suivi du chantier, respect des délais et coordination sur place.</li>
                  <li>Finitions de carrelage pour un rendu cohérent dans l'ensemble du logement.</li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* DÉROULEMENT D'UN CHANTIER */}
      <section className="prestations-process">
        <div className="container">
          <h2>Comment se déroule un chantier de carrelage ou de rénovation avec Procarré &amp; Fils ?</h2>
          <div className="process-steps">
            <article className="process-step">
              <span className="process-number">01</span>
              <h3>Prise de contact &amp; devis</h3>
              <p>
                Vous nous présentez votre projet de carrelage ou de rénovation (sols, salle de bain,
                terrasse, rénovation intérieure) par téléphone ou via la page&nbsp;
                <Link to="/contact">contact</Link>. Nous convenons ensuite d'un rendez-vous à Manosque
                ou dans les communes voisines pour prendre les mesures, comprendre vos besoins
                et établir un devis détaillé.
              </p>
            </article>
            <article className="process-step">
              <span className="process-number">02</span>
              <h3>Conseils, choix des matériaux &amp; planning</h3>
              <p>
                Nous vous guidons sur le choix du carrelage (format, couleur, finition), en fonction
                de votre usage (intérieur, salle de bain, extérieur) et de votre budget. Pour les
                rénovations complètes, nous planifions également les interventions des autres corps
                de métier (maçonnerie, placo, plomberie, électricité) et définissons avec vous le
                planning des travaux.
              </p>
            </article>
            <article className="process-step">
              <span className="process-number">03</span>
              <h3>Préparation des supports, pose, finitions &amp; réception</h3>
              <p>
                Nous réalisons la préparation des supports, la pose du carrelage, les joints
                et les finitions, puis nettoyons le chantier avant la réception avec vous.
                Sur les chantiers de rénovation globale, nous coordonnons aussi les artisans
                partenaires sélectionnés pour livrer un projet clé en main, avec un rendu final
                cohérent et soigné.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* BLOC LOCAL / ZONE */}
      <section className="prestations-local">
        <div className="container">
          <h2>Carrelage et rénovation à Manosque, Volx, Oraison, Forcalquier et communes voisines</h2>
          <p>
            Procarré &amp; Fils réalise des chantiers de carrelage et de rénovation intérieure à Manosque
            et dans plusieurs communes des Alpes-de-Haute-Provence (04) : Volx, Oraison, Forcalquier,
            Sainte-Tulle et les villages voisins. Nous intervenons sur des projets de
            rénovation et de construction neuve pour les particuliers et les professionnels.
          </p>
          <p>
            Pour un projet en dehors de ces secteurs, nous étudions chaque demande au cas par cas.
            Le plus simple est de nous décrire votre chantier via la page&nbsp;
            <Link to="/contact">contact</Link>&nbsp;ou de&nbsp;
            <Link to="/devis">demander un devis gratuit de carrelage ou de rénovation en ligne</Link>.
          </p>
          <p className="prestations-local-links">
            Vous pouvez également consulter nos&nbsp;
            <Link to="/realisations">réalisations de carrelage et rénovation à Manosque et alentours</Link>
            &nbsp;pour voir des exemples de salles de bain, terrasses et pièces de vie déjà rénovées.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="prestations-final-cta">
        <div className="container">
          <h2>Un projet de carrelage ou de rénovation à Manosque ?</h2>
          <p>
            Décrivez votre chantier de carrelage intérieur, de salle de bain, de terrasse ou votre
            projet de rénovation intérieure complète, et recevez un devis gratuit personnalisé établi par
            Procarré &amp; Fils, entreprise familiale de carreleurs basée à Manosque en Alpes-de-Haute-Provence.
          </p>
          <div className="prestations-final-cta-actions">
            <Link to="/devis" className="btn-primary btn-large prestations-hero-btn">
              Demander un devis gratuit de carrelage ou rénovation
            </Link>
            <Link to="/contact" className="btn-secondary">
              Contacter Procarré &amp; Fils
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
