// src/pages/devis/page.tsx
import '../../styles/devis.css';
import { useState } from 'react';
import { GlowBackground } from '../../components/GlowBackground';
import { SmartDevisForm } from '../../components/SmartDevisForm';
import { FiHome, FiSun, FiDroplet, FiCoffee, FiTool } from 'react-icons/fi';

const PROJECT_TYPES = [
  {
    id: 'interieur',
    label: 'Carrelage intérieur',
    icon: FiHome,
    hint: 'Séjour, couloir, pièces de vie',
  },
  {
    id: 'exterieur',
    label: 'Terrasse / extérieur',
    icon: FiSun,
    hint: 'Terrasse, plage de piscine, escaliers',
  },
  {
    id: 'sdb',
    label: 'Salle de bain',
    icon: FiDroplet,
    hint: 'Douche à l’italienne, faïence murale',
  },
  {
    id: 'cuisine',
    label: 'Cuisine',
    icon: FiCoffee,
    hint: 'Crédence, sol cuisine',
  },
  {
    id: 'renov',
    label: 'Rénovation complète',
    icon: FiTool,
    hint: 'Rénov globale, ouverture de cloisons',
  },
];

const SIDE_TEXT: Record<
  'interieur' | 'exterieur' | 'sdb' | 'cuisine' | 'renov',
  { title: string; intro: string; bullets: string[]; note: string }
> = {
  interieur: {
    title: 'Travaux de carrelage intérieur à Manosque',
    intro:
      'Vous souhaitez refaire le carrelage de votre salon, couloir ou chambres à Manosque ou dans les Alpes-de-Haute-Provence ? Indiquez les pièces à carreler, la surface approximative et le type de sol existant (ancien carrelage, parquet, chape brute) pour un devis précis de préparation et de pose.',
    bullets: [
      'Pose de carrelage grands formats dans le séjour ou la pièce de vie',
      'Remplacement d’un ancien carrelage ou d’un parquet par un nouveau revêtement',
      'Ragréage, reprise de niveaux et finitions de plinthes assorties',
    ],
    note:
      'Sélectionnez « Carrelage intérieur » ci-dessus pour recevoir un devis détaillé pour vos sols intérieurs (séjour, couloir, chambres) autour de Manosque.',
  },
  exterieur: {
    title: 'Terrasse, plage de piscine et carrelage extérieur',
    intro:
      'Pour vos terrasses, balcons, plages de piscine ou escaliers extérieurs, précisez la surface à carreler, l’exposition (plein sud, ombragé) et la nature du support : dalle béton, plots, terre ou ancien carrelage. Nous adaptons la solution de carrelage extérieur aux contraintes climatiques de la région de Manosque.',
    bullets: [
      'Création ou rénovation de terrasse carrelée sur dalle béton ou sur plots',
      'Pose de carrelage antidérapant pour plage de piscine et accès au bassin',
      'Habillage d’escaliers extérieurs et de nez de marches en carrelage',
    ],
    note:
      'Sélectionnez « Terrasse / extérieur » ci-dessus pour obtenir un devis clair pour vos aménagements extérieurs (terrasses, piscines, escaliers) dans le secteur de Manosque.',
  },
  sdb: {
    title: 'Rénovation de salle de bain et douche à l’italienne',
    intro:
      'Pour une salle de bain clé en main, indiquez la surface du sol, des murs à carreler et si vous souhaitez créer ou rénover une douche à l’italienne. Nous tenons compte de l’étanchéité, des pentes et des contraintes techniques pour un carrelage de salle de bain durable et facile à entretenir.',
    bullets: [
      'Création ou rénovation complète de salle de bain avec douche à l’italienne',
      'Faïence murale toute hauteur ou mi-hauteur autour de la douche et de la baignoire',
      'Mise en œuvre ou reprise d’étanchéité (SPEC) et ajustement des pentes d’écoulement',
    ],
    note:
      'Sélectionnez « Salle de bain » ci-dessus pour recevoir un devis carrelage détaillé pour votre salle d’eau ou salle de bain à Manosque et alentours.',
  },
  cuisine: {
    title: 'Carrelage de cuisine : crédence et sols',
    intro:
      'Pour moderniser votre cuisine, précisez la longueur de crédence à carreler, la surface du sol et l’état des meubles (existants, à poser ou à changer). Nous adaptons le carrelage de cuisine à votre usage quotidien : crédence facile à nettoyer et sol résistant aux taches, chocs et passages répétés.',
    bullets: [
      'Pose de crédence carrelée derrière le plan de travail et les plaques de cuisson',
      'Carrelage de sol de cuisine robuste, antidérapant et simple d’entretien',
      'Découpes soignées autour des meubles de cuisine existants ou neufs',
    ],
    note:
      'Sélectionnez « Cuisine » ci-dessus pour obtenir un devis de carrelage spécifique à votre cuisine (sol et crédence) dans votre maison ou appartement près de Manosque.',
  },
  renov: {
    title: 'Rénovation complète de maison ou d’appartement',
    intro:
      'Pour un projet de rénovation globale à Manosque (séjour, cuisine, chambres, salle de bain), détaillez les pièces concernées, la surface totale et les travaux envisagés : ouverture de cloisons, reprise de sols, création de salle de bain, mise à niveau des supports. Nous vous aidons à structurer le chantier et à estimer le budget.',
    bullets: [
      'Rénovation complète de salle de bain, cuisine et pièces de vie',
      'Création d’un espace séjour + cuisine ouverte avec reprises de sols',
      'Reprise de dalles béton, travaux de petite maçonnerie et pose de carrelage',
    ],
    note:
      'Sélectionnez « Rénovation complète » ci-dessus pour nous confier un projet global de rénovation intérieure dans le secteur de Manosque et des Alpes-de-Haute-Provence.',
  },
};

