// src/pages/ActualitesPage.tsx
import { useEffect, useRef } from 'react';
import './ActualitesPage.css';

const FB_SCRIPT_ID = 'facebook-jssdk';

function loadFacebookSdk() {
  if (document.getElementById(FB_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = FB_SCRIPT_ID;
  script.async = true;
  script.defer = true;
  script.crossOrigin = 'anonymous';
  script.src =
    'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v21.0';
  document.body.appendChild(script);
}

const videos = [
  "https://www.facebook.com/watch/?v=926964669767686",
  // ajoute ici tes liens
];

export function ActualitesPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    loadFacebookSdk();

    // 🔥 observe seulement quand visible (perf++)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if ((window as any).FB?.XFBML?.parse) {
              (window as any).FB.XFBML.parse(entry.target);
            }
          }
        });
      },
      { rootMargin: '200px' } // charge avant d’arriver
    );

    const cards = containerRef.current?.querySelectorAll('.reseaux-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <div id="main-content" className="reseaux-page">
      <section className="reseaux-hero">
        <div className="container">
          <h1>Actualités & vidéos Procarré & Fils</h1>
          <p>
            Découvrez nos chantiers, réalisations et vidéos de pose de carrelage
            à Manosque et en Alpes-de-Haute-Provence.
          </p>
        </div>
      </section>

      <section className="reseaux-grid-section">
        <div ref={containerRef} className="container reseaux-grid">
          {videos.map((url, index) => (
            <article className="reseaux-card" key={index}>
              
              {/* 🔥 skeleton loading */}
              <div className="fb-skeleton" />

              <div
                className="fb-video"
                data-href={url}
                data-width="auto"
                data-show-text="false"
              >
                <blockquote
                  cite={url}
                  className="fb-xfbml-parse-ignore"
                >
                  <a href={url}>Voir la vidéo</a>
                </blockquote>
              </div>

            </article>
          ))}
        </div>
      </section>
    </div>
  );
}