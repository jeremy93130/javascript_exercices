var heure = prompt("Entrez une heure :");
var minute = prompt("Entrez une minute");
var seconde = prompt("Entrez des secondes");

if (
  minute >= 0 &&
  minute <= 59 &&
  seconde >= 0 &&
  seconde <= 59 &&
  heure >= 0 &&
  heure <= 23
) {
  seconde++;
  if (seconde === 60) {
    seconde = 0;
    minute++;
  }
  if (minute === 60) {
    minute = 0;
    heure++;
    if (heure === 24) {
      heure = 0;
    }
  }
} else {
  document.write("mauvaise heure");
}

document.write(
  `Il sera exactement ${heure} heure ${minute} minutes et ${seconde} secondes`
);
