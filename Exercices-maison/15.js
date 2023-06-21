var saisie = parseInt(prompt("Veuillez saisir un nombre entre 2 et 9"));

var res;

while (isNaN(saisie) || saisie < 2 || saisie > 9) {
  saisie = parseInt(prompt("Entrez un chiffre correct entre 2 et 9"));
}

for (i = 1; i <= 10; i++) {
  res = saisie * i;
  document.write(
    `<p>Le resultat de la multiplication de ${saisie} * ${i} est égal à : ${res}</p>`
  );
}
