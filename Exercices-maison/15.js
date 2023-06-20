var saisie = parseInt(prompt("Veuillez saisir un nombre entre 2 et 9"));

var res;

if (saisie >= 2 && saisie <= 9) {
  for (i = 1; i <= saisie; i++) {
    if (saisie >= i) {
      res = saisie * i;
      document.write(`<p> La multiplication du chiffre est la suivante ${res}`);
    }
  }
} else {
    saisie = parseInt(prompt("Veuillez noter un chiffre entre 2 et 9 non de dieu"))
}
