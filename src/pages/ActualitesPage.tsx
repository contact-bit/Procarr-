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
 "https://www.facebook.com/reel/2114936318931170",
  "https://www.facebook.com/reel/1293270525376525",
 "https://www.facebook.com/reel/1359255314681007",
 "https://www.facebook.com/reel/4071116746473539",
  "https://www.facebook.com/reel/1510989456572418",
  "https://www.facebook.com/reel/606918982385505",
  "https://www.facebook.com/reel/701972798846473",
  "https://www.facebook.com/reel/4185048048480922",
  "https://www.facebook.com/reel/1500790664163070",
  "https://www.facebook.com/reel/1530936958332643",
  "https://www.facebook.com/reel/1505159674146977",
  "https://www.facebook.com/reel/1358437519073193",
  "https://www.facebook.com/reel/846078798315640",
  "https://www.facebook.com/reel/1546857273309223",
  "https://www.facebook.com/reel/736878412402440",
  "https://www.facebook.com/reel/1189645602175820",
  "https://www.facebook.com/reel/1243930370929737",
  "https://www.facebook.com/reel/926964669767686",
  "https://www.facebook.com/reel/1371781084633532",
  "https://www.facebook.com/reel/1394637375768603",
  "https://www.facebook.com/reel/2489530688254314",
  "https://www.facebook.com/reel/825185990596472",
  "https://www.facebook.com/reel/1480661793403260",
  "https://www.facebook.com/reel/2797996503685890",

];

export function ActualitesPage() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    loadFacebookSdk();

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
      { rootMargin: '200px' }
    );

    const cards = containerRef.current?.querySelectorAll('.reseaux-card');
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  // ✅ inversion propre
  const orderedVideos = [...videos].reverse();

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
          {orderedVideos.map((url, index) => {
            const embedUrl = url.includes('/reel/')
              ? url.replace('/reel/', '/watch/?v=')
              : url;

            return (
              <article className="reseaux-card" key={index}>
                
                <div className="fb-skeleton" />

                <div
                  className="fb-video"
                  data-href={embedUrl}
                  data-width="auto"
                  data-show-text="false"
                >
                  <blockquote
                    cite={embedUrl}
                    className="fb-xfbml-parse-ignore"
                  >
                    <a href={embedUrl}>Voir la vidéo</a>
                  </blockquote>
                </div>

              </article>
            );
          })}
        </div>
      </section>
    </div>
  );
}