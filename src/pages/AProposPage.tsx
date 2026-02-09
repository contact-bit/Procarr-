// src/pages/AProposPage.tsx

import aproposImg from '../assets/apropos.webp';

export function AProposPage() {
  return (
    <div>
      {/* Image d'intro */}
      <section className="apropos-image-wrapper">
        <img
          src={aproposImg}
          alt="Artisan carreleur Procarré & Fils à l'œuvre"
          className="apropos-image"
        />
      </section>

      {/* Intro avec fond back.png */}
      <section className="apropos-hero">
        <h1 style={{ fontSize: '2rem', marginBottom: '0.75rem' }}>
          Procarré &amp; Fils : artisan carreleur à Manosque depuis plus de 30 ans
        </h1>
        <p style={{ maxWidth: '42rem', color: '#4b5563' }}>
          Procarré &amp; Fils est une entreprise familiale spécialisée dans la
          pose de carrelage et la rénovation d&apos;espaces intérieurs et
          extérieurs à Manosque et en Alpes-de-Haute-Provence. Forte de plus de
          30 ans d&apos;expérience, l&apos;équipe met son savoir-faire au service des
          particuliers, des professionnels et des architectes pour des projets
          sur mesure.
        </p>
      </section>

      {/* Histoire */}
      <section style={{ padding: '1rem 0 2rem', display: 'grid', gap: '2rem' }}>
        <article>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            Une histoire de famille et de savoir-faire
          </h2>
          <p style={{ maxWidth: '42rem', color: '#4b5563' }}>
            Procarré a été fondée par Denis Dussert, artisan carreleur, qui a
            développé son expertise dans la réalisation et la pose de carrelage
            pour les salles de bains, cuisines, pièces de vie, terrasses et
            abords de piscine. Au fil des années, l&apos;entreprise a bâti sa
            réputation sur la qualité de ses finitions, la préparation rigoureuse
            des supports et la maîtrise des matériaux.
          </p>
          <p
            style={{
              maxWidth: '42rem',
              color: '#4b5563',
              marginTop: '0.75rem',
            }}
          >
            Aujourd&apos;hui, l&apos;entreprise est devenue Procarré &amp; Fils
            avec l&apos;arrivée des deux fils de M. Dussert. Cette évolution
            associe l&apos;expérience et la connaissance du métier à un regard
            plus moderne sur les tendances, les formats de carrelage et les
            attentes des clients.
          </p>
        </article>

        {/* Types de clients */}
        <article>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            Particuliers, professionnels et architectes
          </h2>
          <p style={{ maxWidth: '42rem', color: '#4b5563' }}>
            Procarré &amp; Fils accompagne ses clients pour tous types de
            projets : rénovation de salle de bain, création de terrasse
            carrelée, aménagement de cuisine, revêtements de sols et murs pour
            des maisons individuelles, des appartements, des bureaux ou des
            commerces. L&apos;entreprise intervient également en collaboration
            avec des architectes et maîtres d&apos;œuvre pour des réalisations
            sur mesure, du calepinage jusqu&apos;à la pose finale.
          </p>
        </article>

        {/* Valeurs */}
        <article>
          <h2 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>
            Des valeurs fortes : qualité, rigueur et satisfaction client
          </h2>
          <p style={{ maxWidth: '42rem', color: '#4b5563' }}>
            La satisfaction client, la qualité des finitions et le respect des
            délais sont au cœur de l&apos;engagement de Procarré &amp; Fils.
            Chaque chantier fait l&apos;objet d&apos;une étude personnalisée, avec des
            conseils sur le choix des carreaux, des formats, des teintes et des
            joints afin d&apos;obtenir un résultat durable, esthétique et adapté à
            l&apos;usage du lieu.
          </p>
          <p
            style={{
              maxWidth: '42rem',
              color: '#4b5563',
              marginTop: '0.75rem',
            }}
          >
            Vous avez un projet de carrelage, de rénovation de salle de bain, de
            terrasse ou d&apos;abords de piscine à Manosque et alentours ? Contactez
            Procarré &amp; Fils pour étudier votre projet et obtenir un devis
            gratuit et sans engagement.
          </p>
        </article>
      </section>
    </div>
  );
}
