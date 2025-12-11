'use client';

/**
 * Header - Navigation principale du site
 * 
 * Contient:
 * - Logo "La Fabrique des Nines"
 * - Menu de navigation
 * - Icône de panier avec nombre d'articles
 */

import Link from 'next/link';
import { useCart } from '@/lib/CartContext';
import { ShoppingCart } from 'lucide-react';

const Header = () => {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-serif font-bold text-text-primary hover:text-primary transition-colors">
            La fabrique des nines
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-text-primary hover:text-primary transition-colors font-medium">
              Accueil
            </Link>
            <Link href="/boutique" className="text-text-primary hover:text-primary transition-colors font-medium">
              Boutique
            </Link>
            <Link href="/a-propos" className="text-text-primary hover:text-primary transition-colors font-medium">
              À propos
            </Link>
            <Link href="/contact" className="text-text-primary hover:text-primary transition-colors font-medium">
              Contact
            </Link>
          </nav>

          {/* Panier */}
          <Link href="/panier" className="relative group">
            <div className="flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all">
              <ShoppingCart className="w-5 h-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Menu mobile */}
        <nav className="md:hidden flex justify-center space-x-4 mt-4 border-t pt-4">
          <Link href="/" className="text-sm text-text-primary hover:text-primary transition-colors">
            Accueil
          </Link>
          <Link href="/boutique" className="text-sm text-text-primary hover:text-primary transition-colors">
            Boutique
          </Link>
          <Link href="/a-propos" className="text-sm text-text-primary hover:text-primary transition-colors">
            À propos
          </Link>
          <Link href="/contact" className="text-sm text-text-primary hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
