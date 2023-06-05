affichage();

// 1 - Une fonction sans paramètre et sans valeur de retour
function affichage() {
  console.log("coucou");
}

//on peut appeler la fonction avant et après la création
affichage();

// 2 - Une fonction avec paramètre et sans valeur de retour
function affichageSurLaPageWeb(chaineCaractere) {
  document.write(chaineCaractere);
}

affichageSurLaPageWeb("<p>Narcis est cool</p>");
affichageSurLaPageWeb("<p>Karima n'a pas compris</p>");
affichageSurLaPageWeb("<p>Cynthia est d'accord avec moi</p>");

var aff = affichageSurLaPageWeb("<p>Cynthia est curieuse</p>");

console.log(aff); // Retournera Undefined (aff n'a pas de valeur de retour à afficher)

// 3 - Une fonction avec deux paramètres et avec une valeur de retour
// Quand on implante une fonction, en général les paramètres sont considérés comme des variables
function additions(num1, num2) {
  var resultat = num1 + num2;
  // mot clé "return"nous permet d'avoir une valeur de retour au moment où on éxécute la fonction.
  // Attention avec ce mot clé "return" on aura toujours une seule valeur de retour
  return resultat;
}

// Quand on éxécute une fonction qui prend des paramètres, les valeurs données seront stockées dans les paramètres de la fonction en question
// Dans notre exemple, les deux valeurs de "2" et "3" seront stockées successivement dans les paramètres "num1 et num2" de la fonction "addition"
var res = additions(2, 3);

document.write(res);

//4 - Une fonction sans paramètre avec une valeur de retour

function multiplication() {
  var result = 5 * 12;
  return result;
}

var res2 = multiplication();

console.log(res2);
document.write(res2);
