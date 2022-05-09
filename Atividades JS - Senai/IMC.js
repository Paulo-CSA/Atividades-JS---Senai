//Faça um programa que receba o nome, o peso e a altura de uma
//pessoa. Calcule e imprima o nome e o IMC dessa pessoa - IMC = peso / (altura * altura).

let CapNome = require("readline-sync"); 
let CapAltura = require("readline-sync");
let CapPeso = require("readline-sync");

let nome = CapNome.question("Informe seu nome: ");
let altura = parseFloat(CapAltura.question("Informe sua altura: "));
let peso = parseFloat(CapPeso.question("Informe seu peso: "));

let IMC = peso / (altura * altura);

console.log(nome,",seu IMC:",IMC);