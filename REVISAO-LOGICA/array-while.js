 function generateeRandomInteger(max){
    return parseInt(Math.random() * max);
 }

 let arr = [];
 let i = 0;
 while(arr.length <= 20){
    i++;
    let randomNumber = generateeRandomInteger(30);

    if (arr.indexOf(randomNumber) < 0 ){
        arr.push(randomNumber)
    }else{
        console.log(randomNumber, "Já existe no arr");
    }
 }

 console.log(arr);
 console.log("O loop fi executado ", i, " vezes.");