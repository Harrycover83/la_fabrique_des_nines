"use client";

import Link from "next/link";
import { useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { CheckCircle } from "lucide-react";

/**
 * Page de confirmation après paiement réussi
 */
export default function SuccessPage() {
  const { clearCart } = useCart();

  useEffect(() => {
    // Vider le panier après un paiement réussi
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="w-20 h-20 text-green-500" />
        </div>

        <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
          Merci pour votre commande !
        </h1>

        <p className="text-text-secondary text-lg mb-8">
          Votre paiement a été accepté avec succès. Vous allez recevoir un email
          de confirmation avec tous les détails de votre commande.
        </p>

        <div className="bg-white rounded-xl p-6 mb-8">
          <h2 className="font-serif text-2xl font-bold mb-4">Et maintenant ?</h2>
          <div className="space-y-3 text-left">
            <div className="flex items-start gap-3">
              <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                1
              </span>
              <p className="text-text-secondary">
                Nous préparons votre commande avec soin dans notre atelier
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                2
              </span>
              <p className="text-text-secondary">
                Vous recevrez un email avec le numéro de suivi dès l'expédition
              </p>
            </div>
            <div className="flex items-start gap-3">
              <span className="bg-primary text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold">
                3
              </span>
              <p className="text-text-secondary">
                Profitez de vos créations uniques faites main !
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/boutique"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            Continuer mes achats
          </Link>
          <Link
            href="/"
            className="inline-block border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
