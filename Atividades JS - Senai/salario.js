//Faça um programa que receba o nome, cargo e salário de um funcionário. Se o funcionário ganhar abaixo de 1000 reais, 
//calcule o salário acrescido de 10%. Ao final exiba o nome, o cargo e o salário desse funcionário.
let capNome = require("readline-sync");
let capCargo = require("readline-sync");
let capSalario = require("readline-sync");

let nome = capNome.question("Informe seu nome: ");
let cargo = capCargo.question("Informe seu cargo: ");
let salario = parseFloat(capSalario.question("Informe seu salario: "));

let acrescimo = salario + (salario * 10 / 100)

if (salario < 1000) {
    console.log("Funcionario: " + nome, "- Cargo: " + cargo, "- Salario: " + acrescimo);

} else {
    console.log("Funcionario: " + nome, "- Cargo: " + cargo, "- Salario: " + salario);
}
