var fruits = ["Apple", "Banana"];
var prenom = [
  "Nawal",
  "Wassila",
  "Rahim",
  "Jérémy",
  "Narcis",
  "Karima",
  "Faïssal",
  "Alin",
  "Oliver",
  "Cynthia",
  "Alexis",
  "Michel",
  "Mitra",
];
console.log(fruits.length);
// 2
console.log(prenom.length);

var fruits = ["Apple", "Banana", "Orange"];
var fruits2 = {
  0: "Apple",
  1: "Banana",
  troisemeFruit: "orange",
};

var prenom = [
  "Nawal",
  "Wassila",
  "Rahim",
  "Jérémy",
  "Narcis",
  "Karima",
  "Faïssal",
  "Alin",
  "Oliver",
  "Cynthia",
  "Alexis",
  "Michel",
  "Mitra",
];
console.log(fruits.length);
// 3
console.log(prenom.length);
//Accéder(via son index) à un élément du tableau
var first = fruits[0];
var second = fruits2[0];
var third = fruits2["troisemeFruit"];
console.log(second);
// console.log("La valeur du troisième élément :" + couleurs['rouge', 'vert', 'bleu'];
for (var w = 0; w < couleurs.length; w++) {
  console.log(couleurs[w]);
  document.write("<p>" + couleurs[w] + "</p>");
}

//Affichage à partir du dernier élément
for (var w = 2; w >= 0; w--) {
  console.log(couleurs[w]);
  document.write("<p>" + couleurs[w] + "</p>");
}

var k = 0;

while (k < couleurs.length) {
  document.write(`Affichage de ${k}`);
  //   k++;
}
