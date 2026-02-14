// src/pages/home/HeroSection.tsx
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <p className="hero-kicker">Artisan carreleur à Manosque (04)</p>

      <h1 className="hero-title">
        Carreleur à Manosque pour vos travaux de carrelage et rénovation intérieure
      </h1>

      <div className="hero-lead-wrapper">
        <p className="hero-lead">
          Procarré &amp; Fils est une entreprise familiale de carrelage basée à Manosque.
          Nous accompagnons les particuliers et professionnels pour tous leurs travaux de
          carrelage et de rénovation : sols intérieurs, murs, salles de bain, douches à
          l’italienne, cuisines et terrasses dans tout le secteur des Alpes-de-Haute-Provence.
        </p>
      </div>

      <div className="hero-actions">
<button
  onClick={() => navigate('/devis')}
  className="btn btn-primary"
>
  Demander un devis gratuit
</button>


        <p className="hero-note">
          Devis gratuit et sans engagement pour vos projets de carrelage, salle de bain,
          cuisine, terrasse ou rénovation complète autour de Manosque.
        </p>
      </div>
    </section>
  );
}
