# ⚙️ NOTES DE CONFIGURATION

## Variables d'environnement (.env.local)

Le fichier `.env.local` contient des informations sensibles et n'est PAS versionné sur Git.

### Variables actuelles

```env
# Clés Stripe (à remplacer par vos vraies clés)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle_publique_ici
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete_ici

# URL du site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Important

⚠️ **JAMAIS** commiter le fichier `.env.local` sur Git
⚠️ Utilisez les clés **test** en développement et les clés **live** en production

## Palette de couleurs

Les couleurs du site sont définies dans `src/app/globals.css` :

```css
--background: #F6F0EA;     /* Beige clair (fond) */
--primary: #C47A5A;        /* Terracotta/Argile (boutons principaux) */
--secondary: #D6A548;      /* Ocre/Moutarde (badges) */
--accent: #2557FF;         /* Bleu intense (détails) */
--foreground: #2B2B2B;     /* Gris foncé (texte principal) */
--text-secondary: #777777; /* Gris moyen (texte secondaire) */
```

## Polices Google Fonts

Chargées dans `src/app/globals.css` :

- **Serif** (titres) : Cormorant Garamond
- **Sans-serif** (texte) : Poppins

## Structure de données produit

```typescript
interface Product {
  id: string;                // Identifiant unique
  slug: string;              // URL-friendly (ex: "plateau-beige")
  name: string;              // Nom affiché
  price: number;             // Prix en euros
  category: string;          // "plateaux" | "cendriers" | "porta-sabon" | "statues" | "autres"
  image: string;             // Chemin vers l'image (/images/...)
  description: string;       // Description courte
  details: {
    dimensions?: string;     // Ex: "25cm x 25cm"
    materiau?: string;       // Ex: "Jesmonite"
    delai?: string;          // Ex: "3-5 jours ouvrés"
  };
  isNew?: boolean;           // Badge "Nouveau"
  isBestseller?: boolean;    // Badge "Best-seller"
  couleursDisponibles?: string[]; // Variantes de couleur
}
```

## Panier (localStorage)

Le panier est sauvegardé dans le navigateur sous la clé `"cart"`.

Structure :
```json
[
  {
    "product": { /* objet Product complet */ },
    "quantity": 2,
    "selectedColor": "Beige"
  }
]
```

## Routes API

### POST /api/create-checkout-session

Crée une session Stripe Checkout.

**Body :**
```json
{
  "items": [
    {
      "product": { /* Product */ },
      "quantity": 1,
      "selectedColor": "Beige"
    }
  ]
}
```

**Response :**
```json
{
  "url": "https://checkout.stripe.com/..."
}
```

## Pages dynamiques

### /produits/[slug]

Route dynamique pour les pages produits.
Le `slug` doit correspondre au champ `slug` dans `products.ts`.

Exemples :
- `/produits/plateau-terrazzo-beige`
- `/produits/cendrier-terracotta`
- `/produits/porte-savon-bleu`

## Images

### Formats supportés
- SVG (actuellement utilisé pour les placeholders)
- JPG (recommandé pour les photos)
- PNG (pour transparence)
- WebP (pour optimisation)

### Tailles recommandées
- **Hero** : 1920x1080px (ratio 16:9)
- **Produits** : 800x800px (carré)
- **Instagram** : 600x600px (carré)
- **Atelier** : 1200x800px (ratio 3:2)

### Configuration Next.js

Dans `next.config.ts` :
```typescript
images: {
  dangerouslyAllowSVG: true,  // Permet les SVG
  remotePatterns: [...],       // Domaines autorisés
}
```

## Responsive Breakpoints (Tailwind)

- **sm** : 640px
- **md** : 768px
- **lg** : 1024px
- **xl** : 1280px
- **2xl** : 1536px

## Dépendances principales

- **next** : Framework React
- **react** & **react-dom** : Bibliothèque UI
- **typescript** : Typage statique
- **tailwindcss** : Framework CSS
- **stripe** : Backend Stripe
- **@stripe/stripe-js** : Frontend Stripe
- **lucide-react** : Icônes

## Scripts disponibles

```json
{
  "dev": "next dev",           // Développement (port 3000)
  "build": "next build",       // Build production
  "start": "next start",       // Serveur production
  "lint": "next lint"          // Vérification code
}
```

## Sécurité

### Variables d'environnement

- Préfixe `NEXT_PUBLIC_` : accessible côté client
- Sans préfixe : accessible uniquement côté serveur

### Stripe

- Clés publiques : commencent par `pk_`
- Clés secrètes : commencent par `sk_`
- **Jamais** exposer les clés secrètes côté client

## Performance

### Images Next.js

Le composant `<Image>` de Next.js optimise automatiquement :
- Lazy loading
- Responsive images
- Format moderne (WebP)
- Compression

### Tailwind

Les classes CSS non utilisées sont automatiquement supprimées en production.

## SEO

### Metadata

Défini dans chaque `page.tsx` ou dans `layout.tsx` :

```typescript
export const metadata: Metadata = {
  title: "Titre de la page",
  description: "Description...",
};
```

## Git

### Fichiers ignorés (.gitignore)

- `node_modules/`
- `.next/`
- `.env.local`
- `.vercel/`

---

**Dernière mise à jour** : Décembre 2025
