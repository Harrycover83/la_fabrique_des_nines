import Link from "next/link";
import { Instagram } from "lucide-react";

/**
 * Composant Footer avec liens et mentions légales
 */
export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Colonne 1 : À propos */}
          <div>
            <h3 className="text-xl font-serif font-bold mb-4">
              La fabrique des nines
            </h3>
            <p className="text-sm text-background/80">
              Objets de décoration faits main en jesmonite, conçus avec passion
              en France.
            </p>
            <div className="mt-4 flex items-center gap-2">
              <span className="text-secondary text-sm font-medium">
                ✨ Fait main en France
              </span>
            </div>
          </div>

          {/* Colonne 2 : Liens rapides */}
          <div>
            <h4 className="font-semibold mb-4">Liens rapides</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/boutique"
                  className="text-background/80 hover:text-secondary transition-colors"
                >
                  Boutique
                </Link>
              </li>
              <li>
                <Link
                  href="/a-propos"
                  className="text-background/80 hover:text-secondary transition-colors"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-background/80 hover:text-secondary transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-background/80 hover:text-secondary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Colonne 3 : Suivez-nous */}
          <div>
            <h4 className="font-semibold mb-4">Suivez-nous</h4>
            <a
              href="https://www.instagram.com/la_fabrique_des_nines_"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-background/80 hover:text-secondary transition-colors"
            >
              <Instagram className="w-5 h-5" />
              <span className="text-sm">@la_fabrique_des_nines_</span>
            </a>
          </div>
        </div>

        {/* Bas du footer */}
        <div className="mt-12 pt-8 border-t border-background/20 text-center text-sm text-background/60">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4">
            <Link
              href="/mentions-legales"
              className="hover:text-secondary transition-colors"
            >
              Mentions légales
            </Link>
            <span className="hidden md:inline">•</span>
            <Link
              href="/politique-confidentialite"
              className="hover:text-secondary transition-colors"
            >
              Politique de confidentialité
            </Link>
            <span className="hidden md:inline">•</span>
            <span>© {new Date().getFullYear()} La fabrique des nines</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
