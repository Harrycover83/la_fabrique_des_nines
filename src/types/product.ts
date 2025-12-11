/**
 * Type pour les produits de La Fabrique des Nines
 */
export interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  category: "plateaux" | "cendriers" | "porta-sabon" | "statues" | "autres";
  image: string;
  description: string;
  details: {
    dimensions?: string;
    materiau?: string;
    delai?: string;
  };
  isNew?: boolean;
  isBestseller?: boolean;
  couleursDisponibles?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
}
