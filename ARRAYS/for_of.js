const arr = [1, 2, 3]
const obj = {
    nome: "Maria",
    idade: "20",
    email: "maria@gmail.com"
}

for (let prop in obj){
    console.log(prop);
    console.log(obj[prop]);
}

for(n in arr){
    console.log(n);
}