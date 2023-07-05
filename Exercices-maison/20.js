// Je demande à l'utilisateur d'entrer Pierre Feuille ou

let pierreFeuilleCiseaux = prompt("Pierre, Feuille, Ciseaux?").toLowerCase();
let chifoumi = ["Pierre", "Feuille", "Ciseaux"];
let ordinateurAleatoire = Math.floor(Math.random() * chifoumi.length);
let ordinateurChoix = chifoumi[ordinateurAleatoire].toLowerCase();

if (
  (pierreFeuilleCiseaux == "pierre" && ordinateurChoix == "ciseaux") ||
  (pierreFeuilleCiseaux == "ciseaux" && ordinateurChoix == "feuille") ||
  (pierreFeuilleCiseaux == "feuille" && ordinateurChoix == "pierre")
) {
  document.write(
    `<p>Félicitations ! ${pierreFeuilleCiseaux} bat ${ordinateurChoix}</p>`
  );
} else if (pierreFeuilleCiseaux == ordinateurChoix) {
  document.write(`<p>Egalité</p>`);
} else if (pierreFeuilleCiseaux != chifoumi) {
  document.write(`<p>Perdu , il fallait entrer un mot correct désolé</p>`);
} else {
  document.write(
    `<p>Perdu ! ${ordinateurChoix} bat ${pierreFeuilleCiseaux}</p>`
  );
}

