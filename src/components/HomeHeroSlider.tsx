// HomeHeroSlider.tsx
import type React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Autoplay, Pagination } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';

import intro1 from '../assets/intro/intro1.png';
import intro2 from '../assets/intro/intro2.png';
import intro3 from '../assets/intro/intro3.png';
import intro4 from '../assets/intro/11-1.webp';
import intro5 from '../assets/intro/11-2.webp';
import intro6 from '../assets/intro/11-3.webp';

const slides = [intro1, intro2, intro3, intro4, intro5, intro6];

export function HomeHeroSlider() {
  const navigate = useNavigate();

  return (
    <section style={{ marginTop: '0.75rem', marginBottom: '1.5rem' }}>
      <div className="hero-slider-wrapper">
        {/* Overlay du logo dans le hero */}
        <div className="hero-logo-overlay">
          <span className="brand-pro">PRO</span>
          <span className="brand-carre">CARRÉ</span>
          <span className="brand-separator">|</span>
          <span className="brand-fils">&amp; Fils</span>
        </div>

        {/* GROS BOUTON DEVIS AU CENTRE DU SLIDER */}
        <div className="hero-slider-cta-overlay">
          <button
            type="button"
            className="btn btn-primary hero-slider-cta"
            onClick={() => navigate('/devis')}
          >
            Demander un devis gratuit
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          loop
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          speed={700}
          style={{
            width: '100%',
            '--swiper-pagination-color': '#e63932',
            '--swiper-pagination-bullet-inactive-color': '#4b3a3f',
            '--swiper-pagination-bullet-inactive-opacity': '1',
            '--swiper-pagination-bullet-size': '6px',
            '--swiper-pagination-bullet-horizontal-gap': '6px',
          } as React.CSSProperties}
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index} style={{ width: '100%' }}>
              <img
                src={src}
                alt={
                  index === 0
                    ? 'Réalisation de carrelage Procarré & Fils à Manosque'
                    : ''
                }
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
