import './ReviewsSection.css';

type GoogleReview = {
  name: string;
  date: string;
  text: string;
};

const googleReviews: GoogleReview[] = [
  {
    name: 'Brigitte Barlet',
    date: 'Il y a 2 mois',
    text: 'Carrelage de notre terrasse avec carrelage sur plots. Très contents du résultat. Équipe sérieuse, au top, respect des délais. Travail impeccable. Nous recommandons cette entreprise familiale.',
  },
  {
    name: 'Guillaume Bourjac',
    date: 'Il y a 3 mois',
    text: 'Toujours un plaisir de travailler avec Procarré ! Une équipe dynamique et un professionnalisme constant. Un grand merci tout particulier à Denis pour ses conseils avisés qui font toute la différence. Je recommande vivement.',
  },
  {
    name: 'Thierry Hachette',
    date: 'Il y a 4 mois',
    text: "J'ai fait appel à ProCarré pour renouveler le carrelage de ma maison, et je suis très satisfait de la prestation fournie : du devis à la finition, tout a été parfait !",
  },
];

const googleBusinessUrl =
  'https://www.google.com/maps/place/Procarre/@43.8339842,5.8028141,17z/data=!4m8!3m7!1s0x12cbcdcd45cfccd1:0xf4b63c3debf405e2!8m2!3d43.8339842!4d5.8028141!9m1!1b1!16s%2Fg%2F113df6wml';

export function ReviewsSection() {
  return (
    <section className="reviews-section" aria-labelledby="reviews-title">
      <div className="reviews-shell">
        <header className="reviews-intro section-header-center">
          <span className="section-kicker">Avis Google</span>
          <h2 id="reviews-title" className="section-title">
            La satisfaction de nos clients, chantier après chantier
          </h2>
          <p className="section-subtitle">
            Découvrez les retours laissés par nos clients après leurs travaux de carrelage et de rénovation.
          </p>
        </header>

        <a
          className="reviews-google-summary"
          href={googleBusinessUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Consulter les 11 avis de Procarré sur Google"
        >
          <span className="reviews-google-mark" aria-hidden="true">G</span>
          <span className="reviews-google-label">Google</span>
          <strong className="reviews-google-score">5,0 / 5</strong>
          <span className="reviews-google-stars" aria-label="5 étoiles sur 5">★★★★★</span>
          <span className="reviews-google-count">11 avis</span>
        </a>

        <div className="reviews-grid">
          {googleReviews.map((review) => (
            <article key={review.name} className="review-card">
              <div className="review-card-top">
                <div>
                  <h3 className="review-name">{review.name}</h3>
                  <p className="review-date">Avis Google · {review.date}</p>
                </div>
              </div>

              <div className="review-stars" aria-label="5 étoiles sur 5">★★★★★</div>
              <p className="review-text">« {review.text} »</p>
            </article>
          ))}
        </div>

        <div className="reviews-footer">
          <a
            href={googleBusinessUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="reviews-footer-link"
          >
            Voir tous les avis sur Google
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
