const text1 = "Hello world!";
const text2 = 'Hello world!';
const stringDeNumeros = "43222";

const citacao = 'O Leo disse "oi" ';
const citacao2 = "O Leo disse 'oi'";

// templete string ou templete literal

``

// concatenação (+)

console.log(citacao + text1);

// conversão unicode

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

//  \u é um caractere de escape é um termo usado em computação para identificar um único caractere numa cadeia de caracteres que altera 
// o significado de seu sucessor. Uma sequência de escape é o subconjunto de caracteres da cadeira de caracteres formado pelo caractere 
// de escape e o caractere com o significado alterado

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo);

const senha = "minhaSenha123"
console.log(senha.length)

// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String#m%C3%A9todos
// para conhecer mais sobre metodos de string do MDN