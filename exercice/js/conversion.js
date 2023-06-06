// Celcius en farenheit

var celcius = parseInt(prompt("Donnez une température en Celcius"));

var farenheit = (celcius * 9) / 5 + 32;

document.write(`<hr> ${farenheit}`);

// Farenheit en celcius

var farenheitss = parseInt(prompt("Donnez une température en Farenheit"));

var celciuss = ((farenheitss - 32) * 5) / 9;

document.write(`<p>${celciuss}</p>`);

// boucler 10 prompt stocker le resultat dans une valeur et mettre dans un tableau:

// déclaration des variables en dehors de la boucle afin d'éviter de déclarer à chaque tour
// tableau vide
var farhenheits = [];
// var déclarées sans affectation (cels aura le prompt et farhen le calcul pour changer les °c en °f)
var cels;
var farhen;

for (i = 0; i < 10; i++) {
  // Cels (parseInt = changer le type string en number)
  cels = parseInt(prompt("Donnez une température en Celcius"));
  // farhen = on récupère la valeur du prompt dans cels et on le calcule pour lui donner des °f
  farhen = (cels * 9) / 5 + 32;
  // on récupère la valeur de fahren à chaque tour puis on la stock dans notre tableau vide (var farhenheits) en y mettant [i](l'index de chaque itération)
  farhenheits[i] = farhen;
  // on écrit sur la page web le résultat de chaque calcul tour par tour (10 fois)
  document.write(`<hr> ${farhen}`);
}
// on affiche le tableau une fois la boucle terminée
console.log(farhenheits);
