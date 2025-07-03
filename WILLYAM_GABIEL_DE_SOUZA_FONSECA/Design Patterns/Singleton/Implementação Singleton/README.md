# Implementação com Singleton para Configuração de Tema

Este projeto demonstra o uso do **padrão de projeto Singleton** para gerenciar a configuração de tema (claro ou escuro) em uma aplicação web. Diferente da versão ingênua, aqui **uma única instância global** é utilizada para manter o estado do tema, garantindo consistência em toda a aplicação.

---

## 🧠 O que é o Singleton?

O Singleton é um padrão de projeto que **garante que apenas uma instância de uma classe (ou objeto)** seja criada e fornece um ponto de acesso global a ela. Neste projeto, isso significa que todas as partes da interface compartilham a mesma configuração de tema.

---

## 📦 Estrutura do Projeto

- **Implementação Singleton/**
  - **index.html** – Estrutura da interface
  - **style.css** – Estilo visual (tema claro/escuro)
  - **script.js** – Implementação do Singleton e lógica de interação


---

### 📄 HTML (`index.html`)

Dois blocos interativos permitem selecionar o tema e ver o resultado:

```html
<div class="config">
  <h2>Configuração 1</h2>
  <select id="theme1">...</select>
  <p>Tema atual: <span id="themeDisplay1">light</span></p>
</div>

<div class="config">
  <h2>Configuração 2</h2>
  <select id="theme2">...</select>
  <p>Tema atual: <span id="themeDisplay2">light</span></p>
</div>
```

### 🎨CSS (`style.css`)

Define os estilos para o tema claro e escuro, com transições suaves:

```css
.dark-mode {
  background-color: #1e1e1e;
  color: white;
}

.dark-mode .config {
  background-color: #333;
}
```

### ⚙️ JavaScript (`script.js`)
#### 1. Função Autoexecutável (IIFE)
```javascript
const ThemeConfig = (function () {
  let instance;

  function createInstance() {
    let theme = "light";
    return {
      getTheme() { return theme; },
      setTheme(newTheme) {
        theme = newTheme;
        this.applyTheme();
        this.syncSelects();
        this.updateDisplays();
      },
      applyTheme() {
        document.body.classList.toggle("dark-mode", theme === "dark");
      },
      syncSelects() {
        document.getElementById("theme1").value = theme;
        document.getElementById("theme2").value = theme;
      },
      updateDisplays() {
        document.getElementById("themeDisplay1").textContent = theme;
        document.getElementById("themeDisplay2").textContent = theme;
      }
    };
  }

  return {
    getInstance() {
      if (!instance) instance = createInstance();
      return instance;
    }
  };
})();
```
#### 2. Uso do Singleton
```javascript
const config = ThemeConfig.getInstance();

document.getElementById("theme1").addEventListener("change", function () {
  config.setTheme(this.value);
});

document.getElementById("theme2").addEventListener("change", function () {
  config.setTheme(this.value);
});

config.setTheme("light"); // Inicializa
```
### ✅ Vantagens do Singleton

| Vantagem  | Descrição |
| ------------- | ------------- |
| ✅ Única fonte de verdade  | Todos acessam e alteram o mesmo estado compartilhado  |
| ✅ Redução de inconsistência  | Evita múltiplas configurações conflitantes  |
| ✅ Acesso centralizado  | Fácil de acessar por `ThemeConfig.getInstance()`  |
| ✅ Proteção de escopo  | A instância não é acessível ou alterável diretamente de fora  |

### ⚠️ Cuidados

- Em aplicações muito grandes, o Singleton pode se tornar uma dependência global difícil de gerenciar e testar.
- Use com moderação e apenas quando uma única instância global for realmente necessária (ex: configuração autenticação, logging, etc).

### 🧪 Exemplo de Comportamento
```javascript
const config1 = ThemeConfig.getInstance();
const config2 = ThemeConfig.getInstance();

config1.setTheme("dark");

console.log(config2.getTheme()); // dark ✅ mesma instância
```

### 📚 Conclusão
Este projeto mostra como o padrão Singleton pode ser aplicado com JavaScript puro para manter a consistência de uma configuração global. Ele resolve o problema da abordagem ingênua, promovendo centralização de estado e manutenção facilitada.