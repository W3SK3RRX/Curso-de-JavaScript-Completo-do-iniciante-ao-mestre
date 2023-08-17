(function(){
    function media(){
        let total = 0;
        let qtd = arguments.length;
        for(let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("only numbers");
            }
            total += arguments[i];
        }
        return (total/qtd) || 0;
    }
    console.log(media(2,4)) 
})()