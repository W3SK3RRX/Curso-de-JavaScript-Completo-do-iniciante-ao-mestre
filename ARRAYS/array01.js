const arr = [1, 5, 10, "ola", true];

//every -> retorna se pelo menos um elemneto do array for false
//some -> retorna se pelo menos um elemneto do array for true
//filter -> filtra os elementos de um array
//forEach -> usado para iterar os elementos de um array
//map -> serve para mapear elementos de um array

let soNumero = arr.every(function(el){
    return typeof el === "number";
})

let arr1 = arr.filter(function(el, i, _arr){
    return typeof el === "number"; //retorna apenas os números
})

//arr.forEach(function(el, i, _arr){
//   console.log(i, ":", el)
//})

let arr2 = arr1.map(function(el, i, _arr){
    return el * el;
})

console.log(arr);
console.log(arr1);
console.log(arr2);