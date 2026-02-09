// src/pages/home/HeroSection.tsx
import './HeroSection.css';

type HeroSectionProps = {
  onOpenDevis: () => void;
};

export function HeroSection({ onOpenDevis }: HeroSectionProps) {
  return (
    <section className="hero">
      <p className="hero-kicker">Artisan carreleur à Manosque (04)</p>

      <h1 className="hero-title">
        Carreleur à Manosque pour vos projets de carrelage et rénovation en Alpes-de-Haute-Provence
      </h1>

      <div className="hero-lead-wrapper">
        <p className="hero-lead">
          Procarré &amp; Fils, entreprise familiale de carrelage à Manosque, met plus de 20 ans d&apos;expérience
          au service de vos sols, murs, salles de bain, douches à l&apos;italienne et terrasses
          en Alpes-de-Haute-Provence.
        </p>
      </div>

      <div className="hero-actions">
        <button
          onClick={onOpenDevis}
          className="btn btn-primary"
        >
          Demander un devis de carrelage
        </button>

        <p className="hero-note">
          Devis gratuit et sans engagement pour vos travaux de carrelage et rénovation autour de Manosque.
        </p>
      </div>
    </section>
  );
}
