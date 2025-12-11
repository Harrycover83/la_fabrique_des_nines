import Link from 'next/link';
import ProductCard from '@/components/ProductCard';

// Mock data for featured products
const featuredProducts = [
  {
    id: '1',
    name: 'Panier en Osier Naturel',
    price: 45.00,
    image: '/images/product-1.jpg',
    description: 'Panier artisanal tressé à la main',
  },
  {
    id: '2',
    name: 'Poterie Terre Cuite',
    price: 38.00,
    image: '/images/product-2.jpg',
    description: 'Vase en terre cuite fait main',
  },
  {
    id: '3',
    name: 'Couverture en Laine',
    price: 89.00,
    image: '/images/product-3.jpg',
    description: 'Plaid en laine naturelle tissée',
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-artisan-warm texture-paper py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-serif text-artisan-clay mb-6">
              Créations Artisanales
              <span className="block text-artisan-terracotta mt-2 handwritten text-3xl md:text-5xl">
                Faites avec Passion
              </span>
            </h1>
            <p className="text-lg md:text-xl text-artisan-charcoal mb-8 leading-relaxed">
              Découvrez nos pièces uniques, confectionnées à la main avec des matériaux naturels
              et un savoir-faire transmis de génération en génération.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/boutique"
                className="bg-artisan-terracotta text-white px-8 py-3 rounded-lg hover:bg-artisan-clay transition-colors font-medium"
              >
                Découvrir la Boutique
              </Link>
              <Link 
                href="/a-propos"
                className="border-2 border-artisan-terracotta text-artisan-terracotta px-8 py-3 rounded-lg hover:bg-artisan-terracotta hover:text-white transition-colors font-medium"
              >
                Notre Histoire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-serif text-artisan-clay mb-4">
              Nos Créations
            </h2>
            <p className="text-artisan-charcoal max-w-2xl mx-auto">
              Chaque pièce est unique et raconte une histoire. Découvrez notre sélection
              de produits artisanaux faits avec amour.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/boutique"
              className="inline-block border-2 border-artisan-terracotta text-artisan-terracotta px-8 py-3 rounded-lg hover:bg-artisan-terracotta hover:text-white transition-colors font-medium"
            >
              Voir tous les produits
            </Link>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-artisan-sage py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-artisan-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-artisan-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-artisan-clay mb-2">Fait Main</h3>
              <p className="text-artisan-charcoal">
                Chaque création est réalisée avec soin par des artisans passionnés
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-artisan-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-artisan-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-artisan-clay mb-2">Écologique</h3>
              <p className="text-artisan-charcoal">
                Matériaux naturels et durables respectueux de l'environnement
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-artisan-cream rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-artisan-clay" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-serif text-artisan-clay mb-2">Unique</h3>
              <p className="text-artisan-charcoal">
                Des pièces uniques qui ne seront jamais reproduites à l'identique
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
