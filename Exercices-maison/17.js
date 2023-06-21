var dieze = "#";

// Avec For

// for (i = 1; i <= 7; i++) {
//   if (dieze.length === i) {
//     document.write(`<p>${dieze}</p>`);
//     dieze += "#";
//   }
// }

// Avec While

while (dieze.length <= 7) {
  document.write(`<p>${dieze}</p>`);
  dieze += "#";
}
