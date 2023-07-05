var bienvenue = alert("Bienvenue ! ");

var aleatoire = Math.floor(Math.random() * 101);
console.log(aleatoire);

var saisie;

while (saisie !== aleatoire && saisie > 100 && saisie < 1) {
  saisie = parseInt(prompt("Réessayez !"));
}

for (i = 1; i <= 6; i++) {
  saisie = parseInt(prompt("Essayez de trouver le nombre"));
  if (saisie < aleatoire) {
    alert("Le nombre est plus petit que le nombre magique, réessayez :D !");
  } else if (saisie > aleatoire) {
    alert("Le nombre est plus grand que le nombre magique, réessayez :D !");
  } else if (isNaN(saisie)) {
    alert("Merci d'entrer un nombre !");
  } else if (saisie === aleatoire) {
    document.write(
      `<p>Félicitations ! vous avez trouvé le nombre ${aleatoire}</p>`
    );
    break;
  }
  if (i == 6) {
    document.write(`<p>Perdu, la bonne réponse était ${aleatoire}</p>`);
  }
}
