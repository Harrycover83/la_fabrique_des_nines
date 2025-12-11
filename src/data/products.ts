import { Product } from "@/types/product";

/**
 * Base de données des produits
 * Vous pouvez facilement ajouter, modifier ou supprimer des produits ici
 */
export const products: Product[] = [
  {
    id: "1",
    slug: "plateau-terrazzo-beige",
    name: "Plateau Terrazzo Beige",
    price: 45,
    category: "plateaux",
    image: "/images/plateaux-01.jpg",
    description: "Plateau élégant en jesmonite avec effet terrazzo beige. Parfait pour décorer votre intérieur ou servir vos apéritifs.",
    details: {
      dimensions: "25cm x 25cm",
      materiau: "Jesmonite",
      delai: "3-5 jours ouvrés",
    },
    isNew: true,
    isBestseller: true,
    couleursDisponibles: ["Beige", "Terracotta", "Gris"],
  },
  {
    id: "2",
    slug: "plateau-rond-ocre",
    name: "Plateau Rond Ocre",
    price: 38,
    category: "plateaux",
    image: "/images/plateaux-02.jpg",
    description: "Plateau rond aux tons ocre chaleureux, idéal pour vos moments de détente.",
    details: {
      dimensions: "Ø 20cm",
      materiau: "Jesmonite",
      delai: "3-5 jours ouvrés",
    },
    isBestseller: true,
  },
  {
    id: "3",
    slug: "cendrier-terracotta",
    name: "Cendrier Terracotta",
    price: 28,
    category: "cendriers",
    image: "/images/cendrier-01.jpg",
    description: "Cendrier artisanal aux tons terracotta, alliant esthétique et fonctionnalité.",
    details: {
      dimensions: "12cm x 12cm",
      materiau: "Jesmonite",
      delai: "2-4 jours ouvrés",
    },
    isNew: true,
  },
  {
    id: "4",
    slug: "porte-savon-bleu",
    name: "Porte-Savon Bleu",
    price: 22,
    category: "porta-sabon",
    image: "/images/porta-sabon-bleu.jpg",
    description: "Porte-savon avec une touche de bleu intense, pour sublimer votre salle de bain.",
    details: {
      dimensions: "10cm x 8cm",
      materiau: "Jesmonite",
      delai: "2-3 jours ouvrés",
    },
    couleursDisponibles: ["Bleu", "Beige", "Rose"],
  },
  {
    id: "5",
    slug: "porte-savon-terrazzo",
    name: "Porte-Savon Terrazzo",
    price: 24,
    category: "porta-sabon",
    image: "/images/porta-sabon-02.jpg",
    description: "Porte-savon effet terrazzo multicolore, un accessoire unique pour votre quotidien.",
    details: {
      dimensions: "11cm x 9cm",
      materiau: "Jesmonite",
      delai: "2-3 jours ouvrés",
    },
    isBestseller: true,
  },
  {
    id: "6",
    slug: "statue-visage-beige",
    name: "Statue Visage Beige",
    price: 65,
    category: "statues",
    image: "/images/statue-01.jpg",
    description: "Statue décorative représentant un visage stylisé, apportant une touche artistique à votre espace.",
    details: {
      dimensions: "15cm hauteur",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés",
    },
    isNew: true,
  },
  {
    id: "7",
    slug: "statue-main-minimaliste",
    name: "Statue Main Minimaliste",
    price: 58,
    category: "statues",
    image: "/images/statue-02.jpg",
    description: "Sculpture minimaliste d'une main, symbole d'élégance et de créativité.",
    details: {
      dimensions: "12cm hauteur",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés",
    },
  },
  {
    id: "8",
    slug: "vide-poche-multicolore",
    name: "Vide-Poche Multicolore",
    price: 32,
    category: "autres",
    image: "/images/autres-01.jpg",
    description: "Petit vide-poche coloré pour organiser vos petits objets avec style.",
    details: {
      dimensions: "15cm x 12cm",
      materiau: "Jesmonite",
      delai: "3-4 jours ouvrés",
    },
  },
];

/**
 * Récupère un produit par son slug
 */
export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/**
 * Récupère des produits par catégorie
 */
export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

/**
 * Filtre les produits par prix
 */
export function filterProductsByPrice(min: number, max: number): Product[] {
  return products.filter((p) => p.price >= min && p.price <= max);
}
