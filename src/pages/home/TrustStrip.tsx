// src/pages/home/TrustStrip.tsx
import './TrustStrip.css';

export function TrustStrip() {
  return (
    <section className="trust-section" aria-label="Présentation Procarré & Fils">
      <div className="trust-shell">
        <div className="trust-intro">
          <p className="trust-kicker">Procarré &amp; Fils, carreleurs spécialistes à Manosque</p>
          <h2 className="trust-title">
            Votre expert carrelage pour tous vos chantiers de rénovation en Alpes-de-Haute-Provence
          </h2>
          <p className="trust-lead">
            Procarré &amp; Fils est une entreprise familiale spécialisée carrelage basée à Manosque.
            Depuis plus de vingt ans, nous pilotons vos chantiers complets grâce à notre réseau d’artisans :
            carrelage sols/murs, salles de bain, terrasses, mais aussi gros œuvre, placo, plomberie et électricité.
          </p>
        </div>

        <div className="trust-highlights">
          <div className="trust-card">
            <p className="trust-card-label">Spécialité</p>
            <p className="trust-card-main">Carrelage expert</p>
            <p className="trust-card-detail">
              +20 ans de poses de qualité : sols, murs, salles de bain, terrasses à Manosque et 04.
            </p>
          </div>

          <div className="trust-card">
            <p className="trust-card-label">Entreprise familiale</p>
            <p className="trust-card-main">Carreleurs père &amp; fils</p>
            <p className="trust-card-detail">
              Coordination familiale de votre chantier complet, sans intermédiaires.
            </p>
          </div>

          <div className="trust-card">
            <p className="trust-card-label">Réseau qualifié</p>
            <p className="trust-card-main">Tous corps d’état</p>
            <p className="trust-card-detail">
              Nous pilotons gros œuvre, placo, plomberie, électricité via artisans partenaires fiables.
            </p>
          </div>

         <div className="trust-card">
  <p className="trust-card-label">Zone d’intervention</p>
  <p className="trust-card-main">Manosque, 04 &amp; environs</p>
  <p className="trust-card-detail">
    Alpes-de-Haute-Provence et projets possibles dans le 83, 84 et 05.
  </p>
</div>



        </div>
      </div>
    </section>
  );
}
