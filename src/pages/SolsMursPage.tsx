// src/pages/prestations/SolsMursPage.tsx
import { Link } from 'react-router-dom';
import './SolsMursPage.css';

export function SolsMursPage() {
  return (
    <div id="main-content" className="prestations-page sols-murs-page">
      {/* Schema SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType:
              'Pose de carrelage de sol et de carrelage mural intérieur à Manosque',
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
          <div className="page-hero-inner">
            <p className="page-kicker">
              Procarré & Fils – Carreleur spécialiste Manosque 04100
            </p>
            <h1>
              Pose de <strong>carrelage de sol</strong> et de{' '}
              <strong>carrelage mural intérieur</strong> à Manosque (04)
            </h1>
            <p>
              Procarré & Fils est une entreprise familiale de carreleurs basée à
              Manosque, spécialisée dans la <strong>pose de carrelage de sol</strong> et la{' '}
              <strong>pose de carrelage mural</strong> pour les maisons,
              appartements et locaux professionnels dans les Alpes-de-Haute-Provence et communes voisines.
            </p>
            <div className="hero-cta">
              <Link to="/devis" className="btn btn-primary">
                Devis pose carrelage sols &amp; murs
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Contacter un carreleur
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CARRELAGE DE SOL */}
      <section className="section-sol">
        <div className="container">
          <div className="inner">
            <h2>
              Pose de <strong>carrelage de sol intérieur</strong>
            </h2>
            <p>
              Nous réalisons la <strong>pose de carrelage de sol</strong> dans
              toutes les pièces de vie : salons, séjours, cuisines, entrées,
              couloirs, escaliers et pièces techniques. La pose est adaptée aussi
              bien en construction neuve qu'en rénovation de sol existant.
            </p>
            <p>
              Procarré &amp; Fils travaille différents types de carreaux de sol :
              grès cérame grand format, carrelage imitation parquet bois,
              carrelage aspect pierre ou béton, carreaux antidérapants pour les
              zones de passage. L'objectif est d'obtenir un sol
              esthétique, résistant et facile d'entretien pour votre
              intérieur à Manosque et en Alpes-de-Haute-Provence.
            </p>
            <ul className="bullets">
              <li>Pose droite, pose en diagonale ou calepinage spécifique.</li>
              <li>Ragréage et préparation de la chape si nécessaire.</li>
              <li>Pose de plinthes carrelées assorties au carrelage de sol.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* CARRELAGE MURAL */}
      <section className="section-mur">
        <div className="container">
          <div className="inner">
            <h2>
              Pose de <strong>carrelage mural intérieur</strong>
            </h2>
            <p>
              Nous assurons également la <strong>pose de carrelage mural</strong>{' '}
              pour les cuisines, salles de bain, douches, WC, crédences et murs
              techniques. Le carrelage mural protège vos murs de l'eau et des
              projections tout en apportant une finition décorative.
            </p>
            <p>
              Selon votre projet, nous pouvons poser de la faïence murale
              classique, du carrelage mural grand format, des carreaux
              décoratifs, frises ou listels, ainsi que des crédences carrelées
              derrière les plans de travail de cuisine.
            </p>
            <ul className="bullets">
              <li>Carrelage mural cuisine et crédence carrelée.</li>
              <li>Carrelage mural salle de bain et douche.</li>
              <li>Habillage complet de murs en faïence ou grès cérame.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* NEUF / RÉNOVATION */}
      <section className="section-renov">
        <div className="container">
          <div className="inner">
            <h2>
              Carrelage de sol et carrelage mural en <strong>neuf ou rénovation</strong>
            </h2>
            <p>
              Procarré &amp; Fils intervient pour la{' '}
              <strong>rénovation de carrelage de sol</strong> ou de{' '}
              <strong>carrelage mural</strong> : remplacement d'un ancien
              carrelage, modernisation d'une cuisine, mise à niveau d'un
              sol, harmonie après ouverture de cloison ou création d'une
              nouvelle pièce de vie.
            </p>
            <p>
              Nous pouvons également coordonner de petits travaux annexes de
              préparation : ragréage, reprise de chape, seuils, ajustement de
              portes après pose du nouveau carrelage.
            </p>
          </div>
        </div>
      </section>

      {/* ZONE */}
      <section className="section-zone">
        <div className="container">
          <div className="inner">
            <h2>
              Carrelage sols et murs à Manosque et en Alpes-de-Haute-Provence (04)
            </h2>
            <p>
              Votre projet de <strong>pose de carrelage de sol</strong> ou de{' '}
              <strong>pose de carrelage mural</strong> se situe à Manosque ou
              dans les environs ? Nous intervenons à Manosque, Volx, Oraison,
              Forcalquier, Sainte-Tulle et dans plusieurs communes des Alpes-de-Haute-Provence (04).
            </p>
            <p>
              Pour un chantier situé en dehors de ce secteur, chaque demande est
              étudiée au cas par cas. Vous pouvez aussi consulter nos{' '}
              <Link to="/realisations">réalisations de carrelage intérieur</Link>{' '}
              pour découvrir des exemples de sols et murs carrelés.
            </p>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="section-cta">
        <div className="container">
          <div className="cta-box">
            <h2>
              Devis pour <strong>pose de carrelage de sol</strong> ou{' '}
              <strong>carrelage mural</strong> à Manosque
            </h2>
            <p className="cta-text">
              Vous recherchez un carreleur pour la pose de carrelage de sol ou de
              carrelage mural intérieur à Manosque et dans le 04 ?{' '}
              <Link to="/devis">
                Demandez un devis gratuit de carrelage sols et murs
              </Link>{' '}
              ou <Link to="/contact">contactez Procarré &amp; Fils</Link> pour
              échanger sur votre projet.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