export function DevisPage() {
  const [selectedProject, setSelectedProject] = useState<
    'interieur' | 'exterieur' | 'sdb' | 'cuisine' | 'renov' | null
  >(null);

  const currentProject = selectedProject
    ? PROJECT_TYPES.find(p => p.id === selectedProject)
    : null;
  const side = selectedProject ? SIDE_TEXT[selectedProject] : null;

  return (
    <>
      <GlowBackground />
      <main id="main-content" className="devis-page">
        <section className="devis-hero">
          <h1>Devis carrelage et travaux de rénovation à Manosque</h1>
          <p>
            Remplissez ce formulaire en deux étapes pour obtenir un devis gratuit et personnalisé
            pour vos travaux de carrelage ou de rénovation à Manosque et dans les Alpes-de-Haute-Provence.
          </p>
        </section>

        {/* Étape 1 : choix du type de projet */}
        <section className="devis-step-headline">
          <span className="devis-step-badge">Étape 1</span>
          <h2>Sélectionnez le type de projet à carreler</h2>
          <p>
            Cliquez sur la carte qui correspond le mieux à votre chantier : carrelage intérieur,
            terrasse extérieure, salle de bain, cuisine ou rénovation complète. Les questions du
            formulaire s’adapteront automatiquement.
          </p>
          <div className="devis-step-arrow" aria-hidden="true" />
        </section>

        <section className="devis-project-picker">
          {PROJECT_TYPES.map((p, index) => {
            const Icon = p.icon;
            const isSelected = selectedProject === p.id;
            return (
              <button
                key={p.id}
                type="button"
                className={
                  isSelected
                    ? 'devis-project-card selected'
                    : 'devis-project-card'
                }
                onClick={() => setSelectedProject(p.id as any)}
                data-highlight={selectedProject === null && index === 0}
              >
                <span className="devis-project-emoji">
                  <Icon size={22} />
                </span>
                <span className="devis-project-label">{p.label}</span>
                <span className="devis-project-hint">{p.hint}</span>
              </button>
            );
          })}
        </section>







        {/* Étape 2 : formulaire + bloc descriptif uniquement après sélection */}
        {selectedProject && currentProject && side && (
          <section className="devis-grid">
            <div className="devis-card">
              <h2>
                {selectedProject === 'renov'
                  ? 'Devis rénovation complète'
                  : 'Devis carrelage ' + currentProject.label.toLowerCase()}
              </h2>
              <p className="devis-card-text">
                Votre projet sélectionné : <strong>{currentProject.label}</strong>. Décrivez votre
                chantier le plus précisément possible pour recevoir une estimation réaliste des
                travaux à réaliser.
              </p>

              <div className="devis-form-wrapper">
                <SmartDevisForm projectType={selectedProject} />
              </div>
            </div>

            <div className="devis-card devis-card-secondary">
              <h2>{side.title}</h2>
              <p className="devis-card-text">{side.intro}</p>
              <ul className="devis-list">
                {side.bullets.map(b => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <p className="devis-note">{side.note}</p>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
