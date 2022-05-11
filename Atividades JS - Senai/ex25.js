const readline = require("readline-sync");
let totalSim = 0;
let totalNao = 0;
let mulherSim = 0;
let mulherNao = 0;
let homemNao = 0;
let homemSim = 0;
let totalHomem = 0;
let totalMulheres = 0;

for (let i = 1; i <= 4; i++) {
    let sexo = readline.question("Informe seu genero (m)asculino ou (f)eminino: ");
    let resposta = readline.question("Voce gostou do produto: ");

    if (sexo == "feminino") {
        totalMulheres++;
    } else {
        totalHomem++;
    }

    if (resposta == "sim") {
        totalSim = totalSim + 1;
    } else {
        totalNao = totalNao + 1;
    }

    if (sexo == "feminino" && resposta == "sim") {
        mulherSim = mulherSim + 1;
    } else {
        mulherNao = mulherNao + 1;
    }
    if (sexo == "masculino" && resposta == "nao") {
        homemNao = homemNao + 1;
    }else{
        homemSim = homemSim + 1;
    }
}

let percentualHomensNao = (homemNao / totalHomem) * 100;

console.log(`o numero de pessoas que responderam Sim: ${totalSim}`);
console.log(`o numero de pessoas que responderam Nao: ${totalNao}`);
console.log(`o numero de mulheres que responderam Sim: ${mulherSim}`);
console.log(`o numero de homens que responderam Nao: ${homemNao}`);
console.log(`A porcentagem de homens: ${percentualHomensNao}`);