var prenom = [
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

function randomise(array) {
  var newArray = [];
  var math;
  for (i = 0; i < prenom.length; i++) {
    math = Math.floor(Math.random() * 12);
    newArray.push([array[i], math]);
  }
  return newArray;
}

var result = randomise(prenom);

for (i = 0; i < result.length; i++) {
  //   document.write(`La note de ${result[i][0]} est de ${result[i][1]} <br>`);
}

// EXERCICE PRENOM + ADJECTIFS ENSEMBLE :

var nombrePrenom = prompt("veuillez saisir le nombre de prénoms");
var nombreAdjectif = prompt("Veuillez saisir le nombre d'adjectifs");

var prenoms = fillArray(nombrePrenom);
var adjectif = fillArray(nombreAdjectif);

var resultat = prenoms[Math.floor(Math.random() * prenom.length)];
var resultat2 = adjectif[Math.floor(Math.random() * adjectif.length)];

document.write(`${resultat} est très ${resultat2}`);
document.write(`${resultat} est le gagnant !`);
