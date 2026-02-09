// src/pages/HomePage.tsx
import { useState } from 'react';
import { DevisForm } from '../components/DevisForm';
import { HomeHeroSlider } from '../components/HomeHeroSlider';

import { HeroSection } from './home/HeroSection';
import { TrustStrip } from './home/TrustStrip';
import { ServicesSection } from './home/ServicesSection';
import { ProcessSection } from './home/ProcessSection';
import { WhyUsSection } from './home/WhyUsSection';
import { ZoneSection } from './home/ZoneSection';
import { ReviewsSection } from './home/ReviewsSection';
import { FaqSection } from './home/FaqSection';
import { TeamSection } from './home/TeamSection';

// si tu as déplacé tous les styles par composant, tu peux supprimer cette ligne
// import '../styles/homepage.css';

export function HomePage() {
  const [openDevis, setOpenDevis] = useState(false);

  const openDevisForm = () => setOpenDevis(true);
  const closeDevisForm = () => setOpenDevis(false);

  return (
    <div className="home-page">
      <HomeHeroSlider />

      <HeroSection onOpenDevis={openDevisForm} />
      <TrustStrip />
      <ServicesSection />
      <ProcessSection />
      <WhyUsSection />
      <TeamSection />
      <ZoneSection onOpenDevis={openDevisForm} />
      <ReviewsSection />
      <FaqSection />

      {openDevis && <DevisForm onClose={closeDevisForm} />}
    </div>
  );
}
