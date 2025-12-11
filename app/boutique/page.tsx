'use client';

/**
 * Page Boutique - Liste des produits avec filtres
 * 
 * Fonctionnalités:
 * - Filtrage par catégorie
 * - Filtrage par prix (min/max)
 * - Affichage en grille
 */

import { useState, useMemo } from 'react';
import ProductCard from '@/components/ProductCard';
import { getAllProducts } from '@/data/products';
import { ProductCategory } from '@/types';

const categories: { value: ProductCategory | 'tous'; label: string }[] = [
  { value: 'tous', label: 'Tous les produits' },
  { value: 'plateaux', label: 'Plateaux' },
  { value: 'cendriers', label: 'Cendriers' },
  { value: 'porta-sabon', label: 'Porte-savons' },
  { value: 'statues', label: 'Statues' },
  { value: 'autres', label: 'Autres' },
];

export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState<ProductCategory | 'tous'>('tous');
  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100);

  const allProducts = getAllProducts();

  // Filtrer les produits
  const filteredProducts = useMemo(() => {
    return allProducts.filter(product => {
      const matchesCategory = selectedCategory === 'tous' || product.category === selectedCategory;
      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;
      return matchesCategory && matchesPrice;
    });
  }, [allProducts, selectedCategory, minPrice, maxPrice]);

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-serif text-5xl font-bold text-text-primary mb-4">
          Boutique
        </h1>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto">
          Découvrez tous nos objets de décoration en jesmonite, faits main avec passion
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filtres */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
            <h2 className="font-semibold text-xl mb-6 text-text-primary">Filtres</h2>

            {/* Filtre par catégorie */}
            <div className="mb-6">
              <h3 className="font-semibold text-sm mb-3 text-text-primary">Catégorie</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <button
                    key={cat.value}
                    onClick={() => setSelectedCategory(cat.value)}
                    className={`w-full text-left px-4 py-2 rounded-lg transition-colors ${
                      selectedCategory === cat.value
                        ? 'bg-primary text-white'
                        : 'bg-gray-50 text-text-secondary hover:bg-gray-100'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Filtre par prix */}
            <div>
              <h3 className="font-semibold text-sm mb-3 text-text-primary">Prix</h3>
              <div className="space-y-4">
                <div>
                  <label className="text-sm text-text-secondary mb-1 block">
                    Min: {minPrice}€
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={minPrice}
                    onChange={(e) => setMinPrice(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm text-text-secondary mb-1 block">
                    Max: {maxPrice}€
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                    className="w-full"
                  />
                </div>
              </div>
            </div>

            {/* Réinitialiser les filtres */}
            <button
              onClick={() => {
                setSelectedCategory('tous');
                setMinPrice(0);
                setMaxPrice(100);
              }}
              className="w-full mt-6 text-sm text-primary hover:underline"
            >
              Réinitialiser les filtres
            </button>
          </div>
        </aside>

        {/* Grille de produits */}
        <div className="flex-1">
          <div className="mb-6 text-text-secondary">
            {filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''}
          </div>

          {filteredProducts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-secondary text-lg">
                Aucun produit ne correspond à vos critères de recherche.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('tous');
                  setMinPrice(0);
                  setMaxPrice(100);
                }}
                className="btn-primary mt-4"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
