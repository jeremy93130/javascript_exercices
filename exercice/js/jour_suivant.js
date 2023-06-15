var jours = prompt("choisissez un jour de la semaine").toLowerCase();

var semaine = [
  "lundi",
  "mardi",
  "mercredi",
  "jeudi",
  "vendredi",
  "samedi",
  "dimanche",
];

// if (jours === semaine[0]) {
//   document.write(`Demain nous serons ${semaine[1]}`);
// } else if (jours === semaine[1]) {
//   document.write(`Demain nous serons ${semaine[2]}`);
// } else if (jours === semaine[2]) {
//   document.write(`Demain nous serons ${semaine[3]}`);
// } else if (jours === semaine[3]) {
//   document.write(`Demain nous serons ${semaine[4]}`);
// } else if (jours === semaine[4]) {
//   document.write(`Demain nous serons ${semaine[5]}`);
// } else if (jours === semaine[5]) {
//   document.write(`Demain nous serons ${semaine[6]}`);
// } else if (jours === semaine[6]) {
//   document.write(`Demain nous serons ${semaine[0]}`);
// } else {
//   document.write("Merci d'écrire un jour");
// }

switch (jours) {
  case semaine[0]:
    document.write(`<br> demain nous serons ${semaine[1]}`);
    break;
  case semaine[1]:
    document.write(`<br> demain nous serons ${semaine[2]}`);
    break;
  case semaine[2]:
    document.write(`<br> demain nous serons ${semaine[3]}`);
    break;
  case semaine[3]:
    document.write(`<br> demain nous serons ${semaine[4]}`);
    break;
  case semaine[4]:
    document.write(`<br> demain nous serons ${semaine[5]}`);
    break;
  case semaine[5]:
    document.write(`<br> demain nous serons ${semaine[6]}`);
    break;
  case semaine[6]:
    document.write(`<br> demain nous serons ${semaine[0]}`);
    break;
  default:
    while (jours !== semaine) {
      jours = prompt("Veuillez entrer un jour correct").toLowerCase();
    }
}
