// Script de migration des produits vers Sanity
// Usage: node scripts/migrate-to-sanity.js

const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

// Configuration
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'z8ea33xy',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

// Produits existants (copiés de src/data/products.ts)
const products = [
  {
    name: "Plateau Rond Terracotta",
    slug: "plateau-rond-terracotta",
    price: 45,
    category: "plateaux",
    description: "Magnifique plateau rond en jesmonite couleur terracotta. Parfait pour sublimer votre table basse ou comme vide-poche élégant. Chaque pièce est unique avec ses nuances et variations naturelles.",
    dimensions: "Ø 25cm x 2cm",
    materiau: "Jesmonite",
    delai: "3-5 jours ouvrés",
    couleursDisponibles: ["Terracotta", "Beige naturel"],
    isNew: true,
    isBestseller: false,
  },
  {
    name: "Cendrier Carré Marbre",
    slug: "cendrier-carre-marbre",
    price: 28,
    category: "cendriers",
    description: "Cendrier carré avec effet marbré sophistiqué. Design moderne et minimaliste qui s'intègre parfaitement à tout style de décoration.",
    dimensions: "12cm x 12cm x 3cm",
    materiau: "Jesmonite",
    delai: "3-5 jours ouvrés",
    couleursDisponibles: ["Marbre blanc", "Marbre noir"],
    isNew: false,
    isBestseller: true,
  },
  {
    name: "Porte-savon Ovale",
    slug: "porte-savon-ovale",
    price: 18,
    category: "porta-sabon",
    description: "Porte-savon ovale avec rainures pour évacuation de l'eau. Design épuré et fonctionnel pour une salle de bain élégante.",
    dimensions: "13cm x 9cm x 1.5cm",
    materiau: "Jesmonite",
    delai: "3-5 jours ouvrés",
    couleursDisponibles: ["Blanc cassé", "Gris perle", "Terracotta"],
    isNew: true,
    isBestseller: false,
  },
  {
    name: "Statue Visage Abstrait",
    slug: "statue-visage-abstrait",
    price: 65,
    category: "statues",
    description: "Sculpture représentant un visage stylisé aux lignes épurées. Pièce artistique unique qui apporte une touche contemporaine à votre intérieur.",
    dimensions: "20cm x 12cm x 8cm",
    materiau: "Jesmonite",
    delai: "5-7 jours ouvrés",
    couleursDisponibles: ["Blanc mat", "Terracotta"],
    isNew: false,
    isBestseller: true,
  },
  {
    name: "Plateau Rectangulaire Ocre",
    slug: "plateau-rectangulaire-ocre",
    price: 52,
    category: "plateaux",
    description: "Grand plateau rectangulaire dans une superbe teinte ocre dorée. Idéal pour présenter vos plus beaux objets ou comme plateau de service.",
    dimensions: "35cm x 20cm x 2cm",
    materiau: "Jesmonite",
    delai: "3-5 jours ouvrés",
    couleursDisponibles: ["Ocre doré", "Moutarde"],
    isNew: true,
    isBestseller: false,
  },
  {
    name: "Cendrier Rond Noir",
    slug: "cendrier-rond-noir",
    price: 25,
    category: "cendriers",
    description: "Cendrier rond au design minimaliste dans un noir profond. Élégant et intemporel, parfait pour un intérieur moderne.",
    dimensions: "Ø 14cm x 3cm",
    materiau: "Jesmonite",
    delai: "3-5 jours ouvrés",
    couleursDisponibles: ["Noir mat"],
    isNew: false,
    isBestseller: false,
  },
  {
    name: "Vide-poche Ondulé",
    slug: "vide-poche-ondule",
    price: 32,
    category: "autres",
    description: "Vide-poche aux formes organiques et ondulées. Design contemporain et fonctionnel pour ranger vos petits objets du quotidien.",
    dimensions: "18cm x 15cm x 4cm",
    materiau: "Jesmonite",
    delai: "3-5 jours ouvrés",
    couleursDisponibles: ["Beige naturel", "Bleu pastel"],
    isNew: true,
    isBestseller: false,
  },
  {
    name: "Porte-savon Rectangulaire",
    slug: "porte-savon-rectangulaire",
    price: 16,
    category: "porta-sabon",
    description: "Porte-savon rectangulaire classique avec finition satinée. Simple et élégant, s'adapte à toutes les salles de bain.",
    dimensions: "12cm x 8cm x 1.5cm",
    materiau: "Jesmonite",
    delai: "3-5 jours ouvrés",
    couleursDisponibles: ["Blanc", "Gris clair"],
    isNew: false,
    isBestseller: true,
  },
];

