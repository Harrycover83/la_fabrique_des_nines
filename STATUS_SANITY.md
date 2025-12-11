# ✅ Configuration Sanity - TERMINÉE !

## 🎉 Ce qui a été fait automatiquement

### 1. ✅ Installation des packages
```bash
npm install sanity @sanity/client @sanity/image-url next-sanity
```

### 2. ✅ Initialisation du projet Sanity
```bash
npx sanity init
```
- **Project ID** : `z8ea33xy`
- **Organization** : aurelie_B
- **Dataset** : production
- Authentification Google réussie ✅

### 3. ✅ Configuration automatique
- **.env.local** mis à jour avec le Project ID
- **sanity.config.ts** configuré
- **sanity.cli.ts** configuré avec appId
- **Schémas** créés (Product + Category)

### 4. ✅ Déploiement du Studio
```bash
npx sanity deploy
```
**Studio accessible** :
- 🌐 En ligne : https://lafabriquedesnines.sanity.studio
- 💻 Local : http://localhost:3000/studio

### 5. ✅ Serveur de développement lancé
```bash
npm run dev
```
**Site accessible** : http://localhost:3000

---

## 📱 Accès rapides

| Service | URL | Status |
|---------|-----|--------|
| **Site web** | http://localhost:3000 | ✅ Running |
| **Studio local** | http://localhost:3000/studio | ✅ Ready |
| **Studio en ligne** | https://lafabriquedesnines.sanity.studio | ✅ Deployed |
| **Dashboard Sanity** | https://manage.sanity.io | ✅ Active |

---

## 🎯 Prochaines étapes MANUELLES

### Étape 1 : Créer un API Token (5 min)

1. Allez sur : https://manage.sanity.io
2. Sélectionnez **La Fabrique des Nines**
3. Menu **API** → **Tokens**
4. **Add API Token**
5. Nom : "Production Token"
6. Permissions : **Editor**
7. **Add Token** et **copiez le token**
8. Ouvrez `.env.local` et remplacez :
   ```env
   SANITY_API_TOKEN=your_token_here
   ```
   par votre vrai token

### Étape 2 : Ajouter les catégories (5 min)

📖 **Guide complet** : [QUICK_START_SANITY.md](QUICK_START_SANITY.md)

1. Ouvrez http://localhost:3000/studio
2. Cliquez sur **"Category"** dans le menu
3. Créez **5 catégories** :
   - Plateaux (slug: `plateaux`)
   - Cendriers (slug: `cendriers`)
   - Porte-savons (slug: `porta-sabon`)
   - Statues (slug: `statues`)
   - Autres (slug: `autres`)

### Étape 3 : Migrer les produits

**Option A : Migration automatique** (recommandé)
```bash
node scripts/migrate-to-sanity.js
```
⚠️ Nécessite le SANITY_API_TOKEN dans .env.local

**Option B : Ajout manuel via Studio**
1. Ouvrez http://localhost:3000/studio
2. Cliquez sur **"Product"**
3. **Create** et remplissez le formulaire
4. **Publish**

### Étape 4 : Télécharger les photos Instagram

📖 **Guide complet** : [GUIDE_PHOTOS.md](GUIDE_PHOTOS.md)

1. Allez sur https://instagram.com/la_fabrique_des_nines_
2. Téléchargez les 17 photos avec https://downloadgram.com
3. Optimisez avec https://tinypng.com
4. Uploadez dans Sanity Studio pour chaque produit

---

## 📊 Structure des données Sanity

### Category
```typescript
{
  title: string          // ex: "Plateaux"
  slug: string           // ex: "plateaux"
  description: string    // Description de la catégorie
}
```

### Product
```typescript
{
  name: string                    // ex: "Plateau Rond Terracotta"
  slug: string                    // ex: "plateau-rond-terracotta"
  image: image                    // Photo uploadée
  price: number                   // ex: 45
  category: reference(Category)   // Lien vers catégorie
  description: string             // Texte description
  dimensions: string              // ex: "Ø 25cm x 2cm"
  materiau: string                // ex: "Jesmonite"
  delai: string                   // ex: "3-5 jours ouvrés"
  couleursDisponibles: string[]   // ex: ["Terracotta", "Beige"]
  isNew: boolean                  // Nouveau produit ?
  isBestseller: boolean           // Best-seller ?
}
```

