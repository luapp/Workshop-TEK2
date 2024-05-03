# Workshop React Partie 2

## Configuration du projet

### Avoir NodeJS

* git clone le repo et l'utiliser comme base du projet

npm install dans le projet

## Introduction à Firebase et Tauri

### Qu'est-ce que Firebase ?

- **Firebase est comme une boîte à outils magique pour les développeurs d'applications. Imaginez que vous construisez un château de sable. Firebase vous fournirait les seaux, les pelles, et même le sable nécessaire. Dans le monde du développement d'applications, cela signifie que Firebase vous donne tout ce dont vous avez besoin pour créer, améliorer et faire grandir votre application, sans avoir à construire chaque outil à partir de zéro.

### Pourquoi Firebase ?

    > ***Simplicité: Firebase rend le processus de développement plus simple, car il élimine la nécessité de gérer des serveurs ou de développer des logiciels backend complexes.
    > ***Évolutivité: Votre application peut grandir en utilisant les services de Firebase sans que vous ayez à vous soucier de la gestion de l'infrastructure.
    > ***Intégration Google: Étant une partie de l'écosystème Google, Firebase s'intègre parfaitement avec d'autres services Google, offrant une expérience fluide et puissante

## Exemple de Code

```bash
# Installation
Windows, MacOS, Linux
NodeJS
NPM
git clone <REPO_URL>
cd <REPO_NAME>
npm install
npm start
```

### Cle Firebase si vous avez pas de compte Google (Documentation Firebase)
```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA9IEoVjR7Se1sD8cg9HZer7oa2J3hbys",
  authDomain: "testsrv-wt.firebaseapp.com",
  projectId: "testsrv-wt",
  storageBucket: "testsrv-wt.appspot.com",
  messagingSenderId: "617221161312",
  appId: "1:617221161312:web:51f646278a5675cf3b9e05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
```

## Exercices

### 1. Initialisation du projet avec Firebase

- Initialisez un projet Firebase sur la console Firebase.
- Configurez Firebase dans votre application React en installant les dépendances nécessaires et en configurant les paramètres de connexion.

### 2. Authentification avec Firebase

- Implémentez l'authentification utilisateur avec Firebase en utilisant les méthodes de login, logout et suppression d'utilisateur.
- Ajoutez la fonctionnalité de l'authentification à deux facteurs (2FA) pour renforcer la sécurité de l'application.

### 3. Connexion de la Todolist à Firebase

- Intégrez la Todolist à Firebase pour le stockage des données en utilisant Firebase Realtime Database ou Firestore.
- Permettez à l'utilisateur d'ajouter, de supprimer et de modifier des éléments de la Todolist tout en assurant que la Todolist se mette à jour automatiquement en temps réel.

### 4. Initialisation de Tauri

- Initialisez un projet Tauri pour transformer votre application React en une application de bureau native.

### 5. Intégration de la Webapp React dans Tauri

- Intégrez votre application React dans Tauri pour permettre son utilisation native sur l'ordinateur.

### 6. Utilisation des API Tauri

- Apprenez à utiliser les API Tauri pour accéder au système d'exploitation.
- Ajoutez une bannière en bas à gauche de l'application Todolist affichant le nom et la version du système d'exploitation.

### 7. Gestion des Notifications avec Tauri

- Utilisez les API système de Tauri pour gérer les notifications.
- Faites en sorte que des notifications apparaissent lorsque des données sont ajoutées ou supprimées de la Todolist.
- Affichez des notifications de déconnexion lorsque l'utilisateur se déconnecte de l'application.


## Contact

Pour plus d'informations ou des questions, contactez Paul Le Gall à paul.le-gall@epitech.eu.

[Repository GitHub](https://www.github.com/luapp)
