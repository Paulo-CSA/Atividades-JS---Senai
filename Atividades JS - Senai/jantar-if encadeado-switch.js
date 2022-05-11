let capAlimento = require("readline-sync");
let alimento = capAlimento.question("Escolha uma comida: ");

if(alimento == "macarrão"){
    console.log("Voce escolheu " + alimento);

}else if(alimento == "arroz"){
    console.log("voce escolheu " + alimento);
}else if(alimento == "feijoada"){
    console.log(`voce escolheu ${alimento}`);
}else{
    console.log("alimento escolhido não consta na lista !");
}

switch (alimento) {
    case "macarrão":
        console.log("vai comer macarrão. ");
        break;
    case "arroz":
        console.log("vai comer arroz");
        break;
    default:
        console.log("não vai comer hj !");
        break;
}