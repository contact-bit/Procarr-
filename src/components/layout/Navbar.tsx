import { useEffect, useId, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { FiChevronDown, FiFileText, FiX } from 'react-icons/fi';

import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/linkedin.png';

import './Navbar.css';

const MAIN_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/prestations', label: 'Prestations' },
  { to: '/realisations', label: 'Réalisations' },
  { to: '/contact', label: 'Contact' },
];

const EXPLORE_LINKS = [
  { to: '/a-propos', label: 'À propos' },
  { to: '/actualites', label: 'Actualités' },
  { to: '/avant-apres', label: 'Avant / Après' },
  { to: '/zone-intervention', label: 'Zone d’intervention' },
];

const SERVICE_LINKS = [
  { to: '/prestations/sols-murs', label: 'Sols & murs' },
  { to: '/prestations/salles-de-bain', label: 'Salle de bain' },
];

const SUB_LINKS = [...EXPLORE_LINKS, ...SERVICE_LINKS];

const SOCIAL_LINKS = [
  {
    href: 'https://www.facebook.com/procarre/',
    label: 'Facebook',
    icon: facebookIcon,
  },
  {
    href: 'https://www.instagram.com/procarre_carrelage/',
    label: 'Instagram',
    icon: instagramIcon,
  },
  {
    href: 'https://fr.linkedin.com/in/denis-dussert-683821376',
    label: 'LinkedIn',
    icon: linkedinIcon,
  },
];

type MobileSection = 'explore' | 'services' | null;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openSection, setOpenSection] = useState<MobileSection>(null);

  const location = useLocation();
  const mobileMenuId = useId();
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  const close = () => {
    setOpen(false);
    setOpenSection(null);
  };

  const toggle = () => setOpen((prev) => !prev);

  const toggleSection = (section: Exclude<MobileSection, null>) => {
    setOpenSection((prev) => (prev === section ? null : section));
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    close();
  }, [location.pathname]);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = open ? 'hidden' : '';

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        burgerRef.current?.focus();
      }
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`} role="banner">
      <div className="navbar-pattern" aria-hidden="true" />

      <div className="navbar-inner">
        {/* LOGO DESKTOP + MOBILE (même markup / mêmes classes) */}
        <Link to="/" className="brand" aria-label="Procarré & Fils - Accueil">
          <div className="brand-line">
            <span className="brand-pro">PRO</span>
            <span className="brand-carre">carré</span>
          </div>
          <span className="brand-bottom">&amp; Fils</span>
        </Link>

        <nav className="nav-links" aria-label="Navigation principale">
          {MAIN_LINKS.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={close}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-right">
          <Link to="/devis" className="cta">
            <FiFileText size={16} />
            Devis gratuit
          </Link>

          <div className="social" aria-label="Réseaux sociaux">
            {SOCIAL_LINKS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
              >
                <img src={item.icon} alt="" aria-hidden="true" />
              </a>
            ))}
          </div>

          <button
            ref={burgerRef}
            type="button"
            className={`burger ${open ? 'open' : ''}`}
            onClick={toggle}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            aria-expanded={open}
            aria-controls={mobileMenuId}
            aria-haspopup="dialog"
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav className="subnav" aria-label="Navigation secondaire">
        {SUB_LINKS.map((link) => (
          <NavLink key={link.to} to={link.to}>
            {link.label}
          </NavLink>
        ))}
      </nav>

      {open && (
        <div className="mobile-shell">
          <button
            type="button"
            className="mobile-overlay"
            aria-label="Fermer le menu"
            onClick={close}
          />

          <nav
            id={mobileMenuId}
            className="mobile"
            aria-label="Menu mobile"
            aria-modal="true"
            role="dialog"
          >
            <div className="mobile-top">
              {/* On réutilise exactement le même logo, avec une classe supplémentaire si tu veux cibler en CSS */}
              <Link
                to="/"
                className="brand mobile-brand"
                onClick={close}
                aria-label="Procarré & Fils - Accueil"
              >
                <div className="brand-line">
                  <span className="brand-pro">PRO</span>
                  <span className="brand-carre">carré</span>
                </div>
                <span className="brand-bottom">&amp; Fils</span>
              </Link>

              <button
                type="button"
                className="mobile-close"
                onClick={() => {
                  close();
                  burgerRef.current?.focus();
                }}
                aria-label="Fermer le menu"
              >
                <FiX size={22} />
              </button>
            </div>

            <p className="mobile-intro">
              Artisanat soigné, finitions haut de gamme et accompagnement sur mesure.
            </p>

            <div className="mobile-actions">
              <Link to="/devis" onClick={close} className="cta mobile-cta primary">
                <FiFileText size={16} />
                Demander un devis
              </Link>

              <Link to="/contact" onClick={close} className="mobile-secondary-cta">
                Nous contacter
              </Link>
            </div>

            <div className="mobile-main-links">
              {MAIN_LINKS.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={close}
                  className="mobile-main-link"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>

            <div className="mobile-accordion-group">
              <div className="mobile-accordion">
                <button
                  type="button"
                  className={`mobile-accordion-trigger ${
                    openSection === 'explore' ? 'is-open' : ''
                  }`}
                  onClick={() => toggleSection('explore')}
                  aria-expanded={openSection === 'explore'}
                >
                  <span>Explorer</span>
                  <FiChevronDown size={18} />
                </button>

                {openSection === 'explore' && (
                  <div className="mobile-accordion-panel">
                    {EXPLORE_LINKS.map((link) => (
                      <NavLink key={link.to} to={link.to} onClick={close}>
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>

              <div className="mobile-accordion">
                <button
                  type="button"
                  className={`mobile-accordion-trigger ${
                    openSection === 'services' ? 'is-open' : ''
                  }`}
                  onClick={() => toggleSection('services')}
                  aria-expanded={openSection === 'services'}
                >
                  <span>Prestations</span>
                  <FiChevronDown size={18} />
                </button>

                {openSection === 'services' && (
                  <div className="mobile-accordion-panel">
                    {SERVICE_LINKS.map((link) => (
                      <NavLink key={link.to} to={link.to} onClick={close}>
                        {link.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="mobile-bottom">
              <span className="mobile-title">Réseaux sociaux</span>

              <div className="mobile-social" aria-label="Réseaux sociaux">
                {SOCIAL_LINKS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={item.label}
                  >
                    <img src={item.icon} alt="" aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
