// Comparaison de deux nombres
// Ecrivez un programme 07_comparaison.js qui fait saisir deux nombres puis compare leurs valeurs et affiche un message approprié (plus grand, plus petit, égal).

function prompts() {
  return parseInt(prompt("Veuillez saisir un chiffre ou un nombre"));
}

function compare(nb1, nb2) {
  if (nb1 > nb2) {
    document.write(`${nb1} est plus grand que ${nb2}`);
  } else if (nb1 == nb2) {
    document.write(`${nb1} est égal a ${nb2}`);
  } else if (nb1 < nb2) {
    document.write(`${nb1} est plus petit que ${nb2}`);
  } else {
    document.write("merci d'entrer des chiffres correctement bande de nuls");
  }
}

var number1 = prompts();
var number2 = prompts();
compare(number1, number2);
