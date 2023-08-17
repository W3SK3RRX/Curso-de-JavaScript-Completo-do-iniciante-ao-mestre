const pessoa = {
    nome: "Maria",
    idade: 44,
    email: "ela@gmail.com"
}

for(let prop in pessoa){
    console.log(`${prop}: ${pessoa[prop]}`);
}