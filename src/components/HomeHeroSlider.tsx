import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import type { Swiper as SwiperInstance } from 'swiper';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './HomeHeroSlider.css';

// ===== IMAGES HERO =====
import intro1 from '../assets/optimized/july-2026/piscine-villeneuve-6359.webp';
import intro3 from '../assets/optimized/july-2026/piscine-villeneuve-6361.webp';
import intro2 from '../assets/optimized/july-2026/piscine-esparons-8078.webp';
import intro4 from '../assets/optimized/july-2026/piscine-la-palud-5236.webp';
import intro5 from '../assets/optimized/july-2026/salle-de-bain-5323.webp';
import intro6 from '../assets/optimized/july-2026/salle-de-bain-valensole-5607.webp';

// ===== RÉALISATIONS OPTIMISÉES =====
import img7259 from '../assets/optimized/realisations/img7259.webp';
import img6970 from '../assets/optimized/realisations/img6970.webp';
import img7996 from '../assets/optimized/realisations/img7996.webp';
import img9899 from '../assets/optimized/realisations/img9899.webp';
import img4807 from '../assets/optimized/realisations/img4807.webp';
import img8869 from '../assets/optimized/realisations/img8869.webp';
import img4501 from '../assets/optimized/realisations/img4501.webp';
import img7996b from '../assets/optimized/realisations/img7996b.webp';
import img6201 from '../assets/optimized/realisations/img6201.webp';
import img4025 from '../assets/optimized/realisations/img4025.webp';
import img3134 from '../assets/optimized/realisations/img3134.webp';
import img4552 from '../assets/optimized/realisations/img4552.webp';
import img5851 from '../assets/optimized/realisations/img5851.webp';

// ===== SLIDES =====
const slides = [
  intro1, intro2, intro3, intro4, intro5, intro6,
  img7259, img6970, img7996, img9899, img4807,
  img8869, img4501, img7996b, img6201, img4025,
  img3134, img4552, img5851,
];

export function HomeHeroSlider() {
  const navigate = useNavigate();
  const goToQuote = () => navigate('/devis');

  const swiperRef = useRef<SwiperInstance | null>(null);
  const cycle = useRef(0);

  // 🔥 AUTOPLAY CINÉMA + BURST RAPIDE
  useEffect(() => {
    const interval = setInterval(() => {
      const swiper = swiperRef.current;
      if (!swiper) return;

      cycle.current++;

      // 👉 tous les 6 cycles → burst rapide (3 slides)
      if (cycle.current % 6 === 0) {
        swiper.params.speed = 500;

        swiper.slideNext();
        setTimeout(() => swiper.slideNext(), 220);
        setTimeout(() => swiper.slideNext(), 440);
      } else {
        // 👉 transition lente propre
        swiper.params.speed = 1300;
        swiper.slideNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="home-hero">
      {/* CTA MOBILE */}
      <div className="home-hero__cta-mobile">
        <button
          className="home-hero__cta"
          onClick={goToQuote}
          data-analytics-event="cta_click"
          data-analytics-label="demander_un_devis_gratuit"
          data-analytics-location="home_slider_mobile"
          data-analytics-destination="/devis"
        >
          Demander un devis gratuit
        </button>
      </div>

      <div className="home-hero__slider">
        {/* OVERLAY CINEMA */}
        <div className="home-hero__shade" />

        {/* NAVIGATION (fixée toujours visible) */}
        <div className="hero-nav hero-nav-prev">
          <span className="arrow-line" />
        </div>

        <div className="hero-nav hero-nav-next">
          <span className="arrow-line" />
        </div>

        {/* BRAND (logo tampon, moitié plus petit via CSS .home-hero__brand) */}
<div className="home-hero__brand">
  <div className="footer-logo-badge-row">
    <div className="brand-tope">
      <span className="brand-proe">PRO</span>
      <span className="brand-carree">carré</span>
    </div>
    <div className="brand-bottome">&amp; Fils</div>
  </div>
</div>

        {/* CTA DESKTOP */}
        <div className="home-hero__actions">
          <button
            className="home-hero__cta"
            onClick={goToQuote}
            data-analytics-event="cta_click"
            data-analytics-label="demander_un_devis_gratuit"
            data-analytics-location="home_slider_desktop"
            data-analytics-destination="/devis"
          >
            Demander un devis gratuit
          </button>
        </div>

        <Swiper
          modules={[Autoplay, Pagination, Navigation, EffectFade]}
          className="home-hero__swiper"
          loop
          effect="fade"
          speed={1200}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          navigation={{
            prevEl: '.hero-nav-prev',
            nextEl: '.hero-nav-next',
          }}
          pagination={{
            clickable: true,
          }}
        >
          {slides.map((src, index) => (
            <SwiperSlide key={index} className="home-hero__slide">
              <div className="home-hero__image-wrapper">
                <img
                  src={src}
                  alt="Réalisation Procarré & Fils"
                  className="home-hero__image"
                  loading={index === 0 ? 'eager' : 'lazy'}
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                  width={1707}
                  height={1280}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
