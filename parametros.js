function soma(num1, num2){
    return num1 + num2;
}

let x = 2;
let y = 3;

console.log(soma(x, y));

// parâmetro passado na declaração da função. Argumento passado na execução da função

//ordem dos parâmetros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos`
}

console.log(nomeIdade("Caio", 25));

function multiplica(num1, num2){
    return num1 * num2;
}

console.log(multiplica(soma(2, 2), soma(4,2)));

console.log(multiplica(1)); //numero * undefined = NaN

function multiplicaSemErro(num1 = 1, num2 = 1){
    return num1 * num2;
}

console.log(multiplicaSemErro(2)) // não passar muitos parâmetros para função. Dividir em outras funções