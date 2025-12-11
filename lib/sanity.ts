import { createClient } from "next-sanity";
import imageUrlBuilder from "@sanity/image-url";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION!,
  useCdn: false, // `false` si vous voulez toujours les données fraîches
  token: process.env.SANITY_API_TOKEN,
});

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

// Fonction pour récupérer tous les produits
export async function getProducts() {
  return client.fetch(`
    *[_type == "product"] | order(_createdAt desc) {
      _id,
      name,
      "slug": slug.current,
      image,
      price,
      "category": category->slug.current,
      description,
      dimensions,
      materiau,
      delai,
      couleursDisponibles,
      isNew,
      isBestseller
    }
  `);
}

// Fonction pour récupérer un produit par son slug
export async function getProductBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "product" && slug.current == $slug][0] {
      _id,
      name,
      "slug": slug.current,
      image,
      price,
      "category": category->slug.current,
      description,
      dimensions,
      materiau,
      delai,
      couleursDisponibles,
      isNew,
      isBestseller
    }
  `,
    { slug }
  );
}

// Fonction pour récupérer les catégories
export async function getCategories() {
  return client.fetch(`
    *[_type == "category"] | order(title asc) {
      _id,
      title,
      "slug": slug.current,
      description
    }
  `);
}
