
export interface Engagement {
  id: string;
  title: string;
  description: string;
  mainImage: string;
  images: string[];
  category: "Éducation" | "Inclusion" | "Droits des femmes" | "EdTech";
  partenaire?: string;
  link?: string;
}

const engagements: Engagement[] = [
  {
    id: "1",
    title: "Écoles au Sénégal",
    description:
      "Plateforme éducative numérique majeure comptant 1 600 000 abonnés et plus de 8 000 ressources pédagogiques, couvrant l'ensemble du programme scolaire sénégalais de la CI à la Terminale, avec une orientation particulièrement forte vers les STEM.",
    mainImage: "eco1.jpeg",
    images: ["codou/eas-1.jpeg", "codou/eas-2.jpeg"],
    category: "Éducation",
    link: "https://ecolesausenegal.com",
  },
  {
    id: "2",
    title: "Tàggat Ma",
    description:
      "Projet 2024-2025 de formation numérique pour l'insertion professionnelle des jeunes issus de 8 Daaras : objectif initial de 625 jeunes largement dépassé avec environ 1 500 bénéficiaires formés.",
    mainImage: "taggatma_premiere_page.png",
    images: ["codou/taggat-ma-1.jpeg", "codou/taggat-ma-2.jpeg"],
    category: "Inclusion",
    partenaire: "Mastercard Foundation",
  },
  {
    id: "3",
    title: "EAS EdTech Fellowship",
    description:
      "Écoles au Sénégal a intégré la cohorte 3 du Mastercard Foundation EdTech Fellowship avec EtriLabs. Sélectionnée parmi 300 candidatures pour seulement 8 places, rejoignant ce programme prestigieux pour bâtir l'avenir de l'éducation en Afrique.",
    mainImage: "ed1.jpeg",
    images: ["ed.jpeg"],
    category: "EdTech",
    partenaire: "Mastercard Foundation × EtriLabs",
  },
];

export default engagements;
