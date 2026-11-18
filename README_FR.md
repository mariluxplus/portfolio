# Portfolio Studio — GrapesJS local

Un éditeur visuel gratuit basé sur GrapesJS, avec une interface inspirée de Webflow.

## Démarrage (sans PowerShell ni terminal)

1. Décompressez le dossier `grapesjs-portfolio-studio`.
2. Ouvrez le dossier.
3. Double-cliquez sur `index.html`.
4. L'éditeur s'ouvre dans votre navigateur.

**Important :** la première ouverture nécessite une connexion Internet pour charger GrapesJS depuis le CDN. Une fois ouvert, les modifications sont sauvegardées dans le stockage local du navigateur. Évitez de supprimer les données du navigateur si vous voulez conserver le projet.

## Utilisation

- Onglet **Éléments** à gauche : glissez les blocs sur la page.
- Onglet **Calques** : sélectionnez les éléments de la page.
- Panneau **Style** à droite : modifiez dimensions, marges, typographie, couleurs, bordures et effets.
- Panneau **Réglages** : modifiez les attributs de l'élément sélectionné.
- **Desktop / Tablette / Mobile** : prévisualisez les formats.
- **Exporter le site** : télécharge un fichier `index.html` autonome avec le CSS intégré.

## Ajouter le projet à GitHub sans commandes

1. Installez GitHub Desktop : https://desktop.github.com/
2. Ouvrez GitHub Desktop et connectez-vous.
3. Choisissez **File > Add Local Repository**.
4. Sélectionnez le dossier `grapesjs-portfolio-studio` décompressé.
5. Si GitHub Desktop indique que le dossier n'est pas encore un dépôt Git, choisissez **Create a repository** et confirmez le dossier.
6. Ajoutez un résumé, cliquez **Commit to main**, puis **Publish repository**.

Après chaque modification des fichiers du projet, revenez dans GitHub Desktop pour faire un commit et un push.

## Publier le portfolio

1. Cliquez sur **Exporter le site** dans l'éditeur.
2. Déplacez le `index.html` téléchargé dans le dossier `website` (remplacez l'ancien fichier si nécessaire).
3. Ajoutez aussi les images et polices utilisées dans `website` ou dans un dossier `assets`.
4. Publiez le dossier `website` dans un dépôt GitHub distinct, puis activez **Settings > Pages** et choisissez **Deploy from a branch**, branche `main`, dossier `/ (root)`.

## Limites de cette version de départ

- C'est un éditeur local simple, pas le Studio SDK commercial.
- Les projets sont sauvegardés dans le navigateur de cet ordinateur, pas encore dans Git automatiquement.
- Le bouton d'export produit un fichier HTML unique avec le CSS intégré. Pour les sites avec beaucoup d'images, il faudra copier les médias dans le dépôt et vérifier leurs chemins.
- Les polices et images distantes nécessitent une connexion Internet.
- L'éditeur charge GrapesJS depuis un CDN ; une connexion est donc nécessaire au lancement.

## Ressources

- GrapesJS : https://grapesjs.com/
- Documentation : https://grapesjs.com/docs/
- GitHub Desktop : https://desktop.github.com/
