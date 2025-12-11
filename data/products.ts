/**
 * Données des produits pour La Fabrique des Nines
 * 
 * Pour ajouter un nouveau produit, ajouter un objet au tableau ci-dessous.
 * Pour modifier un produit, éditer les propriétés de l'objet correspondant.
 */

import { Product } from "@/types";

export const products: Product[] = [
  {
    id: "plateau-001",
    slug: "plateau-terracotta-grand",
    name: "Plateau Terracotta Grand",
    price: 45.00,
    category: "plateaux",
    image: "/images/plateaux-01.svg",
    description: "Grand plateau en jesmonite teinte terracotta. Parfait pour servir ou décorer votre intérieur.",
    details: {
      dimensions: "30cm x 20cm",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés"
    },
    isNew: true,
    isBestseller: true,
    couleursDisponibles: ["Terracotta", "Beige", "Ocre"]
  },
  {
    id: "plateau-002",
    slug: "plateau-moutarde-moyen",
    name: "Plateau Moutarde Moyen",
    price: 38.00,
    category: "plateaux",
    image: "/images/plateaux-02.svg",
    description: "Plateau moyen couleur moutarde pour une touche de couleur chaleureuse.",
    details: {
      dimensions: "25cm x 15cm",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés"
    },
    isBestseller: true,
    couleursDisponibles: ["Moutarde", "Ocre"]
  },
  {
    id: "plateau-003",
    slug: "plateau-beige-petit",
    name: "Plateau Beige Petit",
    price: 28.00,
    category: "plateaux",
    image: "/images/plateaux-03.svg",
    description: "Petit plateau beige épuré, idéal pour bijoux ou petits objets.",
    details: {
      dimensions: "15cm x 10cm",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés"
    },
    couleursDisponibles: ["Beige", "Blanc cassé"]
  },
  {
    id: "cendrier-001",
    slug: "cendrier-terracotta",
    name: "Cendrier Terracotta",
    price: 22.00,
    category: "cendriers",
    image: "/images/cendrier-01.svg",
    description: "Cendrier en jesmonite terracotta au design épuré.",
    details: {
      dimensions: "12cm diamètre",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés"
    },
    isNew: true,
    couleursDisponibles: ["Terracotta", "Noir", "Blanc"]
  },
  {
    id: "cendrier-002",
    slug: "cendrier-marbré",
    name: "Cendrier Marbré",
    price: 25.00,
    category: "cendriers",
    image: "/images/cendrier-02.svg",
    description: "Cendrier avec effet marbré unique, chaque pièce est différente.",
    details: {
      dimensions: "12cm diamètre",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés"
    },
    couleursDisponibles: ["Marbré beige", "Marbré gris"]
  },
  {
    id: "porta-sabon-001",
    slug: "porte-savon-bleu",
    name: "Porte-Savon Bleu",
    price: 18.00,
    category: "porta-sabon",
    image: "/images/porta-sabon-bleu.svg",
    description: "Porte-savon avec détails bleus, design moderne et fonctionnel.",
    details: {
      dimensions: "11cm x 8cm",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés"
    },
    isBestseller: true,
    couleursDisponibles: ["Bleu", "Terracotta", "Rose"]
  },
  {
    id: "porta-sabon-002",
    slug: "porte-savon-terracotta",
    name: "Porte-Savon Terracotta",
    price: 18.00,
    category: "porta-sabon",
    image: "/images/porta-sabon-terracotta.svg",
    description: "Porte-savon couleur terracotta pour une salle de bain chaleureuse.",
    details: {
      dimensions: "11cm x 8cm",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés"
    },
    couleursDisponibles: ["Terracotta", "Ocre"]
  },
  {
    id: "statue-001",
    slug: "statue-corps-feminin",
    name: "Statue Corps Féminin",
    price: 55.00,
    category: "statues",
    image: "/images/statue-01.svg",
    description: "Sculpture abstraite inspirée du corps féminin, pièce décorative unique.",
    details: {
      dimensions: "20cm hauteur",
      materiau: "Jesmonite",
      delai: "7-10 jours ouvrés"
    },
    isNew: true,
    couleursDisponibles: ["Blanc", "Beige", "Terracotta"]
  },
  {
    id: "statue-002",
    slug: "statue-visage-abstrait",
    name: "Statue Visage Abstrait",
    price: 48.00,
    category: "statues",
    image: "/images/statue-02.svg",
    description: "Visage stylisé en jesmonite, art contemporain pour votre décoration.",
    details: {
      dimensions: "18cm hauteur",
      materiau: "Jesmonite",
      delai: "7-10 jours ouvrés"
    },
    couleursDisponibles: ["Blanc", "Noir"]
  },
  {
    id: "autre-001",
    slug: "bougeoir-double",
    name: "Bougeoir Double",
    price: 32.00,
    category: "autres",
    image: "/images/autre-01.svg",
    description: "Bougeoir pour deux bougies, design minimaliste et élégant.",
    details: {
      dimensions: "15cm x 8cm",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés"
    },
    couleursDisponibles: ["Beige", "Terracotta"]
  },
  {
    id: "autre-002",
    slug: "vide-poche-rond",
    name: "Vide-Poche Rond",
    price: 24.00,
    category: "autres",
    image: "/images/autre-02.svg",
    description: "Petit vide-poche rond pour l'entrée ou la chambre.",
    details: {
      dimensions: "14cm diamètre",
      materiau: "Jesmonite",
      delai: "5-7 jours ouvrés"
    },
    couleursDisponibles: ["Moutarde", "Terracotta", "Blanc"]
  }
];

/**
 * Récupère tous les produits
 */
export const getAllProducts = (): Product[] => {
  return products;
};

/**
 * Récupère un produit par son slug
 */
export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(product => product.slug === slug);
};

/**
 * Récupère les produits par catégorie
 */
export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category === category);
};

/**
 * Récupère les produits phares (nouveaux et bestsellers)
 */
export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.isNew || product.isBestseller).slice(0, 4);
};

/**
 * Récupère des produits similaires (même catégorie)
 */
export const getSimilarProducts = (productId: string, category: string, limit: number = 3): Product[] => {
  return products
    .filter(product => product.category === category && product.id !== productId)
    .slice(0, limit);
};
