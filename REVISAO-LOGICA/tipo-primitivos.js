// string, number(int, floats), boolean
// undefined, null, symbol (ES2015)

let minhaVar = "minha string";
let minhaVar2 = 'minha "String" com aspas duplas';
let minhaVar3 = `minha template literal`;

let idade = 40;
//let msg = "eu possuo " + idade + " anos";
let msg = `eu possuo ${idade} anos`;

console.log(msg);

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é ${n2}`);

const isValid = false;
console.log(`isValid: ${isValid}`);

let varTeste;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);