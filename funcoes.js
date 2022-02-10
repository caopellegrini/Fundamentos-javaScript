let x = "";
x = "oi";
let outroTexto = "outro texto"

// Declaração de função

function imprimeTexto(texto){
    console.log(texto);
}

// executa a função

imprimeTexto(x);
imprimeTexto(outroTexto);

// três formas de escrever as funções

function soma(){
    return 2 + 2; // deve ser a ultima coisa da funções, o que vier depois não será executado
}

// console.log(soma())

imprimeTexto(soma());

