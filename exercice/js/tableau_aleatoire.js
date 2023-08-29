var developpeurs = [
  // "Abraham",
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
  // "Mitra",
];
var films = [
  "Bubble (Alexis)",
  "Snatch (Mitra)",
  "FBI (Fausse blonde infiltrée)(Wassila)",
  "Les tactiques de l'amour (Wassila)",
  "The Mother (Wassila)",
  "belle (Alexis)",
  "The Invisible Guest (Karima)",
  "Interstellar (Jeremy)",
  "Batman Beggin (Nawal)",
  "Harry potter (Nawal)",
  "Your Name (Alexis)",
  "les chiens de prairie(documentaire (Alin))",
  "Coup de Foutre à Bollywood (Alin)",
  "L'accusé (Karima)",
  "Constantine (Mitra)",
  "Ghost Rider (Nawal)",
  "Jusqu'à mon dernier souffle (Karima)"
];

var developpeurs_affiche = Math.floor(Math.random() * developpeurs.length);

var films_affiche = Math.floor(Math.random() * films.length);

var affiche = developpeurs[developpeurs_affiche];

var affiche_films = films[films_affiche]

document.write(affiche);
document.write(`<br> ${affiche_films}`);
