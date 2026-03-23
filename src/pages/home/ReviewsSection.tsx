// src/pages/home/ReviewsSection.tsx
import './ReviewsSection.css';

// ✅ TYPE PROPRE (fix TS)
type Review = {
  name: string;
  text: string;
  isNew?: boolean;
  meta?: string;
};

// ✅ DATA
const reviews: Review[] = [
  {
    name: "Thierry Hachette",
    text: "J'ai fait appel à ProCarré pour renouveler le carrelage de ma maison, et je suis très satisfait : du devis à la finition, tout a été parfait !",
    isNew: true,
    meta: "Avis Google • ★★★★★"
  },
  {
    name: "Julien Valenza",
    text: "Rénovation complète d’un appartement, prestation de qualité, rapidité d’exécution. Chantier irréprochable. À recommander à 100%.",
    isNew: true,
    meta: "Avis Google • ★★★★★"
  },
  {
    name: "Bruno SARRADE",
    text: "Entreprise familiale exceptionnelle. Professionnalisme et qualité remarquables. Équipe fiable et méticuleuse.",
    meta: "Client vérifié"
  },
  {
    name: "Jean-Luc Freudenreich",
    text: "Travail soigné avec nettoyage à chaque phase du chantier. Très satisfait de la prestation.",
    meta: "Client vérifié"
  },
  {
    name: "Muriel Laurent",
    text: "Équipe sérieuse, ponctuelle, soignée et professionnelle. Je recommande les yeux fermés.",
    meta: "Client vérifié"
  }
];

export function ReviewsSection() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-shell">

        {/* HEADER */}
        <header className="reviews-intro section-header-center">
          <span className="section-kicker">Avis clients</span>
          <h2 id="reviews-title" className="section-title">
            Ce que disent nos clients à Manosque
          </h2>
          <p className="section-subtitle">
            Une entreprise familiale de carrelage et de rénovation recommandée pour la qualité du travail,
            le sérieux sur le chantier et les finitions soignées à Manosque et en Alpes-de-Haute-Provence.
          </p>
        </header>

        {/* 🔥 BANDEAU GOOGLE */}
        <div className="reviews-ribbon">
          <div className="reviews-ribbon-left">
            <span className="reviews-ribbon-label">Google</span>
            <span className="reviews-ribbon-score">5 / 5</span>
            <span className="reviews-ribbon-stars">★★★★★</span>
          </div>
        </div>

        {/* 🔥 GRID AVIS */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div key={index} className="review-card">

              <div className="review-header">
                <div className="review-avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <div className="review-name">
                    {review.name}
                    {review.isNew && (
                      <span className="review-badge">Nouveau</span>
                    )}
                  </div>

                  {/* ✅ SAFE TS */}
                  {review.meta && (
                    <div className="review-meta">{review.meta}</div>
                  )}
                </div>
              </div>

              <div className="review-stars">★★★★★</div>
              <p className="review-text">{review.text}</p>

            </div>
          ))}
        </div>

        {/* LAYOUT EXISTANT */}
        <div className="reviews-layout-modern">
          <aside className="reviews-quote-block">
            <div className="reviews-quote-symbol">“</div>
            <p className="reviews-quote-text">
              “Entreprise très professionnelle, travail de carrelage soigné, délais respectés
              et chantier propre. Nous recommandons Procarré &amp; Fils pour nos travaux autour de Manosque.”
            </p>
            <p className="reviews-quote-meta">
              Avis client vérifié, chantier de carrelage et rénovation à Manosque
            </p>
          </aside>

          <div className="reviews-timeline">
            <div className="reviews-timeline-line" />

            <article className="reviews-timeline-item">
              <span className="reviews-timeline-dot" />
              <div className="reviews-timeline-content">
                <p className="reviews-timeline-text">
                  “Prestation de qualité, travail soigné et nettoyage à chaque phase du chantier.”
                </p>
                <p className="reviews-timeline-meta">
                  Rénovation intérieur / extérieur – 2025
                </p>
              </div>
            </article>

            <article className="reviews-timeline-item">
              <span className="reviews-timeline-dot" />
              <div className="reviews-timeline-content">
                <p className="reviews-timeline-text">
                  “Équipe sérieuse et ponctuelle, finitions impeccables sur salle de bain et terrasse.”
                </p>
                <p className="reviews-timeline-meta">
                  Chantier Alpes-de-Haute-Provence
                </p>
              </div>
            </article>

            <article className="reviews-timeline-item">
              <span className="reviews-timeline-dot" />
              <div className="reviews-timeline-content">
                <p className="reviews-timeline-text">
                  “Devis clair, conseils pertinents et résultat conforme à notre projet.”
                </p>
                <p className="reviews-timeline-meta">
                  Rénovation pièce de vie
                </p>
              </div>
            </article>
          </div>
        </div>

        {/* FOOTER */}
        <div className="reviews-footer">
          <a
            href="https://www.google.com/search?q=Procarre+Avis"
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-footer-link"
          >
            Voir tous les avis sur Google →
          </a>
        </div>

      </div>
    </section>
  );
}