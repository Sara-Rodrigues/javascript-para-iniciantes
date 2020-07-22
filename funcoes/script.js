function areaQuadrado(lado) {
    return lado * lado;
  }
  
  areaQuadrado(4) // 16
  areaQuadrado(5) // 25
  areaQuadrado(2) // 4
//Chamada de function declaration

function pi() {
    return 3.14;
  }
  
  var total = 5 * pi(); // 15.7

//Parênteses () executam uma função

// peso e altura são os parâmetros
function imc(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
  }
  
  imc(80, 1.80) // 80 e 1.80 são os argumentos
  imc(60, 1.70) // 60 e 1.70 são os argumentos

  
function corFavorita(cor) {
  if(cor === 'azul') {
    return 'Você gosta do céu';
  } else if(cor === 'verde') {
    return 'Você gosta de mato';
  } else {
    return 'Você não gosta de nada';
  }
}
    corFavorita(); // retorna 'Você não gosta de nada'


    addEventListener('click', function() {
    console.log('Clicou');
  });
  // A função possui dois argumentos
  // Primeiro é a string 'click'
  // Segundo é uma função anônima

  
  function imc2(peso, altura) {
    const imc = peso / (altura ** 2);
    console.log(imc);
  }
  
  imc2(80, 1.80); // retorna o imc
  console.log(imc2(80, 1.80)); // retorna o imc e undefined
  

  function terceiraIdade(idade) {
    if(typeof idade !== 'number') {
      return 'Informe a sua idade!';
    } else if(idade >= 60) {
      return true;
    } else {
      return false;
    }
  }

  function precisoVisitar(paisesVisitados) {
    var totalPaises = 193;
    return `Ainda faltam ${totalPaises - paisesVisitados} paises para visitar`
  }
  console.log(totalPaises); // erro, totalPaises não definido


var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

dados(); // Retorna 'André, 29, Rio de Janeiro, Designer'
outrosDados(); // retorna um erro

imc(80, 1.80); // imc aparece no console

function imc(peso, altura) {
  const imc = peso / (altura ** 2);
  console.log(imc);
}

// Crie uma função para verificar se um valor é Truthy

function verifica(dado){
  return !!dado;
}

// Crie uma função matemática que retorne o perímetro de um quadrado
// lembrando: perímetro é a soma dos quatro lados do quadrado

function perimetroQuadrado(lado) {
  return lado * 4;
}

// Crie uma função que retorne o seu nome completo
// ela deve possuir os parâmetros: nome e sobrenome

function nomeCompleto (nome, sobrenome){
  return `${nome} ${sobrenome}`;
}

nomeCompleto('Sara', 'Rodrigues')

// Crie uma função que verifica se um número é par

function isEven(numero) {
  var modulo = numero % 2;
  if(modulo === 0){
    return true;
  } else {
    return false;
  }
}

// Crie uma função que retorne o tipo de
// dado do argumento passado nela (typeof)

function tipoDeDado(dado){
  return typeof dado;
}

// addEventListener é uma função nativa do JavaScript
// o primeiro parâmetro é o evento que ocorre e o segundo o Callback
// utilize essa função para mostrar no console o seu nome completo
// quando o evento 'click' ocorrer.

addEventListener('click', function() {
  console.log('Sara Rodrigues de Souza');
});

// Corrija o erro abaixo
var totalPaises = 193;

function precisoVisitar(paisesVisitados) {
    return `Ainda faltam ${totalPaises - paisesVisitados} países para visitar`;
  }
  function jaVisitei(paisesVisitados) {
    return `Já visitei ${paisesVisitados} do total de ${totalPaises} países`;
  }
  precisoVisitar(20);
  jaVisitei(20);
  