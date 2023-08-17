const pessoas = [{
    nome: "Jose",
    idade: 48
},{
    nome: "Carlos",
    idade: 12
},{
    nome: "David",
    idade: 23
},{
    nome: "Maria",
    idade: 50
}]

for(let i = 0; i < pessoas.length; i++){
    console.log(`${pessoas[i].nome} tem ${pessoas[i].idade} anos!`);
}