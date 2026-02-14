// src/pages/AProposPage.tsx
import { LuHammer, LuUsers, LuNetwork, LuCheck } from 'react-icons/lu';
import aproposImg from '../assets/apropos.webp';
import './AProposPage.css';

export function AProposPage() {
  return (
    <div id="main-content" className="apropos-page">
      {/* Image d'intro */}
      <section className="apropos-image-wrapper">
        <img
          src={aproposImg}
          alt="Artisans Procarré & Fils en train de poser du carrelage"
          className="apropos-image"
        />
      </section>

      {/* Hero */}
      <section className="apropos-hero">
        <p className="apropos-kicker">Procarré &amp; Fils – Manosque (04)</p>
        <h1>
          Carreleurs spécialistes et coordinateurs de vos rénovations en Alpes-de-Haute-Provence
        </h1>
        <p>
          Procarré &amp; Fils est une entreprise familiale spécialisée dans la pose de carrelage
          et la rénovation d&apos;espaces intérieurs et extérieurs à Manosque et en
          Alpes-de-Haute-Provence. Avec plus de 30 ans d&apos;expérience, nous accompagnons
          particuliers, professionnels et architectes sur des projets sur mesure, du carrelage
          seul jusqu&apos;à la rénovation complète coordonnée avec notre réseau d&apos;artisans
          partenaires.
        </p>

        <div className="apropos-tags">
          <span><LuHammer /> Carrelage intérieur &amp; extérieur</span>
          <span><LuHammer /> Rénovation de salles de bain</span>
          <span><LuHammer /> Terrasses &amp; piscines</span>
          <span><LuNetwork /> Rénovation intérieure coordonnée</span>
        </div>
      </section>

      {/* Histoire, clients, réseau, valeurs, méthode */}
      <section className="apropos-content">
        {/* Histoire */}
        <article className="apropos-block">
          <div className="apropos-block-header">
            <LuHammer className="apropos-icon" />
            <h2>Une histoire de famille et de savoir-faire</h2>
          </div>
          <p>
            Procarré a été fondée par Denis Dussert, artisan carreleur, qui a développé son
            expertise dans la réalisation et la pose de carrelage pour les salles de bains,
            cuisines, pièces de vie, terrasses et abords de piscine. Au fil des années,
            l&apos;entreprise a bâti sa réputation sur la qualité des finitions, la préparation
            rigoureuse des supports et la maîtrise des matériaux.
          </p>
          <p>
            Aujourd&apos;hui, l&apos;entreprise est devenue Procarré &amp; Fils avec l&apos;arrivée
            de Sébastien et Laurent Dussert. L&apos;expérience de Denis se combine avec un regard
            plus moderne sur les formats de carrelage, les tendances déco et les attentes des
            clients, pour proposer des chantiers à la fois techniques, durables et esthétiques.
          </p>
        </article>

        {/* Typologie de clients + types de projets */}
        <article className="apropos-block">
          <div className="apropos-block-header">
            <LuUsers className="apropos-icon" />
            <h2>Particuliers, professionnels et architectes</h2>
          </div>
          <p>
            Procarré &amp; Fils accompagne ses clients pour tous types de projets : rénovation de
            salle de bain, création de terrasse carrelée, aménagement de cuisine, revêtements
            de sols et murs pour maisons individuelles, appartements, bureaux ou commerces.
          </p>
          <p>
            Nous intervenons aussi bien pour une pièce à rénover que pour une rénovation globale
            d&apos;appartement ou de maison, en lien direct avec le client ou en collaboration avec
            des architectes et maîtres d&apos;œuvre : calepinage, choix des matériaux, détails de pose
            et coordination avec les autres corps de métier quand le projet le nécessite.
          </p>
        </article>

        {/* Réseau d’artisans partenaires */}
        <article className="apropos-block apropos-block-grid">
          <div>
            <div className="apropos-block-header">
              <LuNetwork className="apropos-icon" />
              <h2>Un réseau d&apos;artisans partenaires coordonné par Procarré</h2>
            </div>
            <p>
              Au-delà du carrelage, beaucoup de rénovations nécessitent d&apos;intervenir sur la
              maçonnerie, le cloisonnement, la plomberie ou l&apos;électricité. Procarré &amp; Fils
              s&apos;appuie sur un réseau d&apos;artisans partenaires sélectionnés (maçons, plaquistes,
              plombiers, électriciens) avec lesquels nous avons l&apos;habitude de travailler, pour
              proposer de vraies rénovations tous corps d&apos;état tout en gardant un interlocuteur unique.
            </p>
            <p>
              Nous organisons l&apos;ordre d&apos;intervention des différents corps de métier,
              vérifions l&apos;avancement, gérons les ajustements de planning et assurons les finitions
              de carrelage. Vous n&apos;avez pas à coordonner plusieurs entreprises : vous échangez
              avec la même équipe du début à la fin du chantier.
            </p>
          </div>

          <ul className="apropos-pills">
            <li><LuCheck /> Artisans partenaires sélectionnés</li>
            <li><LuCheck /> Un seul interlocuteur</li>
            <li><LuCheck /> Planning et suivi de chantier</li>
            <li><LuCheck /> Rénovations complètes clé en main</li>
          </ul>
        </article>

        {/* Méthode de travail */}
        <article className="apropos-block apropos-block-steps">
          <div className="apropos-block-header">
            <LuHammer className="apropos-icon" />
            <h2>Notre façon de travailler sur vos chantiers</h2>
          </div>
          <ol className="apropos-steps">
            <li>
              <h3>1. Visite, relevés et échanges sur votre projet</h3>
              <p>
                Visite sur place à Manosque ou dans les communes voisines pour comprendre votre projet,
                relever les dimensions, vérifier l&apos;état des supports et discuter de vos envies
                (style, usage, budget). On anticipe ainsi les contraintes techniques et le phasage du chantier.
              </p>
            </li>
            <li>
              <h3>2. Conseils sur les matériaux et devis clair</h3>
              <p>
                Conseil sur le choix des carreaux, formats, teintes, finitions (antidérapant, grands formats,
                effets pierre, bois ou béton) et sur la composition du projet (douche à l&apos;italienne,
                niches, bancs, margelles, etc.). Vous recevez un devis détaillé poste par poste.
              </p>
            </li>
            <li>
              <h3>3. Préparation des supports, pose et finitions</h3>
              <p>
                Préparation des supports (démolition, chapes, ragréages, étanchéité), pose du carrelage,
                joints et finitions. Lorsque d&apos;autres artisans interviennent (plomberie, électricité,
                cloisonnement), nous coordonnons leurs passages pour garantir un chantier propre, fluide
                et un résultat final homogène.
              </p>
            </li>
          </ol>
        </article>

        {/* Valeurs */}
        <article className="apropos-block">
          <div className="apropos-block-header">
            <LuCheck className="apropos-icon" />
            <h2>Des valeurs fortes : qualité, rigueur et satisfaction client</h2>
          </div>
          <p>
            La satisfaction client, la qualité des finitions et le respect des délais sont au
            cœur de l&apos;engagement de Procarré &amp; Fils. Nous accordons une attention particulière
            à la préparation des supports, à l&apos;alignement des joints, aux découpes visibles et
            à la propreté du chantier, afin que le résultat soit durable et agréable au quotidien.
          </p>
          <p>
            Vous avez un projet de carrelage, de rénovation de salle de bain, de terrasse
            ou de rénovation intérieure plus globale à Manosque et alentours ?
            Contactez Procarré &amp; Fils pour échanger sur votre projet, bénéficier de conseils
            personnalisés et obtenir un devis gratuit et sans engagement.
          </p>
        </article>
      </section>
    </div>
  );
}
