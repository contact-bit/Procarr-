// src/pages/HomePage.tsx
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

export function HomePage() {
  return (
    <div className="home-page">
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
