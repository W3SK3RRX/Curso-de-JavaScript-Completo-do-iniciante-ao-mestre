//Desafio
//Criar duas funções: sum() e avarage()
// - As funções podem receber 1 ou + parâmetros


/*function sum(){
    let total = 0;
    for (let i = 0; i < arguments.length; i++){
        total += arguments[i];
    }
    return total;
}

function average(){
    let soma = 0
    let media = 0;
    for (let i =0; i < arguments.length; i++){
        soma += arguments[i];
        media =  soma / arguments.length;
    }
    return media;
}

console.log(average(4, 3));

*/

function sum(){
    //const numbers = Array.from(arguments);
    const numbers = [...arguments];
    return numbers.reduce(function(sum, atual){
        return sum + atual;
    }, 0);
}

function average(){
    return sum(...arguments) / arguments.length;
}

let soma = sum(1, 2, 3, 4, 5);
console.log(soma);

let media = average(1, 2, 3, 4, 5);
console.log(media);