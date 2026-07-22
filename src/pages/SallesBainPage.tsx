/* src/pages/prestations/SallesBainPage.tsx */
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import './SallesBainPage.css';
import img5132 from '../assets/optimized/july-2026/salle-de-bain-5323.webp';
import { BUSINESS_PHONE_E164 } from '../config/contact';

export function SallesBainPage() {
return ( <div id="main-content" className="prestations-page salles-bain-page">
<Helmet>
  <title>Rénovation salle de bain à Manosque | Procarré</title>
  <meta
    name="description"
    content="Rénovation de salle de bain et création de douche à l’italienne à Manosque : carrelage, étanchéité et finitions. Demandez un devis gratuit."
  />
  <link rel="canonical" href="https://procarre.fr/prestations/salles-de-bain" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="fr_FR" />
  <meta property="og:title" content="Rénovation salle de bain à Manosque | Procarré" />
  <meta
    property="og:description"
    content="Salle de bain, douche à l’italienne, carrelage et étanchéité autour de Manosque."
  />
  <meta property="og:url" content="https://procarre.fr/prestations/salles-de-bain" />
  <meta name="twitter:card" content="summary" />
</Helmet>
{/* Schema SEO */}
<script
type="application/ld+json"
dangerouslySetInnerHTML={{
__html: JSON.stringify({
'@context': 'https://schema.org',
'@type': 'Service',
serviceType:
"Rénovation de salle de bain et création de douche à l'italienne à Manosque",
provider: {
'@type': 'LocalBusiness',
name: 'Procarré & Fils',
address: {
'@type': 'PostalAddress',
addressRegion: 'Alpes-de-Haute-Provence',
postalCode: '04100',
addressCountry: 'FR',
},
telephone: BUSINESS_PHONE_E164,
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

    {/* IMAGE HERO */}
    <div className="page-hero-image-wrapper">
      <img
        src={img5132}
        alt="Rénovation salle de bain carrelée avec douche à l'italienne à Manosque"
        className="page-hero-image"
        loading="eager"
        fetchPriority="high"
        width={1707}
        height={1280}
      />
    </div>

    <div className="container">
      <p className="page-kicker">
        Procarré & Fils – Rénovation de salles de bain à Manosque
      </p>
      <h1>
        Rénovation de <strong>salles de bain</strong> et{' '}
        <strong>douches à l&apos;italienne carrelées</strong> à Manosque (04)
      </h1>
      <p>
        Procarré &amp; Fils réalise la rénovation complète de salle de bain :
        dépose de l&apos;ancien carrelage, préparation des supports,
        étanchéité sous carrelage, pose de carrelage au sol et aux murs,
        création de douche à l&apos;italienne et finitions soignées en
        Alpes-de-Haute-Provence.
      </p>
      <div className="hero-cta">
        <Link to="/devis" className="btn btn-primary">
          Devis salle de bain &amp; douche à l&apos;italienne
        </Link>
        <Link to="/realisations" className="btn btn-secondary">
          Voir des réalisations
        </Link>
      </div>
    </div>
  </section>

  {/* BLOC 1 : Rénovation de salle de bain */}
  <section className="section-sdb">
    <div className="container">
      <h2>
        Rénovation complète de <strong>salle de bain carrelée</strong>
      </h2>
      <p>
        Nous prenons en charge la <strong>rénovation de salle de bain</strong> de A à Z :
        dépose de l&apos;ancien carrelage, préparation des murs et du sol,
        reprise des pentes, pose du nouveau carrelage et finitions. La salle
        de bain est une pièce très exposée à l&apos;humidité, c&apos;est pourquoi nous
        utilisons des matériaux adaptés et des systèmes d&apos;étanchéité
        conformes aux recommandations des fabricants.
      </p>
      <p>
        Selon votre projet, nous pouvons moderniser une salle de bain
        existante, transformer une baignoire en douche, agrandir l&apos;espace
        douche ou créer une nouvelle salle de bain dans une pièce non
        aménagée.
      </p>
      <ul className="bullets">
        <li>Dépose de l&apos;ancien carrelage et remise à niveau des supports.</li>
        <li>Préparation des murs avec plaques hydrofuges si nécessaire.</li>
        <li>Pose de nouveaux revêtements de sol et de mur en carrelage.</li>
      </ul>
    </div>
  </section>

  {/* BLOC 2 : Douches à l'italienne */}
  <section className="section-italienne">
    <div className="container">
      <h2>
        Création de <strong>douche à l&apos;italienne</strong> étanche
      </h2>
      <p>
        La <strong>douche à l&apos;italienne carrelée</strong> demande une
        étanchéité irréprochable : pentes vers la bonde, natte ou système
        d&apos;étanchéité sous carrelage, traitement des angles et des jonctions
        sol/mur avant la pose du carrelage.
      </p>
      <p>
        Nous réalisons la forme de pente adaptée au receveur à carreler ou au
        sol maçonné, posons une natte ou une membrane d&apos;étanchéité, puis
        collons le carrelage avec un mortier-colle adapté aux pièces humides.
        Les joints sont hydrofuges pour limiter les infiltrations et assurer
        la durabilité dans le temps.
      </p>
      <ul className="bullets">
        <li>Respect des pentes vers la bonde ou le caniveau.</li>
        <li>Membranes et bandes d&apos;étanchéité sous carrelage.</li>
        <li>Carrelage antidérapant au sol pour sécuriser la douche.</li>
      </ul>
    </div>
  </section>

  {/* BLOC 3 : Carrelage et agencement */}
  <section className="section-carrelage">
    <div className="container">
      <h2>
        Choix du <strong>carrelage de salle de bain</strong> et agencement
      </h2>
      <p>
        Nous vous conseillons sur le <strong>carrelage mural de salle de bain</strong>{' '}
        et sur le carrelage de sol : formats, textures, finition mate ou
        brillante, mosaïque pour l&apos;espace douche, frises décoratives
        pour personnaliser la pièce.
      </p>
      <p>
        L&apos;agencement de la salle de bain est étudié pour optimiser
        l&apos;espace : emplacement de la douche à l&apos;italienne, de la
        baignoire, du meuble vasque, des niches carrelées et des rangements,
        en tenant compte de vos habitudes de vie.
      </p>
      <ul className="bullets">
        <li>Carrelage grand format, mosaïque, faïence décorative.</li>
        <li>Niches carrelées intégrées dans la douche.</li>
        <li>Habillage de baignoire et plinthes assorties.</li>
      </ul>
    </div>
  </section>

  {/* BLOC 4 : Zone d'intervention */}
  <section className="section-zone">
    <div className="container">
      <h2>
        Salles de bain et douches à l&apos;italienne à Manosque et dans le 04
      </h2>
      <p>
        Procarré &amp; Fils intervient pour la rénovation de salle de bain et la
        création de douches à l&apos;italienne à Manosque, Volx, Oraison,
        Forcalquier, Sainte-Tulle et dans les communes voisines en
        Alpes-de-Haute-Provence (04).
      </p>
      <p>
        Pour découvrir des exemples de <strong>salles de bain carrelées</strong> et de{' '}
        <strong>douches à l&apos;italienne</strong> réalisées, consultez nos{' '}
        <Link to="/realisations">réalisations de chantiers</Link>.
      </p>
    </div>
  </section>

  {/* CTA FINAL */}
  <section className="section-cta">
    <div className="container">
      <h2>
        Devis pour rénovation de <strong>salle de bain</strong> ou{' '}
        <strong>douche à l&apos;italienne</strong> à Manosque
      </h2>
      <p className="cta-text">
        Vous avez un projet de rénovation de salle de bain, de remplacement
        de baignoire par une douche à l&apos;italienne ou de création de
        salle de bain dans une maison ou un appartement à Manosque ?{' '}
        <Link to="/devis">Demandez un devis gratuit salle de bain</Link> ou{' '}
        <Link to="/contact">contactez Procarré &amp; Fils</Link> pour échanger
        sur votre projet.
      </p>
    </div>
  </section>
</div>


);
}
