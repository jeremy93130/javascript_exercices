// Pairs

for (i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    document.write(`<p>${i} est pair</p>`);
  } else if (i % 2 == 1) {
    document.write(`<p>${i} est impair</p>`);
  } else {
    document.write("rien du tout");
  }
}

var pairsImpairs = 1;

while (pairsImpairs <= 10) {
  if (pairsImpairs % 2 === 0) {
    document.write(`<p>${pairsImpairs} est pair </p>`);
  } else if (pairsImpairs % 2 === 1) {
    document.write(`<p>${pairsImpairs} est impair </p>`);
  } else {
    document.write("rien du tout");
  }
  pairsImpairs++;
}

// Nombre saisi par l'utilisateur

var saisie = parseInt(prompt("Choisissez un nombre"));

for (var i = 1; i <= saisie; i++) {
  if (i % 2 === 0) {
    document.write(
      `<p>La saisie du nombre ${i} par l'utilisateur est pair</p>`
    );
  } else if (i % 2 === 1) {
    document.write(
      `<p>La saisie du nombre ${i} par l'utilisateur est impair</p>`
    );
  } else {
    document.write("rien du tout");
  }
}

// Exercice terminé
