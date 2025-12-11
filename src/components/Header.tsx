"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { ShoppingCart } from "lucide-react";

/**
 * Composant Header sticky avec navigation principale
 * Inclut le logo, le menu et l'icône panier
 */
export default function Header() {
  const { totalItems } = useCart();

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold text-primary font-serif">
              La fabrique des nines
            </h1>
          </Link>

          {/* Navigation desktop */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Accueil
            </Link>
            <Link
              href="/boutique"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Boutique
            </Link>
            <Link
              href="/a-propos"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </nav>

          {/* Panier */}
          <Link
            href="/panier"
            className="relative flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            <ShoppingCart className="w-6 h-6 text-primary" />
            {totalItems > 0 && (
              <span className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </div>

        {/* Navigation mobile */}
        <nav className="md:hidden flex items-center justify-around mt-4 pt-4 border-t border-primary/10">
          <Link
            href="/"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Accueil
          </Link>
          <Link
            href="/boutique"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Boutique
          </Link>
          <Link
            href="/a-propos"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            À propos
          </Link>
          <Link
            href="/contact"
            className="text-sm text-foreground hover:text-primary transition-colors"
          >
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
