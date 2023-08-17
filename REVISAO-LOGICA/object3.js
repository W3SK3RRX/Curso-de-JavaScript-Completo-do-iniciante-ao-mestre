const produto = {
    nome: "caneta",
    qtd: 10,

    comprar(n){
        if(n > this.qtd){
            return "quantidade não disponivel";
        }
        this.qtd -= n;
    }

}

produto.comprar(3);
console.log(produto);

