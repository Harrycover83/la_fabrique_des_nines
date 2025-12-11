"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { Trash2 } from "lucide-react";
import { useState } from "react";

/**
 * Page Panier
 */
export default function PanierPage() {
  const { items, removeItem, updateQuantity, totalPrice } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    setIsLoading(true);

    try {
      // Appeler l'API pour créer une session Stripe Checkout
      const response = await fetch("/api/create-checkout-session", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items }),
      });

      const { url } = await response.json();

      if (url) {
        // Rediriger vers Stripe Checkout
        window.location.href = url;
      } else {
        alert("Erreur lors de la création de la session de paiement");
      }
    } catch (error) {
      console.error("Erreur:", error);
      alert("Une erreur s'est produite");
    } finally {
      setIsLoading(false);
    }
  };

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-md mx-auto text-center">
          <h1 className="text-4xl font-serif font-bold text-foreground mb-4">
            Votre panier est vide
          </h1>
          <p className="text-text-secondary mb-8">
            Découvrez nos créations uniques
          </p>
          <Link
            href="/boutique"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Découvrir la boutique
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-8">
        Votre panier
      </h1>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Liste des articles */}
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div
              key={`${item.product.id}-${item.selectedColor}`}
              className="bg-white rounded-lg p-4 flex gap-4"
            >
              {/* Image */}
              <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                <Image
                  src={item.product.image}
                  alt={item.product.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Détails */}
              <div className="flex-1">
                <Link
                  href={`/produits/${item.product.slug}`}
                  className="font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {item.product.name}
                </Link>
                {item.selectedColor && (
                  <p className="text-sm text-text-secondary mt-1">
                    Couleur : {item.selectedColor}
                  </p>
                )}
                <p className="text-primary font-bold mt-2">
                  {item.product.price} €
                </p>
              </div>

              {/* Quantité */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity - 1)
                  }
                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  -
                </button>
                <span className="font-semibold w-8 text-center">
                  {item.quantity}
                </span>
                <button
                  onClick={() =>
                    updateQuantity(item.product.id, item.quantity + 1)
                  }
                  className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                >
                  +
                </button>
              </div>

              {/* Supprimer */}
              <button
                onClick={() => removeItem(item.product.id)}
                className="text-red-500 hover:text-red-600 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>

        {/* Récapitulatif */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-lg p-6 sticky top-24">
            <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
              Récapitulatif
            </h2>

            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-text-secondary">Sous-total</span>
                <span className="font-semibold">{totalPrice.toFixed(2)} €</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Livraison</span>
                <span className="font-semibold">Calculée à l'étape suivante</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mb-6">
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">Total</span>
                <span className="text-2xl font-bold text-primary">
                  {totalPrice.toFixed(2)} €
                </span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed mb-4"
            >
              {isLoading ? "Chargement..." : "Procéder au paiement"}
            </button>

            <Link
              href="/boutique"
              className="block text-center text-primary font-medium hover:underline"
            >
              Continuer mes achats
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
