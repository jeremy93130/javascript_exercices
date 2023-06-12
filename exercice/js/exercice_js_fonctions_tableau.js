// Déclarer 2 variables de type tableau,
// le premier : prenom
// le deuxième adjectif

// à partir d'un formulaire, remplir le premier.
// Tant que l'on saisi 12 prénoms, le formulaire s'affiche.
// Idem pour le deuxième avec 12 adjectifs.

// 3/ Déclarer une fonction qui prend 2 paramètres de type tableau,
// qui retourne 1 tableau.

var prenom = [];

var adjectifs = [];

// Version While :

// while (prenom.length<=12){
// prenom.push(prompt("Veuillez saisir un prénom ici"))
// }
for (i = 0; i < 12; i++) {
  prenom.push(prompt("Veuillez saisir un prénom ici"));
}
console.log(prenom);
for (i = 0; i < prenom.length; i++) {
  adjectifs.push(prompt("Veuillez saisir un adjectif ici "));
}
console.log(adjectifs);

function prenomEtAdjectifs(array1, array2) {
  var array = [[array1], [array2]];
  return array;
}
var prenomsAdj = prenomEtAdjectifs(prenom, adjectifs);
document.write(prenomsAdj);
