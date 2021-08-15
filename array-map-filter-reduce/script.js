// Arrays (Map, Filter, Reduce)
// Métodos para iterarmos entre os valores de arrays.

const precos = [
  'Crédito',
  'R$ 200',
  'R$ 400',
  'Contas Pagar',
  'R$ 300',
  'R$ 400',
  'Meus dados',
];

// Retorna uma array nova, que contem os items em
// que o retorno da função for verdadeiro
const precosFiltro = precos.filter((preco) => preco.includes('R$'));

// Retorna uma nova array, modificada com o
// retorno de cada item da função
const precoNumeros = precosFiltro.map((preco) =>
  Number(preco.replace('R$ ', '')),
);

// Retorna um valor um único, o valor retornado
// fica disponível na próxima iteração através do
// primeiro argumento, por isso o nome acumulador
const total = precoNumeros.reduce((acc, item) => acc + item);

console.log(total);
