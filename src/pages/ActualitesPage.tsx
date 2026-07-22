// src/pages/ActualitesPage.tsx
import './ActualitesPage.css';
import { useCookieConsent } from '../consent/CookieConsentContext';
import { ExternalContentPlaceholder } from '../consent/ExternalContentPlaceholder';

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
  const { preferences } = useCookieConsent();

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
        {preferences.externalMedia ? (
          <div className="container reseaux-grid">
            {orderedVideos.map((url, index) => {
              const embedUrl = `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(
                url,
              )}&show_text=false&width=500`;

              return (
                <article className="reseaux-card" key={index}>
                  <iframe
                    className="reseaux-video-frame"
                    src={embedUrl}
                    title={`Vidéo chantier Procarré ${index + 1}`}
                    width="500"
                    height="500"
                    loading={index < 3 ? 'eager' : 'lazy'}
                    allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </article>
              );
            })}
          </div>
        ) : (
          <div className="container">
            <ExternalContentPlaceholder
              title="Vidéos Facebook désactivées"
              description="Autorisez les contenus externes pour afficher les aperçus et lire les vidéos Facebook."
            />
          </div>
        )}
      </section>
    </div>
  );
}
