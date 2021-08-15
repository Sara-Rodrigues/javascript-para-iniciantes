// Envia requisições assíncronas para o servidor. Serve para acessarmos/escrevermos dados em apis externas.

fetch('https://ranekapi.origamid.dev/wp-json/api/produto')
  .then((response) => response.json())
  .then((json) => {
    console.log(json);
  });

const data = {
  id: 'andrerafa',
  nome: 'Andre',
  email: 'andrerafa@origamid.com',
  senha: '123456',
  cep: '123456',
  rua: 'Ali Perto',
  numero: '230',
  bairro: 'Botafogo',
  cidade: 'Rio de Janeiro',
  estado: 'Rio de Janeiro',
};

fetch('https://ranekapi.origamid.dev/wp-json/api/usuario', {
  method: 'POST',
  mode: 'cors',
  cache: 'no-cache',
  credentials: 'same-origin',
  headers: {
    'Content-Type': 'application/json',
  },
  redirect: 'follow',
  referrer: 'no-referrer',
  body: JSON.stringify(data),
});
