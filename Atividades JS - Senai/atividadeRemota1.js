
let entPeso = require("readline-sync");
let Peso = entPeso.question("Informe o Peso da Peca: ");
let entPeca = require("readline-sync");
let Peca = entPeca.question("Informe o Nome da Peca: ");
let entEstoque = require("readline-sync")
let Estoque = parseInt(entEstoque.question("Simule uma quantidade de pecas no Estoque: "));
let PecaCaract = Peca.length;

if(Peso < 100){
    console.log(Peso+" É inferior a 100g, não permitido cadastro no sitema.");
    }
    if(Estoque >= 10){
        console.log("Estoque com "+ Estoque + " peças, não pode ser adicionado item ao Estoque.")
    }
    if(PecaCaract < 3 ){
         console.log("Nome para cadastro menor que 3 caracteres.")
    }

if(Peso >= 100 == true && Estoque <= 10 == true && PecaCaract >= 3 ){
    console.log("Cadastro Realizado !!!")
} else {console.log("Item não foi Cadastrado !!!")
}