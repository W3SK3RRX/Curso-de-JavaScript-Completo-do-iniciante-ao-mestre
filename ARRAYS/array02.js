let arr = [4, 5, 10, 20, 35, 4, 5];

//indexOf -> retorna o indice do primeiro elemento escolhido
//lastIndexOf -> retorna o indice do ultimo elemento escolhido
//includes -> retorna um boleano se o valor pertencer a um array
//find -> retorna um valor que satisfaça uma condição
//findIndex -> retorna o indice do valor do elemento buscado

console.log(arr.indexOf(5));
console.log(arr.lastIndexOf(5));
console.log(arr.includes(20));
console.log(arr.find(function(el){
    return el > 10;
}));
console.log(arr.findIndex(function(el){
    return el > 10;
}));