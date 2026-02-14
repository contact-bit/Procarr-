// src/pages/AvantApresPage.tsx
import terrasseBefore from '../assets/terrasse-piscine-before.webp';
import terrasseAfter from '../assets/terrasse-piscine-after.webp';
import sdbBefore from '../assets/sdb-renovation-before.webp';
import sdbAfter from '../assets/sdb-renovation-after.webp';
import { BeforeAfterSlider } from '../components/BeforeAfterSlider';

export function AvantApresPage() {
  return (
    <div style={{ color: '#ffffff' }}>
      <section style={{ padding: '2rem 0' }}>
        <h1
          style={{
            fontSize: '2rem',
            marginBottom: '0.75rem',
            color: '#ffffff',
          }}
        >
          Avant / Après : transformations de vos espaces
        </h1>
        <p
          style={{
            maxWidth: '40rem',
            color: '#e5e7eb',
            fontSize: '0.98rem',
            lineHeight: 1.6,
          }}
        >
          Faites glisser le curseur pour découvrir la transformation de vos
          terrasses, abords de piscine, salles de bains et cuisines après
          l&apos;intervention de Procarré &amp; Fils.
        </p>
      </section>

      <section
        style={{
          padding: '1rem 0 2.5rem',
          display: 'grid',
          gap: '3rem',
        }}
      >
        {/* Terrasse / piscine */}
        <article>
          <h2
            style={{
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
              color: '#ffffff',
            }}
          >
            Terrasse carrelée autour de piscine – création complète
          </h2>
          <p
            style={{
              maxWidth: '40rem',
              color: '#e5e7eb',
              marginBottom: '1rem',
              fontSize: '0.95rem',
              lineHeight: 1.6,
            }}
          >
            Sur ce chantier, Procarré &amp; Fils est intervenu dès la
            préparation du terrain pour créer une terrasse carrelée autour
            d&apos;une piscine. Après le terrassement et la mise en forme, nous
            avons réalisé la préparation des supports puis la pose d&apos;un
            carrelage extérieur aspect bois, adapté aux abords de piscine.
          </p>

          <BeforeAfterSlider
            beforeSrc={terrasseBefore}
            afterSrc={terrasseAfter}
            alt="Avant après terrasse carrelée autour de piscine à Manosque"
            initialPosition={60}
          />
        </article>

        {/* Salle de bain */}
        <article>
          <h2
            style={{
              fontSize: '1.25rem',
              marginBottom: '0.5rem',
              color: '#ffffff',
            }}
          >
            Rénovation complète de salle de bain
          </h2>
          <p
            style={{
              maxWidth: '40rem',
              color: '#e5e7eb',
              marginBottom: '1rem',
              fontSize: '0.95rem',
              lineHeight: 1.6,
            }}
          >
            Ancienne salle de bain entièrement déposée, reprise des supports et
            création d&apos;un nouvel espace avec carrelage grand format sur les
            murs et le sol. Intégration d&apos;une baignoire îlot et robinetterie
            murale pour un rendu contemporain et épuré.
          </p>

          <BeforeAfterSlider
            beforeSrc={sdbBefore}
            afterSrc={sdbAfter}
            alt="Avant après rénovation complète de salle de bain"
            initialPosition={60}
          />
        </article>
      </section>
    </div>
  );
}
