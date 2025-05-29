// 1 - CLASSE CRIACAO UICMOPONENT
class UIComponent {
  constructor(props) {
    if (this.constructor === UIComponent) {
      throw new Error('Não instanciável');
    }
    this.props = props;
  }

  render() {
    throw new Error('Implementar render');
  }
}

// 2 - COMPONENT BUTTON
class Button extends UIComponent {
  render() {
    console.log('Button:', JSON.stringify(this.props));
  }
}

// 2 - COMPONENT TEXT FILE
class TextFile extends UIComponent {
  render() {
    console.log('TextFile:', JSON.stringify(this.props));
  }
}

// 3 - FABRICA
class UIComponentFactory {
  createComponent(type, props) {
    if (type === 'button') {
      return new Button(props);
    }
    if (type === 'textfile') {
      return new TextFile(props);
    }
    throw new Error('Tipo inválido');
  }
}

// 4 - UTILIZACAO DA FABRICA
const componentFactory = new UIComponentFactory();

const buttonProps = { tamanho: '100px', cor: 'azul' };
const textFileProps = { tamanho: '300px', cor: 'cinza' };

const meuButton = componentFactory.createComponent('button', buttonProps);
const meuTextFile = componentFactory.createComponent('textfile', textFileProps);

meuButton.render();
meuTextFile.render();