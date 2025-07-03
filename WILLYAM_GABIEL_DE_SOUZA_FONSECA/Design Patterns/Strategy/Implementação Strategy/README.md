# 📦 Calculadora de Frete com Strategy Pattern

Este projeto é uma **Calculadora de Frete** que aplica o **padrão de projeto Strategy** para selecionar dinamicamente diferentes formas de cálculo de frete com base no tipo de entrega escolhido pelo usuário.

---

## 📌 O que é o Padrão Strategy?

O **Strategy** é um padrão de projeto comportamental que permite definir **diferentes algoritmos** (estratégias) e **trocá-los dinamicamente**, sem alterar o código que os utiliza. Ele é muito útil quando há múltiplas variações de um mesmo comportamento — como, neste caso, o **cálculo do frete** para diferentes modalidades de entrega.

---

## 🧠 Ideia Central do Projeto

Em vez de utilizar `if/else` ou `switch` com toda a lógica de cálculo dentro de uma única função (modelo ingênuo), cada tipo de entrega é representado por uma **classe própria com sua estratégia de cálculo**. Isso facilita a manutenção e a adição de novas estratégias no futuro.

---

## 🗂 Estrutura do Projeto
Implementação Strategy
- ├── index.html (Interface principal)
- ├── style.css  (Estilização visual)
- └── script.js  (Lógica de cálculo do frete)

---

## 🧩 Estratégias de Entrega

```javascript
class SedexStrategy {
  calcular(distancia) {
    return distancia * 1.5 + 10;
  }
}

class PacStrategy {
  calcular(distancia) {
    return distancia * 1.0 + 5;
  }
}

class RetiradaStrategy {
  calcular(distancia) {
    return 0;
  }
}
```
Cada classe implementa o método calcular(distancia) com sua própria lógica. Isso permite que elas sejam intercambiáveis.

## ⚙️ Classe CalculadoraFrete (Context)
```javascript
class CalculadoraFrete {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  calcular(distancia) {
    return this.strategy.calcular(distancia);
  }
}
```
Essa classe representa o contexto do padrão Strategy. Ela usa a estratégia sem conhecer os detalhes de implementação. Você pode alterar a estratégia usando `setStrategy`.

---

## 💻 Interface do Usuário (HTML + CSS)
#### HTML
```html
<select id="tipoEntrega">
  <option value="sedex">Sedex</option>
  <option value="pac">PAC</option>
  <option value="retirada">Retirada na Loja</option>
</select>

<input type="number" id="distancia" placeholder="Digite a distância em km" value="10" />
<button id="btnCalcular">Calcular Frete</button>

<div id="resultado"></div>

```
---

#### CSS
```css
body {
  background: #1f1f1f;
  font-family: Arial, sans-serif;
}

.container {
  background: #6b6b6b;
  padding: 30px;
  border-radius: 10px;
  max-width: 400px;
  margin: 0 auto;
}
```
---

## 🔗 Lógica de Integração com o DOM
```javascript
document.getElementById('btnCalcular').addEventListener('click', function () {
  const tipo = document.getElementById('tipoEntrega').value;
  const distancia = parseFloat(document.getElementById('distancia').value);

  if (isNaN(distancia) || distancia < 0) {
    document.getElementById('resultado').innerText = "Por favor, insira uma distância válida.";
    return;
  }

  let strategy;

  switch (tipo) {
    case 'sedex':
      strategy = new SedexStrategy();
      break;
    case 'pac':
      strategy = new PacStrategy();
      break;
    case 'retirada':
      strategy = new RetiradaStrategy();
      break;
    default:
      alert("Tipo de entrega inválido.");
      return;
  }

  const calculadora = new CalculadoraFrete(strategy);
  const frete = calculadora.calcular(distancia);
  document.getElementById('resultado').innerText = `Valor do frete: R$ ${frete.toFixed(2)}`;
});
```

---

## ✅ Vantagens do uso do Strategy

| Benefício  | Explicação |
| ------------- | ------------- |
| Modularidade  | Cada estratégia tem sua própria classe  |
| Facilidade para expandir  | Novos tipos de entrega podem ser adicionados sem alterar os existentes  |
| Extensibilidade  | Novas regras de cálculo podem ser implementadas separadamente  |
| Baixo acoplamento  | A `CalculadoraFrete` não precisa saber como cada tipo de entrega calcula  |

---

## ✅ Conclusão

Este projeto demonstrou como o padrão Strategy pode ser utilizado para organizar comportamentos que variam, como o cálculo de frete para diferentes tipos de entrega. Com ele, ganhamos flexibilidade, baixo acoplamento e facilidade de manutenção. Essa abordagem torna o código mais limpo, modular e preparado para mudanças futuras — um passo importante para o desenvolvimento de aplicações mais robustas e escaláveis.
