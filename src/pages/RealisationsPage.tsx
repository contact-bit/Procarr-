// src/components/RealisationsPage.tsx
import { useState, useCallback, useEffect, useMemo } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import './RealisationsPage.css';

import terrasse1 from '../assets/terrasse-1.webp';
import terrasse2 from '../assets/terrasse-2.webp';
import terrasse3 from '../assets/terrasse-3.webp';

type Realisation = {
  id: number;
  title: string;
  slug: string;
  location: string;
  type: string;
  surface?: string;
  description: string;
  mainImage: string;
  gallery: Array<{ src: string; label: string }>;
};

const REALISATIONS: Realisation[] = [
  {
    id: 1,
    slug: 'terrasse-piscine-manosque',
    title: 'Terrasse carrelée autour de piscine à Manosque',
    location: 'Manosque',
    type: 'Terrasse/Piscine',
    surface: '40 m²',
    description:
      'Création d’une terrasse carrelée aspect pierre autour d’une piscine à Manosque, avec correction des pentes, traitement des évacuations et habillage des margelles pour un extérieur durable.',
    mainImage: terrasse1,
    gallery: [
      { src: terrasse1, label: 'Vue d’ensemble de la terrasse finie' },
      { src: terrasse2, label: 'Détail des marches et de la margelle' },
      { src: terrasse3, label: 'Terrasse vue depuis la piscine' },
    ],
  },
  {
    id: 2,
    slug: 'terrasse-dalle-manosque',
    title: 'Terrasse dalle grand format à Manosque',
    location: 'Manosque',
    type: 'Terrasse',
    surface: '32 m²',
    description:
      'Pose de dalles grand format sur terrasse existante, avec rattrapage de niveau et joints alignés, pour une terrasse contemporaine facile d’entretien.',
    mainImage: terrasse3,
    gallery: [
      { src: terrasse3, label: 'Terrasse grand format après travaux' },
      { src: terrasse1, label: 'Détail des coupes et des joints' },
      { src: terrasse2, label: 'Accès terrasse et seuil de baie' },
    ],
  },
  {
    id: 3,
    slug: 'plage-piscine-digne',
    title: 'Plage de piscine carrelée à Digne-les-Bains',
    location: 'Digne-les-Bains',
    type: 'Piscine',
    surface: '45 m²',
    description:
      'Rénovation de la plage de piscine avec carrelage antidérapant et margelles ajustées, pour un contour de bassin plus sécurisant et esthétique.',
    mainImage: terrasse2,
    gallery: [
      { src: terrasse2, label: 'Plage de piscine en cours de pose' },
      { src: terrasse1, label: 'Margelles alignées autour du bassin' },
      { src: terrasse3, label: 'Vue d’ensemble de la plage terminée' },
    ],
  },
  {
    id: 4,
    slug: 'terrasse-sisteron',
    title: 'Terrasse imitation pierre à Sisteron',
    location: 'Sisteron',
    type: 'Terrasse',
    surface: '28 m²',
    description:
      'Terrasse extérieure imitation pierre naturelle à Sisteron, posée sur plots avec pente maîtrisée pour l’écoulement de l’eau.',
    mainImage: terrasse1,
    gallery: [
      { src: terrasse1, label: 'Terrasse imitation pierre finie' },
      { src: terrasse3, label: 'Détail des joints et du calepinage' },
      { src: terrasse2, label: 'Accès terrasse et seuils' },
    ],
  },
  {
    id: 5,
    slug: 'entree-vollint',
    title: 'Entrée carrelée antidérapante à Vollint',
    location: 'Vollint',
    type: 'Rénovation',
    surface: '18 m²',
    description:
      'Rénovation de l’entrée d’une maison avec carrelage antidérapant, nez de marche et plinthes assorties pour une zone d’accueil plus sûre.',
    mainImage: terrasse2,
    gallery: [
      { src: terrasse2, label: 'Entrée carrelée après rénovation' },
      { src: terrasse3, label: 'Détail du nez de marche' },
      { src: terrasse1, label: 'Vue globale de l’accès maison' },
    ],
  },
  {
    id: 6,
    slug: 'terrasse-famille-manosque',
    title: 'Terrasse familiale à Manosque',
    location: 'Manosque',
    type: 'Terrasse',
    surface: '36 m²',
    description:
      'Création d’une terrasse familiale pour salon de jardin, avec carrelage résistant au gel et aux taches, posée sur une dalle existante.',
    mainImage: terrasse3,
    gallery: [
      { src: terrasse3, label: 'Terrasse prête à être aménagée' },
      { src: terrasse1, label: 'Pose du carrelage sur dalle' },
      { src: terrasse2, label: 'Zoom sur les alignements de joints' },
    ],
  },
  {
    id: 7,
    slug: 'piscine-castellane',
    title: 'Piscine rénovée à Castellane',
    location: 'Castellane',
    type: 'Piscine',
    surface: '40 m²',
    description:
      'Rénovation complète de la plage de piscine avec carrelage grès cérame, reprise des margelles et des abords pour une finition homogène.',
    mainImage: terrasse1,
    gallery: [
      { src: terrasse1, label: 'Plage de piscine rénovée' },
      { src: terrasse2, label: 'Détail du bord de bassin' },
      { src: terrasse3, label: 'Vue générale de la piscine' },
    ],
  },
  {
    id: 8,
    slug: 'piscine-vollint',
    title: 'Piscine et terrasse intégrée à Vollint',
    location: 'Vollint',
    type: 'Piscine',
    surface: '38 m²',
    description:
      'Piscine familiale avec terrasse carrelée intégrée, joints adaptés et surface antidérapante pour sécuriser les abords.',
    mainImage: terrasse2,
    gallery: [
      { src: terrasse2, label: 'Piscine familiale et terrasse' },
      { src: terrasse3, label: 'Terrasse attenante à la piscine' },
      { src: terrasse1, label: 'Détail du carrelage antidérapant' },
    ],
  },
  {
    id: 9,
    slug: 'terrasse-alpes',
    title: 'Terrasse vue sur les Alpes',
    location: 'Alpes-de-Haute-Provence',
    type: 'Terrasse',
    surface: '30 m²',
    description:
      'Terrasse carrelée avec vue dégagée sur les Alpes-de-Haute-Provence, conçue pour résister aux écarts de température et aux UV.',
    mainImage: terrasse3,
    gallery: [
      { src: terrasse3, label: 'Terrasse avec vue dégagée' },
      { src: terrasse1, label: 'Carrelage extérieur en situation' },
      { src: terrasse2, label: 'Finitions en bordure de terrasse' },
    ],
  },
];

