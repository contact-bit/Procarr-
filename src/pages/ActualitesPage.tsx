// src/pages/ActualitesPage.tsx
import { useEffect } from 'react';
import './ActualitesPage.css'; // ou renomme le fichier CSS aussi

const FB_SCRIPT_ID = 'facebook-jssdk';

function loadFacebookSdk() {
  if (document.getElementById(FB_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = FB_SCRIPT_ID;
  script.async = true;
  script.defer = true;
  script.crossOrigin = 'anonymous';
  script.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v21.0';
  document.body.appendChild(script);
}

export function ActualitesPage() {
  useEffect(() => {
    loadFacebookSdk();
    if ((window as any).FB?.XFBML?.parse) {
      (window as any).FB.XFBML.parse();
    }
  }, []);

  return (
    <div id="main-content" className="reseaux-page">
      <section className="reseaux-hero">
        <div className="container">
          <h1>Actualités &amp; vidéos Procarré &amp; Fils</h1>
          <p>
            Découvrez une sélection de publications Facebook : vidéos de pose de carrelage,
            chantiers en cours et réalisations à Manosque et en Alpes-de-Haute-Provence.
          </p>
        </div>
      </section>

      <section className="reseaux-grid-section">
        <div className="container reseaux-grid">
          <article className="reseaux-card">
            <div
              className="fb-video"
              data-href="https://www.facebook.com/watch/?v=926964669767686"
              data-width="350"
              data-show-text="false"
            >
              <blockquote
                cite="https://www.facebook.com/watch/?v=926964669767686"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/watch/?v=926964669767686">
                  Vidéo Procarré &amp; Fils
                </a>
              </blockquote>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
