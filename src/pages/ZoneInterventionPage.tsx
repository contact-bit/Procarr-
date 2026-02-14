// src/pages/ZoneInterventionPage.tsx
import './ZoneInterventionPage.css';

export function ZoneInterventionPage() {
  return (
    <div id="main-content" className="zone-page">
      {/* HERO */}
      <section className="zone-hero">
        <div className="container">
          <p className="zone-kicker">Procarré &amp; Fils – Carreleurs à Manosque (04)</p>
          <h1>
            Zone d&apos;intervention : carrelage et rénovation autour de Manosque et en Alpes-de-Haute-Provence
          </h1>
          <p>
            Procarré &amp; Fils, entreprise familiale de carreleurs basée à Manosque, intervient
            dans tout le bassin de vie manosquin et plusieurs communes des Alpes-de-Haute-Provence
            pour vos travaux de carrelage intérieur, extérieur et projets de rénovation coordonnée.
          </p>
          <p className="zone-hero-sub">
            Notre équipe se déplace principalement autour de Manosque, Volx, Oraison, Forcalquier
            et Sainte-Tulle. Pour un chantier en dehors de ces secteurs, nous étudions chaque
            demande au cas par cas.
          </p>
        </div>
      </section>

      {/* LISTE COMMUNES */}
      <section className="zone-list">
        <div className="container">
          <h2>Nos principaux secteurs d&apos;intervention</h2>
          <p className="zone-intro">
            Nous réalisons des chantiers de carrelage, de rénovation de salles de bains,
            de terrasses et de pièces de vie dans les communes suivantes&nbsp;:
          </p>

          <ul className="zone-ul">
            <li>
              <strong>Manosque</strong> – Pose de carrelage intérieur et extérieur, rénovation de salles de bain,
              douches à l&apos;italienne, terrasses carrelées et abords de piscine pour maisons individuelles,
              appartements et locaux professionnels.
            </li>
            <li>
              <strong>Volx</strong> – Travaux de carrelage pour cuisines, pièces de vie, escaliers,
              sols et murs, en neuf comme en rénovation.
            </li>
            <li>
              <strong>Oraison</strong> – Carrelage de sols et murs, rénovation de salles de bain
              et de douches, terrasses carrelées et habillage des abords de piscine.
            </li>
            <li>
              <strong>Forcalquier</strong> – Réalisation de terrasses carrelées, escaliers extérieurs,
              carrelage intérieur pour pièces de vie et projets de rénovation coordonnée avec notre
              réseau d&apos;artisans partenaires.
            </li>
            <li>
              <strong>Sainte-Tulle</strong> – Chantiers variés de carrelage intérieur, rénovation de
              salles de bain, préparation des supports et terrasses carrelées.
            </li>
          </ul>

          <p className="zone-note">
            Nous intervenons aussi dans d&apos;autres villages du bassin de vie de Manosque et des
            Alpes-de-Haute-Provence, et ponctuellement dans les départements limitrophes
            (Vaucluse 84, Var 83, Hautes-Alpes 05) selon la nature et la taille du projet.
          </p>
        </div>
      </section>

      {/* CARTE GOOGLE MAPS */}
      <section className="zone-map">
        <div className="container">
          <h2>Visualiser notre zone d&apos;intervention</h2>
          <p className="zone-map-text">
            La carte ci-dessous situe Manosque au centre de notre secteur. Le cercle représente
            environ 30&nbsp;km autour de Manosque&nbsp;: c&apos;est la zone dans laquelle nous réalisons
            la majorité de nos chantiers de carrelage et de rénovation.
          </p>

          <div className="zone-map-frame">
            <div className="zone-map-circle" aria-hidden="true" />
            <iframe
  title="Carte de la zone d'intervention Procarré & Fils autour de Manosque"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1425062.528!2d5.8!3d43.8!3m2!1i1024!2i768!4f5!3m3!1m2!1s0x12cbe8c5a5b6b1f3%3A0x40819a5fd8fcdf0!2sManosque!5e0!3m2!1sfr!2sfr!4v1700000000000"
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
  style={{ border: 0 }}
  allowFullScreen
/>



          </div>

          <p className="zone-map-note">
            Votre projet se situe juste en dehors de ce périmètre (vers le 83, 84 ou 05)&nbsp;?  
            Décrivez-nous votre chantier&nbsp;: nous revenons vers vous pour étudier la faisabilité
            et le déplacement.
          </p>
        </div>
      </section>

      {/* TEXTE SEO + FAQ */}
      <section className="zone-text">
        <div className="container">
          <h2>Carrelage et rénovation dans le bassin manosquin</h2>
          <p>
            En choisissant un carreleur basé à Manosque, vous bénéficiez d&apos;une entreprise proche
            de votre chantier, réactive pour les visites, les prises de mesures et le suivi de
            l&apos;avancement des travaux. Procarré &amp; Fils intervient principalement dans le bassin
            de vie manosquin, ce qui permet de garder des délais raisonnables et un budget maîtrisé,
            tout en assurant une présence régulière sur le chantier.
          </p>
          <p>
            Que vous souhaitiez créer une terrasse carrelée autour de votre piscine, moderniser une
            salle de bain, refaire les sols de votre maison ou lancer une rénovation intérieure plus
            globale, nous étudions votre projet et pouvons, si besoin, coordonner d&apos;autres corps
            de métier grâce à notre réseau d&apos;artisans partenaires (maçonnerie, placo, plomberie,
            électricité).
          </p>

          <div className="zone-faq">
            <h3>Intervenez-vous en dehors des Alpes-de-Haute-Provence&nbsp;?</h3>
            <p>
              Notre cœur de zone se situe autour de Manosque et dans les Alpes-de-Haute-Provence (04),
              mais nous pouvons nous déplacer ponctuellement dans les départements voisins
              (Vaucluse 84, Var 83, Hautes-Alpes 05) pour certains projets de carrelage ou de
              rénovation, en fonction de l&apos;importance du chantier et du planning.
            </p>

            <h3>Comment savoir si vous pouvez intervenir chez moi&nbsp;?</h3>
            <p>
              Le plus simple est de nous décrire votre projet de carrelage ou de rénovation
              via le formulaire de contact ou la page devis. Indiquez votre commune, le type
              de chantier et, si possible, quelques photos&nbsp;: nous vous répondrons rapidement
              pour vous dire si nous pouvons intervenir et vous proposer un rendez-vous.
            </p>
          </div>

          <p className="zone-cta">
            Vous avez un projet de carrelage ou de rénovation à Manosque, Volx, Oraison, Forcalquier,
            Sainte-Tulle, dans le reste des Alpes-de-Haute-Provence ou à proximité (83, 84, 05)&nbsp;?{' '}
            <a href="/devis">Demandez un devis gratuit de carrelage ou de rénovation</a>{' '}
            ou <a href="/contact">contactez Procarré &amp; Fils</a> pour échanger sur votre projet.
          </p>
        </div>
      </section>
    </div>
  );
}
