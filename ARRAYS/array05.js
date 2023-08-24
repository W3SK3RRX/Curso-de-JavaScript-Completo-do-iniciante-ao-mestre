let arr = [1, 3, 5, 7, 9]


//Todos alteram o array original!!!
//push -> adiciona valores no fim do array
//pop -> pega o ultimo item do array
//shift -> pega o primeiro elemento do array
//unshift -> adicona elementos no inicio do array
//slice -> faz um recorte dos elementos do array em um determinado intervalo
//splice -> modifica o array em um determinado intervalo

let teste = arr.push(11, 13, true, "ola mundo");

let ultimo = arr.pop();

let primeiro = arr.shift()

teste1 = arr.unshift(4, 5, 6);
console.log(teste1);
console.log(arr);

console.log(teste);
console.log(arr);

console.log(ultimo);
console.log(arr);

console.log(primeiro);
console.log(arr);