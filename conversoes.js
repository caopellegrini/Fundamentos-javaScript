// tipo de dado
// booleanos

//conversão implícita (pode trazer alguns bugs)

const numero = 456;
// const numeroString = "456";

// console.log(numero === numeroString);
// console.log(numero == numeroString);

// console.log(numero + numeroString);

// conversão explícita
// Number()
// String()

// console.log(numero + Number(numeroString))

const numeroString = Number("456")
console.log(numero + numeroString)

let telefone = 12341234;
console.log("O telefone é " + telefone.toString());

let largura = "10";
let altura = "5";
console.log( + largura * + altura);

let usuarioConectado = false;
console.log(Number(usuarioConectado));

let usuarioConectado2 = true;
console.log(Number(usuarioConectado2));







