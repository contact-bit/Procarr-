// src/components/RealisationsPage.tsx
import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';

import terrasse1 from '../assets/terrasse-1.webp';
import terrasse2 from '../assets/terrasse-2.webp';
import terrasse3 from '../assets/terrasse-3.webp';

type Realisation = {
  id: number;
  title: string;
  location: string;
  type: string;
  surface?: string;
  description: string;
  mainImage?: string;
  gallery: { src: string; label?: string }[];
};

const REALISATIONS: Realisation[] = [
  {
    id: 1,
    title: 'Terrasse carrelée autour de piscine',
    location: 'Alpes-de-Haute-Provence',
    type: 'Terrasse / piscine',
    surface: '40 m²',
    description:
      'Création d’une terrasse carrelée aspect pierre autour d’une piscine, avec correction des pentes, traitement des évacuations et habillage des margelles pour un extérieur durable et confortable.',
    mainImage: terrasse1,
    gallery: [
      { src: terrasse1, label: 'Vue d’ensemble de la terrasse finie' },
      { src: terrasse2, label: 'Détail des marches et de la margelle' },
      { src: terrasse3, label: 'Vue de la terrasse depuis la piscine' },
    ],
  },
];

export function RealisationsPage() {
  const [openId, setOpenId] = useState<number | null>(REALISATIONS[0]?.id ?? null);

  const [lightboxState, setLightboxState] = useState<{
    reaId: number | null;
    index: number;
  }>({ reaId: null, index: 0 });

  const toggle = (id: number) => {
    setOpenId(current => (current === id ? null : id));
  };

  const openLightbox = (reaId: number, index: number) => {
    setLightboxState({ reaId, index });
  };

  const closeLightbox = () => {
    setLightboxState({ reaId: null, index: 0 });
  };

  const currentRea =
    lightboxState.reaId != null
      ? REALISATIONS.find(r => r.id === lightboxState.reaId) || null
      : null;

  return (
    <div>
      {/* Intro */}
      <section className="section">
        <header className="section-header">
          <h1
            className="section-title"
            style={{ color: '#ffffff' }}
          >
            Nos réalisations en carrelage et rénovation
          </h1>
          <p className="section-paragraph">
            Découvrez un chantier de terrasse carrelée réalisé par Procarré &amp; Fils
            autour d’une piscine, en Alpes-de-Haute-Provence. Cliquez sur les fiches
            ci-dessous pour déplier le détail des chantiers et parcourir les photos.
          </p>
        </header>
      </section>

      {/* Chantiers */}
      <section className="section-text">
        <div className="section-grid">
          {REALISATIONS.map(rea => {
            const isOpen = openId === rea.id;

            return (
              <article key={rea.id} className="card">
                {/* En-tête cliquable */}
                <button
                  type="button"
                  onClick={() => toggle(rea.id)}
                  aria-expanded={isOpen}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    padding: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.5rem',
                    border: 'none',
                    background: 'transparent',
                    cursor: 'pointer',
                  }}
                >
                  {/* Image de couverture */}
                  {rea.mainImage && (
                    <div>
                      <img
                        src={rea.mainImage}
                        alt={rea.title}
                        style={{
                          width: '100%',
                          maxHeight: '260px',
                          objectFit: 'cover',
                          borderRadius: '0.6rem',
                        }}
                      />
                    </div>
                  )}

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginTop: '0.5rem',
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: '1.1rem',
                          margin: 0,
                          marginBottom: '0.25rem',
                          color: '#ffffff',
                        }}
                      >
                        {rea.title}
                      </h2>
                      <p
                        style={{
                          fontSize: '0.9rem',
                          color: '#ffffff',
                          margin: 0,
                        }}
                      >
                        {rea.type} – {rea.location}
                        {rea.surface ? ` – ${rea.surface}` : ''}
                      </p>
                    </div>

                    {/* Indication "dépliable" */}
                    <div
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.35rem',
                        fontSize: '0.8rem',
                        color: '#ffffff',
                      }}
                    >
                      <span>{isOpen ? 'Masquer le chantier' : 'Voir le chantier'}</span>
                      <span
                        aria-hidden="true"
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          width: '1.6rem',
                          height: '1.6rem',
                          borderRadius: '999px',
                          border: '1px solid rgba(248,250,252,0.35)',
                          fontSize: '0.9rem',
                          transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
                          transition: 'transform 0.15s ease-out, background-color 0.15s ease-out',
                        }}
                      >
                        &gt;
                      </span>
                    </div>
                  </div>
                </button>

                {/* Zone dépliée animée */}
                <div className={`rea-details ${isOpen ? 'rea-open' : 'rea-closed'}`}>
                  <div className="rea-details-inner">
                    <p
                      style={{
                        fontSize: '0.95rem',
                        color: '#ffffff',
                        marginBottom: '1rem',
                      }}
                    >
                      {rea.description}
                    </p>

                    <div
                      style={{
                        display: 'grid',
                        gap: '0.75rem',
                        gridTemplateColumns:
                          rea.gallery.length > 2
                            ? 'repeat(auto-fit, minmax(160px, 1fr))'
                            : 'repeat(auto-fit, minmax(220px, 1fr))',
                      }}
                    >
                      {rea.gallery.map((img, index) => (
                        <figure key={img.src + index} style={{ margin: 0 }}>
                          <img
                            src={img.src}
                            alt={
                              img.label ||
                              `${rea.title} – photo chantier ${index + 1}`
                            }
                            style={{
                              width: '100%',
                              maxHeight: '220px',
                              objectFit: 'cover',
                              borderRadius: '0.5rem',
                              cursor: 'zoom-in',
                            }}
                            onClick={() => openLightbox(rea.id, index)}
                          />
                          {img.label && (
                            <figcaption
                              style={{
                                fontSize: '0.8rem',
                                color: '#ffffff',
                                marginTop: '0.25rem',
                              }}
                            >
                              {img.label}
                            </figcaption>
                          )}
                        </figure>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Lightbox globale avec zoom */}
      {currentRea && (
        <Lightbox
          open={lightboxState.reaId !== null}
          close={closeLightbox}
          index={lightboxState.index}
          slides={currentRea.gallery.map(img => ({ src: img.src }))}
          plugins={[Zoom]}
          zoom={{
            scrollToZoom: true,
            maxZoomPixelRatio: 3,
          }}
        />
      )}
    </div>
  );
}
