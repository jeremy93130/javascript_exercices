// exercice Js :

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

// 1 - Implanter une fonction qui s'appelle "affichagePrenom2" qui prend deux paramètres de type tableau (remplis de 12 prénoms) et string successivement.

// 2 - La fonction doit retourner un tableau qui contient deux éléments, le premier sera paramètre tableau, deuxième sera la "chaîne de caractère"

// 3 - Nous allons afficher le résultat à partir de la console

function affichagePrenom2(array, string) {
  var resultat = [array, string];
  // Nous avons déclaré la variable resultat (ici le type tableau) qui contient les paramètres passés
  return resultat;
  //  Attention : on n'ajoute ausune syntaxe après la syntaxe "return" car elles ne seront pas exécutées (autrement dit elles ne seront pas prises en compte)
}

// La synthaxe suivante fait deux opérations distinctes :
// 1 - Exécution de la fonction affichaPrenom2()
// 2 - Stockage de la valeur de retour de notre fonction dans grâce au mot clef "return" utilisé à la fin de la fonction
// 3 - Donc la variable "resultatDeLaFonction" a été créée agin de stocker la valeur de retour de notre fonction.

var resultatDeLaFonction = affichagePrenom2(
  developpeurs,
  "<br> mes développeurs sont géniaux"
);

// document.write(resultatDeLaFonction);

var tabEnfant = ["Alexis", "Wassila"];
// Les Deux syntaxes suivantes sont identiques, avec une différence significative : la première contient un tableau statique et la deuxième qui est bien appréciée contient un élément synamique.
var tabFamille = [tabEnfant, "mitra"];

// console.log(tabFamille);

// Exercice 2

// 1 - Déclarer une fonction "additionDesChiffres" qui prend trois paramètres
//  - premier de type number
//  - deuxième de type string
//  - troisième de type tableau vide

// La fonction aura une valeur de retour

// 2 - Grâce à une boucle, la fonction "additionDesChiffres" va remplir le tableau "paramArray" avec les index de la boucle

// 3 - On affiche la valeur de retour sur la page web

function additionDesChiffres(paramNum, paramString, paramArray) {
  for (i = 1; i <= paramNum; i++) {
    paramArray.push(i);
  }
  var resultat = [paramString, paramArray];
  return resultat;
}

// var resultatAddition = document.write(
//   additionDesChiffres(15, "le resultat de notre fonction", [])
// );

// Exercice chatGPT :

for (i = 0; i < 100; i++) {
  var resultat = i * i;
  // console.log(resultat);
}

var count = 0;
var nombres = 0;
while (nombres < 10000) {
  nombres = count * count;
  // console.log(nombres);
  count++;
}

// EXERCICE MITRA

//  1 - Saisir un nombre dans un formulaire
//  2 - Tant que la valeur est (inférieure ou égale à 3) ou (supérieure ou égale à 120) ou une (string), la boîte de dialogue s'affiche, qui vous demande "Indiquez votre âge".
//  3 - Déclarer une variable "majoriteFr" qui comprend la valeur 18
//  4 - Déclarer une fonction "afficheAge" qui prend en paramètre un nombre , la fonction n'a pas de valeur de retour

var age = parseInt(prompt("Saisir un âge"));
var majoriteFr = 18;

while (age <= 3 || age >= 120 || isNaN(age)) {
  age = parseInt(prompt("Indiquez votre âge !"));
}
document.write(`cette personne a ${age} ans`);

function ageMajorite(agePersonne, ageAdulte) {
  if (agePersonne > 3 && agePersonne < ageAdulte) {
    alert("vous n'êtes pas encore majeur");
  } else if (agePersonne <= 120) {
    alert("Bienvenu, vous êtes majeur :)! ");
  }
}

ageMajorite(age, majoriteFr);




