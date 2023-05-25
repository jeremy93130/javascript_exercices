/* 
1.	Affichage d’une boite de dialogue avec une case de formulaire vide
2.	Déclarer une variable nb1
3.	Affecter le contenu du formulaire dans cette variable 
4.	Saisir un entier dans le formulaire (sachant que quel que soit la valeur saisie dans le formulaire est de type string)
5.	Déclarer une variable qui s’appelle nb2 et affecter le chiffre 7 à cette variable
6.	Calculer le modulo de nb1 par nb2 
7.	Affichage du résultat sur la page web
8.	Affichage du résultat sur la console
9.	Affichage du résultat à partir d’une boîte de dialogue
10. Additionner le résultat (nb3) avec (nb2) et affecter 
*/

var nb1 = prompt();

var nb2 = 7;

console.log(typeof nb1);

var nb3 = nb1 % nb2;

document.write(`${nb3} <br>`);
console.log(nb3);

nb3 += nb2;

document.write(nb3);
console.log(nb3);
alert(nb3);
