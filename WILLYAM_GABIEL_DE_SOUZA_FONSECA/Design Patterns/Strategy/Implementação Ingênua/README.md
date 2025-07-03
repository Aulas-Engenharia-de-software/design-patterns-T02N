# 📦 Calculadora de Frete (Implementação Ingênua)

Uma aplicação web simples para calcular o valor do frete com base no tipo de entrega e na distância. Esta versão é chamada de **ingênua** por não aplicar o padrão de projeto Strategy, o que a torna menos escalável e flexível.

---

## 🧠 Visão Geral

O sistema permite que o usuário:

- Escolha o tipo de entrega (Sedex, PAC ou Retirada na Loja)
- Informe a distância em quilômetros
- Visualize o valor do frete calculado

Toda a lógica de cálculo está centralizada em uma única função que utiliza condicionais (`if/else if`), tornando o código pouco modular e difícil de estender futuramente.

---

## 🧱 Estrutura dos Arquivos



Implementação Ingênua
- ├── index.html (Interface principal)
- ├── style.css  (Estilização visual)
- └── script.js  (Lógica de cálculo do frete)


---

## 📄 HTML - Interface com o Usuário

O HTML é responsável por apresentar a interface básica ao usuário:

```html
<select id="tipoEntrega">
  <option value="sedex">Sedex</option>
  <option value="pac">PAC</option>
  <option value="retirada">Retirada na Loja</option>
</select>

<input type="number" id="distancia" value="10">

<button id="btnCalcular">Calcular Frete</button>
```

###  Funcionalidades:

- Seleção do tipo de entrega
- Entrada da distância em km
- Botão de cálculo
- Área para exibir o resultado

---

## 🎨 CSS - Estilo da Interface

O CSS torna a interface mais amigável e legível:

- Fundo escuro: `background: #1f1f1f`
- Container centralizado com cantos arredondados
- Botão com efeito *hover*
- Layout responsivo

### Exemplo:

```css
button {
  background: rgb(19, 19, 19);
  color: white;
  border-radius: 5px;
}
```

---

## ⚙️ JavaScript - Lógica de Cálculo (Versão Ingênua)
Função principal de cálculo:

```javascript
function calcularFrete(tipoEntrega, distanciaKm) {
  let resultado;

  if (tipoEntrega === 'sedex') {
    resultado = distanciaKm * 1.5 + 10;
  } else if (tipoEntrega === 'pac') {
    resultado = distanciaKm * 1.0 + 5;
  } else if (tipoEntrega === 'retirada') {
    resultado = 0;
  } else {
    throw new Error('Tipo de entrega inválido');
  }

  return resultado;
}
```
Evento de clique:

```javascript
document.getElementById('btnCalcular').addEventListener('click', function () {
  const tipo = document.getElementById('tipoEntrega').value;
  const distancia = parseFloat(document.getElementById('distancia').value);

  if (isNaN(distancia) || distancia < 0) {
    document.getElementById('resultado').innerText = "Por favor, insira uma distância válida.";
    return;
  }

  const frete = calcularFrete(tipo, distancia);
  document.getElementById('resultado').innerText = `Valor do frete: R$ ${frete.toFixed(2)}`;
});
```

---

## 🤔 Por que essa versão não é Strategy?

Esta implementação não segue o padrão de projeto Strategy, pois:
- ❌ As estratégias de cálculo (Sedex, PAC, Retirada) estão embutidas em uma única função usando `if/else`.
- ❌ Para adicionar novas opções de entrega, seria necessário modificar diretamente essa função.
- ✅ Com Strategy, cada tipo de entrega teria sua própria classe/função com um comportamento específico de cálculo permitindo que sejam usadas de forma intercambiável e modular.

---

## ✅ Conclusão

- Esta versão funciona, mas não é escalável.
- É um exemplo clássico de código acoplado.
- Serve como base para mostrar a importância de aplicar o padrão Strategy, especialmente em sistemas que possam crescer ou ter regras de negócio mais complexas.