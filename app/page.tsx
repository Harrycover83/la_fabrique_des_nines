/**
 * Page d'accueil - La Fabrique des Nines
 * 
 * Sections:
 * - Hero avec image de fond
 * - Produits phares
 * - L'univers de la fabrique
 * - Vu sur Instagram
 */

import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { getFeaturedProducts } from "@/data/products";

export default function Home() {
  const featuredProducts = getFeaturedProducts();

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
        {/* Image de fond */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-plateau.svg"
            alt="La Fabrique des Nines"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/80" />
        </div>

        {/* Contenu */}
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl font-bold text-text-primary mb-6">
            La fabrique des nines
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8">
            Objets de décoration faits main en jesmonite
          </p>
          <Link href="/boutique" className="btn-primary inline-block text-lg">
            Découvrir la boutique
          </Link>
        </div>
      </section>

      {/* Produits phares */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-text-primary mb-4">
            Produits phares
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Découvrez notre sélection de pièces uniques, créées avec passion et savoir-faire
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/boutique" className="btn-secondary inline-block">
            Voir tous les produits
          </Link>
        </div>
      </section>

      {/* L'univers de la fabrique */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-serif text-4xl font-bold text-text-primary mb-6">
                  L&apos;univers de la fabrique
                </h2>
                <p className="text-text-secondary text-lg mb-4">
                  Chaque pièce est façonnée à la main avec de la jesmonite, un matériau écologique et durable. 
                  Notre passion pour l&apos;artisanat se reflète dans chaque création.
                </p>
                <p className="text-text-secondary text-lg mb-6">
                  Des plateaux aux statues, en passant par les porte-savons, chaque objet raconte une histoire 
                  et apporte une touche unique à votre intérieur.
                </p>
                <Link href="/a-propos" className="text-primary font-semibold hover:underline">
                  En savoir plus sur notre démarche →
                </Link>
              </div>
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/images/plateaux-01.svg"
                  alt="Atelier La Fabrique des Nines"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vu sur Instagram */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl font-bold text-text-primary mb-4">
            Vu sur Instagram
          </h2>
          <p className="text-text-secondary text-lg">
            Suivez nos créations au quotidien
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {[1, 2, 3, 4, 5, 6].map(i => (
            <a
              key={i}
              href="https://www.instagram.com/la_fabrique_des_nines_/"
              target="_blank"
              rel="noopener noreferrer"
              className="relative aspect-square rounded-lg overflow-hidden group"
            >
              <Image
                src={`/images/instagram-${i}.svg`}
                alt={`Instagram post ${i}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-300"
              />
            </a>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/la_fabrique_des_nines_/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            Voir plus sur Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
