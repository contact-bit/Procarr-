import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { useNavigate } from 'react-router-dom';
import { useRef, useEffect } from 'react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

import './HomeHeroSlider.css';

// ===== IMAGES HERO =====
import intro1 from '../assets/imageschantierrealisations/chantier villeneuve piscine bali/IMG_6359.jpg';
import intro3 from '../assets/imageschantierrealisations/chantier villeneuve piscine bali/IMG_6361.jpg';
import intro2 from '../assets/imageschantierrealisations/chantier esparons beton ciré/IMG_8078.jpg';
import intro4 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_5236.jpg';
import intro5 from '../assets/imageschantierrealisations/chantier sdb benjamin/IMG_5323(1).jpg';
import intro6 from '../assets/imageschantierrealisations/chantier Valensole sdb grand format/IMG_5607(1).jpg';

// ===== NOUVELLES =====
import img7259 from '../assets/imageschantierrealisations/chantier greoux les termes vestiaires/IMG_7259.jpg';
import img6970 from '../assets/imageschantierrealisations/chantier Mane tomette bois/IMG_6970.jpg';
import img7996 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_7996(1).jpg';
import img9899 from '../assets/imageschantierrealisations/chantier manosque escalier/IMG_9899(1).jpg';
import img4807 from '../assets/imageschantierrealisations/chantier manosque hôpital de manosque/IMG_4807(1).jpg';
import img8869 from '../assets/imageschantierrealisations/chantier manosque pose immitation bois/IMG_8869(1).jpg';
import img4501 from '../assets/imageschantierrealisations/chantier Pierrevert reno sdb/IMG_4501.jpg';
import img7996b from '../assets/imageschantierrealisations/chantier Pierrevert tour de piscine/IMG_7996.jpg';
import img6201 from '../assets/imageschantierrealisations/chantier Reillanne beton piscine/IMG_6201(3).jpg';
import img4025 from '../assets/imageschantierrealisations/chantier Reillanne calade/IMG_4025(1).jpg';
import img3134 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_3134(1).jpg';
import img4552 from '../assets/imageschantierrealisations/chantier Reillanne travertin multiformat/IMG_4552.jpg';
import img5851 from '../assets/imageschantierrealisations/chantier villeneuve tour de piscine/IMG_5851.jpg';

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

  const swiperRef = useRef<any>(null);
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
        <button className="home-hero__cta" onClick={goToQuote}>
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
          <button className="home-hero__cta" onClick={goToQuote}>
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
                  loading={index < 2 ? 'eager' : 'lazy'}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