---

## 🔧 Commandes utiles

```bash
# Lancer le site en développement
npm run dev

# Ouvrir le Studio Sanity localement
# → http://localhost:3000/studio

# Déployer le Studio (si modifié)
npx sanity deploy

# Se connecter à Sanity (si déconnecté)
npx sanity login

# Voir les schémas déployés
npx sanity schema list

# Exporter les données
npx sanity dataset export production backup.tar.gz

# Importer des données
npx sanity dataset import backup.tar.gz production
```

---

## 📁 Fichiers créés/modifiés

### Configuration Sanity
- ✅ `sanity.config.ts` - Configuration principale
- ✅ `sanity.cli.ts` - Configuration CLI + appId
- ✅ `schemas/index.ts` - Export des schémas
- ✅ `schemas/product.ts` - Schéma Product
- ✅ `schemas/category.ts` - Schéma Category
- ✅ `lib/sanity.ts` - Client et fonctions utilitaires

### Pages Studio
- ✅ `src/app/studio/[[...tool]]/page.tsx` - Page Studio
- ✅ `src/app/studio/[[...tool]]/layout.tsx` - Layout Studio

### Scripts
- ✅ `scripts/migrate-to-sanity.js` - Migration automatique

### Documentation
- ✅ `GUIDE_SANITY.md` - Guide complet Sanity (350+ lignes)
- ✅ `QUICK_START_SANITY.md` - Quick start guide
- ✅ `PROCHAINES_ETAPES.md` - Checklist étapes
- ✅ `STATUS_SANITY.md` - Ce fichier !

### Variables d'environnement
- ✅ `.env.local` mis à jour avec :
  - `NEXT_PUBLIC_SANITY_PROJECT_ID=z8ea33xy`
  - `NEXT_PUBLIC_SANITY_DATASET=production`
  - `NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01`
  - `SANITY_API_TOKEN=your_token_here` ← À COMPLÉTER

---

## ⚠️ Important : Ce qui reste à faire

### Pour que le site affiche les produits depuis Sanity

Actuellement, le site utilise encore les données statiques de `src/data/products.ts`.

**Prochaine étape** : Mettre à jour les pages Next.js pour utiliser Sanity :

1. **Page d'accueil** (`src/app/page.tsx`)
   - Remplacer `products.slice(0, 4)` par `await getProducts()`
   - Utiliser `urlFor()` pour les images

2. **Page boutique** (`src/app/boutique/page.tsx`)
   - Remplacer l'import de `products` par `await getProducts()`
   - Filtrer côté client ou ajouter des paramètres GROQ

3. **Page produit** (`src/app/produits/[slug]/page.tsx`)
   - Remplacer `getProductBySlug()` local par celui de `lib/sanity.ts`
   - Utiliser `urlFor()` pour l'image

**Je peux faire cette mise à jour automatiquement** dès que vous aurez :
- ✅ Créé les 5 catégories
- ✅ Ajouté au moins quelques produits avec photos

---

## 🎓 Pour Aurélie

Une fois la configuration terminée, Aurélie pourra :

✅ Ajouter de nouveaux produits via le Studio visuel  
✅ Modifier prix et descriptions sans coder  
✅ Uploader des photos en drag & drop  
✅ Gérer les catégories  
✅ Marquer les nouveautés et best-sellers  
✅ Tout ça depuis n'importe quel navigateur !

**Interface ultra-simple** : Pas besoin de coder, tout se fait visuellement ! 🎨

---

## ✅ Checklist finale

- [x] Sanity installé
- [x] Projet initialisé (Project ID: z8ea33xy)
- [x] Studio déployé en ligne
- [x] Schémas configurés (Category + Product)
- [x] Serveur de développement lancé
- [x] Documentation créée
- [ ] API Token créé et configuré
- [ ] 5 catégories ajoutées
- [ ] Produits migrés
- [ ] Photos Instagram uploadées
- [ ] Pages Next.js connectées à Sanity

---

**Configuration Sanity : 80% complète ! 🎉**

**Prochaine action** : Créer l'API Token sur manage.sanity.io
