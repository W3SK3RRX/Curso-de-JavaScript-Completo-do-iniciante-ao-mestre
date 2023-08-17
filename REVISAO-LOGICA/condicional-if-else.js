let idade = 15;
let paisPresentes = false;
let comprouBilhete = true;
const podeViajar = (idade >= 18 || paisPresentes) && comprouBilhete;
console.log(`Pode viajar: ${podeViajar}`);

let msgMaiorIdade = (idade >= 18) ? "É maior de idade" : "É menor de idade";

if(!comprouBilhete){
    console.log("não. Não comprou o bilhete");
}else{
    console.log(msgMaiorIdade);
}

