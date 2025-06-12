# Implementação Ingênua de Configuração de Tema

Este projeto demonstra uma **implementação ingênua** de gerenciamento de configurações (tema claro ou escuro) em uma aplicação web, **sem o uso de padrões de projeto (Design Patterns)**.

## 🧠 O que é uma Implementação Ingênua?

Uma implementação ingênua é uma solução simples e direta para um problema, sem considerar boas práticas de design de software. Isso significa:

- Sem reutilização avançada de código.
- Sem uso de padrões de projeto como Singleton, Factory, etc.
- Estado descentralizado e não compartilhado entre componentes.
- Alto acoplamento e baixa escalabilidade.

---

## ⚠️ Problema Demonstrado

Neste exemplo, duas instâncias separadas de configuração (`config1` e `config2`) são criadas usando a função `createConfig()`. Cada instância mantém seu próprio estado do tema (`light` ou `dark`), o que **quebra a ideia de uma configuração global compartilhada**.

#### Exemplo de código:

```javascript
function createConfig() {
  return {
    theme: "light",
    setTheme(newTheme) {
      this.theme = newTheme;
    },
    getTheme() {
      return this.theme;
    }
  };
}

const config1 = createConfig();
const config2 = createConfig();
```
#### Comportamento:
```javascript
config1.setTheme("dark");

console.log(config1.getTheme()); // dark ✅
console.log(config2.getTheme()); // light ❌
```
## 💻 Estrutura do Projeto
O projeto é composto por três arquivos:
- index.html: Estrutura da interface com dois blocos de configuração.
- style.css: Estilo visual, incluindo o modo escuro.
- script.js: Lógica JavaScript para manipular os temas de forma independente.

#### 📄 HTML (`index.html`)
Dois blocos para alterar e exibir o tema atual:
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
#### 🎨 CSS (`style.css`)
Estilos para tema claro e modo escuro:
```css
.dark-mode {
  background-color: #1e1e1e;
  color: white;
}

.dark-mode .config {
  background-color: #333;
}
```

#### 🧠 JavaScript (`script.js`)
Lógica para criar configurações e manipular o DOM diretamente:
```javascript
const config1 = createConfig();
const config2 = createConfig();

// Atualiza o DOM com os temas atuais
function updateThemeDisplay() { ... }

// Adiciona/remover classe de dark-mode conforme necessário
function updatePageTheme() { ... }

// Event listeners para os selects
document.getElementById("theme1").addEventListener("change", ...);
document.getElementById("theme2").addEventListener("change", ...);
```

### 🚨 Limitações da Abordagem

- Estado descentralizado: cada configuração é isolada.
- Inconsistência de dados: mudar um tema não afeta o outro.
- Baixa escalabilidade: seria necessário copiar e colar a lógica para novas configurações.
- Alta chance de bugs: especialmente em projetos maiores.

### ✅ Como Melhorar?
Para resolver esses problemas, pode-se aplicar o padrão de projeto Singleton, que garante:
- Uma única instância global compartilhada.
- Consistência nas configurações da aplicação.
- Centralização de estado, facilitando a manutenção e evolução do código.

### 📚 Conclusão

Este projeto ilustra uma implementação ingênua, ideal para fins didáticos. Ele mostra como decisões simples no início de um projeto podem levar a problemas de escalabilidade e manutenção em aplicações reais.

Para projetos maiores ou profissionais, é altamente recomendado o uso de padrões de projeto como Singleton, Factory, ou Observer, além de técnicas de separação de responsabilidades.
