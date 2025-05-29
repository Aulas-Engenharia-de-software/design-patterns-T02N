// 1 - CLASSE CRIACAO UICOMPONENT
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

// 3 - COMPONENT TEXT FILE
class TextFile extends UIComponent {
  render() {
    console.log('TextFile:', JSON.stringify(this.props));
  }
}

// 4 - UTILIZACAO SEM FACTORY
const buttonProps = { tamanho: '100px', cor: 'azul' };
const textFileProps = { tamanho: '300px', cor: 'cinza' };

const meuButton = new Button(buttonProps);
const meuTextFile = new TextFile(textFileProps);

meuButton.render();
meuTextFile.render();
