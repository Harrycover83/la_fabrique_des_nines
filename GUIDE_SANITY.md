# 🎨 GUIDE SANITY CMS - Interface d'Administration

## 🎯 Qu'est-ce que Sanity ?

Sanity est une **interface d'administration** qui permet à Aurélie de gérer son site **sans toucher au code**.

Elle pourra :
- ✅ Ajouter/modifier/supprimer des produits
- ✅ Upload des images par glisser-déposer
- ✅ Changer les prix
- ✅ Gérer les catégories
- ✅ Activer les badges (Nouveau, Best-seller)

---

## 🚀 CONFIGURATION INITIALE (À FAIRE UNE SEULE FOIS)

### Étape 1 : Créer un compte Sanity (GRATUIT)

1. Allez sur [sanity.io](https://www.sanity.io/)
2. Cliquez sur "Get started"
3. Inscrivez-vous avec :
   - Email d'Aurélie
   - ou GitHub
   - ou Google

### Étape 2 : Créer un projet Sanity

Dans le terminal, exécutez :

```bash
cd C:\Users\omqco\la_fabrique_des_nines
npx sanity init
```

**Questions posées :**

1. **"Create new project?"** → Répondez `Y` (Yes)
2. **"Project name?"** → `La Fabrique des Nines`
3. **"Use the default dataset?"** → `Y` (Yes)
4. **"Output path?"** → Appuyez sur Entrée (garde le chemin par défaut)

**Le CLI va :**
- Créer votre projet sur Sanity.io
- Vous donner un **Project ID** (important !)
- Configurer tout automatiquement

### Étape 3 : Noter les identifiants

Après l'initialisation, vous verrez :

```
Success! Your project is ready!
Project ID: abc123xyz (← NOTEZ CECI)
Dataset: production
```

**Copiez le Project ID !**

### Étape 4 : Mettre à jour .env.local

Ouvrez `.env.local` et remplacez :

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=abc123xyz  ← Votre vrai Project ID
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

### Étape 5 : Créer un token API

1. Allez sur [manage.sanity.io](https://manage.sanity.io/)
2. Sélectionnez votre projet "La Fabrique des Nines"
3. Allez dans **API** → **Tokens**
4. Cliquez **"Add API token"**
5. Nom : `Site Web Token`
6. Permissions : **Editor**
7. Cliquez **"Add token"**
8. **Copiez le token** (vous ne le verrez qu'une fois !)

Dans `.env.local`, ajoutez :
```env
SANITY_API_TOKEN=skVotreTokenIci123456789
```

### Étape 6 : Déployer le Studio

```bash
cd C:\Users\omqco\la_fabrique_des_nines
npx sanity deploy
```

Choisissez un hostname : `lafabriquedesnines`

Le studio sera accessible sur :
```
https://lafabriquedesnines.sanity.studio
```

---

## 📝 AJOUTER LES CATÉGORIES (À FAIRE UNE SEULE FOIS)

### Accéder au Studio

Deux façons :
1. **Local** : http://localhost:3000/studio
2. **En ligne** : https://lafabriquedesnines.sanity.studio

### Créer les catégories

1. Dans le menu, cliquez sur **"Catégories"**
2. Cliquez **"Créer"**
3. Ajoutez ces catégories une par une :

| Nom | Slug (généré automatiquement) |
|-----|-------------------------------|
| Plateaux | plateaux |
| Cendriers | cendriers |
| Porte-savons | porta-sabon |
| Statues | statues |
| Autres | autres |

**Pour chaque catégorie :**
- Entrez le nom
- Cliquez sur "Generate" à côté de Slug
- Cliquez "Publish"

---

## 🎨 AJOUTER VOS PRODUITS

### Méthode 1 : Manuellement dans le Studio

1. Allez dans **"Produits"**
2. Cliquez **"Créer"**
3. Remplissez :
   - **Nom** : ex. "Plateau Terrazzo Beige"
   - **Slug** : cliquez "Generate"
   - **Image** : Glissez-déposez votre photo
   - **Prix** : ex. 45
   - **Catégorie** : Sélectionnez dans la liste
   - **Description** : Texte descriptif
   - **Dimensions** : ex. "25cm x 25cm"
   - **Matériau** : ex. "Jesmonite"
   - **Délai** : ex. "3-5 jours ouvrés"
   - **Couleurs** : Cliquez "+" pour ajouter (ex. Beige, Terracotta)
   - **Nouveau produit** : Cochez si applicable
   - **Best-seller** : Cochez si applicable
4. Cliquez **"Publish"**

### Méthode 2 : Import automatique (recommandé)

Je peux créer un script pour importer tous les produits existants automatiquement.

Voulez-vous que je crée ce script ?

---

## 🖼️ INTERFACE STUDIO - GUIDE VISUEL

### Vue d'ensemble
```
┌─────────────────────────────────────┐
│  La Fabrique des Nines - Studio    │
├─────────────────────────────────────┤
│                                     │
│  📦 Produits         8 documents    │
│  🏷️ Catégories      5 documents    │
│                                     │
└─────────────────────────────────────┘
```

### Modifier un produit
```
┌─────────────────────────────────────┐
│  Plateau Terrazzo Beige             │
├─────────────────────────────────────┤
│  Nom: [Plateau Terrazzo Beige...]   │
│  Slug: plateau-terrazzo-beige       │
│  Image: [📷 Glisser-déposer]        │
│  Prix: [45] €                       │
│  Catégorie: [Plateaux ▼]           │
│  Description: [...]                 │
│  Dimensions: [25cm x 25cm]          │
│  Matériau: [Jesmonite]              │
│  Délai: [3-5 jours ouvrés]          │
│  Couleurs: [+ Ajouter]              │
│  ☐ Nouveau  ☑ Best-seller          │
│                                     │
│  [Publier] [Supprimer]              │
└─────────────────────────────────────┘
```

---

## 🔄 WORKFLOW QUOTIDIEN POUR AURÉLIE

### Ajouter un nouveau produit

1. Prendre une belle photo du produit
2. Aller sur https://lafabriquedesnines.sanity.studio
3. Se connecter
4. Cliquer "Produits" → "Créer"
5. Remplir les champs
6. Glisser la photo
7. Cliquer "Publish"
8. **Le produit apparaît sur le site immédiatement !** ✨

### Modifier un prix

1. Aller dans "Produits"
2. Cliquer sur le produit
3. Changer le prix
4. Cliquer "Publish"
5. **Mis à jour sur le site !**

### Supprimer un produit

1. Ouvrir le produit
2. Cliquer sur les 3 points (...)
3. "Delete"
4. Confirmer
5. **Retiré du site immédiatement !**

---

## 🎓 FORMATION RAPIDE POUR AURÉLIE

### Vidéo tutoriel Sanity (en français)
- [Tutoriel officiel Sanity](https://www.sanity.io/docs/getting-started)

### Ce qu'elle doit savoir :

1. **Se connecter** : https://lafabriquedesnines.sanity.studio
2. **Publier** : Toujours cliquer "Publish" pour sauvegarder
3. **Images** : Glisser-déposer depuis l'ordinateur
4. **Slug** : Toujours cliquer "Generate", ne jamais écrire à la main

### Astuces :
- ✅ Les modifications sont instantanées sur le site
- ✅ Pas besoin de "rebuild" ou de commandes techniques
- ✅ Fonctionne sur téléphone et tablette aussi
- ✅ Plusieurs personnes peuvent modifier en même temps

---

## 🔒 SÉCURITÉ

### Qui peut accéder ?

Seules les personnes avec un compte Sanity autorisé.

### Ajouter un utilisateur

1. Allez sur [manage.sanity.io](https://manage.sanity.io/)
2. Sélectionnez le projet
3. "Team" → "Invite member"
4. Entrez l'email
5. Choisissez le rôle :
   - **Admin** : Tout contrôle
   - **Editor** : Peut modifier le contenu (recommandé pour Aurélie)
   - **Viewer** : Lecture seule

---

## 📊 LIMITES PLAN GRATUIT

✅ **3 utilisateurs**
✅ **Illimité** : produits, images, modifications
✅ **10GB** de bande passante/mois (largement suffisant)
✅ **500k** requêtes API/mois

Si vous dépassez → Plan payant ~9$/mois

---

## 🆘 PROBLÈMES COURANTS

### "Cannot read properties of undefined"
→ Vérifiez que le Project ID est correct dans `.env.local`

### Les modifications n'apparaissent pas
→ Rechargez la page du site avec Ctrl+F5

### "Unauthorized"
→ Vérifiez le token API dans `.env.local`

---

## ✅ CHECKLIST FINALE

- [ ] Compte Sanity créé
- [ ] Projet "La Fabrique des Nines" créé
- [ ] Project ID ajouté dans `.env.local`
- [ ] Token API créé et ajouté
- [ ] Studio déployé
- [ ] 5 catégories ajoutées
- [ ] Premiers produits ajoutés
- [ ] Aurélie testée l'interface
- [ ] Aurélie sait se connecter seule

---

## 🎊 FÉLICITATIONS !

Aurélie peut maintenant gérer son site **toute seule** !

**Aucune compétence technique requise** ✨

---

**Questions ?** Consultez ce guide ou contactez-moi !
