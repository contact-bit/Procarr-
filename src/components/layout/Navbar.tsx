// src/components/layout/Navbar.tsx
import { useState } from 'react';
import type { CSSProperties } from 'react';
import { Link, NavLink } from 'react-router-dom';

import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/linkedin.png';
import petitLogo from '../../assets/logo.png';
import backnav from '../../assets/backnav.png';

import './Navbar.css';

export function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  const linkStyle: CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <header className="navbar-root" role="banner">
      {/* Lien d’évitement */}
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>

      {/* Image de fond discrète */}
      <div
        className="navbar-bg-image"
        style={{ backgroundImage: `url(${backnav})` }}
        aria-hidden="true"
      />

      {/* Barre principale blur */}
      <div className="navbar-inner">
        {/* Bloc gauche : logo + baseline */}
        <div className="navbar-left">
          {/* Logo TRIPLE : petit logo + Procarré & Fils + tomette */}
          <div className="navbar-logo-triple">
            {/* 1. Petit logo + texte PROCARRÉ & Fils dans le même lien */}
            <Link
              to="/"
              className="brand-logo"
              aria-label="Procarré & Fils - Carreleur à Manosque"
              title="Procarré & Fils - Carreleur Manosque"
            >
              <span className="brand-petit-logo">
                <img src={petitLogo} alt="Logo Procarré principal" />
              </span>
              <span className="brand-pro">PRO</span>
              <span className="brand-carre">CARRÉ</span>
              <span className="brand-separator">|</span>
              <span className="brand-fils">&amp; Fils</span>
            </Link>

            {/* 2. Tomette Carreleur Blanc à droite (optionnel) */}
            <Link
              to="/carreleur-blanc"
              className="brand-logo-tomete"
              aria-label="Carreleur Blanc - Spécialiste tomettes"
              title="Découvrez nos carrelages blancs et tomettes"
            >
              {/* <img src={tometteBlanche} alt="Carreleur Blanc" /> */}
            </Link>
          </div>

          {/* Baseline édito */}
          <p className="navbar-baseline">
            Procarré &amp; Fils, artisans carreleurs spécialistes en rénovation à Manosque
            et en Alpes-de-Haute-Provence (04).
          </p>
        </div>

        {/* Nav principale desktop */}
        <nav
          className="navbar-desktop"
          aria-label="Navigation principale Procarré & Fils"
        >
          <NavLink to="/" style={linkStyle}>
            Accueil
          </NavLink>
          <NavLink to="/prestations" style={linkStyle}>
            Prestations
          </NavLink>
          <NavLink to="/realisations" style={linkStyle}>
            Réalisations
          </NavLink>
          <NavLink to="/contact" style={linkStyle}>
            Contact
          </NavLink>
          <NavLink to="/devis" style={linkStyle} className="navbar-cta-link">
            Demander un devis
          </NavLink>

          <div className="navbar-social">
            <a
              href="https://www.facebook.com/procarre/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Procarré & Fils"
            >
              <img src={facebookIcon} alt="Facebook Procarré & Fils" />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Procarré & Fils"
            >
              <img src={instagramIcon} alt="Instagram Procarré & Fils" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Procarré & Fils"
            >
              <img src={linkedinIcon} alt="LinkedIn Procarré & Fils" />
            </a>
          </div>
        </nav>

        {/* Burger mobile */}
        <button
          type="button"
          onClick={toggle}
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
          aria-expanded={open}
          className="navbar-burger"
        >
          <span className={open ? 'bar bar-1 open' : 'bar bar-1'} />
          <span className={open ? 'bar bar-2 open' : 'bar bar-2'} />
          <span className={open ? 'bar bar-3 open' : 'bar bar-3'} />
        </button>
      </div>

      {/* Sous-nav SEO */}
      <nav
        className="navbar-sub"
        aria-label="Navigation secondaire Procarré & Fils"
      >
        <div className="navbar-sub-inner">
          <NavLink to="/a-propos" style={linkStyle}>
            À propos de l'entreprise
          </NavLink>
                    <NavLink to="/actualites" onClick={close} style={linkStyle}>
            Actualités
          </NavLink>
          <NavLink to="/avant-apres" style={linkStyle}>
            Avant / Après chantiers
          </NavLink>
          <NavLink to="/zone-intervention" style={linkStyle}>
            Zone d'intervention Manosque
          </NavLink>
          <NavLink to="/prestations/sols-murs" style={linkStyle}>
            Carrelage de sols &amp; murs
          </NavLink>
          <NavLink to="/prestations/salles-de-bain" style={linkStyle}>
            Salles de bain &amp; douches à l'italienne
          </NavLink>
          <NavLink to="/prestations/preparation-supports" style={linkStyle}>
            Préparation supports
          </NavLink>
        </div>
      </nav>

      {/* Menu mobile */}
      {open && (
        <nav
          className="navbar-mobile"
          aria-label="Navigation mobile Procarré & Fils"
        >
          <NavLink to="/" onClick={close} style={linkStyle}>
            Accueil
          </NavLink>
          <NavLink to="/a-propos" onClick={close} style={linkStyle}>
            À propos
          </NavLink>
          <NavLink to="/prestations" onClick={close} style={linkStyle}>
            Prestations
          </NavLink>
          <NavLink
            to="/prestations/sols-murs"
            onClick={close}
            style={linkStyle}
          >
            Carrelage sols &amp; murs
          </NavLink>
          <NavLink
            to="/prestations/salles-de-bain"
            onClick={close}
            style={linkStyle}
          >
            Salles de bain &amp; douches
          </NavLink>
          <NavLink
            to="/prestations/preparation-supports"
            onClick={close}
            style={linkStyle}
          >
            Préparation supports &amp; petite maçonnerie
          </NavLink>
          <NavLink to="/realisations" onClick={close} style={linkStyle}>
            Réalisations
          </NavLink>
          <NavLink to="/avant-apres" onClick={close} style={linkStyle}>
            Avant / Après
          </NavLink>
          <NavLink to="/zone-intervention" onClick={close} style={linkStyle}>
            Zone d'intervention
          </NavLink>

          <NavLink to="/contact" onClick={close} style={linkStyle}>
            Contact
          </NavLink>
          <NavLink
            to="/devis"
            onClick={close}
            style={linkStyle}
            className="navbar-cta-link"
          >
            Demander un devis
          </NavLink>

          <div className="navbar-mobile-social">
            <a href="tel:+33600000000" className="navbar-mobile-call">
              Appeler Procarré &amp; Fils
            </a>
            <div className="navbar-mobile-social-icons">
              <a
                href="https://www.facebook.com/procarre/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook Procarré & Fils"
              >
                <img src={facebookIcon} alt="Facebook Procarré & Fils" />
              </a>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Procarré & Fils"
              >
                <img src={instagramIcon} alt="Instagram Procarré & Fils" />
              </a>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Procarré & Fils"
              >
                <img src={linkedinIcon} alt="LinkedIn Procarré & Fils" />
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
