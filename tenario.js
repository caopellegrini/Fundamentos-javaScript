// operador tenário

const idadeMinima = 18;
const idadeCliente = 16;

// if (idadeCliente >= idadeMinima){
//     console.log("Cerveja")
// } else{
//     console.log("suco")
// }

console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")

// não é recomendado usar tenário dentro de tenário pois dificulta a leitura

const nome = "Caio";
const idade = 25;
const bebidaDeMaior = "cerveja";
const bebidaDeMenor = "suco";

const pedido = `${nome} diz: "por favor, quero ${idade >= idadeMinima ? bebidaDeMaior : bebidaDeMenor}"`
console.log(pedido);
