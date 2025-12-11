'use client';

import Link from 'next/link';
import { useState } from 'react';
import Cart from './Cart';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <header className="bg-artisan-warm border-b border-artisan-sand sticky top-0 z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="text-2xl md:text-3xl font-serif text-artisan-clay hover:text-artisan-terracotta transition-colors">
            La Fabrique des Nines
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-artisan-charcoal hover:text-artisan-terracotta transition-colors">
              Accueil
            </Link>
            <Link href="/boutique" className="text-artisan-charcoal hover:text-artisan-terracotta transition-colors">
              Boutique
            </Link>
            <Link href="/a-propos" className="text-artisan-charcoal hover:text-artisan-terracotta transition-colors">
              À Propos
            </Link>
            <Link href="/contact" className="text-artisan-charcoal hover:text-artisan-terracotta transition-colors">
              Contact
            </Link>
            <button 
              onClick={() => setIsCartOpen(true)}
              className="relative text-artisan-charcoal hover:text-artisan-terracotta transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={() => setIsCartOpen(true)}
              className="text-artisan-charcoal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-artisan-charcoal"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-artisan-sand pt-4">
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-artisan-charcoal hover:text-artisan-terracotta transition-colors" onClick={() => setIsMenuOpen(false)}>
                Accueil
              </Link>
              <Link href="/boutique" className="text-artisan-charcoal hover:text-artisan-terracotta transition-colors" onClick={() => setIsMenuOpen(false)}>
                Boutique
              </Link>
              <Link href="/a-propos" className="text-artisan-charcoal hover:text-artisan-terracotta transition-colors" onClick={() => setIsMenuOpen(false)}>
                À Propos
              </Link>
              <Link href="/contact" className="text-artisan-charcoal hover:text-artisan-terracotta transition-colors" onClick={() => setIsMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </div>
        )}
      </nav>
      
      <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
    </header>
  );
}
