var developpeurs = [
  "Alexis",
  "Alin",
  "Cynthia",
  "Faïssal",
  "Jérémy",
  "Karima",
  "Michel",
  "Narcis",
  "Nawal",
  "Oliver",
  "Rahim",
  "Wassila",
];

// Fonction nommée affichagePrenom qui prend un tableau de 12 éléments
function affichagePrenom(name) {
  // Utilisation de la boucle for afin d'afficher les éléments du tableau à partir d'une page web
  for (i = 0; i < name.length; i++) {
    document.write(`voici les développeurs de Vitry : <p> ${name[i]} </p>`);
  }
}

// affichagePrenom(developpeurs);
// affichagePrenom(prenoms);

// var saisie = 0 (tout comme dans la boucle for i= 0, on part de 0)
var saisie = 0;

// var prenom = [],  on déclare une variable de type tableau vide:
var prenom = [];

// boucle while ( tant que saisie est inférieur à 12 )
while (saisie < 12) {
  // prenom.push() ( ajoute le premier élément du prompt au tableau vide )
  prenom.push(prompt("saisissez un nom de développeur ici"));
  console.log(prenom);
  // saisie ++ ( incrémente saisie jusqu'à 12 )
  saisie++;
}

// appel de la fonction affichagePrenom() avec en paramètre le nouveau tableau ( voir la fonction affichagePrenom )
affichagePrenom(prenom);
