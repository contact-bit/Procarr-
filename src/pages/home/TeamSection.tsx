// src/pages/home/TeamSection.tsx
import './TeamSection.css';
import equipe from '../../assets/optimized/july-2026/equipe-procarre.webp';

export function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-header section-header section-header-left">
        <span className="section-kicker">L&apos;équipe</span>
        <h2 className="section-title">
          Procarré &amp; Fils, carreleurs à Manosque en famille
        </h2>
        <p className="section-subtitle">
          Denis Dussert et ses fils Sébastien et Laurent, artisans carreleurs basés à Manosque,
          interviennent ensemble sur vos chantiers de carrelage, de rénovation de salle de bain,
          de terrasses et de rénovation intérieur et extérieur en Alpes-de-Haute-Provence.
        </p>
      </div>

      <div className="team-layout">
        <div className="team-photo-wrapper">
          <img
            src={equipe}
            alt="Denis et Sébastien Dussert, artisans carreleurs Procarré & Fils à Manosque"
            className="team-photo"
            loading="lazy"
            decoding="async"
            width={1707}
            height={1280}
          />
        </div>

        <div className="team-list">
          {/* Denis */}
          <div className="team-person">
            <h3>Denis Dussert</h3>
            <p>
              Artisan carreleur et fondateur de Procarré &amp; Fils, Denis pilote les chantiers
              de carrelage et de rénovation et développe aussi le projet&nbsp;
              <a
                href="https://www.luminescence-carrelage.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-inline-link"
              >
                Luminescence Carrelage
              </a>
              , autour de solutions de carrelage lumineux à fibre optique, alliant innovation
              et savoir-faire artisanal à Manosque.
            </p>
          </div>

          {/* Sébastien */}
          <div className="team-person">
            <h3>Sébastien Dussert</h3>
            <p>
              Artisan carreleur, Sébastien intervient sur les chantiers intérieurs et extérieurs :
              carrelage de sols et murs, salles de bain, terrasses. Il prend également en charge
              une partie de l&apos;organisation des chantiers, du suivi client et de la préparation
              des devis.
            </p>
          </div>

          {/* Laurent */}
          <div className="team-person">
            <h3>Laurent Dussert</h3>
            <p>
              Artisan carreleur, Laurent travaille sur les mêmes chantiers de sols, murs et terrasses
              et participe à la coordination avec les autres corps de métier lorsque les projets
              incluent de la rénovation complète. Il s&apos;occupe également de l&apos;animation des
              réseaux sociaux et de la mise en avant des réalisations de l&apos;entreprise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
