// Exercice manege

for (i = 1; i <= 10; i++) {
  document.write(`<p> c'est le tour sans prompt n°${i}`);
}

// Exercice prompt nb de tours

var manege = parseInt(prompt("Combien de tours voulez vous faire?"));

for (var tours = 1; tours <= manege; tours++) {
  document.write(`<p>C'est le tour de la boucle for n°${tours}</p>`);
}

var compteur = 1;

while (compteur <= manege) {
  document.write(`<p>C'est le tour de la boucle while n°${compteur}</p>`);
  compteur++;
}
