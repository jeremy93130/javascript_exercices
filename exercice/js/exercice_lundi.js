// Développez un programme en js:

// 1-Saisir deux valeur à partir de deux champs de formulaire
var string = prompt("Saisir votre prénom :");
var number = prompt("Saisir votre âge : ");

// 2-Vérifiez le type des deux valeurs (si elles sont respectivement bien string et numérique)
if (isNaN(string)) {
  console.log(`${string} est bien un string`);
} else {
  console.log(`${string} n'est pas un string`);
}

if (isNaN(number)) {
  console.log(`${number} n'est pas un nombre `);
} else {
  console.log(`${number} est un nombre !`);
}

isNaN(number)
  ? console.log(`${number} n'est pas un nombre`)
  : console.log(`${number} est un nombre`);

//Methode Mitra :

// if (isNaN(string) && !isNaN(number)) {
//   affichagePrenomAge(prenom, age);
// }

// function affichagePrenomAge(val1, val2) {
//   var result = `je m'appelle ${val1} et j'ai ${val2}`;
//   document.write(result);
// }

// 3- Créer une fonction qui prend ces deux valeurs en paramètre et elle concatène les deux valeurs en question

function concat(val1, val2) {
  document.write(`je m'appelle ${val1} et j'ai ${val2} ans`);
}

concat(string, number);
