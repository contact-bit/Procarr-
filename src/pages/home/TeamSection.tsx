// src/pages/home/TeamSection.tsx
import './TeamSection.css';
import equipe from '../../assets/denisdussertsebastien.png';
import facebookIcon from '../../assets/facebook.png';
import instagramIcon from '../../assets/instagram.png';
import linkedinIcon from '../../assets/linkedin.png';

export function TeamSection() {
  return (
    <section className="team-section">
      <div className="team-header section-header section-header-center">
        <span className="section-kicker">L&apos;équipe</span>
        <h2 className="section-title">
          Procarré &amp; Fils, carreleurs à Manosque en famille
        </h2>
        <p className="section-subtitle">
          Denis Dussert et ses fils Sébastien et Laurent, artisans carreleurs à Manosque,
          interviennent ensemble sur vos chantiers de carrelage et de rénovation
          en Alpes-de-Haute-Provence.
        </p>
      </div>

      <div className="team-layout">
        <div className="team-photo-wrapper">
          <img
            src={equipe}
            alt="Denis et Sébastien Dussert, artisans carreleurs Procarré & Fils à Manosque"
            className="team-photo"
          />
        </div>

        <div className="team-list">
          {/* Denis */}
          <div className="team-person">
            <h3>Denis Dussert</h3>
            <p>
              Artisan carreleur, fondateur de Procarré &amp; Fils, Denis pilote les chantiers
              de carrelage et développe aussi le projet&nbsp;
              <a
                href="https://www.luminescence-carrelage.fr/"
                target="_blank"
                rel="noopener noreferrer"
                className="team-inline-link"
              >
                Luminescence Carrelage
              </a>
              , autour de solutions lumineuses pour le carrelage.
            </p>
            <div className="team-socials">
              <a
                href="https://www.linkedin.com/in/denis-dussert" // remplace par le vrai lien
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Denis Dussert"
              >
                <img src={linkedinIcon} alt="LinkedIn Denis Dussert" />
              </a>
            </div>
          </div>

          {/* Sébastien */}
          <div className="team-person">
            <h3>Sébastien Dussert</h3>
            <p>
              Artisan carreleur, Sébastien intervient sur les chantiers intérieurs et extérieurs
              et prend en charge une partie de l&apos;administratif et des devis clients.
            </p>
            <div className="team-socials">
              <a
                href="https://www.linkedin.com/in/sebastien-dussert" // remplace par le vrai lien
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Sébastien Dussert"
              >
                <img src={linkedinIcon} alt="LinkedIn Sébastien Dussert" />
              </a>
            </div>
          </div>

          {/* Laurent */}
          <div className="team-person">
            <h3>Laurent Dussert</h3>
            <p>
              Artisan carreleur, Laurent travaille sur les mêmes chantiers de sols, murs et terrasses
              et s&apos;occupe en plus de l&apos;animation des réseaux sociaux de l&apos;entreprise.
            </p>
            <div className="team-socials">
              <a
                href="https://www.linkedin.com/in/laurent-dussert" // remplace par le vrai lien
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Profil LinkedIn de Laurent Dussert"
              >
                <img src={linkedinIcon} alt="LinkedIn Laurent Dussert" />
              </a>
              <a
                href="https://www.facebook.com/ton-facebook" // remplace par le vrai lien
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Page Facebook Procarré & Fils"
              >
                <img src={facebookIcon} alt="Facebook Procarré & Fils" />
              </a>
              <a
                href="https://www.instagram.com/ton-instagram" // remplace par le vrai lien
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Compte Instagram Procarré & Fils"
              >
                <img src={instagramIcon} alt="Instagram Procarré & Fils" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
