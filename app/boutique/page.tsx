import ProductCard from '@/components/ProductCard';

// Mock products data
const products = [
  {
    id: '1',
    name: 'Panier en Osier Naturel',
    price: 45.00,
    image: '/images/product-1.jpg',
    description: 'Panier artisanal tressé à la main avec de l\'osier naturel',
  },
  {
    id: '2',
    name: 'Poterie Terre Cuite',
    price: 38.00,
    image: '/images/product-2.jpg',
    description: 'Vase en terre cuite façonné et cuit au four traditionnel',
  },
  {
    id: '3',
    name: 'Couverture en Laine',
    price: 89.00,
    image: '/images/product-3.jpg',
    description: 'Plaid en laine naturelle tissée à la main',
  },
  {
    id: '4',
    name: 'Bol en Céramique',
    price: 28.00,
    image: '/images/product-4.jpg',
    description: 'Bol artisanal en céramique émaillée',
  },
  {
    id: '5',
    name: 'Coussin en Lin',
    price: 35.00,
    image: '/images/product-5.jpg',
    description: 'Coussin en lin naturel brodé à la main',
  },
  {
    id: '6',
    name: 'Bougie Artisanale',
    price: 22.00,
    image: '/images/product-6.jpg',
    description: 'Bougie parfumée coulée à la main avec cire naturelle',
  },
  {
    id: '7',
    name: 'Tapis Tissé Main',
    price: 125.00,
    image: '/images/product-7.jpg',
    description: 'Tapis en laine tissé selon les techniques traditionnelles',
  },
  {
    id: '8',
    name: 'Set de Table en Lin',
    price: 32.00,
    image: '/images/product-8.jpg',
    description: 'Lot de 4 sets de table en lin naturel',
  },
  {
    id: '9',
    name: 'Vase en Grès',
    price: 52.00,
    image: '/images/product-9.jpg',
    description: 'Vase en grès tourné et émaillé à la main',
  },
];

export default function BoutiquePage() {
  return (
    <div className="bg-artisan-warm min-h-screen">
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-serif text-artisan-clay mb-4">
            Notre Boutique
          </h1>
          <p className="text-lg text-artisan-charcoal max-w-2xl mx-auto">
            Découvrez l'ensemble de nos créations artisanales. Chaque pièce est unique,
            faite à la main avec des matériaux naturels de qualité.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
