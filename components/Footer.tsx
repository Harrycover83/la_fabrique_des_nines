/**
 * Footer - Pied de page du site
 * 
 * Contient:
 * - Liens vers les pages importantes
 * - Lien Instagram
 * - Mention "Fait main en France"
 */

import Link from 'next/link';
import { Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* À propos */}
          <div>
            <h3 className="font-serif text-xl font-semibold mb-4 text-text-primary">
              La Fabrique des Nines
            </h3>
            <p className="text-text-secondary text-sm mb-4">
              Objets de décoration en jesmonite faits main en France avec passion et créativité.
            </p>
            <div className="flex items-center space-x-2 text-primary font-medium">
              <span className="text-2xl">🇫🇷</span>
              <span>Fait main en France</span>
            </div>
          </div>

          {/* Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Liens rapides</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/boutique" className="text-text-secondary hover:text-primary transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-text-secondary hover:text-primary transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-text-secondary hover:text-primary transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-text-secondary hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales et réseaux sociaux */}
          <div>
            <h4 className="font-semibold mb-4 text-text-primary">Informations</h4>
            <ul className="space-y-2 mb-4">
              <li>
                <Link href="/mentions-legales" className="text-text-secondary hover:text-primary transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="/politique-confidentialite" className="text-text-secondary hover:text-primary transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
            
            {/* Instagram */}
            <a
              href="https://www.instagram.com/la_fabrique_des_nines_/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg transition-all"
            >
              <Instagram className="w-5 h-5" />
              <span>Suivez-nous</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 mt-8 pt-8 text-center text-text-secondary text-sm">
          <p>© {new Date().getFullYear()} La Fabrique des Nines. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
