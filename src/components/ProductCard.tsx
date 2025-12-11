import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types/product";

interface ProductCardProps {
  product: Product;
}

/**
 * Composant carte produit
 * Affiche une vignette de produit avec image, titre, prix et badges
 */
export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link
      href={`/produits/${product.slug}`}
      className="group block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
    >
      {/* Image */}
      <div className="relative aspect-square overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-accent text-white text-xs font-semibold px-3 py-1 rounded-full">
              Nouveau
            </span>
          )}
          {product.isBestseller && (
            <span className="bg-secondary text-white text-xs font-semibold px-3 py-1 rounded-full">
              Best-seller
            </span>
          )}
        </div>
      </div>

      {/* Infos */}
      <div className="p-4">
        <h3 className="font-serif text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-primary font-bold text-xl">{product.price} €</p>
      </div>
    </Link>
  );
}
