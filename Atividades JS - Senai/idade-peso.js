// Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// ●	Total de Homens;
// ●	Total de Mulheres;
// ●	Média de idade dos Homens;
// ●	Média de idade das mulheres.


let capSexo = require("readline-sync");
let capIdade = require("readline-sync");
let capPeso = require("readline-sync");


for (let pessoas = 1 ; pessoas < 3; pessoas++) {
    let sexo = capSexo.question("Informe seu genero (m)asculino ou (f)eminino: ");
    //let idade = capIdade.question("Informe sua idade: ");
    //let peso = parseFloat(capPeso.question("Informe o seu peso: "));

    if(sexo == "m"){
         console.log(pessoas + " Pessoas do sexo Masculino")
    }else{
         console.log(pessoas + " Pessoas do sexo Feminino" )
 }
 
}
