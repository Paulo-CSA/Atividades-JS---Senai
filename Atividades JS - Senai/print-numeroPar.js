//Faça um programa que receba um número de usuário e exiba este
//número, apenas se for par.


let capNumero = require("readline-sync")

let numero = capNumero.question("Informe um numero aleatorio: ")

let resultado = numero % 2

if (resultado == 0) {
    console.log("O numero escolhido foi: " + numero + " e é par.")

} else {
    console.log("so numero par sera apresentado em tela !")
}