# La Fabrique des Nines

Site e-commerce pour la vente d'objets de décoration en jesmonite faits main.

## 🎨 À propos

La Fabrique des Nines est une boutique en ligne proposant des créations artisanales en jesmonite : plateaux, cendriers, porte-savons, statues et autres objets de décoration uniques.

## 🚀 Technologies utilisées

- **Framework**: Next.js 16 (App Router)
- **Langage**: TypeScript
- **Styling**: Tailwind CSS 4
- **Paiement**: Stripe Checkout
- **Icônes**: Lucide React
- **Fonts**: Cormorant Garamond (serif) & Poppins (sans-serif)

## 📦 Installation

### Prérequis

- Node.js 18+ et npm

### Étapes d'installation

1. Cloner le repository
```bash
git clone https://github.com/Harrycover83/la_fabrique_des_nines.git
cd la_fabrique_des_nines
```

2. Installer les dépendances
```bash
npm install
```

3. Créer le fichier `.env.local` à la racine du projet
```bash
cp .env.example .env.local
```

4. Configurer les variables d'environnement dans `.env.local`:
```env
# Stripe Configuration
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle_publique
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete

# URL du site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Pour obtenir vos clés Stripe:
- Créer un compte sur [Stripe](https://dashboard.stripe.com/register)
- Récupérer les clés API dans [Dashboard > Developers > API keys](https://dashboard.stripe.com/apikeys)

## 🛠️ Commandes disponibles

### Développement
```bash
npm run dev
```
Lance le serveur de développement sur http://localhost:3000

### Build de production
```bash
npm run build
```
Crée une version optimisée pour la production

### Démarrer en production
```bash
npm run start
```
Lance le serveur en mode production (nécessite d'abord `npm run build`)

### Linter
```bash
npm run lint
```
Vérifie le code avec ESLint

## 📁 Structure du projet

```
.
├── app/                          # Pages et routes (Next.js App Router)
│   ├── api/                      # Routes API
│   │   └── create-checkout-session/  # API Stripe Checkout
│   ├── a-propos/                 # Page À propos
│   ├── boutique/                 # Page boutique avec filtres
│   ├── contact/                  # Page contact
│   ├── faq/                      # Page FAQ
│   ├── mentions-legales/         # Mentions légales
│   ├── panier/                   # Page panier
│   ├── politique-confidentialite/  # Politique de confidentialité
│   ├── produits/[slug]/          # Page détail produit (dynamique)
│   ├── success/                  # Page succès après paiement
│   ├── layout.tsx                # Layout global
│   ├── page.tsx                  # Page d'accueil
│   └── globals.css               # Styles globaux et thème
├── components/                   # Composants React réutilisables
│   ├── Footer.tsx                # Pied de page
│   ├── Header.tsx                # En-tête et navigation
│   └── ProductCard.tsx           # Carte produit
├── data/                         # Données statiques
│   └── products.ts               # Liste des produits
├── lib/                          # Utilitaires et contextes
│   └── CartContext.tsx           # Contexte du panier
├── public/                       # Fichiers statiques
│   └── images/                   # Images des produits
├── types/                        # Types TypeScript
│   └── index.ts                  # Définitions de types
├── .env.example                  # Template des variables d'environnement
└── package.json                  # Dépendances et scripts
```

## 🎨 Personnalisation

### Modifier les couleurs

Les couleurs sont définies dans `app/globals.css`:
```css
:root {
  --background: #F6F0EA;  /* Fond beige */
  --primary: #C47A5A;     /* Terracotta */
  --secondary: #D6A548;   /* Ocre/Moutarde */
  --accent: #2557FF;      /* Bleu accent */
  --text-primary: #2B2B2B;
  --text-secondary: #777777;
}
```

### Ajouter/Modifier des produits

Éditer le fichier `data/products.ts`:
```typescript
{
  id: "produit-001",
  slug: "nom-du-produit",
  name: "Nom du produit",
  price: 45.00,
  category: "plateaux",  // ou "cendriers", "porta-sabon", "statues", "autres"
  image: "/images/mon-image.svg",
  description: "Description du produit",
  details: {
    dimensions: "30cm x 20cm",
    materiau: "Jesmonite",
    delai: "5-7 jours ouvrés"
  },
  isNew: true,           // Badge "Nouveau"
  isBestseller: true,    // Badge "Best-seller"
  couleursDisponibles: ["Terracotta", "Beige"]
}
```

### Ajouter des images

1. Placer les images dans `public/images/`
2. Formats recommandés: JPG, PNG, ou SVG
3. Dimensions recommandées: 800x800px minimum
4. Référencer l'image dans le produit: `image: "/images/nom-image.jpg"`

### Modifier les textes

- **Page d'accueil**: `app/page.tsx`
- **Page À propos**: `app/a-propos/page.tsx`
- **FAQ**: `app/faq/page.tsx`
- **Contact**: `app/contact/page.tsx`
- **Footer**: `components/Footer.tsx`

## 💳 Configuration Stripe

1. Créer un compte Stripe et activer le mode test
2. Récupérer les clés API (publique et secrète)
3. Les ajouter dans `.env.local`
4. Pour passer en production:
   - Activer le compte Stripe
   - Remplacer les clés de test par les clés de production
   - Mettre à jour `NEXT_PUBLIC_SITE_URL` avec votre domaine

## 🚢 Déploiement sur Vercel

1. Pusher le code sur GitHub
2. Créer un compte sur [Vercel](https://vercel.com)
3. Importer le repository GitHub
4. Configurer les variables d'environnement:
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `NEXT_PUBLIC_SITE_URL`
5. Déployer

Le site sera automatiquement redéployé à chaque push sur la branche principale.

## 📝 Fonctionnalités

✅ Page d'accueil avec hero et produits phares  
✅ Boutique avec filtres (catégorie, prix)  
✅ Pages produit détaillées  
✅ Panier persistant (localStorage)  
✅ Paiement sécurisé via Stripe  
✅ Pages éditoriales (À propos, FAQ, Contact)  
✅ Pages légales (Mentions légales, Politique de confidentialité)  
✅ Design responsive (mobile, tablette, desktop)  
✅ Optimisation des images (Next.js Image)  
✅ Thème personnalisé avec couleurs de marque  

## 🔒 Sécurité

- Paiements sécurisés via Stripe
- Variables sensibles dans `.env.local` (non versionné)
- Validation des données côté serveur
- Headers de sécurité Next.js

## 📧 Contact

Email: contact@lafabriquedesninnes.fr  
Instagram: [@la_fabrique_des_nines_](https://www.instagram.com/la_fabrique_des_nines_/)

## 📄 Licence

© 2024 La Fabrique des Nines. Tous droits réservés.

---

Fait avec ❤️ en France 🇫🇷