// Catégories à créer d'abord
const categories = [
  {
    title: "Plateaux",
    slug: "plateaux",
    description: "Plateaux décoratifs en jesmonite pour sublimer votre intérieur",
  },
  {
    title: "Cendriers",
    slug: "cendriers",
    description: "Cendriers artisanaux en jesmonite, pièces uniques",
  },
  {
    title: "Porte-savons",
    slug: "porta-sabon",
    description: "Porte-savons en jesmonite, design minimaliste",
  },
  {
    title: "Statues",
    slug: "statues",
    description: "Sculptures décoratives en jesmonite",
  },
  {
    title: "Autres",
    slug: "autres",
    description: "Autres créations artisanales en jesmonite",
  },
];

async function migrateCategories() {
  console.log('📦 Migration des catégories...\n');
  
  const categoryMap = {};
  
  for (const category of categories) {
    try {
      // Créer la catégorie dans Sanity
      const doc = await client.create({
        _type: 'category',
        title: category.title,
        slug: {
          _type: 'slug',
          current: category.slug,
        },
        description: category.description,
      });
      
      categoryMap[category.slug] = doc._id;
      console.log(`✅ Catégorie créée: ${category.title} (ID: ${doc._id})`);
    } catch (error) {
      console.error(`❌ Erreur pour ${category.title}:`, error.message);
    }
  }
  
  console.log('\n');
  return categoryMap;
}

async function migrateProducts(categoryMap) {
  console.log('🎨 Migration des produits...\n');
  
  for (const product of products) {
    try {
      // Trouver l'ID de la catégorie
      const categoryId = categoryMap[product.category];
      
      if (!categoryId) {
        console.log(`⚠️  Catégorie non trouvée pour: ${product.name}`);
        continue;
      }
      
      // Créer le produit dans Sanity
      const doc = await client.create({
        _type: 'product',
        name: product.name,
        slug: {
          _type: 'slug',
          current: product.slug,
        },
        price: product.price,
        category: {
          _type: 'reference',
          _ref: categoryId,
        },
        description: product.description,
        dimensions: product.dimensions,
        materiau: product.materiau,
        delai: product.delai,
        couleursDisponibles: product.couleursDisponibles,
        isNew: product.isNew,
        isBestseller: product.isBestseller,
        // Note: Les images devront être ajoutées manuellement via le Studio
      });
      
      console.log(`✅ Produit créé: ${product.name} (ID: ${doc._id})`);
    } catch (error) {
      console.error(`❌ Erreur pour ${product.name}:`, error.message);
    }
  }
  
  console.log('\n');
}

async function main() {
  console.log('🚀 Démarrage de la migration vers Sanity\n');
  console.log('Project ID:', client.config().projectId);
  console.log('Dataset:', client.config().dataset);
  console.log('\n---\n');
  
  if (!process.env.SANITY_API_TOKEN) {
    console.error('❌ ERREUR: SANITY_API_TOKEN non défini dans .env.local');
    console.log('\nVeuillez:');
    console.log('1. Aller sur https://manage.sanity.io');
    console.log('2. Sélectionner votre projet');
    console.log('3. API > Tokens > Add API Token');
    console.log('4. Copier le token et l\'ajouter dans .env.local');
    console.log('\nPuis relancez: node scripts/migrate-to-sanity.js');
    process.exit(1);
  }
  
  try {
    // 1. Migrer les catégories
    const categoryMap = await migrateCategories();
    
    // 2. Migrer les produits
    await migrateProducts(categoryMap);
    
    console.log('✅ Migration terminée avec succès!\n');
    console.log('⚠️  IMPORTANT: Les images doivent être ajoutées manuellement');
    console.log('   via le Studio: http://localhost:3000/studio\n');
    
  } catch (error) {
    console.error('❌ Erreur lors de la migration:', error);
    process.exit(1);
  }
}

main();
