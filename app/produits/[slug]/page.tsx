'use client';

/**
 * Page détail produit
 * 
 * Affiche:
 * - Image du produit
 * - Informations (titre, prix, description, détails)
 * - Sélecteur de couleur (si disponible)
 * - Bouton d'ajout au panier
 * - Produits similaires
 */

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useCart } from '@/lib/CartContext';
import { getProductBySlug, getSimilarProducts } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { ShoppingCart, Check } from 'lucide-react';

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const { addItem } = useCart();
  
  const product = getProductBySlug(slug);
  const [selectedColor, setSelectedColor] = useState<string>(
    product?.couleursDisponibles?.[0] || ''
  );
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-serif text-4xl font-bold text-text-primary mb-4">
          Produit introuvable
        </h1>
        <p className="text-text-secondary mb-8">
          Le produit que vous recherchez n&apos;existe pas ou a été supprimé.
        </p>
        <Link href="/boutique" className="btn-primary">
          Retour à la boutique
        </Link>
      </div>
    );
  }

  const similarProducts = getSimilarProducts(product.id, product.category);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Fil d'Ariane */}
      <nav className="mb-8 text-sm">
        <Link href="/" className="text-text-secondary hover:text-primary">
          Accueil
        </Link>
        <span className="mx-2 text-text-secondary">/</span>
        <Link href="/boutique" className="text-text-secondary hover:text-primary">
          Boutique
        </Link>
        <span className="mx-2 text-text-secondary">/</span>
        <span className="text-text-primary">{product.name}</span>
      </nav>

      {/* Contenu principal */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Image */}
        <div className="relative aspect-square bg-gray-100 rounded-2xl overflow-hidden">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          
          {/* Badges */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            {product.isNew && (
              <span className="bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full">
                Nouveau
              </span>
            )}
            {product.isBestseller && (
              <span className="bg-secondary text-text-primary text-sm font-semibold px-4 py-2 rounded-full">
                Best-seller
              </span>
            )}
          </div>
        </div>

        {/* Informations */}
        <div>
          <h1 className="font-serif text-4xl font-bold text-text-primary mb-4">
            {product.name}
          </h1>
          
          <div className="text-3xl font-bold text-primary mb-6">
            {product.price.toFixed(2)} €
          </div>

          <p className="text-text-secondary text-lg mb-8">
            {product.description}
          </p>

          {/* Sélecteur de couleur */}
          {product.couleursDisponibles && product.couleursDisponibles.length > 0 && (
            <div className="mb-6">
              <h3 className="font-semibold text-text-primary mb-3">
                Couleur: {selectedColor}
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.couleursDisponibles.map(color => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-lg transition-all ${
                      selectedColor === color
                        ? 'bg-primary text-white shadow-lg'
                        : 'bg-gray-100 text-text-primary hover:bg-gray-200'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantité */}
          <div className="mb-8">
            <h3 className="font-semibold text-text-primary mb-3">Quantité</h3>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-semibold"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center font-semibold"
              >
                +
              </button>
            </div>
          </div>

          {/* Bouton ajout panier */}
          <button
            onClick={handleAddToCart}
            className="btn-primary w-full md:w-auto flex items-center justify-center gap-2 text-lg mb-8"
          >
            {addedToCart ? (
              <>
                <Check className="w-5 h-5" />
                Ajouté au panier !
              </>
            ) : (
              <>
                <ShoppingCart className="w-5 h-5" />
                Ajouter au panier
              </>
            )}
          </button>

          {/* Détails */}
          <div className="border-t border-gray-200 pt-8">
            <h3 className="font-serif text-2xl font-semibold text-text-primary mb-4">
              Détails
            </h3>
            <dl className="space-y-3">
              {product.details.dimensions && (
                <div>
                  <dt className="text-text-secondary inline">Dimensions:</dt>
                  <dd className="text-text-primary inline ml-2 font-medium">
                    {product.details.dimensions}
                  </dd>
                </div>
              )}
              {product.details.materiau && (
                <div>
                  <dt className="text-text-secondary inline">Matériau:</dt>
                  <dd className="text-text-primary inline ml-2 font-medium">
                    {product.details.materiau}
                  </dd>
                </div>
              )}
              {product.details.delai && (
                <div>
                  <dt className="text-text-secondary inline">Délai de fabrication:</dt>
                  <dd className="text-text-primary inline ml-2 font-medium">
                    {product.details.delai}
                  </dd>
                </div>
              )}
            </dl>
          </div>
        </div>
      </div>

      {/* Produits similaires */}
      {similarProducts.length > 0 && (
        <section>
          <h2 className="font-serif text-3xl font-bold text-text-primary mb-8">
            Vous aimerez aussi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {similarProducts.map(similarProduct => (
              <ProductCard key={similarProduct.id} product={similarProduct} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
