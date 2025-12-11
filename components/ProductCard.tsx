/**
 * ProductCard - Carte produit
 * 
 * Affiche une carte produit avec:
 * - Image du produit
 * - Badges (Nouveau, Best-seller)
 * - Titre et prix
 * - Bouton "Voir le produit"
 */

import Image from 'next/image';
import Link from 'next/link';
import { Product } from '@/types';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="card group overflow-hidden">
      {/* Image */}
      <div className="relative aspect-square bg-gray-100 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
              Nouveau
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-secondary text-text-primary text-xs font-semibold px-3 py-1 rounded-full">
              Best-seller
            </span>
          )}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5">
        <h3 className="font-serif text-xl font-semibold text-text-primary mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        
        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-semibold text-primary">
            {product.price.toFixed(2)} €
          </span>
          
          <Link 
            href={`/produits/${product.slug}`}
            className="btn-primary text-sm"
          >
            Voir le produit
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
