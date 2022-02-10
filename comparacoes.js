// == comparações implicitas

const numero = 5;
const texto = "5";

console.log(numero == texto);

// === comparação explicita

console.log(numero === texto);

// typeof

console.log(typeof numero);
console.log(typeof texto);

// ainda tem códigos que utilizam dois iguais, mas como uma prática é ideal usar os três iguais

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


