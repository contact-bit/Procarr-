// src/pages/home/TrustStrip.tsx
import './TrustStrip.css';

export function TrustStrip() {
  return (
    <section className="trust-section" aria-label="Présentation Procarré & Fils">
      <div className="trust-shell">
        <div className="trust-intro">
          <p className="trust-kicker">Procarré &amp; Fils, carreleurs à Manosque</p>
          <h2 className="trust-title">
            Un artisanat de carrelage ancré en Alpes-de-Haute-Provence
          </h2>
          <p className="trust-lead">
            Procarré &amp; Fils est une entreprise familiale de carreleurs basée à Manosque.
            Depuis plus de vingt ans, nous réalisons des chantiers de carrelage et de rénovation
            pour les sols, murs, salles de bain et terrasses dans le bassin manosquin et en
            Alpes-de-Haute-Provence.
          </p>
        </div>

        <div className="trust-highlights">
          <div className="trust-card">
            <p className="trust-card-label">Expérience</p>
            <p className="trust-card-main">+20 ans de chantiers</p>
            <p className="trust-card-detail">
              Pose de carrelage et rénovations complètes à Manosque et dans le 04.
            </p>
          </div>

          <div className="trust-card">
            <p className="trust-card-label">Entreprise familiale</p>
            <p className="trust-card-main">Carreleurs père &amp; fils</p>
            <p className="trust-card-detail">
              Une équipe familiale présente sur le chantier, sans commerciaux ni intermédiaires.
            </p>
          </div>

          <div className="trust-card">
            <p className="trust-card-label">Artisan carreleur</p>
            <p className="trust-card-main">Sans sous-traitance</p>
            <p className="trust-card-detail">
              Les travaux sont réalisés par Procarré &amp; Fils, de la préparation à la pose.
            </p>
          </div>

          <div className="trust-card">
            <p className="trust-card-label">Zone d&apos;intervention</p>
            <p className="trust-card-main">Manosque &amp; 04</p>
            <p className="trust-card-detail">
              Intervention à Manosque, dans le bassin manosquin et en Alpes-de-Haute-Provence.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