type FilterKey = 'all' | 'manosque' | 'terrasse' | 'piscine' | 'renovation' | 'carrelage';

const FILTERS: Record<
  FilterKey,
  { label: string; description: string; color: string }
> = {
  all: {
    label: 'Tous les chantiers',
    description: 'Afficher l’ensemble des 9 chantiers réalisés.',
    color: '#f9fafb',
  },
  manosque: {
    label: 'Manosque & proches',
    description: 'Chantiers réalisés à Manosque et dans les communes voisines (Vollint…).',
    color: '#e63932',
  },
  terrasse: {
    label: 'Terrasses',
    description: 'Terrasses extérieures, dalles grand format, imitation pierre.',
    color: '#22c55e',
  },
  piscine: {
    label: 'Piscines',
    description: 'Plages de piscine carrelées, margelles, abords sécurisés.',
    color: '#38bdf8',
  },
  renovation: {
    label: 'Rénovations',
    description: 'Rénovations d’entrées, de terrasses existantes, mise à niveau.',
    color: '#f97316',
  },
  carrelage: {
    label: 'Pièces d’eau / carrelage',
    description: 'Focus sur les pièces avec fort besoin en carrelage et étanchéité.',
    color: '#a855f7',
  },
};

function SEOHead() {
  return (
    <>
      <title>Réalisations de carrelage à Manosque (04) | Procarré &amp; Fils</title>
      <meta
        name="description"
        content="Sélection de chantiers de carrelage, terrasses et piscines réalisés par Procarré & Fils à Manosque, Digne-les-Bains, Sisteron, Castellane et dans les Alpes-de-Haute-Provence."
      />
    </>
  );
}

