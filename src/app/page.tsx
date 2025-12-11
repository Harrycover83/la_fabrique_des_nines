import Image from "next/image";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

/**
 * Page d'accueil - Landing page de La Fabrique des Nines
 */
export default function HomePage() {
  // Récupérer les 4 premiers produits pour les produits phares
  const featuredProducts = products.slice(0, 4);

  return (
    <div className="min-h-screen">
      {/* Section Hero */}
      <section className="relative h-[600px] md:h-[700px] flex items-center justify-center">
        {/* Image de fond avec overlay */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-plateau.jpg"
            alt="Hero plateau"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 to-background/40" />
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold font-serif text-foreground mb-4">
            La fabrique des nines
          </h1>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Objets de décoration faits main en jesmonite
          </p>
          <Link
            href="/boutique"
            className="inline-block bg-primary text-white px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors shadow-lg"
          >
            Découvrir la boutique
          </Link>
        </div>
      </section>

      {/* Section Produits phares */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Produits phares
          </h2>
          <p className="text-text-secondary text-lg">
            Découvrez notre sélection d&apos;objets uniques
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/boutique"
            className="inline-block border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            Voir tous les produits
          </Link>
        </div>
      </section>

      {/* Section L'univers de la fabrique */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image
                src="/images/atelier.jpg"
                alt="L'atelier de fabrication"
                fill
                className="object-cover"
              />
            </div>

            <div>
              <h2 className="text-4xl font-serif font-bold text-foreground mb-6">
                L&apos;univers de la fabrique
              </h2>
              <p className="text-text-secondary mb-4 leading-relaxed">
                Chaque pièce est créée à la main avec passion et attention dans
                notre atelier en France. Nous utilisons la jesmonite, un
                matériau écologique et durable, pour donner vie à des objets
                uniques.
              </p>
              <p className="text-text-secondary mb-6 leading-relaxed">
                Notre inspiration puise dans les formes organiques, les textures
                naturelles et les couleurs douces de la terre. Chaque création
                est une invitation à la sérénité et à l&apos;authenticité.
              </p>
              <Link
                href="/a-propos"
                className="inline-block text-primary font-semibold hover:underline"
              >
                En savoir plus →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Section Vu sur Instagram */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Vu sur Instagram
          </h2>
          <p className="text-text-secondary text-lg">
            Suivez nos créations et coulisses sur @la_fabrique_des_nines_
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
            >
              <Image
                src={`/images/instagram-${i}.jpg`}
                alt={`Instagram post ${i}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="https://www.instagram.com/la_fabrique_des_nines_"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            Voir plus sur Instagram
          </a>
        </div>
      </section>
    </div>
  );
}
