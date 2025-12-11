'use client';

/**
 * Page de succès après paiement
 * 
 * Affichée après un paiement réussi sur Stripe
 */

import { useEffect } from 'react';
import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { CheckCircle } from 'lucide-react';

export default function SuccessPage() {
  const { clearCart } = useCart();

  // Vider le panier après un achat réussi
  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="container mx-auto px-4 py-20">
      <div className="max-w-2xl mx-auto text-center">
        <CheckCircle className="w-24 h-24 text-green-500 mx-auto mb-6" />
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold text-text-primary mb-4">
          Merci pour votre commande !
        </h1>
        
        <p className="text-text-secondary text-lg mb-8">
          Votre paiement a été effectué avec succès. Vous allez recevoir un email de confirmation 
          avec les détails de votre commande et les informations de livraison.
        </p>

        <div className="bg-white rounded-xl p-8 shadow-sm mb-8">
          <h2 className="font-serif text-2xl font-semibold text-text-primary mb-4">
            Et maintenant ?
          </h2>
          <ul className="text-left space-y-3 text-text-secondary">
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>
                Nous préparons votre commande avec soin. Chaque pièce étant faite main, 
                comptez 5 à 10 jours ouvrés pour la fabrication.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>
                Vous recevrez un email de confirmation avec un numéro de suivi dès l&apos;expédition 
                de votre colis.
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary mr-2">✓</span>
              <span>
                En cas de question, n&apos;hésitez pas à nous contacter via notre page de contact 
                ou sur Instagram.
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/boutique" className="btn-primary">
            Continuer mes achats
          </Link>
          <Link href="/" className="btn-secondary">
            Retour à l&apos;accueil
          </Link>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-text-secondary">
            Suivez-nous sur{' '}
            <a
              href="https://www.instagram.com/la_fabrique_des_nines_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline font-semibold"
            >
              Instagram
            </a>
            {' '}pour découvrir nos nouvelles créations
          </p>
        </div>
      </div>
    </div>
  );
}
