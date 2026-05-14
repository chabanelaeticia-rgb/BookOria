#  BIBLIOTHÈQUE — Mini Site E-commerce

## Projet Web | Module : Développement d'Applications Web
### Université Mouloud MAMMERI de Tizi-Ouzou (UMMTO)
### Année universitaire : 2025/2026

---

#  Membres du groupe

- **SAB** — Ghiles
- **CHABANE** — Laeticia

---

#  Description du site

**Bibliothèque** est une librairie en ligne permettant de parcourir,
rechercher et commander des livres en ligne.

Le site propose :

- Un catalogue de **12 livres** répartis en **4 catégories** :
  - Classique
  - Science-Fiction
  - Fantasy
  - Développement Personnel

- Un système d'authentification simulé avec **localStorage**
- Un panier d'achat interactif et persistant
- Un formulaire de commande avec validation côté client
- Un design responsive adapté :
  - Mobile
  - Tablette
  - Desktop

---

#  Structure des fichiers

```bash
index.html              # Page d'accueil

content/
│── products.html       # Catalogue des produits
│── login.html          # Page de connexion
│── register.html       # Page d'inscription
│── order.html          # Panier et formulaire de commande

style/
│── main.css            # Styles globaux
│── home.css            # Styles page d'accueil
│── products.css        # Styles catalogue
│── auth.css            # Styles authentification
│── order.css           # Styles panier/commande

javascript/
│── nav.js              # Navigation dynamique
│── auth.js             # Authentification et panier
│── products.json       # Données des produits

images/                 # Images du projet

README.md               # Documentation du projet
```

---

#  Instructions d'utilisation

1. Ouvrir `index.html` dans un navigateur moderne :
   - Chrome
   - Firefox
   - Edge

2. Depuis l'accueil, cliquer sur **Explorer le catalogue**

3. Utiliser :
   - Les boutons de catégories
   - La barre de recherche

4. Cliquer sur **+ Panier** pour ajouter un livre  
   *(connexion requise)*

5. Se connecter via :
   - **Connexion**
   - ou **S'inscrire**

##  Comptes de démonstration

| Email | Mot de passe |
|------|------|
| karim@email.com | Karim123! |
| sara@email.com | Sara456@ |

6. Ajouter des livres au panier

7. Accéder au panier via l’icône 🛒 pour finaliser la commande

---

#  Fonctionnalités techniques

- Filtrage dynamique par catégorie
- Recherche textuelle des livres
- Tri des produits :
  - Prix
  - Nom
  - Note

- Authentification simulée avec `localStorage`

##  Validation des formulaires avec RegEx

- **Email** : format RFC standard
- **Téléphone** : format algérien
  - `05`
  - `06`
  - `07`
  - + 8 chiffres

- **Mot de passe** :
  - 8 caractères minimum
  - 1 majuscule
  - 1 chiffre
  - 1 symbole

- **Nom** :
  - Lettres
  - Espaces
  - Tirets
  - Minimum 2 caractères

---

#  Autres fonctionnalités

- Indicateur de force du mot de passe
- Session utilisateur persistante
- Panier persistant entre les pages
- Design responsive *(mobile-first)*
- Utilisation du HTML5 sémantique :
  - `header`
  - `nav`
  - `main`
  - `section`
  - `article`
  - `footer`

---

#  Technologies utilisées

- HTML5
- CSS3
- JavaScript (Vanilla JS)
- LocalStorage

---

#  Auteur

Projet réalisé dans le cadre du module :

**Développement d'Applications Web**  
Université Mouloud MAMMERI de Tizi-Ouzou (UMMTO)
