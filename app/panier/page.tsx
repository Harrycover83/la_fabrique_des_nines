'use client';

/**
 * Page Panier
 * 
 * Affiche:
 * - Liste des articles dans le panier
 * - Boutons pour ajuster les quantités
 * - Total
 * - Bouton pour procéder au paiement
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function PanierPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCheckout = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items: items.map(item => ({
            productId: item.product.id,
            name: item.product.name,
            price: item.product.price,
            quantity: item.quantity,
            image: item.product.image,
            color: item.selectedColor,
          })),
        }),
      });

      const data = await response.json();
      
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.error('Erreur lors de la création de la session de paiement');
        setIsLoading(false);
      }
    } catch (error) {
      console.error('Erreur:', error);
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <ShoppingBag className="w-24 h-24 mx-auto text-gray-300 mb-6" />
        <h1 className="font-serif text-4xl font-bold text-text-primary mb-4">
          Votre panier est vide
        </h1>
        <p className="text-text-secondary mb-8">
          Découvrez nos créations uniques et ajoutez-les à votre panier !
        </p>
        <Link href="/boutique" className="btn-primary">
          Découvrir la boutique
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="font-serif text-4xl font-bold text-text-primary mb-8">
        Votre panier
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Liste des articles */}
        <div className="lg:col-span-2 space-y-4">
          {items.map(item => (
            <div key={`${item.product.id}-${item.selectedColor}`} className="bg-white rounded-xl p-6 shadow-sm">
              <div className="flex gap-6">
                {/* Image */}
                <div className="relative w-32 h-32 flex-shrink-0 bg-gray-100 rounded-lg overflow-hidden">
                  <Image
                    src={item.product.image}
                    alt={item.product.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Informations */}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-serif text-xl font-semibold text-text-primary">
                        {item.product.name}
                      </h3>
                      {item.selectedColor && (
                        <p className="text-text-secondary text-sm">
                          Couleur: {item.selectedColor}
                        </p>
                      )}
                    </div>
                    <button
                      onClick={() => removeItem(item.product.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                      aria-label="Supprimer du panier"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantité */}
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        aria-label="Diminuer la quantité"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="text-lg font-semibold w-8 text-center">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center"
                        aria-label="Augmenter la quantité"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Prix */}
                    <div className="text-right">
                      <div className="text-sm text-text-secondary">
                        {item.product.price.toFixed(2)} € × {item.quantity}
                      </div>
                      <div className="text-xl font-bold text-primary">
                        {(item.product.price * item.quantity).toFixed(2)} €
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Bouton vider le panier */}
          <button
            onClick={clearCart}
            className="text-red-500 hover:text-red-700 transition-colors text-sm"
          >
            Vider le panier
          </button>
        </div>

        {/* Récapitulatif */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
            <h2 className="font-serif text-2xl font-semibold text-text-primary mb-6">
              Récapitulatif
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-text-secondary">
                <span>Sous-total</span>
                <span>{totalPrice.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between text-text-secondary">
                <span>Livraison</span>
                <span>Calculée à l&apos;étape suivante</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span className="text-primary">{totalPrice.toFixed(2)} €</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="btn-primary w-full text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Chargement...' : 'Procéder au paiement'}
            </button>

            <Link
              href="/boutique"
              className="block text-center text-primary hover:underline mt-4"
            >
              Continuer mes achats
            </Link>

            {/* Informations de sécurité */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-xs text-text-secondary text-center">
                🔒 Paiement sécurisé par Stripe
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
