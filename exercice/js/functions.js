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
