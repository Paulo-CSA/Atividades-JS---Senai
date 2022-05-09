//execução de repetição com FOR.
//imprime do 0 - 17, informando se é impar ou par

for (let numero = 0; numero <= 17; numero++) {
    let resultado = numero % 2
    if (numero == 0) {
        console.log("Zero - " + numero)

    } else {
        if (resultado != 0) {
            console.log("Numero Impar - " + numero)
        } else {
            console.log("Numero Par - " + numero)
        }

    }

}

// execução de repetição com While.

let numero = 0
while (numero <= 17) {
    let resultado = numero % 2
    if (numero == 0) {
        
        console.log("Zero - " + numero)

    } else {
        if (resultado != 0) {
            console.log("Numero Impar - " + numero)
        } else {
            console.log("Numero Par - " + numero)
        }

    }
    numero++
}