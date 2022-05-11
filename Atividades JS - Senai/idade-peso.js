// Faça um programa que receba a idade, o peso e o sexo de 10 pessoas. Calcule e imprima:
// ●	Total de Homens;
// ●	Total de Mulheres;
// ●	Média de idade dos Homens;
// ●	Média de idade das mulheres.


let readline = require("readline-sync");
let homemTotal = 0;
let mulherTotal = 0;
let idadeTotalH = [];
let idadeTotalM = [];
let somaH = 0;
let somaM = 0;


for (let i = 1; i <= 5; i++) {
     let sexo = readline.question("Informe seu genero (m)asculino ou (f)eminino: ");
     let idade = parseInt(readline.question("Informe sua idade: "));
     //let peso = parseInt(readline.question("Informe o seu peso: "));
      
     if (sexo == "masculino") {
          homemTotal++;
          idadeTotalH.push(idade);
                              
     } else {
          mulherTotal++;
          idadeTotalM.push(idade);
        
     }
}
for (let i = 0; i < idadeTotalH.length; i++) {
     somaH += parseInt(idadeTotalH[i]);
     
}     
for (let i = 0; i < idadeTotalM.length; i++) {
          somaM += parseInt(idadeTotalM[i]);
     
} 

let mediaHomem = somaH / homemTotal
let mediaMulher = somaM / mulherTotal

console.log(`Total de Homens ${homemTotal}`);
console.log(`Total de Mulheres ${mulherTotal}`);
console.log(`Media de idade dos Homens ${mediaHomem}`);
console.log(`Media de idade das Mulhesres ${mediaMulher}`);