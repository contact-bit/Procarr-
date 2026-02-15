// src/pages/prestations/PreparationSupportsPage.tsx
import { Link } from 'react-router-dom';
import './PreparationSupportsPage.css';

export function PreparationSupportsPage() {
  return (
    <div id="main-content" className="prestations-page preparation-supports-page">
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType:
              'Préparation des supports avant pose de carrelage : chapes, ragréage, maçonnerie à Manosque',
            provider: {
              '@type': 'LocalBusiness',
              name: 'Procarré & Fils',
              address: {
                '@type': 'PostalAddress',
                addressRegion: 'Alpes-de-Haute-Provence',
                postalCode: '04100',
                addressCountry: 'FR',
              },
              telephone: '+33600000000',
              areaServed: [
                'Manosque',
                'Volx',
                'Oraison',
                'Forcalquier',
                'Sainte-Tulle',
              ],
            },
          }),
        }}
      />

      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <p className="page-kicker">
            Procarré &amp; Fils – Préparation des supports pour carrelage à Manosque
          </p>
          <h1>
            Préparation des <strong>supports de carrelage</strong> : chapes, ragréage et maçonnerie à Manosque (04)
          </h1>
          <p>
            Avant toute pose de carrelage, Procarré &amp; Fils assure une{' '}
            <strong>préparation rigoureuse des supports</strong> : chape, ragréage, reprise de
            planéité, traitement des fissures et maçonneries afin de garantir un
            carrelage durable, stable et parfaitement plan en Alpes-de-Haute-Provence.
          </p>
          <div className="hero-cta">
            <Link to="/devis" className="btn btn-primary">
              Demander un devis gratuit
            </Link>
            <Link to="/realisations" className="btn btn-secondary">
              Voir des réalisations de chantiers
            </Link>
          </div>
        </div>
      </section>

      {/* BLOC 1 : Diagnostic et mise en conformité des supports */}
      <section className="section-supports">
        <div className="container">
          <h2>
            Diagnostic et <strong>mise en conformité des supports</strong>
          </h2>
          <p>
            Un carrelage ne tient dans le temps que si le support est sain, stable et compatible.
            Nous réalisons un <strong>diagnostic des supports</strong> existants (dalle béton,
            ancienne chape, carrelage existant, plancher, etc.) afin d&apos;identifier les
            contraintes : différences de niveau, fissures, décollements, humidité, défauts de
            planéité.
          </p>
          <p>
            En fonction de l&apos;état du support, nous préconisons les solutions adaptées :
            ragréage autolissant, réfection de chape, reprise ponctuelle de maçonnerie ou création
            d&apos;une nouvelle chape pour repartir sur une base saine.
          </p>
          <ul className="bullets">
            <li>Contrôle de la planéité et de la solidité du support.</li>
            <li>Repérage des fissures, zones friables et parties décollées.</li>
            <li>Choix de la solution : ragréage, nouvelle chape ou renfort ponctuel.</li>
          </ul>
        </div>
      </section>

      {/* BLOC 2 : Chapes et ragréages avant carrelage */}
      <section className="section-chapes">
        <div className="container">
          <h2>
            Réalisation de <strong>chapes</strong> et <strong>ragréages</strong> avant carrelage
          </h2>
          <p>
            Pour obtenir un sol prêt à carreler, nous mettons en œuvre des <strong>chapes</strong>{' '}
            traditionnelles ou fluides et des <strong>ragréages autolissants</strong> selon les
            besoins : rattrapage de niveaux, correction des défauts, préparation de grandes
            surfaces ou de petites pièces comme les salles de bain.
          </p>
          <p>
            Les produits utilisés sont choisis en fonction du support, de l&apos;usage de la pièce
            (intérieur, extérieur, local humide) et des préconisations des fabricants. Le respect
            des temps de séchage et des épaisseurs minimales garantit une base fiable pour la pose
            du carrelage.
          </p>
          <ul className="bullets">
            <li>Chapes de ravoirage et chapes de finition prêtes à carreler.</li>
            <li>Ragréage autolissant pour rattraper les défauts de planéité.</li>
            <li>Respect des épaisseurs, des pentes et des délais de séchage.</li>
          </ul>
        </div>
      </section>

      {/* BLOC 3 :maçonnerie et reprises locales */}
      <section className="section-maconnerie">
        <div className="container">
          <h2>
            <strong>maçonnerie</strong> et reprises locales avant carrelage
          </h2>
          <p>
            En complément des chapes et ragréages, Procarré &amp; Fils réalise les{' '}
            <strong>maçonneries</strong> nécessaires avant la pose du carrelage : création
            ou reprise de marches, seuils, murets, nez de marche, rebords de baies, supports pour
            receveurs de douche ou habillages en maçonnerie.
          </p>
          <p>
            Ces interventions permettent d&apos;obtenir des supports solides et propres, adaptés à
            la pose des carreaux et aux contraintes de la pièce (passage, humidité, extérieur,
            etc.).
          </p>
          <ul className="bullets">
            <li>Reprises de marches, seuils et nez de marche avant carrelage.</li>
            <li>Murets, tablettes, habillages maçonnés prêt à carreler.</li>
            <li>Supports maçonnés pour receveurs de douche ou baignoires.</li>
          </ul>
        </div>
      </section>

      {/* BLOC 4 : Préparation des supports intérieurs / extérieurs */}
      <section className="section-interieur-exterieur">
        <div className="container">
          <h2>
            Préparation des supports <strong>intérieurs et extérieurs</strong>
          </h2>
          <p>
            La préparation d&apos;un support pour un carrelage extérieur (terrasse, escalier,
            plage de piscine) doit tenir compte des contraintes climatiques : gel, dilatations,
            ruissellement de l&apos;eau. Nous réalisons les pentes nécessaires, renforçons les
            zones sensibles et appliquons les mortiers adaptés pour assurer la durabilité du
            carrelage.
          </p>
          <p>
            En intérieur, la priorité est donnée à la planéité et à la compatibilité des supports
            avec le futur carrelage (grands formats, carreaux fins, etc.), pour éviter les sons
            creux et les fissurations prématurées.
          </p>
          <ul className="bullets">
            <li>Préparation de supports pour terrasses, escaliers et plages de piscine.</li>
            <li>Ragréage et chapes en intérieur pour grands formats de carrelage.</li>
            <li>Solutions adaptées aux locaux humides (salles de bain, buanderies).</li>
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-cta">
        <div className="container">
          <h2>
            Devis pour <strong>préparation de supports</strong> avant pose de carrelage à Manosque
          </h2>
          <p className="cta-text">
            Vous avez un projet de pose de carrelage nécessitant une reprise de supports, une chape
            ou un ragréage à Manosque ou en Alpes-de-Haute-Provence ?{' '}
            <Link to="/devis">Demander un devis gratuit</Link> ou{' '}
            <Link to="/contact">contactez Procarré &amp; Fils</Link> pour étudier votre projet.
          </p>
        </div>
      </section>
    </div>
  );
}
