"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

/**
 * Page de détail produit
 */
export default async function ProductPage({ params }: ProductPageProps) {
  const resolvedParams = await params;
  const product = getProductBySlug(resolvedParams.slug);

  if (!product) {
    notFound();
  }

  // Récupérer des produits suggestions (même catégorie)
  const suggestions = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return <ProductPageClient product={product} suggestions={suggestions} />;
}

/**
 * Composant client pour gérer les interactions
 */
function ProductPageClient({
  product,
  suggestions,
}: {
  product: any;
  suggestions: any[];
}) {
  const { addItem } = useCart();
  const [selectedColor, setSelectedColor] = useState(
    product.couleursDisponibles?.[0] || ""
  );
  const [quantity, setQuantity] = useState(1);
  const [addedToCart, setAddedToCart] = useState(false);

  const handleAddToCart = () => {
    addItem(product, quantity, selectedColor);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Fil d'Ariane */}
      <div className="flex items-center gap-2 text-sm text-text-secondary mb-8">
        <Link href="/" className="hover:text-primary transition-colors">
          Accueil
        </Link>
        <span>/</span>
        <Link href="/boutique" className="hover:text-primary transition-colors">
          Boutique
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </div>

      {/* Produit */}
      <div className="grid md:grid-cols-2 gap-12 mb-20">
        {/* Image */}
        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            priority
          />
          {product.isNew && (
            <span className="absolute top-4 left-4 bg-accent text-white text-sm font-semibold px-4 py-2 rounded-full">
              Nouveau
            </span>
          )}
          {product.isBestseller && (
            <span className="absolute top-4 right-4 bg-secondary text-white text-sm font-semibold px-4 py-2 rounded-full">
              Best-seller
            </span>
          )}
        </div>

        {/* Détails */}
        <div>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-primary mb-6">
            {product.price} €
          </p>

          <p className="text-text-secondary leading-relaxed mb-8">
            {product.description}
          </p>

          {/* Sélecteur de couleur */}
          {product.couleursDisponibles &&
            product.couleursDisponibles.length > 0 && (
              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Couleur
                </label>
                <div className="flex gap-2">
                  {product.couleursDisponibles.map((color: string) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        selectedColor === color
                          ? "bg-primary text-white"
                          : "bg-gray-100 text-foreground hover:bg-gray-200"
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
            <label className="block text-sm font-semibold text-foreground mb-3">
              Quantité
            </label>
            <div className="flex items-center gap-4">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-semibold w-12 text-center">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          {/* Bouton ajouter au panier */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-primary text-white py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors mb-4"
          >
            {addedToCart ? "✓ Ajouté au panier" : "Ajouter au panier"}
          </button>

          {/* Détails du produit */}
          <div className="bg-white rounded-lg p-6 space-y-3">
            <h3 className="font-serif text-xl font-semibold mb-4">Détails</h3>
            {product.details.dimensions && (
              <div className="flex justify-between">
                <span className="text-text-secondary">Dimensions</span>
                <span className="font-medium">{product.details.dimensions}</span>
              </div>
            )}
            {product.details.materiau && (
              <div className="flex justify-between">
                <span className="text-text-secondary">Matériau</span>
                <span className="font-medium">{product.details.materiau}</span>
              </div>
            )}
            {product.details.delai && (
              <div className="flex justify-between">
                <span className="text-text-secondary">Délai de fabrication</span>
                <span className="font-medium">{product.details.delai}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Produits similaires */}
      {suggestions.length > 0 && (
        <section>
          <h2 className="text-3xl font-serif font-bold text-foreground mb-8">
            Vous aimerez aussi
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {suggestions.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
