"use client";

import { useState } from "react";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";

const categories = [
  { value: "all", label: "Tous les produits" },
  { value: "plateaux", label: "Plateaux" },
  { value: "cendriers", label: "Cendriers" },
  { value: "porta-sabon", label: "Porte-savons" },
  { value: "statues", label: "Statues" },
  { value: "autres", label: "Autres" },
];

/**
 * Page Boutique avec filtres par catégorie et prix
 */
export default function BoutiquePage() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100);

  // Filtrer les produits
  const filteredProducts = products.filter((product) => {
    const categoryMatch =
      selectedCategory === "all" || product.category === selectedCategory;
    const priceMatch =
      product.price >= minPrice && product.price <= maxPrice;
    return categoryMatch && priceMatch;
  });

  return (
    <div className="container mx-auto px-4 py-12">
      {/* En-tête */}
      <div className="text-center mb-12">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-foreground mb-4">
          Notre boutique
        </h1>
        <p className="text-text-secondary text-lg">
          Découvrez tous nos objets de décoration faits main
        </p>
      </div>

      {/* Filtres */}
      <div className="bg-white rounded-xl p-6 mb-8 shadow-sm">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Filtre par catégorie */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Catégorie
            </label>
            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.value}
                  onClick={() => setSelectedCategory(cat.value)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === cat.value
                      ? "bg-primary text-white"
                      : "bg-gray-100 text-foreground hover:bg-gray-200"
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Filtre par prix */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Prix (€)
            </label>
            <div className="flex items-center gap-4">
              <div className="flex-1">
                <label className="text-xs text-text-secondary mb-1 block">
                  Minimum
                </label>
                <input
                  type="number"
                  min="0"
                  max="100"
                  value={minPrice}
                  onChange={(e) => setMinPrice(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs text-text-secondary mb-1 block">
                  Maximum
                </label>
                <input
                  type="number"
                  min="0"
                  max="200"
                  value={maxPrice}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Résultats */}
      <div className="mb-6">
        <p className="text-text-secondary">
          {filteredProducts.length} produit{filteredProducts.length > 1 ? "s" : ""} trouvé{filteredProducts.length > 1 ? "s" : ""}
        </p>
      </div>

      {/* Grille de produits */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-text-secondary text-lg">
            Aucun produit ne correspond à vos critères de recherche.
          </p>
        </div>
      )}
    </div>
  );
}
