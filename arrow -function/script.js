// Arrow Function
// A principal diferença é o contexto do this. A arrow function não cria o próprio this.

const upperName = function (name) {
  return name.toUpperCase();
};
upperName('Sara'); // SARA

const lowerName = (name) => {
  return name.toLowerCase();
};
lowerName('Rodrigues'); // rodrigues

const countLetters = (word) => word.length;
countLetters('Sara'); // 4

//O this faz referência ao objeto criado pela função. A arrow function consegue ignorar isso, e manter como referência o objeto pai.

class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
    this.activeClass = 'active';
  }
  addActiveEvent() {
    // sem o arrow function ele não iria funcionar
    this.menuElement.addEventListener('click', (event) =>
      event.target.classList.add(this.activeClass),
    );
  }
}

const menu = new Menu('.principal');
menu.addActiveEvent();
