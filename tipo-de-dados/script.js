
//TIPOS DE DADOS
var nome = 'Sara'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object
// Todos são primitivos exceto os objetos. Primitivos são dados imutáveis.

//VERIFICAR TIPO DE DADO
var nome = 'Sara';
console.log(typeof nome);
// retorna string
// typeof null retorna object

//STRING
var nome = 'Sara';
var sobrenome = 'Rodrigues';
var nomeCompleto = nome + ' ' + sobrenome;

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';


//ASPAS DUPLAS, SIMPLES E TEMPLATE STRING
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
 // "JavaScript é "super" fácil"; // Inválido

//TEMPLATE STRING
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String


//EXERCÍCIO
// Declare uma variável contendo uma string
var nome = "Sara";

// Declare uma variável contendo um número dentro de uma string
var ano = "2020";

// Declare uma variável com a sua idade
var idade = 24;

// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas

var nome = "Sara";
var sobrenome = "Rodrigues";
var nomeCompleto = `${nome} ${sobrenome}`;

// Coloque a seguinte frase em uma variável: It's time

var frase = 'It\'s time';

// Verifique o tipo da variável que contém o seu nome
console.log(typeof nome);
