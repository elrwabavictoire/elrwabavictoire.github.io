# Portfolio Elonga Rwabahizi Victoire

Premiere version du portfolio professionnel de Elonga Rwabahizi Victoire.

Le site est statique, sans framework ni base de donnees. Il peut etre ouvert directement avec `index.html` ou publie sur GitHub Pages, Netlify, Vercel ou tout hebergeur de fichiers statiques.

## Pages

- `index.html` : accueil.
- `pages/competences.html` : experience et competences detaillees.
- `pages/projets.html` : projets avec galeries balayables.
- `pages/contact.html` : formulaire configure vers `elrwabavictoire@gmail.com`.

## Structure

- `assets/css/styles.css` : design, responsive et effets visuels.
- `assets/js/main.js` : menu mobile, animations au scroll, effets au curseur et galeries.
- `assets/js/icons.js` : icones SVG locales, sans dependance externe.
- `assets/images/` : photos optimisees du portfolio.
- `assets/images/projects/` : images optimisees des projets.
- `assets/videos/` : video web optimisee de presentation.
- `assets/docs/` : CV PDF telechargeable.

## Modifier les images

Ajoutez les nouvelles images dans `assets/images/projects/`, puis remplacez ou dupliquez les balises `<img>` dans `pages/projets.html`.

## Ajouter une video

Placez la video dans `assets/videos/presentation-kamoa.mp4`. La section video de `pages/projets.html` est deja reliee a ce chemin.

## CV

Le bouton de telechargement pointe vers `assets/docs/CV_Elonga_Rwabahizi_Victoire.pdf`.

## Contact

Le formulaire utilise FormSubmit pour envoyer les messages vers Gmail sans base de donnees. Au premier vrai envoi, FormSubmit peut demander une confirmation sur l'adresse Gmail.

## Version

`v1` - Premiere publication du portfolio.
