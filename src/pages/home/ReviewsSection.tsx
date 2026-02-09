// src/pages/home/ReviewsSection.tsx
import './ReviewsSection.css';

export function ReviewsSection() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-shell">
        <header className="reviews-intro section-header-center">
          <span className="section-kicker">Avis clients</span>
          <h2 id="reviews-title" className="section-title">
            Ce que disent nos clients à Manosque
          </h2>
          <p className="section-subtitle">
            Une entreprise familiale de carrelage recommandée pour la qualité du travail, le sérieux
            sur le chantier et les finitions soignées.
          </p>
        </header>

        {/* Bandeau édito avec la note Google */}
        <div className="reviews-ribbon" aria-label="Note et avis Google">
          <div className="reviews-ribbon-left">
            <span className="reviews-ribbon-label">Note Google</span>
            <span className="reviews-ribbon-score">5,0/5</span>
            <span className="reviews-ribbon-stars" aria-hidden="true">★★★★★</span>
          </div>
          <p className="reviews-ribbon-text">
            Avis laissés pour des chantiers de carrelage à Manosque et dans les communes voisines :
            salles de bain, terrasses, pièces de vie et rénovations.
          </p>
        </div>

        {/* Bloc citation centrale + timeline de mini-avis */}
        <div className="reviews-layout-modern">
          <aside className="reviews-quote-block">
            <div className="reviews-quote-symbol" aria-hidden="true">“</div>
            <p className="reviews-quote-text">
              “Entreprise très professionnelle, travail de carrelage soigné, délais respectés
              et chantier propre. Nous recommandons Procarré &amp; Fils autour de Manosque.”
            </p>
            <p className="reviews-quote-meta">
              Avis client vérifié, chantier de carrelage à Manosque
            </p>
          </aside>

          <div className="reviews-timeline" aria-label="Exemples d'avis clients">
            <div className="reviews-timeline-line" aria-hidden="true" />
            <article className="reviews-timeline-item">
              <span className="reviews-timeline-dot" aria-hidden="true" />
              <div className="reviews-timeline-content">
                <p className="reviews-timeline-text">
                  “Prestation de qualité, travail soigné et nettoyage à chaque phase du chantier.”
                </p>
                <p className="reviews-timeline-meta">
                  Avis laissé après une rénovation en 2025
                </p>
              </div>
            </article>

            <article className="reviews-timeline-item">
              <span className="reviews-timeline-dot" aria-hidden="true" />
              <div className="reviews-timeline-content">
                <p className="reviews-timeline-text">
                  “Équipe sérieuse et ponctuelle, finitions de carrelage impeccables sur salle de bain et terrasse.”
                </p>
                <p className="reviews-timeline-meta">
                  Avis client dans les Alpes-de-Haute-Provence
                </p>
              </div>
            </article>

            <article className="reviews-timeline-item">
              <span className="reviews-timeline-dot" aria-hidden="true" />
              <div className="reviews-timeline-content">
                <p className="reviews-timeline-text">
                  “Devis clair, conseils pertinents et résultat conforme à notre projet de rénovation.”
                </p>
                <p className="reviews-timeline-meta">
                  Avis pour un chantier de carrelage intérieur
                </p>
              </div>
            </article>
          </div>
        </div>

        <div className="reviews-footer">
          <a
            href="https://www.google.com/search?q=Procarre+Avis"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-footer-link"
          >
            Découvrir tous les avis Procarré &amp; Fils sur Google
          </a>
        </div>
      </div>
    </section>
  );
}
