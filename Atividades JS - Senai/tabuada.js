//Faça um programa que imprima na tela a tabuada de 1 a 10.

let capTabuada = require("readline-sync");

let tabuada = capTabuada.question("Informe de qual tabuada voce que saber: ");

for (let multiplicador = 1; multiplicador < 11; multiplicador++) {
    let resultado = tabuada * multiplicador
    console.log(multiplicador, "x " + tabuada, "= " + resultado);
}