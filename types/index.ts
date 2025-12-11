/**
 * Types pour La Fabrique des Nines
 */

// Type pour les catégories de produits
export type ProductCategory = 
  | "plateaux" 
  | "cendriers" 
  | "porta-sabon" 
  | "statues" 
  | "autres";

// Type pour les détails d'un produit
export interface ProductDetails {
  dimensions?: string;
  materiau?: string;
  delai?: string;
}

// Type pour un produit
export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: ProductCategory;
  image: string;
  description: string;
  details: ProductDetails;
  isNew?: boolean;
  isBestseller?: boolean;
  couleursDisponibles?: string[];
}

// Type pour un article dans le panier
export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}

// Type pour le contexte du panier
export interface CartContextType {
  items: CartItem[];
  addItem: (product: Product, quantity?: number, selectedColor?: string) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
}

// Type pour les filtres de la boutique
export interface ShopFilters {
  category?: ProductCategory;
  minPrice?: number;
  maxPrice?: number;
}
