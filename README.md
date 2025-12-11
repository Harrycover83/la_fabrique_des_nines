# 🎨 La Fabrique des Nines - Site E-commerce

Site e-commerce moderne et minimaliste pour La Fabrique des Nines, spécialisée dans les objets de décoration faits main en jesmonite.

## ✨ Fonctionnalités

- 🛍️ Boutique en ligne avec filtres (catégorie, prix)
- 🛒 Panier persistant (localStorage)
- 💳 Paiement sécurisé via Stripe Checkout
- 📱 Design responsive (mobile, tablette, desktop)
- 🎨 Interface élégante avec palette personnalisée
- 📦 Pages produits détaillées avec variantes
- 📧 Formulaire de contact
- 📄 Pages informatives (À propos, FAQ, etc.)

## 🚀 Installation et lancement

### Prérequis

- Node.js 18+ installé
- npm ou pnpm

### Étapes

1. **Installer les dépendances**
   ```bash
   npm install
   ```

2. **Configurer les variables d'environnement**
   
   Modifiez le fichier `.env.local` et ajoutez vos clés Stripe :
   ```env
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_votre_cle_publique
   STRIPE_SECRET_KEY=sk_test_votre_cle_secrete
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```

   > 💡 Obtenez vos clés sur [stripe.com/dashboard](https://dashboard.stripe.com/)

3. **Lancer le serveur de développement**
   ```bash
   npm run dev
   ```

4. **Ouvrir dans le navigateur**
   
   Allez sur [http://localhost:3000](http://localhost:3000)

## 📦 Scripts disponibles

```bash
npm run dev      # Démarre le serveur de développement
npm run build    # Compile pour la production
npm start        # Lance le serveur de production
npm run lint     # Vérifie le code
```

## 🎨 Personnalisation

### Couleurs

Les couleurs sont définies dans `src/app/globals.css` :

```css
--background: #F6F0EA;    /* Fond principal */
--primary: #C47A5A;       /* Terracotta */
--secondary: #D6A548;     /* Ocre/Moutarde */
--accent: #2557FF;        /* Bleu intense */
--foreground: #2B2B2B;    /* Texte principal */
--text-secondary: #777777; /* Texte secondaire */
```

### Produits

Modifiez les produits dans `src/data/products.ts`. Chaque produit a cette structure :

```typescript
{
  id: "1",
  slug: "mon-produit",
  name: "Mon Produit",
  price: 45,
  category: "plateaux" | "cendriers" | "porta-sabon" | "statues" | "autres",
  image: "/images/mon-produit.svg",
  description: "Description...",
  details: {
    dimensions: "25cm x 25cm",
    materiau: "Jesmonite",
    delai: "3-5 jours ouvrés",
  },
  isNew: true,
  isBestseller: false,
  couleursDisponibles: ["Beige", "Terracotta"],
}
```

### Images

Les images sont dans `public/images/`. Actuellement, ce sont des SVG placeholder.

**Pour ajouter vos vraies images :**

1. Créez des images JPG ou PNG
2. Nommez-les comme les SVG existants (ex: `plateaux-01.jpg`)
3. Mettez-les dans `public/images/`
4. Mettez à jour les chemins dans `src/data/products.ts` et les pages (changez `.svg` en `.jpg`)

**Formats recommandés :**
- Images produits : 800x800px minimum
- Hero : 1920x1080px minimum
- Images Instagram : 600x600px
- Format : JPG (optimisé) ou PNG

### Textes et contenus

- **Accueil** : `src/app/page.tsx`
- **À propos** : `src/app/a-propos/page.tsx`
- **FAQ** : `src/app/faq/page.tsx`
- **Contact** : `src/app/contact/page.tsx`
- **Footer** : `src/components/Footer.tsx`
- **Header** : `src/components/Header.tsx`

## 💳 Configuration Stripe

1. Créez un compte sur [stripe.com](https://stripe.com)
2. Allez dans le Dashboard > Développeurs > Clés API
3. Copiez vos clés de test (commençant par `pk_test_` et `sk_test_`)
4. Ajoutez-les dans `.env.local`

**Mode production :**
- Utilisez les clés "live" (`pk_live_` et `sk_live_`)
- Configurez les webhooks si nécessaire
- Testez en mode test avant de passer en production

## 📱 Structure du projet

```
la_fabrique_des_nines/
├── public/
│   └── images/           # Images du site
├── src/
│   ├── app/              # Pages Next.js (App Router)
│   │   ├── api/          # API Routes (Stripe, etc.)
│   │   ├── boutique/     # Page boutique
│   │   ├── produits/     # Pages produits
│   │   ├── panier/       # Page panier
│   │   ├── success/      # Page confirmation
│   │   ├── a-propos/     # Page à propos
│   │   ├── faq/          # Page FAQ
│   │   ├── contact/      # Page contact
│   │   └── layout.tsx    # Layout global
│   ├── components/       # Composants réutilisables
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── ProductCard.tsx
│   ├── context/          # Contextes React (Panier)
│   ├── data/             # Données (produits)
│   └── types/            # Types TypeScript
├── .env.local            # Variables d'environnement
└── package.json
```

## 🚢 Déploiement sur Vercel

1. Poussez votre code sur GitHub
2. Allez sur [vercel.com](https://vercel.com)
3. Importez votre dépôt GitHub
4. Ajoutez vos variables d'environnement :
   - `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY`
   - `STRIPE_SECRET_KEY`
   - `NEXT_PUBLIC_SITE_URL` (URL de votre site Vercel)
5. Déployez !

## 📝 TODO / Améliorations futures

- [ ] Remplacer les images SVG par de vraies photos
- [ ] Connecter le formulaire de contact à un service email
- [ ] Ajouter un système de gestion de stock
- [ ] Implémenter les webhooks Stripe pour confirmation
- [ ] Ajouter un système d'avis clients
- [ ] Newsletter / Email marketing
- [ ] Blog pour raconter les créations

## 🆘 Support

Pour toute question ou problème :
- Email : contact@lafabriquedesnines.fr
- Instagram : @la_fabrique_des_nines_

## 📄 Licence

© 2025 La Fabrique des Nines. Tous droits réservés.

---

**Fait avec ❤️ pour Aurélie**
