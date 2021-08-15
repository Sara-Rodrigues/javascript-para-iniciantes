// Os módulos servem para quebrarmos o código em diferente arquivos, para facilitar a organização e compartilhamento de código comum.

import { areaQuadrado, perimetroQuadrado } from './quadrado.js';
import numeroAleatorio from './numeroAleatorio.js';
import Circulo from './Circulo.js';

console.log(areaQuadrado(4));
console.log(perimetroQuadrado(5));
console.log(numeroAleatorio());
console.log(Circulo.area(5));
console.log(Circulo.circunferencia(5));
console.log(Circulo.aleatorio());

// Qualquer arquivo pode importar código de outro. Ele irá carregar apenas uma vez o arquivo, independente de quantas vezes você importar o mesmo em outros arquivos.
