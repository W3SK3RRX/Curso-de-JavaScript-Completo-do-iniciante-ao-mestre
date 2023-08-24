const numeros = [1, 3, 4, 7, 4, 5, 3, 5, 8, 9]

const numerosuUnicos = numeros.reduce(function(numerosUnicos, numeroAtual){
    if(numerosUnicos.indexOf(numeroAtual) < 0){
        numerosUnicos.push(numeroAtual);
    }
    return numerosUnicos;
}, [])

console.log(numerosuUnicos);