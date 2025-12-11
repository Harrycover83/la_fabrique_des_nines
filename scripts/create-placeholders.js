#!/usr/bin/env node

/**
 * Script pour créer des images placeholder SVG
 * Exécutez: node scripts/create-placeholders.js
 */

const fs = require('fs');
const path = require('path');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

// Créer le dossier si nécessaire
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const colors = {
  background: '#F6F0EA',
  primary: '#C47A5A',
  secondary: '#D6A548',
  accent: '#2557FF',
};

// Liste des images à créer
const images = [
  { name: 'hero-plateau.jpg', text: 'Plateau Hero', size: 1920 },
  { name: 'plateaux-01.jpg', text: 'Plateau 1', size: 800 },
  { name: 'plateaux-02.jpg', text: 'Plateau 2', size: 800 },
  { name: 'cendrier-01.jpg', text: 'Cendrier', size: 800 },
  { name: 'porta-sabon-bleu.jpg', text: 'Porte-Savon', size: 800 },
  { name: 'porta-sabon-02.jpg', text: 'Porte-Savon 2', size: 800 },
  { name: 'statue-01.jpg', text: 'Statue 1', size: 800 },
  { name: 'statue-02.jpg', text: 'Statue 2', size: 800 },
  { name: 'autres-01.jpg', text: 'Vide-Poche', size: 800 },
  { name: 'atelier.jpg', text: 'Atelier', size: 1200 },
  { name: 'instagram-1.jpg', text: 'IG 1', size: 600 },
  { name: 'instagram-2.jpg', text: 'IG 2', size: 600 },
  { name: 'instagram-3.jpg', text: 'IG 3', size: 600 },
  { name: 'instagram-4.jpg', text: 'IG 4', size: 600 },
  { name: 'instagram-5.jpg', text: 'IG 5', size: 600 },
  { name: 'instagram-6.jpg', text: 'IG 6', size: 600 },
];

// Créer un SVG pour chaque image
images.forEach(({ name, text, size }) => {
  const svgContent = `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${size}" height="${size}" fill="${colors.background}"/>
  <rect x="${size * 0.1}" y="${size * 0.3}" width="${size * 0.8}" height="${size * 0.4}" rx="20" fill="${colors.primary}" opacity="0.3"/>
  <circle cx="${size * 0.5}" cy="${size * 0.5}" r="${size * 0.15}" fill="${colors.secondary}" opacity="0.5"/>
  <text x="${size * 0.5}" y="${size * 0.52}" font-family="Arial, sans-serif" font-size="${size * 0.05}" fill="#2B2B2B" text-anchor="middle" font-weight="bold">${text}</text>
  <text x="${size * 0.5}" y="${size * 0.58}" font-family="Arial, sans-serif" font-size="${size * 0.025}" fill="#777777" text-anchor="middle">Placeholder</text>
</svg>`;

  const filePath = path.join(imagesDir, name.replace('.jpg', '.svg'));
  fs.writeFileSync(filePath, svgContent);
  console.log(`✓ Créé: ${name.replace('.jpg', '.svg')}`);
});

console.log('\n✨ Tous les placeholders ont été créés avec succès!');
console.log('📁 Emplacement:', imagesDir);
console.log('\n💡 Astuce: Remplacez ces SVG par vos vraies images (formats JPG/PNG) en gardant les mêmes noms.');
