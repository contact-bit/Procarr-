import { useCallback, useMemo, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Lightbox from 'yet-another-react-lightbox';
import Zoom from 'yet-another-react-lightbox/plugins/zoom';
import 'yet-another-react-lightbox/styles.css';
import './RealisationsPage.css';

import img7568 from '../assets/imageschantierrealisations/chantier esparons beton ciré/IMG_7568.jpg';
import img7569 from '../assets/imageschantierrealisations/chantier esparons beton ciré/IMG_7569.jpg';
import img8071 from '../assets/imageschantierrealisations/chantier esparons beton ciré/IMG_8071.jpg';
import img8073 from '../assets/imageschantierrealisations/chantier esparons beton ciré/IMG_8073.jpg';
import img8074 from '../assets/imageschantierrealisations/chantier esparons beton ciré/IMG_8074.jpg';
import img8076 from '../assets/imageschantierrealisations/chantier esparons beton ciré/IMG_8076.jpg';
import img8077 from '../assets/imageschantierrealisations/chantier esparons beton ciré/IMG_8077.jpg';
import img8078 from '../assets/imageschantierrealisations/chantier esparons beton ciré/IMG_8078.jpg';
import img7326 from '../assets/imageschantierrealisations/chantier Forcalquier dalle sur plot/IMG_7326(1).jpg';
import img7554 from '../assets/imageschantierrealisations/chantier Forcalquier dalle sur plot/IMG_7554(1).jpg';
import img7570 from '../assets/imageschantierrealisations/chantier Forcalquier dalle sur plot/IMG_7570(1).jpg';
import img7258 from '../assets/imageschantierrealisations/chantier greoux les termes vestiaires/IMG_7258.jpg';
import img7259 from '../assets/imageschantierrealisations/chantier greoux les termes vestiaires/IMG_7259.jpg';
import img7260 from '../assets/imageschantierrealisations/chantier greoux les termes vestiaires/IMG_7260.jpg';
import img4446 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_4446.jpg';
import img4447 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_4447.jpg';
import img5094 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_5094.jpg';
import img5095 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_5095.jpg';
import img5152 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_5152(1).jpg';
import img5154 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_5154(1).jpg';
import img5160 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_5160.jpg';
import img5200 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_5200(1).jpg';
import img5205 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_5205(1).jpg';
import img5236 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_5236.jpg';
import img5240 from '../assets/imageschantierrealisations/chantier la palud beton ciré/IMG_5240.jpg';
import img6932 from '../assets/imageschantierrealisations/chantier Mane tomette bois/IMG_6932(2).jpg';
import img6970 from '../assets/imageschantierrealisations/chantier Mane tomette bois/IMG_6970.jpg';
import img6972 from '../assets/imageschantierrealisations/chantier Mane tomette bois/IMG_6972.jpg';
import img7201 from '../assets/imageschantierrealisations/chantier Mane tomette bois/IMG_7201.jpg';
import img7204 from '../assets/imageschantierrealisations/chantier Mane tomette bois/IMG_7204.jpg';
import img7820 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_7820.jpg';
import img7823 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_7823(1).jpg';
import img7834 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_7834(1).jpg';
import img7835 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_7835.jpg';
import img7836 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_7836.jpg';
import img7839 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_7839.jpg';
import img7993 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_7993(1).jpg';
import img7996 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_7996(1).jpg';
import img8006 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_8006(1).jpg';
import img8061 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_8061(1).jpg';
import img8062 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_8062.jpg';
import img8070 from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_8070(1).jpg';
import img8071b from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_8071(1).jpg';
import img8071c from '../assets/imageschantierrealisations/chantier Manosque beton chappe betinna/IMG_8071(2).jpg';
import img9556 from '../assets/imageschantierrealisations/chantier manosque escalier/IMG_9556(1).jpg';
import img9592 from '../assets/imageschantierrealisations/chantier manosque escalier/IMG_9592(1).jpg';
import img9593 from '../assets/imageschantierrealisations/chantier manosque escalier/IMG_9593.jpg';
import img9594 from '../assets/imageschantierrealisations/chantier manosque escalier/IMG_9594.jpg';
import img9598 from '../assets/imageschantierrealisations/chantier manosque escalier/IMG_9598(1).jpg';
import img9601 from '../assets/imageschantierrealisations/chantier manosque escalier/IMG_9601.jpg';
import img9893 from '../assets/imageschantierrealisations/chantier manosque escalier/IMG_9893(1).jpg';
import img9899 from '../assets/imageschantierrealisations/chantier manosque escalier/IMG_9899(1).jpg';
import img4804 from '../assets/imageschantierrealisations/chantier manosque hôpital de manosque/IMG_4804(1).jpg';
import img4805 from '../assets/imageschantierrealisations/chantier manosque hôpital de manosque/IMG_4805(1).jpg';
import img4806 from '../assets/imageschantierrealisations/chantier manosque hôpital de manosque/IMG_4806(1).jpg';
import img4807 from '../assets/imageschantierrealisations/chantier manosque hôpital de manosque/IMG_4807(1).jpg';
import img8644 from '../assets/imageschantierrealisations/chantier manosque pose immitation bois/IMG_8644.jpg';
import img8645 from '../assets/imageschantierrealisations/chantier manosque pose immitation bois/IMG_8645.jpg';
import img8869 from '../assets/imageschantierrealisations/chantier manosque pose immitation bois/IMG_8869(1).jpg';
import img8881 from '../assets/imageschantierrealisations/chantier manosque pose immitation bois/IMG_8881(1).jpg';
import img8882 from '../assets/imageschantierrealisations/chantier manosque pose immitation bois/IMG_8882.jpg';
import img8918 from '../assets/imageschantierrealisations/chantier manosque pose immitation bois/IMG_8918.jpg';
import img8919 from '../assets/imageschantierrealisations/chantier manosque pose immitation bois/IMG_8919.jpg';
import img4886 from '../assets/imageschantierrealisations/chantier Pierrevert chappe/IMG_4886.jpg';
import img4887 from '../assets/imageschantierrealisations/chantier Pierrevert chappe/IMG_4887.jpg';
import img4891 from '../assets/imageschantierrealisations/chantier Pierrevert chappe/IMG_4891.jpg';
import img4908 from '../assets/imageschantierrealisations/chantier Pierrevert chappe/IMG_4908(1).jpg';
import img4499 from '../assets/imageschantierrealisations/chantier Pierrevert reno sdb/IMG_4499.jpg';
import img4500 from '../assets/imageschantierrealisations/chantier Pierrevert reno sdb/IMG_4500.jpg';
import img4501 from '../assets/imageschantierrealisations/chantier Pierrevert reno sdb/IMG_4501.jpg';
import img7996b from '../assets/imageschantierrealisations/chantier Pierrevert tour de piscine/IMG_7996.jpg';
import img7997 from '../assets/imageschantierrealisations/chantier Pierrevert tour de piscine/IMG_7997.jpg';
import img8002 from '../assets/imageschantierrealisations/chantier Pierrevert tour de piscine/IMG_8002.jpg';
import img8003 from '../assets/imageschantierrealisations/chantier Pierrevert tour de piscine/IMG_8003.jpg';
import img8004 from '../assets/imageschantierrealisations/chantier Pierrevert tour de piscine/IMG_8004.jpg';
import img8005 from '../assets/imageschantierrealisations/chantier Pierrevert tour de piscine/IMG_8005.jpg';
import img5015 from '../assets/imageschantierrealisations/chantier Reillanne beton piscine/IMG_5015.jpg';
import img6201 from '../assets/imageschantierrealisations/chantier Reillanne beton piscine/IMG_6201(3).jpg';
import img6235 from '../assets/imageschantierrealisations/chantier Reillanne beton piscine/IMG_6235(2).jpg';
import img3998 from '../assets/imageschantierrealisations/chantier Reillanne calade/IMG_3998(2).jpg';
import img4001 from '../assets/imageschantierrealisations/chantier Reillanne calade/IMG_4001(2).jpg';
import img4002 from '../assets/imageschantierrealisations/chantier Reillanne calade/IMG_4002(3).jpg';
import img4025 from '../assets/imageschantierrealisations/chantier Reillanne calade/IMG_4025(1).jpg';
import img3077 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_3077.jpg';
import img3103 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_3103.jpg';
import img3134 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_3134(1).jpg';
import img4488 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_4488(2).jpg';
import img4496 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_4496(1).jpg';
import img4497 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_4497(1).jpg';
import img4502 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_4502(1).jpg';
import img4503 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_4503(2).jpg';
import img4507 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_4507(1).jpg';
import img4509 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_4509.jpg';
import img4512 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_4512.jpg';
import img4516 from '../assets/imageschantierrealisations/chantier Reillanne tomette et terre cuite/IMG_4516(1).jpg';
import img4517 from '../assets/imageschantierrealisations/chantier Reillanne travertin multiformat/IMG_4517.jpg';
import img4550 from '../assets/imageschantierrealisations/chantier Reillanne travertin multiformat/IMG_4550.jpg';
import img4552 from '../assets/imageschantierrealisations/chantier Reillanne travertin multiformat/IMG_4552.jpg';
import img4587 from '../assets/imageschantierrealisations/chantier Reillanne travertin multiformat/IMG_4587(1).jpg';
import img4601 from '../assets/imageschantierrealisations/chantier Reillanne travertin multiformat/IMG_4601(1).jpg';
import img5108 from '../assets/imageschantierrealisations/chantier réno sdb/IMG_5108(1).jpg';
import img5132 from '../assets/imageschantierrealisations/chantier réno sdb/IMG_5132(2).jpg';
import img5133 from '../assets/imageschantierrealisations/chantier réno sdb/IMG_5133(2).jpg';
import img4856 from '../assets/imageschantierrealisations/chantier sdb benjamin/IMG_4856(1).jpg';
import img5315 from '../assets/imageschantierrealisations/chantier sdb benjamin/IMG_5315(1).jpg';
import img5323 from '../assets/imageschantierrealisations/chantier sdb benjamin/IMG_5323(1).jpg';
import img5607 from '../assets/imageschantierrealisations/chantier Valensole sdb grand format/IMG_5607(1).jpg';
import img5619 from '../assets/imageschantierrealisations/chantier Valensole sdb grand format/IMG_5619.jpg';
import img5633 from '../assets/imageschantierrealisations/chantier Valensole sdb grand format/IMG_5633(1).jpg';
import img5401 from '../assets/imageschantierrealisations/chantier villeneuve beton ciré/IMG_5401.jpg';
import img5404 from '../assets/imageschantierrealisations/chantier villeneuve beton ciré/IMG_5404(1).jpg';
import img5406 from '../assets/imageschantierrealisations/chantier villeneuve beton ciré/IMG_5406(1).jpg';
import img5457 from '../assets/imageschantierrealisations/chantier villeneuve beton ciré/IMG_5457.jpg';
import img5462 from '../assets/imageschantierrealisations/chantier villeneuve beton ciré/IMG_5462(1).jpg';
import img5465 from '../assets/imageschantierrealisations/chantier villeneuve beton ciré/IMG_5465.jpg';
import img6359 from '../assets/imageschantierrealisations/chantier villeneuve piscine bali/IMG_6359.jpg';
import img6360 from '../assets/imageschantierrealisations/chantier villeneuve piscine bali/IMG_6360.jpg';
import img6361 from '../assets/imageschantierrealisations/chantier villeneuve piscine bali/IMG_6361.jpg';
import img5849 from '../assets/imageschantierrealisations/chantier villeneuve tour de piscine/IMG_5849.jpg';
import img5850 from '../assets/imageschantierrealisations/chantier villeneuve tour de piscine/IMG_5850.jpg';
import img5851 from '../assets/imageschantierrealisations/chantier villeneuve tour de piscine/IMG_5851.jpg';
import img5853 from '../assets/imageschantierrealisations/chantier villeneuve tour de piscine/IMG_5853.jpg';
import img5854 from '../assets/imageschantierrealisations/chantier villeneuve tour de piscine/IMG_5854(1).jpg';
import img5855 from '../assets/imageschantierrealisations/chantier villeneuve tour de piscine/IMG_5855.jpg';
import img5856 from '../assets/imageschantierrealisations/chantier villeneuve tour de piscine/IMG_5856.jpg';
import img5470 from '../assets/imageschantierrealisations/chantier volx beton ciré/IMG_5470.jpg';
import img5471 from '../assets/imageschantierrealisations/chantier volx beton ciré/IMG_5471.jpg';
import img5603 from '../assets/imageschantierrealisations/chantier volx beton ciré/IMG_5603(1).jpg';
import img5604 from '../assets/imageschantierrealisations/chantier volx beton ciré/IMG_5604(1).jpg';
import img5605 from '../assets/imageschantierrealisations/chantier volx beton ciré/IMG_5605.jpg';


type GalleryImage = {
  src: string;
  label: string;
};

type RealisationType = 'Piscine' | 'Rénovation' | 'Terrasse';

type Realisation = {
  id: number;
  title: string;
  slug: string;
  location: string;
  type: RealisationType;
  surface?: string;
  description: string;
  mainImage: string;
  gallery: GalleryImage[];
  highlights: string[];
};

type FilterKey = 'all' | 'piscine' | 'renovation' | 'terrasse';

const REALISATIONS: Realisation[] = [
  
  {
    id: 21,
    slug: 'renovation-piscine-carrelage-imitation-bali-villeneuve',
    title: 'Rénovation de piscine avec carrelage imitation Bali à Villeneuve',
    location: 'Villeneuve',
    type: 'Piscine',
    description:
      'Rénovation de piscine à Villeneuve avec remplacement des margelles, ponçage complet du bassin et préparation des supports. Pose d’un carrelage imitation Bali pour apporter une finition moderne, esthétique et résistante, idéale pour sublimer l’aspect de la piscine.',
    mainImage: img6361,
    gallery: [
      { src: img6361, label: 'Piscine rénovée avec carrelage imitation Bali' },
      { src: img6360, label: 'Finition du bassin imitation Bali' },
      { src: img6359, label: 'Travaux en cours de rénovation' },
    ],
    highlights: [
      'Rénovation de piscine',
      'Remplacement des margelles',
      'Ponçage complet du bassin',
      'Carrelage imitation Bali',
      'Finition moderne et esthétique',
    ],
  },
  {
    id: 1,
    slug: 'renovation-piscine-beton-cire-esparron',
    title: 'Rénovation de piscine en béton ciré à Esparron-de-Verdon',
    location: 'Esparron-de-Verdon',
    type: 'Piscine',
    description:
      'Rénovation complète d’une piscine à Esparron-de-Verdon avec ponçage intégral du bassin, remplacement des margelles et préparation des supports. Application d’un béton ciré Marius Aurenti pour une finition esthétique, continue et durable, parfaitement adaptée aux contraintes d’une piscine extérieure.',
    mainImage: img8078,
    gallery: [
      { src: img8078, label: 'Piscine rénovée' },
      { src: img7569, label: 'Ponçage du bassin' },
      { src: img8071, label: 'Préparation du support' },
      { src: img8073, label: 'Rénovation en cours' },
      { src: img8074, label: 'Application du béton ciré' },
      { src: img8076, label: 'Finition béton ciré' },
      { src: img8077, label: 'Margelles de piscine' },
      { src: img7568, label: 'Piscine avant rénovation' },
    ],
    highlights: [
      'Ponçage complet du bassin',
      'Remplacement des margelles',
      'Préparation des supports',
      'Application de béton ciré Marius Aurenti',
    ],
  },
  {
    id: 4,
    slug: 'renovation-piscine-beton-cire-la-palud-sur-verdon',
    title: 'Rénovation de piscine en béton ciré à l’Hôtel des Gorges à La Palud-sur-Verdon',
    location: 'La Palud-sur-Verdon',
    type: 'Piscine',
    description:
      'Rénovation complète d’une piscine à l’Hôtel des Gorges à La Palud-sur-Verdon avec ponçage intégral du bassin, dépose et pose de nouvelles margelles, puis application de 4 couches de béton ciré Marius Aurenti. Une rénovation technique pensée pour améliorer la finition, la durabilité et l’esthétique de la piscine.',
    mainImage: img5240,
    gallery: [
      { src: img5236, label: 'Finition de la piscine rénovée' },
      { src: img5240, label: 'Piscine rénovée en béton ciré' },
      { src: img5205, label: 'Application du béton ciré' },
      { src: img5200, label: 'Travaux de rénovation du bassin' },
      { src: img5160, label: 'Préparation du support' },
      { src: img5154, label: 'Margelles de piscine en cours de pose' },
      { src: img5152, label: 'Remplacement des margelles' },
      { src: img5095, label: 'Ponçage complet de la piscine' },
      { src: img5094, label: 'Préparation avant revêtement' },
      { src: img4447, label: 'Piscine avant rénovation' },
      { src: img4446, label: 'État initial de la piscine' },
    ],
    highlights: [
      'Ponçage complet du bassin',
      'Dépose et pose de nouvelles margelles',
      'Application de 4 couches de béton ciré',
      'Béton ciré Marius Aurenti',
    ],
  },
  {
    id: 22,
    slug: 'renovation-tour-piscine-carrelage-bois-travertin-villeneuve',
    title: 'Rénovation de tour de piscine avec carrelage imitation bois et travertin à Villeneuve',
    location: 'Villeneuve',
    type: 'Piscine',
    description:
      'Rénovation complète d’un tour de piscine à Villeneuve avec remplacement des margelles, réalisation d’une chape mortier avec forme de pente et préparation des supports. Pose d’un carrelage imitation bois associé à un carrelage imitation travertin pour une finition esthétique, durable et adaptée aux extérieurs.',
    mainImage: img5856,
    gallery: [
      { src: img5856, label: 'Tour de piscine terminé' },
      { src: img5855, label: 'Finition des abords de piscine' },
      { src: img5854, label: 'Pose du carrelage imitation bois et travertin' },
      { src: img5853, label: 'Travaux en cours autour de la piscine' },
      { src: img5851, label: 'Réalisation de la chape mortier' },
      { src: img5850, label: 'Préparation du support' },
      { src: img5849, label: 'État initial du chantier' },
    ],
    highlights: [
      'Rénovation de tour de piscine',
      'Remplacement des margelles',
      'Chape mortier avec forme de pente',
      'Carrelage imitation bois',
      'Carrelage imitation travertin',
      'Finition extérieure durable',
    ],
  },
  {
    id: 10,
    slug: 'renovation-tour-piscine-travertin-pierrevert',
    title: 'Rénovation de tour de piscine en travertin à Pierrevert',
    location: 'Pierrevert',
    type: 'Piscine',
    description:
      'Réalisation d’un tour de piscine à Pierrevert avec chape mortier intégrant une forme de pente, dépose et pose de nouvelles margelles et pose de travertin. Une intervention complète permettant d’assurer un bon écoulement des eaux, une meilleure durabilité et une finition esthétique naturelle.',
    mainImage: img4908,
    gallery: [
      { src: img4908, label: 'Tour de piscine terminé en travertin' },
      { src: img4891, label: 'Pose du travertin' },
      { src: img4887, label: 'Réalisation de la chape avec pente' },
      { src: img4886, label: 'Préparation du support' },
    ],
    highlights: [
      'Chape mortier avec forme de pente',
      'Remplacement des margelles',
      'Pose de travertin',
      'Finition extérieure durable',
    ],
  },
  {
    id: 12,
    slug: 'renovation-tour-piscine-travertin-3cm-pierrevert',
    title: 'Rénovation de tour de piscine en travertin 3 cm à Pierrevert',
    location: 'Pierrevert',
    type: 'Piscine',
    description:
      'Rénovation d’un tour de piscine à Pierrevert avec reprise des pentes par chape mortier, dépose et pose de nouvelles margelles et pose d’un travertin 3 cm. Une intervention complète permettant d’améliorer l’écoulement de l’eau, la durabilité des abords et la qualité des finitions.',
    mainImage: img8005,
    gallery: [
      { src: img8005, label: 'Tour de piscine terminé en travertin' },
      { src: img8004, label: 'Finition des abords de piscine' },
      { src: img8003, label: 'Pose du travertin 3 cm' },
      { src: img8002, label: 'Travaux en cours autour de la piscine' },
      { src: img7997, label: 'Reprise des pentes' },
      { src: img7996b, label: 'Réalisation de la chape mortier' },
    ],
    highlights: [
      'Reprise des pentes',
      'Chape mortier',
      'Remplacement des margelles',
      'Pose de travertin 3 cm',
    ],
  },
  {
    id: 13,
    slug: 'dalle-beton-tour-piscine-travertin-reillanne',
    title: 'Réalisation d’un tour de piscine en travertin à Reillanne',
    location: 'Reillanne',
    type: 'Piscine',
    description:
      'Réalisation d’une dalle béton autour de piscine à Reillanne avec pose de margelles, création d’une chape mortier avec forme de pente et pose de travertin. Une intervention complète pour garantir la stabilité du support, un bon drainage et une finition extérieure durable.',
    mainImage: img6235,
    gallery: [
      { src: img6235, label: 'Tour de piscine terminé en travertin' },
      { src: img6201, label: 'Pose des margelles et du travertin' },
      { src: img5015, label: 'Réalisation de la dalle béton et de la chape' },
    ],
    highlights: [
      'Dalle béton autour de piscine',
      'Pose des margelles',
      'Chape mortier avec forme de pente',
      'Pose de travertin',
    ],
  },
  {
    id: 2,
    slug: 'terrasse-dalle-sur-plot-forcalquier',
    title: 'Pose de dalles sur plots à Forcalquier',
    location: 'Forcalquier',
    type: 'Terrasse',
    description:
      'Réalisation d’une terrasse sur plots à Forcalquier avec pose de dalles extérieures. Mise à niveau du support et installation sur plots pour assurer une bonne stabilité, un drainage efficace et une finition durable.',
    mainImage: img7570,
    gallery: [
      { src: img7570, label: 'Terrasse terminée' },
      { src: img7554, label: 'Pose des dalles sur plots' },
      { src: img7326, label: 'Préparation du support' },
    ],
    highlights: [
      'Pose de dalles extérieures sur plots',
      'Mise à niveau du support',
      'Drainage facilité sous terrasse',
      'Finition extérieure durable',
    ],
  },
  {
    id: 6,
    slug: 'renovation-tour-villa-grand-format-manosque',
    title: 'Rénovation complète d’un tour de villa en grand format à Manosque',
    location: 'Manosque',
    type: 'Terrasse',
    description:
      'Rénovation complète d’un tour de villa à Manosque avec préparation du support, coulage du béton, réalisation d’une chape avec forme de pente et pose d’un carrelage grand format. Une réalisation technique pensée pour améliorer l’écoulement de l’eau, la durabilité du support et la qualité des finitions extérieures.',
    mainImage: img8071c,
    gallery: [
      { src: img8071c, label: 'Tour de villa terminé en carrelage grand format' },
      { src: img8071b, label: 'Finition extérieure grand format' },
      { src: img8070, label: 'Pose du carrelage grand format' },
      { src: img8062, label: 'Chantier extérieur en cours de finition' },
      { src: img8061, label: 'Préparation avant pose' },
      { src: img8006, label: 'Réalisation de la chape' },
      { src: img7996, label: 'Coulage du béton' },
      { src: img7993, label: 'Préparation du support extérieur' },
      { src: img7839, label: 'Mise en forme des pentes' },
      { src: img7836, label: 'Travaux de support et chape' },
      { src: img7835, label: 'Avancement du chantier' },
      { src: img7834, label: 'Reprise du support' },
      { src: img7823, label: 'Début de la rénovation extérieure' },
      { src: img7820, label: 'État initial du tour de villa' },
    ],
    highlights: [
      'Préparation complète du support',
      'Coulage du béton',
      'Chape avec forme de pente',
      'Pose de carrelage grand format',
    ],
  },
  {
    id: 18,
    slug: 'renovation-complete-salle-de-bain-carrelage-grand-format-marbre',
    title: 'Rénovation complète de salle de bain avec carrelage grand format imitation marbre',
    location: 'Manosque',
    type: 'Rénovation',
    description:
      'Rénovation complète d’une salle de bain avec reprise des murs en plaques de plâtre, création de niches intégrées et préparation des supports. Réalisation de l’étanchéité, pose d’un bac à douche et installation d’une paroi de douche. Pose d’un carrelage grand format imitation marbre pour une finition élégante, moderne et durable.',
    mainImage: img5323,
    gallery: [
      { src: img5323, label: 'Salle de bain terminée avec carrelage imitation marbre' },
      { src: img5315, label: 'Pose du carrelage grand format' },
      { src: img4856, label: 'Préparation des murs et création des niches' },
    ],
    highlights: [
      'Rénovation complète de salle de bain',
      'Reprise des murs en placo',
      'Création de niches intégrées',
      'Réalisation de l’étanchéité',
      'Pose de bac à douche',
      'Carrelage grand format imitation marbre',
      'Pose de paroi de douche',
    ],
  },
  {
    id: 19,
    slug: 'realisation-salle-de-bain-tres-grand-format-imitation-marbre-valensole',
    title: 'Réalisation de salle de bain en très grand format imitation marbre à Valensole',
    location: 'Valensole',
    type: 'Rénovation',
    description:
      'Réalisation d’une salle de bain à Valensole avec pose de carrelage en très grand format imitation marbre. Mise en œuvre soignée des supports, pose précise des carreaux de grande dimension et réalisation des joints pour une finition esthétique, moderne et durable. Un chantier technique nécessitant précision et maîtrise pour un rendu haut de gamme.',
    mainImage: img5633,
    gallery: [
      { src: img5633, label: 'Salle de bain terminée en très grand format imitation marbre' },
      { src: img5619, label: 'Finition du carrelage grand format' },
      { src: img5607, label: 'Pose en cours des carreaux grand format' },
    ],
    highlights: [
      'Pose de carrelage très grand format',
      'Imitation marbre',
      'Réalisation des joints',
      'Finition haut de gamme',
      'Pose précise et technique',
    ],
  },
  {
    id: 17,
    slug: 'renovation-salle-de-bain-ouverture-lumiere-paroi',
    title: 'Rénovation de salle de bain avec création d’ouverture et pose de paroi',
    location: 'Manosque',
    type: 'Rénovation',
    description:
      'Rénovation complète d’une salle de bain avec création d’une ouverture pour apporter davantage de lumière naturelle. Reprise des supports, aménagement de l’espace et pose d’une paroi de douche pour une finition moderne et fonctionnelle. Une réalisation pensée pour améliorer le confort, la luminosité et l’esthétique de la pièce.',
    mainImage: img5133,
    gallery: [
      { src: img5133, label: 'Salle de bain rénovée terminée' },
      { src: img5132, label: 'Pose de la paroi de douche' },
      { src: img5108, label: 'Création de l’ouverture et travaux en cours' },
    ],
    highlights: [
      'Rénovation complète de salle de bain',
      'Création d’ouverture pour apport de lumière',
      'Pose de paroi de douche',
      'Amélioration de la luminosité',
      'Finition moderne et fonctionnelle',
    ],
  },
  {
    id: 11,
    slug: 'renovation-salle-de-bain-imitation-marbre-pierrevert',
    title: 'Rénovation de salle de bain imitation marbre à Pierrevert',
    location: 'Pierrevert',
    type: 'Rénovation',
    description:
      'Rénovation d’une salle de bain à Pierrevert avec pose de carreaux imitation marbre. Une réalisation pensée pour apporter une finition élégante, lumineuse et durable, adaptée à un usage quotidien en pièce d’eau.',
    mainImage: img4501,
    gallery: [
      { src: img4501, label: 'Salle de bain rénovée imitation marbre' },
      { src: img4500, label: 'Finitions de la salle de bain' },
      { src: img4499, label: 'Pose du carrelage imitation marbre' },
    ],
    highlights: [
      'Rénovation de salle de bain',
      'Carrelage imitation marbre',
      'Finition lumineuse et élégante',
      'Pose adaptée aux pièces d’eau',
    ],
  },
  {
    id: 15,
    slug: 'renovation-ferme-tomette-terre-cuite-reillanne',
    title: 'Rénovation de ferme avec pose de tomettes et terre cuite à Reillanne',
    location: 'Reillanne',
    type: 'Rénovation',
    description:
      'Rénovation d’une ferme à Reillanne avec pose de carreaux en terre cuite et tomettes. Préparation du support, pose traditionnelle, puis traitement spécifique avec application d’un hydrofuge/oléofuge et polissage pour protéger le matériau et révéler son aspect naturel. Une réalisation alliant authenticité, durabilité et finition soignée.',
    mainImage: img4509,
    gallery: [
      { src: img4509, label: 'Sol en terre cuite terminé' },
      { src: img4512, label: 'Finition après traitement' },
      { src: img4516, label: 'Polissage des tomettes' },
      { src: img4507, label: 'Application du traitement' },
      { src: img4503, label: 'Pose des carreaux terre cuite' },
      { src: img4502, label: 'Travaux en cours' },
      { src: img4497, label: 'Préparation du support' },
      { src: img4496, label: 'Mise en place des tomettes' },
      { src: img4488, label: 'Détails de pose' },
      { src: img3134, label: 'Avancement du chantier' },
      { src: img3103, label: 'Début des travaux' },
      { src: img3077, label: 'État initial' },
    ],
    highlights: [
      'Pose de tomettes et terre cuite',
      'Préparation du support',
      'Traitement hydrofuge et oléofuge',
      'Polissage et protection du sol',
      'Finition authentique et durable',
    ],
  },
  {
    id: 16,
    slug: 'pose-pierre-type-travertin-multiformat-reillanne',
    title: 'Pose de pierre naturelle type travertin multiformat à Reillanne',
    location: 'Reillanne',
    type: 'Rénovation',
    description:
      'Réalisation d’un sol en pierre naturelle à Reillanne avec un calepinage type travertin multiformat. Pose effectuée sur chape mortier traditionnelle en intérieur, avec préparation du support et mise en œuvre soignée. Cette technique permet d’obtenir un rendu esthétique proche du travertin tout en utilisant une pierre naturelle différente, offrant un aspect authentique et une excellente durabilité.',
    mainImage: img4517,
    gallery: [
      { src: img4517, label: 'Sol en pierre naturelle terminé' },
      { src: img4550, label: 'Finition du sol type travertin multiformat' },
      { src: img4552, label: 'Calepinage des pierres naturelles' },
      { src: img4601, label: 'Pose sur chape mortier traditionnelle' },
      { src: img4587, label: 'Chantier en cours de réalisation' },
    ],
    highlights: [
      'Pierre naturelle',
      'Pose type travertin multiformat',
      'Chape mortier traditionnelle',
      'Pose en intérieur',
      'Finition authentique et durable',
    ],
  },
  {
    id: 14,
    slug: 'creation-calade-pierre-reillanne',
    title: 'Création d’une calade en pierre à Reillanne',
    location: 'Reillanne',
    type: 'Rénovation',
    description:
      'Création d’une calade traditionnelle à Reillanne avec taillage manuel de pierres et pose artisanale. Réalisation des joints au mortier pour garantir solidité, durabilité et intégration parfaite dans un environnement ancien ou provençal.',
    mainImage: img4025,
    gallery: [
      { src: img4025, label: 'Calade terminée' },
      { src: img4002, label: 'Pose des pierres' },
      { src: img4001, label: 'Mise en place de la calade' },
      { src: img3998, label: 'Préparation et calepinage' },
    ],
    highlights: [
      'Taillage de pierre traditionnel',
      'Pose artisanale',
      'Joints au mortier',
      'Finition authentique et durable',
    ],
  },
  {
    id: 3,
    slug: 'renovation-vestiaires-thermes-greoux-les-bains',
    title: 'Rénovation des vestiaires des thermes à Gréoux-les-Bains',
    location: 'Gréoux-les-Bains',
    type: 'Rénovation',
    description:
      'Rénovation des vestiaires des thermes à Gréoux-les-Bains avec reprise des supports, pose de revêtements et finitions soignées pour un espace plus propre, fonctionnel et durable.',
    mainImage: img7260,
    gallery: [
      { src: img7260, label: 'Vestiaires rénovés' },
      { src: img7258, label: 'Travaux dans les vestiaires' },
      { src: img7259, label: 'Finitions des vestiaires' },
    ],
    highlights: [
      'Rénovation complète des vestiaires',
      'Reprise des supports',
      'Pose de revêtements',
      'Finitions soignées',
    ],
  },
  {
    id: 8,
    slug: 'realisation-carrelage-hopital-manosque',
    title: 'Réalisation de carrelage à l’hôpital de Manosque',
    location: 'Manosque',
    type: 'Rénovation',
    description:
      'Réalisation de travaux de carrelage à l’hôpital de Manosque avec pose de revêtements adaptés aux contraintes d’un environnement professionnel. Une intervention exigeant précision, résistance et respect des normes pour garantir durabilité et facilité d’entretien.',
    mainImage: img4807,
    gallery: [
      { src: img4807, label: 'Carrelage terminé' },
      { src: img4806, label: 'Finition du sol' },
      { src: img4805, label: 'Pose du carrelage' },
      { src: img4804, label: 'Chantier en cours' },
    ],
    highlights: [
      'Pose en environnement professionnel',
      'Carrelage résistant et durable',
      'Respect des contraintes techniques',
      'Finitions soignées',
    ],
  },
  {
    id: 9,
    slug: 'pose-carrelage-imitation-bois-locaux-neufs-manosque',
    title: 'Pose de carrelage imitation bois en locaux neufs à Manosque',
    location: 'Manosque',
    type: 'Rénovation',
    description:
      'Pose de carrelage imitation bois dans des locaux neufs à Manosque sur chape liquide. Une réalisation permettant d’obtenir un rendu esthétique chaleureux tout en conservant la résistance et la facilité d’entretien du carrelage.',
    mainImage: img8919,
    gallery: [
      { src: img8919, label: 'Carrelage imitation bois terminé' },
      { src: img8918, label: 'Finition du sol imitation bois' },
      { src: img8882, label: 'Pose en cours' },
      { src: img8881, label: 'Alignement des lames imitation bois' },
      { src: img8869, label: 'Mise en place du carrelage' },
      { src: img8645, label: 'Préparation avant pose' },
      { src: img8644, label: 'Support en chape liquide' },
    ],
    highlights: [
      'Pose sur chape liquide',
      'Carrelage imitation bois',
      'Alignement type parquet',
      'Finition intérieure durable',
    ],
  },
  {
    id: 5,
    slug: 'renovation-interieur-tomette-bois-mane',
    title: 'Rénovation intérieure avec tomettes et imitation bois à Mane',
    location: 'Mane',
    type: 'Rénovation',
    description:
      'Rénovation d’un intérieur de maison à Mane avec ponçage du support et incrustation technique de carreaux tomette associés à des carreaux imitation bois. Une réalisation pensée pour conserver le charme du sol traditionnel tout en apportant une finition plus contemporaine.',
    mainImage: img7204,
    gallery: [
      { src: img7204, label: 'Sol fini avec tomettes et imitation bois' },
      { src: img7201, label: 'Finition intérieure après rénovation' },
      { src: img6972, label: 'Pose des carreaux en cours' },
      { src: img6970, label: 'Incrustation technique tomettes et imitation bois' },
      { src: img6932, label: 'Préparation du support avant pose' },
    ],
    highlights: [
      'Ponçage du support',
      'Incrustation technique de tomettes',
      'Association tomette et imitation bois',
      'Finition intérieure soignée',
    ],
  },
  {
    id: 20,
    slug: 'renovation-piscine-beton-cire-villeneuve',
    title: 'Rénovation de piscine en béton ciré à Villeneuve',
    location: 'Villeneuve',
    type: 'Piscine',
    description:
      'Rénovation complète d’une piscine à Villeneuve avec dépose et remplacement des margelles, ponçage intégral du bassin et préparation des supports. Application de 4 couches de béton ciré Marius Aurenti pour une finition esthétique, continue et durable, parfaitement adaptée aux contraintes d’une piscine extérieure.',
    mainImage: img5465,
    gallery: [
      { src: img5465, label: 'Piscine rénovée en béton ciré' },
      { src: img5457, label: 'Finition du béton ciré' },
      { src: img5462, label: 'Application du béton ciré' },
      { src: img5406, label: 'Préparation du support' },
      { src: img5404, label: 'Ponçage du bassin' },
      { src: img5401, label: 'Piscine avant rénovation' },
    ],
    highlights: [
      'Rénovation complète de piscine',
      'Dépose et remplacement des margelles',
      'Ponçage complet du bassin',
      'Application de béton ciré Marius Aurenti',
      'Finition durable et esthétique',
    ],
  },
  {
    id: 7,
    slug: 'pose-carrelage-escalier-manosque',
    title: 'Pose de carrelage sur escalier balancé à Manosque',
    location: 'Manosque',
    type: 'Rénovation',
    description:
      'Pose de carrelage sur un escalier balancé à Manosque avec intégration de baguettes de finition. Une réalisation technique demandant précision et régularité pour assurer des alignements propres, une sécurité optimale et une finition esthétique durable.',
    mainImage: img9899,
    gallery: [
      { src: img9899, label: 'Escalier carrelé terminé' },
      { src: img9893, label: 'Finition de l’escalier' },
      { src: img9601, label: 'Pose du carrelage sur marches' },
      { src: img9598, label: 'Travaux en cours sur escalier balancé' },
      { src: img9594, label: 'Détail des marches' },
      { src: img9593, label: 'Alignement des carreaux' },
      { src: img9592, label: 'Mise en place des baguettes de finition' },
      { src: img9556, label: 'Préparation de l’escalier' },
    ],
    highlights: [
      'Pose sur escalier balancé',
      'Découpes précises',
      'Baguettes de finition',
      'Finition propre et durable',
    ],
  },
  {
    id: 23,
    slug: 'renovation-piscine-beton-cire-volx',
    title: 'Rénovation de piscine en béton ciré à Volx',
    location: 'Volx',
    type: 'Piscine',
    description:
      'Rénovation d’une piscine à Volx avec ponçage du support, préparation du bassin et application d’un béton ciré Marius Aurenti. Une solution technique permettant d’obtenir une finition continue, esthétique et durable, parfaitement adaptée aux contraintes d’une piscine.',
    mainImage: img5605,
    gallery: [
      { src: img5605, label: 'Piscine rénovée en béton ciré' },
      { src: img5604, label: 'Application du béton ciré' },
      { src: img5603, label: 'Préparation du support' },
      { src: img5471, label: 'Ponçage du bassin' },
      { src: img5470, label: 'Piscine avant rénovation' },
    ],
    highlights: [
      'Rénovation de piscine',
      'Ponçage du support',
      'Préparation du bassin',
      'Application de béton ciré Marius Aurenti',
      'Finition continue et durable',
    ],
  },
];

















































const FILTERS: Record<
  FilterKey,
  {
    label: string;
    description: string;
    color: string;
  }
> = {
  all: {
    label: 'Tous les chantiers',
    description: 'Afficher l’ensemble des réalisations.',
    color: '#f9fafb',
  },
  piscine: {
    label: 'Piscines',
    description: 'Rénovations de piscines, margelles et finitions de bassin.',
    color: '#38bdf8',
  },
  terrasse: {
    label: 'Terrasses',
    description: 'Terrasses extérieures, dalles sur plots et finitions durables.',
    color: '#22c55e',
  },
  renovation: {
    label: 'Rénovations',
    description: 'Reprises complètes, préparation des supports et finitions durables.',
    color: '#f97316',
  },
};

const FILTER_PREDICATES: Record<FilterKey, (realisation: Realisation) => boolean> = {
  all: () => true,
  piscine: (realisation) => realisation.type === 'Piscine',
  terrasse: (realisation) => realisation.type === 'Terrasse',
  renovation: (realisation) => realisation.type === 'Rénovation',
};

function getSiteUrl() {
  if (typeof window !== 'undefined' && window.location?.origin) {
    return window.location.origin;
  }
  return 'https://www.procarre-et-fils.fr';
}

function getPageUrl() {
  if (typeof window !== 'undefined' && window.location?.href) {
    return window.location.href;
  }
  return `${getSiteUrl()}/realisations`;
}

function getImageUrl(src: string) {
  if (!src) return `${getSiteUrl()}/realisations`;
  if (src.startsWith('http')) return src;
  return `${getSiteUrl()}${src}`;
}

function getDevisProjectType(rea: Realisation) {
  const text = `${rea.title} ${rea.description}`.toLowerCase();

  if (rea.type === 'Piscine' || rea.type === 'Terrasse') {
    return 'terrasse-exterieur';
  }

  if (text.includes('salle de bain')) {
    return 'salle-de-bain';
  }

  if (text.includes('cuisine')) {
    return 'cuisine';
  }

  if (text.includes('carrelage intérieur') || text.includes('intérieur')) {
    return 'carrelage-interieur';
  }

  return 'renovation-complete';
}

function SEOHead({ realisations }: { realisations: Realisation[] }) {
  const title = 'Réalisations de carrelage, piscine et terrasse dans le 04 | Procarré & Fils';
  const description =
    'Découvrez les réalisations de Procarré & Fils dans les Alpes-de-Haute-Provence : rénovation de piscines en béton ciré, pose de dalles sur plots, rénovation intérieure et chantiers extérieurs à Esparron-de-Verdon, Forcalquier, Gréoux-les-Bains, Manosque, Pierrevert et Reillanne.';
  const pageUrl = getPageUrl();

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: title,
    description,
    url: pageUrl,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: realisations.map((realisation, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        url: `${pageUrl}#${realisation.slug}`,
        item: {
          '@type': 'CreativeWork',
          name: realisation.title,
          description: realisation.description,
          image: getImageUrl(realisation.mainImage),
          areaServed: realisation.location,
        },
      })),
    },
  };

  return (
    <Helmet>
      <html lang="fr" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={pageUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={getImageUrl(realisations[0]?.mainImage ?? '')} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={getImageUrl(realisations[0]?.mainImage ?? '')} />

      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
}

function FilterPanel({
  activeFilter,
  onFilterChange,
  totalCount,
}: {
  activeFilter: FilterKey;
  onFilterChange: (filter: FilterKey) => void;
  totalCount: number;
}) {
  const activeCount = REALISATIONS.filter(FILTER_PREDICATES[activeFilter]).length;

  return (
    <section className="realisations-filters-panel" aria-label="Filtrer les réalisations">
      <div className="realisations-filters-header">
        <div>
          <p className="realisations-kicker">Filtrer les chantiers</p>
          <p className="realisations-filters-summary">
            {activeCount} chantier{activeCount > 1 ? 's' : ''} affiché{activeCount > 1 ? 's' : ''}
            {activeFilter !== 'all' ? ` dans « ${FILTERS[activeFilter].label} »` : ''} sur{' '}
            {totalCount}.
          </p>
        </div>

        <p className="realisations-filters-help">
          Choisissez une catégorie pour afficher uniquement les réalisations qui vous intéressent.
        </p>
      </div>

      <ul className="realisations-filters-list" role="list">
        {(Object.entries(FILTERS) as Array<
          [FilterKey, { label: string; description: string; color: string }]
        >).map(([key, { label, description, color }]) => {
          const isActive = activeFilter === key;
          const count = REALISATIONS.filter(FILTER_PREDICATES[key]).length;

          return (
            <li key={key}>
              <button
                type="button"
                className={`realisations-filter-item ${isActive ? 'is-active' : ''}`}
                onClick={() => onFilterChange(key)}
                aria-pressed={isActive}
                aria-label={`${label} : ${count} chantier${count > 1 ? 's' : ''}`}
              >
                <span
                  className="realisations-filter-color"
                  style={{ backgroundColor: color }}
                  aria-hidden="true"
                />
                <span className="realisations-filter-main">
                  <span className="realisations-filter-label">{label}</span>
                  <span className="realisations-filter-count">
                    {count} chantier{count > 1 ? 's' : ''}
                  </span>
                </span>
                <span className="realisations-filter-description">{description}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function RealisationBlock({
  rea,
  onImageClick,
}: {
  rea: Realisation;
  onImageClick: (index: number) => void;
}) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedImage = rea.gallery[selectedImageIndex] ?? rea.gallery[0];
  const devisType = getDevisProjectType(rea);

  if (!selectedImage) return null;

  return (
    <article className="realisations-block" id={rea.slug} aria-labelledby={`rea-title-${rea.id}`}>
      <div className="realisations-block-header">
        <div className="realisations-block-icon" aria-hidden="true">
          ▢
        </div>

        <div>
          <h2 className="realisations-block-title" id={`rea-title-${rea.id}`}>
            {rea.title}
          </h2>
          <p className="realisations-block-meta">
            {rea.type} · {rea.location}
            {rea.surface ? ` · ${rea.surface}` : ''}
          </p>
        </div>
      </div>

      <p className="realisations-block-desc">{rea.description}</p>

      <div className="realisations-block-grid">
        <div className="realisations-block-gallery">
          <button
            type="button"
            className="realisations-main-image-wrapper"
            onClick={() => onImageClick(selectedImageIndex)}
            aria-label={`Ouvrir l’image : ${selectedImage.label}`}
          >
            <img
              src={selectedImage.src}
              alt={selectedImage.label}
              className="realisations-main-image"
              loading="lazy"
              decoding="async"
              sizes="(max-width: 767px) 100vw, 700px"
            />
          </button>

          <div className="realisations-thumbs-row" role="list" aria-label="Miniatures du chantier">
            {rea.gallery.map((img, index) => {
              const isActive = index === selectedImageIndex;

              return (
                <button
                  key={`${rea.id}-${index}-${img.label}`}
                  type="button"
                  className={`realisations-thumb-item ${isActive ? 'is-active' : ''}`}
                  onClick={() => setSelectedImageIndex(index)}
                  aria-label={`Afficher l’image : ${img.label}`}
                  aria-pressed={isActive}
                >
                  <img
                    src={img.src}
                    alt={img.label}
                    className="realisations-thumb"
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 520px) 33vw, (max-width: 767px) 25vw, 120px"
                  />
                </button>
              );
            })}
          </div>
        </div>

        <ul className="realisations-pills">
          {rea.highlights.map((highlight, index) => (
            <li key={`${rea.id}-highlight-${index}`}>
              <span className="realisations-pill-dot" aria-hidden="true" /> {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div className="realisations-block-actions">
        <a href={`/devis?type=${devisType}`} className="realisations-cta-primary">
          Demander un devis pour un projet similaire
        </a>
      </div>
    </article>
  );
}

export function RealisationsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>('all');
  const [lightboxState, setLightboxState] = useState<{
    reaId: number | null;
    index: number;
  }>({
    reaId: null,
    index: 0,
  });

  const displayedRealisations = useMemo(() => {
    return REALISATIONS.filter(FILTER_PREDICATES[activeFilter]);
  }, [activeFilter]);

  const openLightbox = useCallback((reaId: number, index: number) => {
    setLightboxState({ reaId, index });
  }, []);

  const closeLightbox = useCallback(() => {
    setLightboxState({ reaId: null, index: 0 });
  }, []);

  const currentRealisation = useMemo(() => {
    if (lightboxState.reaId === null) return null;
    return REALISATIONS.find((realisation) => realisation.id === lightboxState.reaId) ?? null;
  }, [lightboxState.reaId]);

  return (
    <>
      <SEOHead realisations={REALISATIONS} />

      <main className="realisations-page">
        <section className="realisations-hero">
          <p className="realisations-kicker">Réalisations Procarré &amp; Fils</p>
          <h1>Carrelage, salle de bain, terrasse et piscine dans les Alpes-de-Haute-Provence</h1>
          <p>
            Vous avez un projet de salle de bain, de terrasse ou de rénovation de piscine dans le
            04 ? Découvrez une sélection de chantiers réalisés par Procarré &amp; Fils à Manosque,
            Pierrevert, Villeneuve, Reillanne, Forcalquier, Valensole et dans les environs.
          </p>

          <div className="realisations-hero-actions">
            <a href="/devis" className="realisations-cta-primary">
              Demander un devis
            </a>
            <a href="#realisations-list-title" className="realisations-cta-secondary">
              Voir les réalisations
            </a>
          </div>
        </section>

        <FilterPanel
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          totalCount={REALISATIONS.length}
        />

        <section className="realisations-trust" aria-label="Pourquoi nous choisir">
          <div className="realisations-trust-card">
            <strong>Devis gratuit</strong>
            <p>Étude de votre projet et conseils adaptés à votre chantier.</p>
          </div>

          <div className="realisations-trust-card">
            <strong>Intervention dans le 04</strong>
            <p>Manosque, Pierrevert, Villeneuve, Reillanne, Valensole et alentours.</p>
          </div>

          <div className="realisations-trust-card">
            <strong>Savoir-faire technique</strong>
            <p>Salle de bain, grand format, terrasse, piscine, béton ciré et pierre naturelle.</p>
          </div>

          <div className="realisations-trust-card">
            <strong>Finitions soignées</strong>
            <p>Préparation des supports, étanchéité, pentes, habillage et pose durable.</p>
          </div>
        </section>

        <section className="realisations-content" aria-labelledby="realisations-list-title">
          <h2 id="realisations-list-title" className="sr-only">
            Liste des réalisations
          </h2>

          {displayedRealisations.length > 0 ? (
            displayedRealisations.map((rea) => (
              <RealisationBlock
                key={rea.id}
                rea={rea}
                onImageClick={(index) => openLightbox(rea.id, index)}
              />
            ))
          ) : (
            <div className="realisations-empty-state" role="status">
              <p>Aucune réalisation ne correspond à ce filtre pour le moment.</p>
            </div>
          )}
        </section>

        {currentRealisation && (
          <Lightbox
            open={lightboxState.reaId !== null}
            close={closeLightbox}
            index={lightboxState.index}
            slides={currentRealisation.gallery.map((img) => ({
              src: img.src,
              alt: img.label,
            }))}
            plugins={[Zoom]}
            zoom={{
              scrollToZoom: true,
              maxZoomPixelRatio: 3,
            }}
            controller={{ closeOnBackdropClick: true }}
            carousel={{ finite: false }}
            render={{
              buttonPrev: currentRealisation.gallery.length <= 1 ? () => null : undefined,
              buttonNext: currentRealisation.gallery.length <= 1 ? () => null : undefined,
            }}
          />
        )}
      </main>
    </>
  );
}