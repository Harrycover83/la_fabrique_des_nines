'use client';

import { useCart, Product } from '@/lib/CartContext';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addToCart } = useCart();

  return (
    <div className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
      <Link href={`/boutique/${product.id}`}>
        <div className="aspect-square bg-artisan-sand flex items-center justify-center overflow-hidden">
          {/* Placeholder image */}
          <div className="w-full h-full bg-gradient-to-br from-artisan-sand to-artisan-cream flex items-center justify-center">
            <svg className="w-20 h-20 text-artisan-clay opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        </div>
      </Link>
      
      <div className="p-6">
        <Link href={`/boutique/${product.id}`}>
          <h3 className="text-xl font-serif text-artisan-clay mb-2 group-hover:text-artisan-terracotta transition-colors">
            {product.name}
          </h3>
        </Link>
        <p className="text-artisan-charcoal text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-medium text-artisan-terracotta">
            {product.price.toFixed(2)} €
          </span>
          <button
            onClick={() => addToCart(product)}
            className="bg-artisan-terracotta text-white px-4 py-2 rounded hover:bg-artisan-clay transition-colors text-sm font-medium"
          >
            Ajouter
          </button>
        </div>
      </div>
    </div>
  );
}
