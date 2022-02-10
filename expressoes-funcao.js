// expressão de função

// const soma = function(num1, num2) {return num1 + num2}; // pode dar um nome para função, mas não se faz normalmente
// console.log(soma(1,1))

// diferença principal

console.log(apresentar())
function apresentar(){
    return "olá"
}

console.log(soma(1,1)) //vai da erro, const é lido depois, logo a ordem importa. já function e var são listados no topo do arquivo e isso chama: HOISTING
const soma = function(num1, num2) {return num1 + num2}; // pode dar um nome para função, mas não se faz normalmente. Usa bastante as expressões de função


