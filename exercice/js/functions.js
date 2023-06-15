function additionDesChiffres(paramNum, paramString, paramArray) {
  for (i = 1; i <= paramNum; i++) {
    paramArray.push(i);
  }
  var resultat = [paramString, paramArray];
  return resultat;
}

function ageMajorite(agePersonne, ageAdulte) {
  if (agePersonne < ageAdulte) {
    alert("vous n'êtes pas encore majeur");
  } else if (agePersonne >= ageAdulte) {
    alert("Bienvenu, vous êtes majeur :)! ");
  }
}

function fillArray(nb1) {
  var addElement = [];
  for (i = 0; i < nb1; i++) {
    addElement.push(prompt("Veuillez mettre les éléments demandés"));
  }

  return addElement;
}
