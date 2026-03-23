import "./AvantApresPage.css";
import { BeforeAfterSlider } from "../components/BeforeAfterSlider";

// Projet 1
import projet1Before from "../assets/imagesmodulavantapres/1/12.jpg";
import projet1After from "../assets/imagesmodulavantapres/1/11.jpg";

// Projet 2
import projet2Before from "../assets/imagesmodulavantapres/2/IMG_4732(1).jpg";
import projet2After from "../assets/imagesmodulavantapres/2/IMG_4767.jpg";

// Projet 3
import projet3Before from "../assets/imagesmodulavantapres/3/IMG_4856(1).jpg";
import projet3After from "../assets/imagesmodulavantapres/3/IMG_5323(1).jpg";

// Projet 4
import projet4Before from "../assets/imagesmodulavantapres/4/IMG_5015.jpg";
import projet4After from "../assets/imagesmodulavantapres/4/IMG_6235(2).jpg";

// Projet 5
import projet5Before from "../assets/imagesmodulavantapres/5/IMG_6230.jpg";
import projet5After from "../assets/imagesmodulavantapres/5/IMG_6468.jpg";

// Projet 6
import projet6Before from "../assets/imagesmodulavantapres/6/IMG_6932(2).jpg";
import projet6After from "../assets/imagesmodulavantapres/6/IMG_6970.jpg";

// Projet 7
import projet7Before from "../assets/imagesmodulavantapres/7/IMG_7524(1).jpg";
import projet7After from "../assets/imagesmodulavantapres/7/IMG_7811.jpg";

// Projet 8
import projet8Before from "../assets/imagesmodulavantapres/8/IMG_7834(1).jpg";
import projet8After from "../assets/imagesmodulavantapres/8/IMG_8061(1).jpg";

// Projet 9
import projet9Before from "../assets/imagesmodulavantapres/9/IMG_7839.jpg";
import projet9After from "../assets/imagesmodulavantapres/9/IMG_8070(1).jpg";

// Projet 10
import projet10Before from "../assets/imagesmodulavantapres/10/IMG_8560(1).jpg";
import projet10After from "../assets/imagesmodulavantapres/10/IMG_8629(1).jpg";

export function AvantApresPage() {
  const projets = [
    

    {
      title: "Création douche à l’italienne",
      text: "Aménagement complet avec pose d’un carrelage effet marbre et finitions soignées.",
      beforeSrc: projet3Before,
      afterSrc: projet3After,
      alt: "Avant après création douche à l’italienne",
    },
    {
      title: "Aménagement plage de piscine",
      text: "Préparation du support et pose d’un carrelage extérieur autour de la piscine.",
      beforeSrc: projet4Before,
      afterSrc: projet4After,
      alt: "Avant après aménagement plage de piscine",
    },
    {
      title: "Pose de carrelage intérieur",
      text: "Préparation du support et pose d’un carrelage pour un rendu chaleureux et durable.",
      beforeSrc: projet5Before,
      afterSrc: projet5After,
      alt: "Avant après pose de carrelage intérieur",
    },
    {
      title: "Rénovation de sol intérieur",
      text: "Remplacement du revêtement avec pose de carrelage et finition décorative hexagonale.",
      beforeSrc: projet6Before,
      afterSrc: projet6After,
      alt: "Avant après rénovation de sol intérieur",
    },
    {
      title: "Rénovation salle de bain",
      text: "Reprise complète avec pose de carrelage et installation d’une baignoire moderne.",
      beforeSrc: projet7Before,
      afterSrc: projet7After,
      alt: "Avant après rénovation salle de bain",
    },
    {
      title: "Création terrasse extérieure",
      text: "Préparation de la dalle et pose d’un carrelage pour un espace extérieur durable.",
      beforeSrc: projet8Before,
      afterSrc: projet8After,
      alt: "Avant après création terrasse extérieure",
    },
    {
      title: "Terrasse extérieure carrelée",
      text: "Réalisation d’une terrasse avec pose d’un carrelage grand format et finitions soignées.",
      beforeSrc: projet9Before,
      afterSrc: projet9After,
      alt: "Avant après terrasse extérieure carrelée",
    },
    {
      title: "Création douche à l’italienne",
      text: "Mise en œuvre complète avec pose de carrelage mural et sol hexagonal.",
      beforeSrc: projet10Before,
      afterSrc: projet10After,
      alt: "Avant après création douche à l’italienne",
    },
        {
      title: "Escalier extérieur",
      text: "Création et habillage d’un escalier avec finition carrelée.",
      beforeSrc: projet2Before,
      afterSrc: projet2After,
      alt: "Avant après escalier extérieur",
    },
    {
      title: "Aménagement entrée extérieure",
      text: "Préparation du terrain et pose d’un carrelage pour une entrée propre et durable.",
      beforeSrc: projet1Before,
      afterSrc: projet1After,
      alt: "Avant après aménagement entrée extérieure",
    },
  ];

  return (
    <div className="avant-apres">
      <section className="avant-apres__hero">
        <h1 className="avant-apres__title">
          Avant / Après
          <span className="avant-apres__subtitle">
            Transformations réelles de nos chantiers
          </span>
        </h1>

        <p className="avant-apres__text">
          Faites glisser le curseur pour découvrir la transformation de vos
          espaces.
        </p>
      </section>

      <section className="avant-apres__grid">
        {projets.map((projet, index) => (
          <article className="avant-apres__card" key={index}>
            <div style={{ marginBottom: "1rem" }}>
              <h2 className="avant-apres__card-title">{projet.title}</h2>
              <p className="avant-apres__card-text">{projet.text}</p>
            </div>

            <BeforeAfterSlider
              beforeSrc={projet.beforeSrc}
              afterSrc={projet.afterSrc}
              alt={projet.alt}
              initialPosition={60}
            />
          </article>
        ))}
      </section>
    </div>
  );
}