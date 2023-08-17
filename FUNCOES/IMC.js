(function(){
    function calculaIMC(peso,altura, callback){
        if(typeof peso !== "number" || typeof altura !== "number"){
            throw Error("only numbers");
        }
        let imc = peso/(Math.pow(altura, 2));
        if (typeof callback === "function"){
            return callback(imc);
        }
        return imc;
    }

    function classificaIMC(imc){
        if(imc <= 16.9){
            return "muito abaixo do peso";
        } else if (imc <= 18.4){
            return "abaixo do peso";
        } else if (imc <= 24.9){
            return "normal";
        } else if (imc <= 29.9){
            return "acima do peso";
        } else if (imc <= 34.9){
            return "obesidade 1";
        } else if (imc <= 40){
            return "obesidade 2";
        } else {
            return "obesidade 3";
        }
    }

    console.log(calculaIMC(64, 1.69));
    console.log(calculaIMC(64, 1.69, classificaIMC));
})()