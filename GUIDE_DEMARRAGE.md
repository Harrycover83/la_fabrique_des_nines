# 🚀 Guide de Démarrage - La Fabrique des Nines

## 📋 Prérequis

Avant de commencer, assurez-vous d'avoir installé :
- **Node.js** version 18 ou supérieure
- **npm** (inclus avec Node.js)
- Un compte **Stripe** (gratuit pour les tests)

## 🔧 Installation Rapide

### 1. Installer les dépendances

```bash
npm install
```

### 2. Configurer les variables d'environnement

Créez un fichier `.env.local` à la racine du projet :

```bash
cp .env.example .env.local
```

Puis éditez `.env.local` avec vos informations :

```env
# Clés Stripe (mode test)
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle_publique_ici
STRIPE_SECRET_KEY=sk_test_votre_cle_secrete_ici

# URL du site
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Obtenir vos clés Stripe

1. Créez un compte sur [Stripe](https://dashboard.stripe.com/register)
2. Allez dans **Developers > API keys**
3. Copiez la **Publishable key** (commence par `pk_test_`)
4. Copiez la **Secret key** (commence par `sk_test_`)
5. Collez-les dans votre fichier `.env.local`

### 4. Lancer le serveur de développement

```bash
npm run dev
```

Ouvrez votre navigateur sur [http://localhost:3000](http://localhost:3000)

## ✨ Fonctionnalités Disponibles

### Pages du site
- **/** - Page d'accueil avec produits phares
- **/boutique** - Catalogue avec filtres
- **/produits/[slug]** - Détail produit
- **/panier** - Panier d'achat
- **/a-propos** - À propos
- **/faq** - Questions fréquentes
- **/contact** - Formulaire de contact
- **/success** - Confirmation de commande

### Fonctionnalités testées
✅ Navigation entre les pages  
✅ Ajout de produits au panier  
✅ Modification des quantités  
✅ Sélection des couleurs  
✅ Filtres par catégorie et prix  
✅ Persistance du panier (localStorage)  
✅ Design responsive (mobile, tablette, desktop)  

## 🎨 Personnalisation

### Modifier les couleurs

Éditez `app/globals.css` :

```css
:root {
  --background: #F6F0EA;  /* Fond principal */
  --primary: #C47A5A;     /* Couleur boutons */
  --secondary: #D6A548;   /* Badges */
  --accent: #2557FF;      /* Détails */
}
```

### Ajouter/Modifier des produits

Éditez `data/products.ts` :

```typescript
{
  id: "mon-produit",
  slug: "mon-produit-url",
  name: "Nom du Produit",
  price: 45.00,
  category: "plateaux",
  image: "/images/mon-image.svg",
  description: "Description du produit",
  details: {
    dimensions: "30cm x 20cm",
    materiau: "Jesmonite",
    delai: "5-7 jours ouvrés"
  }
}
```

### Remplacer les images placeholder

1. Préparez vos images (format JPG, PNG ou SVG)
2. Dimensions recommandées : 800x800px minimum
3. Placez-les dans `public/images/`
4. Mettez à jour le chemin dans `data/products.ts`

## 🚢 Déploiement sur Vercel

### 1. Préparer le repository

Votre code est déjà sur GitHub dans ce repository.

### 2. Créer un compte Vercel

1. Allez sur [vercel.com](https://vercel.com)
2. Inscrivez-vous avec votre compte GitHub
3. Cliquez sur "Add New Project"
4. Sélectionnez ce repository

### 3. Configurer les variables d'environnement

Dans les paramètres Vercel, ajoutez :

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_live_...
STRIPE_SECRET_KEY=sk_live_...
NEXT_PUBLIC_SITE_URL=https://votre-domaine.vercel.app
```

⚠️ **Important** : Pour la production, utilisez vos clés **live** (pas test)

### 4. Déployer

Cliquez sur "Deploy" et attendez quelques minutes.

Votre site sera disponible sur une URL comme :
`https://la-fabrique-des-nines.vercel.app`

## 🔐 Passer en Production avec Stripe

### 1. Activer votre compte Stripe

1. Complétez les informations de votre entreprise
2. Activez votre compte Stripe
3. Configurez les méthodes de paiement
4. Ajoutez vos informations bancaires

### 2. Utiliser les clés live

1. Dans Stripe Dashboard > API keys
2. Basculez sur "Live mode" (pas "Test mode")
3. Copiez vos nouvelles clés (pk_live_ et sk_live_)
4. Mettez-les à jour dans Vercel

### 3. Tester un paiement

Faites une vraie commande de test avec une vraie carte (vous pourrez vous rembourser depuis Stripe Dashboard).

## 📝 Commandes Utiles

```bash
# Développement
npm run dev          # Lancer le serveur de dev

# Production
npm run build        # Compiler le projet
npm run start        # Lancer en mode production

# Qualité du code
npm run lint         # Vérifier le code
```

## 🆘 Aide et Support

### Le site ne démarre pas
- Vérifiez que Node.js est installé : `node --version`
- Supprimez `node_modules` et `.next` puis réinstallez : `rm -rf node_modules .next && npm install`

### Les images ne s'affichent pas
- Vérifiez que les images sont dans `public/images/`
- Vérifiez que le chemin dans `products.ts` est correct
- Les chemins commencent par `/images/` (pas `public/images/`)

### Le paiement Stripe ne fonctionne pas
- Vérifiez que vos clés Stripe sont dans `.env.local`
- Vérifiez qu'il n'y a pas d'espaces avant/après les clés
- En mode test, utilisez les cartes de test Stripe :
  - Carte de test : `4242 4242 4242 4242`
  - Date : n'importe quelle date future
  - CVC : n'importe quel 3 chiffres

### Le panier se vide au rafraîchissement
- Vérifiez que localStorage est activé dans votre navigateur
- Essayez en navigation privée pour tester

## 📚 Ressources

- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Stripe](https://stripe.com/docs)
- [Documentation Tailwind CSS](https://tailwindcss.com/docs)
- [Instagram La Fabrique des Nines](https://www.instagram.com/la_fabrique_des_nines_/)

## 🎯 Prochaines Étapes Recommandées

1. ✅ Remplacer les images placeholder par vos vraies photos
2. ✅ Personnaliser les textes des pages (À propos, FAQ, Contact)
3. ✅ Ajouter vos propres produits
4. ✅ Configurer Stripe en mode live
5. ✅ Déployer sur Vercel
6. ✅ Configurer votre nom de domaine personnalisé
7. ✅ Tester le processus complet de commande
8. ✅ Promouvoir votre boutique sur Instagram !

---

**Besoin d'aide ?** Contactez-moi ou consultez la documentation officielle des technologies utilisées.

Bon courage ! 🚀
