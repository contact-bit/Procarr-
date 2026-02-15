// src/pages/home/HeroSection.tsx
import './HeroSection.css';
import { useNavigate } from 'react-router-dom';
import aproposImg from '../../assets/back3.png';

export function HeroSection() {
  const navigate = useNavigate();

  return (
    <section
      className="hero hero--bg"
      style={{ backgroundImage: `url(${aproposImg})` }}
    >
      {/* Overlay SEUL */}
      <div className="hero-overlay" />

      {/* Contenu SEPARÉ de l'overlay */}
      <div className="hero-content">
        <p className="hero-kicker">Carreleur spécialiste à Manosque (04)</p>

        <h1 className="hero-title">
          Procarré : votre carreleur expert pour tous vos travaux de rénovation intérieure
        </h1>

        <div className="hero-lead-wrapper">
          <p className="hero-lead">
            Procarré &amp; Fils est une entreprise familiale spécialisée dans le carrelage basée à Manosque.
            Grâce à notre réseau d’artisans qualifiés, nous vous accompagnons pour tous vos projets de
            rénovation : carrelage sols/murs, salles de bain, cuisines, terrasses, mais aussi gros œuvre,
            placo, plomberie et électricité dans les Alpes-de-Haute-Provence.
          </p>
        </div>

        <div className="hero-actions">
          <button
            type="button"
            onClick={() => navigate('/devis')}
            className="btn btn-primary hero-cta"
          >
            Demander un devis gratuit
          </button>

          <p className="hero-note">
            Devis gratuit pour carrelage, salle de bain, cuisine, terrasse ou rénovation complète
            autour de Manosque. Un interlocuteur pour tout votre chantier.
          </p>
        </div>
      </div>
    </section>
  );
}
