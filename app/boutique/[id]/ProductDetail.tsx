'use client';

import { useCart } from '@/lib/CartContext';
import Link from 'next/link';
import { useState } from 'react';
import { productsData } from '@/lib/products';

export default function ProductDetail({ productId }: { productId: string }) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  
  const product = productsData[productId];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-serif text-artisan-clay mb-4">Produit non trouvé</h1>
        <Link href="/boutique" className="text-artisan-terracotta hover:underline">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-artisan-warm min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Breadcrumb */}
        <div className="mb-8 text-sm">
          <Link href="/" className="text-artisan-charcoal hover:text-artisan-terracotta">
            Accueil
          </Link>
          <span className="mx-2 text-artisan-charcoal">/</span>
          <Link href="/boutique" className="text-artisan-charcoal hover:text-artisan-terracotta">
            Boutique
          </Link>
          <span className="mx-2 text-artisan-charcoal">/</span>
          <span className="text-artisan-clay">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="aspect-square bg-gradient-to-br from-artisan-sand to-artisan-cream rounded-lg flex items-center justify-center">
            <svg className="w-32 h-32 text-artisan-clay opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-serif text-artisan-clay mb-4">
              {product.name}
            </h1>
            
            <div className="text-3xl font-medium text-artisan-terracotta mb-6">
              {product.price.toFixed(2)} €
            </div>

            <p className="text-artisan-charcoal leading-relaxed mb-6">
              {product.description}
            </p>

            <div className="border-t border-artisan-sand pt-6 mb-6">
              <h3 className="font-medium text-artisan-clay mb-3">Détails du produit</h3>
              <ul className="space-y-2 text-artisan-charcoal">
                {product.details.map((detail: string, index: number) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-artisan-sage mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-artisan-charcoal">Quantité:</span>
              <div className="flex items-center border border-artisan-sand rounded">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 hover:bg-artisan-sand transition-colors"
                >
                  -
                </button>
                <span className="px-6 py-2 border-x border-artisan-sand">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 hover:bg-artisan-sand transition-colors"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-artisan-terracotta text-white py-4 rounded-lg hover:bg-artisan-clay transition-colors font-medium text-lg mb-4"
            >
              {added ? 'Ajouté au panier ✓' : 'Ajouter au panier'}
            </button>

            <Link 
              href="/boutique"
              className="block text-center text-artisan-charcoal hover:text-artisan-terracotta transition-colors"
            >
              ← Retour à la boutique
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
