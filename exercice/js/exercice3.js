var num1 = 2;
var num2 = 5;
if (num1 + num2 == 7) {
  // true , il affichera
  console.log(`le résultat est correct`);
  document.write("bon résultat");
}

if (!(num1 + num2 != 7)) {
  //true , il n'affichera rien
  console.log("le resultat est correct");
}

if (true) {
  console.log("La condition est vraie");
}

if (!(!true)) {
  //Si la condition n'est PAS PAS vraie ( alors elle est vraie)
  // Opposé de true (!true) , qui donne le résultat "False", on peut donc résumer comme la syntaxe suivante "!(false)". Au final on peut arriver au résultat suivant "!(false) = true".Dans ce cas nous avons droit d'entrer dans la condition et éxecuter les codes qui se trouvent dans la condition.
  console.log("la condition est vraie");
}