function FilterPanel({
  activeFilter,
  onFilterChange,
  totalCount,
  filteredCount,
}: {
  activeFilter: FilterKey;
  onFilterChange: (filter: FilterKey) => void;
  totalCount: number;
  filteredCount: number;
}) {
  return (
    <section className="realisations-filters-panel" aria-label="Filtrer les réalisations">
      <div className="realisations-filters-header">
        <div>
          <p className="realisations-kicker">Filtrer les chantiers</p>
          <p className="realisations-filters-summary">
            {filteredCount} chantier{filteredCount > 1 ? 's' : ''} affiché
            {activeFilter !== 'all' ? ` dans « ${FILTERS[activeFilter].label} »` : ''} sur {totalCount}.
          </p>
        </div>
        <p className="realisations-filters-help">
          Choisissez un type de chantier ou une zone d’intervention dans la liste ci-dessous pour
          ne voir que les réalisations qui vous intéressent.
        </p>
      </div>

      <ul className="realisations-filters-list">
        {(
          Object.entries(FILTERS) as Array<
            [FilterKey, { label: string; description: string; color: string }]
          >
        ).map(([key, { label, description, color }]) => {
          const isActive = activeFilter === key;
          let count = totalCount;

          if (key === 'manosque') {
            count = REALISATIONS.filter(
              r => r.location === 'Manosque' || r.location === 'Vollint',
            ).length;
          } else if (key === 'terrasse') {
            count = REALISATIONS.filter(r => r.type.includes('Terrasse')).length;
          } else if (key === 'piscine') {
            count = REALISATIONS.filter(r => r.type.includes('Piscine')).length;
          } else if (key === 'renovation') {
            count = REALISATIONS.filter(r =>
              r.type.toLowerCase().includes('rénovation'),
            ).length;
          } else if (key === 'carrelage') {
            count = REALISATIONS.filter(r =>
              ['Carrelage', 'Pièces d’eau', 'Salle de bain'].some(labelValue =>
                r.type.toLowerCase().includes(labelValue.toLowerCase()),
              ),
            ).length;
          }

          return (
            <li key={key}>
              <button
                type="button"
                className={`realisations-filter-item ${isActive ? 'is-active' : ''}`}
                onClick={() => onFilterChange(key)}
              >
                <span
                  className="realisations-filter-color"
                  style={{ backgroundColor: color }}
                />
                <span className="realisations-filter-main">
                  <span className="realisations-filter-label">{label}</span>
                  <span className="realisations-filter-count">
                    {count} chantier{count > 1 ? 's' : ''}
                  </span>
                </span>
                <span className="realisations-filter-description">{description}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function RealisationBlock({
  rea,
  onImageClick,
}: {
  rea: Realisation;
  onImageClick: (index: number) => void;
}) {
  return (
    <article className="realisations-block" id={rea.slug}>
      <div className="realisations-block-header">
        <div className="realisations-block-icon">▢</div>
        <div>
          <h2 className="realisations-block-title">{rea.title}</h2>
          <p className="realisations-block-meta">
            {rea.type} · {rea.location}
            {rea.surface ? ` · ${rea.surface}` : ''}
          </p>
        </div>
      </div>

      <p className="realisations-block-desc">{rea.description}</p>

      <div className="realisations-block-grid">
        <div className="realisations-block-gallery">
          {rea.gallery.map((img, index) => (
            <button
              key={img.src + index}
              type="button"
              className="realisations-thumb-wrapper"
              onClick={() => onImageClick(index)}
            >
              <img
                src={img.src}
                alt={img.label}
                className="realisations-thumb"
                loading="lazy"
              />
              <span className="realisations-thumb-caption">{img.label}</span>
            </button>
          ))}
        </div>
        <ul className="realisations-pills">
          <li>
            <span className="realisations-pill-dot" /> Préparation des supports
          </li>
          <li>
            <span className="realisations-pill-dot" /> Pose de carrelage adaptée à l’usage
          </li>
          <li>
            <span className="realisations-pill-dot" /> Étanchéité et évacuations contrôlées
          </li>
          <li>
            <span className="realisations-pill-dot" /> Finitions soignées et joints alignés
          </li>
        </ul>
      </div>
    </article>
  );
}

export function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [lightboxState, setLightboxState] = useState<{
    reaId: number | null;
    index: number;
  }>({
    reaId: null,
    index: 0,
  });

  const displayedReas = useMemo(() => {
    if (activeFilter === 'all') return REALISATIONS;

    if (activeFilter === 'manosque') {
      return REALISATIONS.filter(
        r => r.location === 'Manosque' || r.location === 'Vollint',
      );
    }
    if (activeFilter === 'terrasse') {
      return REALISATIONS.filter(r => r.type.includes('Terrasse'));
    }
    if (activeFilter === 'piscine') {
      return REALISATIONS.filter(r => r.type.includes('Piscine'));
    }
    if (activeFilter === 'renovation') {
      return REALISATIONS.filter(r =>
        r.type.toLowerCase().includes('rénovation'),
      );
    }
    if (activeFilter === 'carrelage') {
      return REALISATIONS.filter(r =>
        ['Carrelage', 'Pièces d’eau', 'Salle de bain'].some(labelValue =>
          r.type.toLowerCase().includes(labelValue.toLowerCase()),
        ),
      );
    }
    return REALISATIONS;
  }, [activeFilter]);

  const openLightbox = useCallback((reaId: number, index: number) => {
    setLightboxState({ reaId, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxState({ reaId: null, index: 0 });
  }, []);

  const currentRea = lightboxState.reaId
    ? REALISATIONS.find(r => r.id === lightboxState.reaId)
    : null;

  return (
    <>
      <SEOHead />
      <main className="realisations-page">
        <section className="realisations-hero">
          <p className="realisations-kicker">Réalisations Procarré &amp; Fils</p>
          <h1>
            Chantiers de carrelage à Manosque et dans les Alpes-de-Haute-Provence
          </h1>
          <p>
            Voici un aperçu des chantiers menés par Procarré &amp; Fils : terrasses carrelées,
            piscines, rénovations d’entrées et terrasses familiales à Manosque,
            Digne-les-Bains, Sisteron, Castellane, Vollint et dans les environs.
          </p>
        </section>

        <FilterPanel
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          totalCount={REALISATIONS.length}
          filteredCount={displayedReas.length}
        />

        <section className="realisations-content">
          {displayedReas.map(rea => (
            <RealisationBlock
              key={rea.id}
              rea={rea}
              onImageClick={index => openLightbox(rea.id, index)}
            />
          ))}
        </section>

        {currentRea && (
          <Lightbox
            open={lightboxState.reaId !== null}
            close={closeLightbox}
            index={lightboxState.index}
            slides={currentRea.gallery.map(img => ({ src: img.src }))}
            plugins={[Zoom]}
            zoom={{ scrollToZoom: true, maxZoomPixelRatio: 3 }}
          />
        )}
      </main>
    </>
  );
}
