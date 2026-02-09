// src/pages/home/FaqSection.tsx
import './FaqSection.css';
import { useState } from 'react';
import { Link } from 'react-router-dom';

type FaqItem = {
  question: string;
  answer: React.ReactNode;
};

const faqs: FaqItem[] = [
  {
    question: 'Dans quelles zones intervenez-vous ?',
    answer: (
      <>
        Procarré &amp; Fils intervient principalement à Manosque et dans les communes
        environnantes en Alpes-de-Haute-Provence. Pour vérifier si nous pouvons intervenir
        sur votre projet, vous pouvez nous envoyer les informations de votre chantier via
        la page&nbsp;
        <Link to="/contact" className="faq-inline-link">
          contact
        </Link>
        &nbsp;ou décrire votre besoin dans le formulaire de devis.
      </>
    ),
  },
  {
    question: 'Quels types de chantiers réalisez-vous ?',
    answer: (
      <>
        Nous réalisons la pose de carrelage pour les&nbsp;
        <Link to="/prestations/sols-interieurs" className="faq-inline-link">
          sols intérieurs
        </Link>
        , les&nbsp;
        <Link to="/prestations/salles-de-bain" className="faq-inline-link">
          salles de bain
        </Link>
        , les&nbsp;
        <Link to="/prestations/terrasses" className="faq-inline-link">
          terrasses extérieures
        </Link>
        &nbsp;et des&nbsp;
        <Link to="/realisations" className="faq-inline-link">
          rénovations complètes de pièces
        </Link>
        . Nous pouvons également étudier des projets sur mesure en carrelage décoratif.
      </>
    ),
  },
  {
    question: 'Proposez-vous des devis gratuits ?',
    answer: (
      <>
        Oui, les devis sont gratuits et sans engagement. Vous pouvez faire une première
        demande directement depuis la page&nbsp;
        <Link to="/contact" className="faq-inline-link">
          contact
        </Link>
        &nbsp;en nous précisant le type de pièce, la surface et, si possible, une idée
        du carrelage souhaité.
      </>
    ),
  },
  {
    question: 'Quels sont vos délais d’intervention ?',
    answer: (
      <>
        Les délais dépendent de la période et de la taille du chantier. Pour avoir une
        estimation réaliste, le mieux est de nous contacter via la page&nbsp;
        <Link to="/contact" className="faq-inline-link">
          contact
        </Link>
        &nbsp;et de nous décrire votre projet. Vous pouvez aussi consulter nos&nbsp;
        <Link to="/realisations" className="faq-inline-link">
          réalisations
        </Link>
        &nbsp;pour voir le type de chantiers que nous gérons.
      </>
    ),
  },
  {
    question: 'Pouvez-vous rénover une salle de bain complète ?',
    answer: (
      <>
        Oui, nous réalisons régulièrement des rénovations complètes de salles de bain, du
        retrait de l&apos;ancien carrelage à la pose du nouveau revêtement. Quelques exemples
        sont visibles sur la page&nbsp;
        <Link to="/realisations/salles-de-bain" className="faq-inline-link">
          réalisations de salles de bain
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Proposez-vous des projets de carrelage lumineux ?',
    answer: (
      <>
        Oui, Procarré &amp; Fils travaille avec le projet&nbsp;
        <a
          href="https://www.luminescence-carrelage.fr/"
          target="_blank"
          rel="noopener noreferrer"
          className="faq-inline-link"
        >
          Luminescence Carrelage
        </a>
        &nbsp;pour intégrer des solutions lumineuses dans le carrelage. Mentionnez-le dans
        votre demande sur la page&nbsp;
        <Link to="/contact" className="faq-inline-link">
          contact
        </Link>
        .
      </>
    ),
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="faq-section" id="faq">
      <div className="faq-shell">
        <div className="faq-intro">
          <span className="section-kicker">FAQ</span>
          <h2 className="section-title">Questions fréquentes sur Procarré &amp; Fils</h2>
          <p className="section-subtitle">
            Quelques réponses pour mieux comprendre nos interventions en carrelage à Manosque
            et en Alpes-de-Haute-Provence.
          </p>
        </div>

        <div className="faq-list" aria-label="Questions fréquentes">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div className={`faq-item ${isOpen ? 'faq-item-open' : ''}`} key={index}>
                <button
                  type="button"
                  className="faq-trigger"
                  onClick={() => toggle(index)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                >
                  <div className="faq-trigger-text">
                    <span className="faq-question">{item.question}</span>
                    <span className="faq-meta">Carrelage &amp; rénovation</span>
                  </div>
                  <span
                    className={`faq-icon ${isOpen ? 'faq-icon-open' : ''}`}
                    aria-hidden="true"
                  />
                </button>
                <div
                  id={`faq-panel-${index}`}
                  className="faq-panel"
                  role="region"
                  aria-hidden={!isOpen}
                >
                  <p className="faq-answer">{item.answer}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
