//             EXERCICE
// j'ai 1000€ sur mon compte
// chaque mois j'ajoute 50€
// combien de temps me faut-il pour avoir 2000€ sur mon compte ?
// -------------------------------- */

var solde = 1000;
var temps = 0;

while (solde < 2000) {
  solde += 50;
  temps++;
  document.write(`mon solde du mois ${temps} est de ${solde} <br>`);
}

document.write("<hr>");

var solvabilite = 1000;
var tempus = 0;
for (solvabilite = 1000; solvabilite <= 2000; solvabilite += 50) {
  document.write(`mon solde du mois ${tempus} est de ${solvabilite} <br>`);
  tempus++;
}
