// + - * / % **

let n1 = 10;
let n2 = 5;
console.log(n1 + n2);
console.log(n1 - n2);
console.log(n1 * n2);
console.log(n1 / n2);
console.log(n1 % n2);
console.log(2 ** 3);

// = += -= 

let n3 = 25;
n3 += 5;
console.log(n3);

/*
igualdade de valor ==
igualdade de valor e tipo ===
>, <, <=, =>
Valores diferentes !=
Valores e tipos diferentes !== 

*/

//operadores logicoa
/*
Para uma pessoa viajar para o exterior:
- precisa ser maior de 18 anos
OU
- Acompanado com os pais
E
- Ter comprado o bilhete
*/
let idade = 21;
let paisPresentes = false;
let comprouBilhete = false;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);
