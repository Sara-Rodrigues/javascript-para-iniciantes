// Criar um objeto em JavaScript é bem tranquilo:

var produto1 = {
    nome: "Blusa",
    preco: 120,
    calculaDesconto: function () {
        //10% de desconto
        return this.preco * 0.1;
    }
};
produto1.calculaDesconto(); //12

// Como faríamos pra ter um segundo produto, com o mesmo cálculo de desconto? Assim:

var produto1 = {
    nome: "Blusa",
    preco: 120, calculaDesconto: function () {
        //10% de desconto
        return this.preco * 0.1;
    }
};

var produto2 = {
    nome: "Calça",
    preco: 300,
    calculaDesconto: function () {
        //10% de desconto
        return this.preco * 0.1;
    }
};
produto1.calculaDesconto(); //12 
produto2.calculaDesconto(); //30

// Puxa... Perceba que repetimos exatamente o mesmo código no método calculaDesconto
// se pegassemos a estrutura comum dos produtos (ter nome, preço e poder calcular desconto) e colocássemos em uma função criaProduto? Algo como:

function criaProduto(paramNome, paramPreco){ 
    return { nome: paramNome,
             preco: paramPreco,
             calculaDesconto: function(){ 
                 //10% de desconto
                 return this.preco * 0.1;
                } 
            }; 
} 
var produto1 = criaProduto("Blusa", 120);
var produto2 = criaProduto("Calça", 300); 
produto1.calculaDesconto(); //12 
produto2.calculaDesconto(); //30


// Perceba que na função criaProduto retornamos um objeto que terá sempre os nomes de atributos. Além disso, não repetimos o código da função de desconto :)

// Interessante! E o mais bacana é que o JavaScript já vem com uma sintaxe para definir a estrutura comum entre os objetos:

function Produto(paramNome, paramPreco){ 
    this.nome = paramNome; 
    this.preco = paramPreco; 
    this.calculaDesconto = function(){ 
        //10% de desconto 
        return this.preco * 0.1; 
        }; 
} 
var produto1 = new Produto("Blusa", 120);
var produto2 = new Produto("Calça", 300); 
produto1.calculaDesconto(); //12 
produto2.calculaDesconto(); //30

// não precisamos retornar nada
// as propriedades são definidas com this
// é usado = ao invés de : para atribuir
// as linhas são separadas por ;
// ao criar os produtos usamos o new

// A sintaxe anterior é a maneira correta de definir a estrutura para seus objetos e é chamada de construtor. Essa estrutura comum dos objetos muitas vezes é chamada de classe.

// Na nova versão da linguagem JavaScript, o EcmaScript 2015, há uma outra maneira de criar um construtor (e a classe):

class Produto { 
    constructor(paramNome, paramPreco){
         this.nome = paramNome; 
         this.preco = paramPreco;     
    } calculaDesconto() { 
        return this.preco * 0.1; 
        } 
} 
var produto1 = new Produto("Blusa", 120);
var produto2 = new Produto("Calça", 300);
produto1.calculaDesconto(); //12 
produto2.calculaDesconto(); //30

// temos uma class, e não mais uma function
// definimos os atributos dentro de constructor
// o método calculaDesconto fica a parte, sem o this