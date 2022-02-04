// var. Podemos usar a var antes de declarar. O programa quando executado lê todas as vars e executa elas primeiro. Tomar cuidado para
// usar o mesmo nome de variável em duas partes

var altura = 5;
var comprimento = 7;

area = altura * comprimento;
console.log(area);
var area;

// let deve ser atribuida antes de usa-la em um bloco de código, assim tem mais restrições que a var

let forma = "retângulo"
let altura = 5;
let comprimento = 7;
let area;

if (forma === "retângulo"){
    area = altura * comprimento
} else{
    area = (altura * comprimento) / 2
}

console.log(area);

// const é uma constante e ela não pode ser alterada. Importante para proteger o fluxo de trabalho da aplicação. Sempre deve ter um
// valor inicial

const forma = "triângulo";
const altura = 5;
const comprimento = 5;
let area = null;

if (forma === "quadrado"){
    area = altura * comprimento;
} else {
    area = (altura * comprimento) / 2
}

console.log(area);

