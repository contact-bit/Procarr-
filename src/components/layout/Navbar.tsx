// src/components/layout/Navbar.tsx
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/linkedin.png';
import petitLogo from '../../assets/logo.png'; // ← NOUVEAU : petit logo devant
import backnav from '../../assets/backnav.png';
import './Navbar.css';

export function Navbar() {
  const [open, setOpen] = useState(false);

  const toggle = () => setOpen(o => !o);
  const close = () => setOpen(false);

  const linkStyle: React.CSSProperties = {
    textDecoration: 'none',
    color: 'inherit',
  };

  return (
    <header className="navbar-root" role="banner">
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
        {/* Logo TRIPLE : petit logo.png + tomette + PROCARRÉ */}
        <div className="navbar-left">
          <div className="navbar-logo-triple">
            {/* 1. PETIT LOGO.PNG DEVANT ← NOUVEAU */}
            <Link 
              to="/" 
              className="brand-petit-logo" 
              aria-label="Accueil Procarré & Fils"
              title="Procarré & Fils - Carreleur Manosque"
            >
              <img src={petitLogo} alt="Logo Procarré principal" />
            </Link>
            
            {/* 2. TOMETTE CARRELEUR BLANC */}
            <Link
              to="/carreleur-blanc"
              className="brand-logo-tomete"
              aria-label="Carreleur Blanc - Spécialiste tomettes"
              title="Découvrez nos carrelages blancs et tomettes"
            >
            </Link>
            
            {/* 3. LOGO TEXTE ORIGINAL PROCARRÉ */}
            <Link
              to="/"
              className="brand-logo"
              aria-label="Procarré & Fils - Carreleur à Manosque"
            >
              <span className="brand-pro">PRO</span>
              <span className="brand-carre">CARRÉ</span>
              <span className="brand-separator">|</span>
              <span className="brand-fils">&amp; Fils</span>
            </Link>
          </div>
          
          <p className="navbar-baseline">
            Procarré & Fils, carreleurs spécialistes en rénovation à Manosque et en Alpes-de-Haute-Provence (04).
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
          <NavLink to="/actualites" style={linkStyle}>
            Actualités
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

      {/* Sous-nav SEO + lien Carreleur Blanc */}
      <nav
        className="navbar-sub"
        aria-label="Navigation secondaire Procarré & Fils"
      >
        <div className="navbar-sub-inner">
          <NavLink to="/a-propos" style={linkStyle}>
            À propos de l'entreprise
          </NavLink>
          <NavLink to="/avant-apres" style={linkStyle}>
            Avant / Après chantiers
          </NavLink>
          <NavLink to="/zone-intervention" style={linkStyle}>
            Zone d'intervention Manosque
          </NavLink>
          <NavLink to="/prestations/sols-murs" style={linkStyle}>
            Carrelage de sols & murs
          </NavLink>
          <NavLink to="/prestations/salles-de-bain" style={linkStyle}>
            Salles de bain & douches à l'italienne
          </NavLink>

        </div>
      </nav>

      {/* Menu mobile + lien Carreleur Blanc */}
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
            Carrelage sols & murs
          </NavLink>
          <NavLink
            to="/prestations/salles-de-bain"
            onClick={close}
            style={linkStyle}
          >
            Salles de bain & douches
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
          <NavLink to="/actualites" onClick={close} style={linkStyle}>
            Actualités
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
              Appeler Procarré & Fils
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
