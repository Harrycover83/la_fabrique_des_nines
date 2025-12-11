# La Fabrique des Nines

Site e-commerce artisanal pour La Fabrique des Nines - Créations artisanales faites avec passion.

## 🎨 Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Stripe** - Intégration de paiement (prêt pour l'implémentation)

## 🚀 Démarrage rapide

### Installation

```bash
npm install
```

### Développement

```bash
npm run dev
```

Le site sera accessible sur [http://localhost:3000](http://localhost:3000)

### Build de production

```bash
npm run build
npm start
```

## 📁 Structure du projet

```
├── app/                    # Pages Next.js (App Router)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Page d'accueil
│   ├── boutique/          # Pages boutique
│   ├── a-propos/          # Page à propos
│   └── contact/           # Page contact
├── components/            # Composants React réutilisables
│   ├── Header.tsx        # En-tête avec navigation
│   ├── Footer.tsx        # Pied de page
│   ├── Cart.tsx          # Panier d'achat
│   └── ProductCard.tsx   # Carte produit
├── lib/                  # Utilitaires et contextes
│   └── CartContext.tsx   # Gestion du panier
└── public/              # Fichiers statiques

```

## 🎨 Direction Artistique

Le site utilise une palette de couleurs artisanales inspirée de matériaux naturels :
- **Crème et Sable** : Tons chauds et accueillants
- **Terracotta et Argile** : Couleurs terre pour les accents
- **Sauge et Olive** : Touches végétales
- **Charcoal** : Texte principal

Typographie :
- **Georgia/Serif** : Titres élégants
- **Inter** : Corps de texte moderne et lisible
- **Dancing Script** : Accents manuscrits

## 🛒 Fonctionnalités

- ✅ Navigation responsive
- ✅ Catalogue de produits
- ✅ Pages produits détaillées
- ✅ Panier d'achat fonctionnel
- ✅ Formulaire de contact
- ✅ Design artisanal cohérent
- 🔜 Intégration Stripe pour les paiements
- 🔜 Gestion de commandes

## 🌐 Déploiement

Le site est prêt à être déployé sur :
- **Vercel** (recommandé) - Déploiement automatique depuis GitHub
- **Netlify**
- Tout hébergeur compatible Node.js

### Déploiement sur Vercel

1. Connectez votre repository GitHub
2. Vercel détectera automatiquement Next.js
3. Cliquez sur "Deploy"

## 📝 Prochaines étapes

1. Ajouter de vraies images de produits
2. Implémenter l'intégration Stripe complète
3. Ajouter un système de gestion de commandes
4. Créer un backoffice pour la gestion des produits
5. Optimiser les images et performances

## 🤝 Contact

Pour toute question : contact@lafabriquedesnines.fr
