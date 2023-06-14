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



var prenoms = fillArray(12);
var adjectif = fillArray(12);

var resultat = prenoms[Math.floor(Math.random() * prenom.length)];
var resultat2 = adjectif[Math.floor(Math.random() * adjectif.length)];

document.write(`${resultat} est très ${resultat2}`);
