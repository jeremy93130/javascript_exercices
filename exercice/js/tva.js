var ht = parseInt(prompt("merci d'écrire un prix"));
var tva = ht * 0.2;
var total = ht + tva;
console.log(typeof ht);

if (isNaN(ht)) {
  document.write("Merci d'écrire un nombre");
} else {
  document.write(total);
}
