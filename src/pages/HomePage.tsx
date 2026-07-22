// src/pages/HomePage.tsx
import { HomeHeroSlider } from '../components/HomeHeroSlider';
import { Helmet } from 'react-helmet-async';

import { HeroSection } from './home/HeroSection';
import { TrustStrip } from './home/TrustStrip';
import { ServicesSection } from './home/ServicesSection';
import { ProcessSection } from './home/ProcessSection';
import { WhyUsSection } from './home/WhyUsSection';
import { ZoneSection } from './home/ZoneSection';
import { ReviewsSection } from './home/ReviewsSection';
import { FaqSection } from './home/FaqSection';
import { TeamSection } from './home/TeamSection';

export function HomePage() {
  return (
    <div className="home-page">
      <Helmet>
        <title>Carreleur à Manosque (04) | Procarré &amp; Fils</title>
        <meta
          name="description"
          content="Entreprise familiale de carrelage à Manosque : sols, murs, salles de bain, douches à l’italienne, terrasses et rénovation. Demandez votre devis gratuit."
        />
        <link rel="canonical" href="https://procarre.fr/" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content="Procarré & Fils" />
        <meta property="og:title" content="Carreleur à Manosque (04) | Procarré & Fils" />
        <meta
          property="og:description"
          content="Carrelage, salle de bain, douche à l’italienne et terrasse autour de Manosque. Devis gratuit."
        />
        <meta property="og:url" content="https://procarre.fr/" />
        <meta name="twitter:card" content="summary" />
      </Helmet>
      <HomeHeroSlider />
      <HeroSection />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <TeamSection />
      <ZoneSection />
      <ReviewsSection />
      <FaqSection />
    </div>
  );
}
