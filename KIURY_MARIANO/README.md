# 💡 Design Patterns em Node.js + TypeScript + React

Este repositório demonstra na prática a aplicação de dois padrões de projeto fundamentais da engenharia de software: **Strategy** e **Adapter**, com versões **com** e **sem** a aplicação dos padrões. O frontend em React é compartilhado e pode ser usado para testar qualquer uma das APIs.

---

## 📁 Estrutura do Projeto (Monorepo)

```plaintext
KIURY_MARIANO/
├── apps/
│   ├── api-with-adapter/           → Backend com Adapter Pattern
│   ├── api-without-adapter/       → Backend sem Adapter (chamada direta ao sistema legado)
│   ├── api-with-strategy/         → Backend com Strategy Pattern
│   ├── api-without-strategy/      → Backend sem Strategy (switch-case)
│   └── frontend/                  → Frontend React para todos os testes
├── node_modules/                  → Pasta única de dependências
├── package.json                   → Configuração de workspaces e scripts
├── yarn.lock
````

---

## 🎯 Padrões implementados

### 🧩 Strategy Pattern

![Strategy Pattern Diagram](https://refactoring.guru/images/patterns/content/strategy/strategy.png?id=379bfba335380500375881a3da6507e0)

* **Diretório:** `apps/api-with-strategy/`
* **Objetivo:** Encapsular comportamentos distintos de pagamento (`pix`, `boleto`, `cartão`) em classes específicas, podendo alterná-los em tempo de execução.
* **Benefícios:**

  * Evita `switch` ou `if`
  * Permite adicionar novos métodos de pagamento com facilidade
  * Reduz acoplamento e aumenta legibilidade

#### Comparativo

* `with-strategy`: utiliza classes e contexto de estratégia
* `without-strategy`: faz tratamento direto com `switch-case` no controller

---

### 🧩 Adapter Pattern

![Adapter Pattern Diagram](https://refactoring.guru/images/patterns/content/adapter/adapter-en.png?id=11ef6ae6177291834323e3f918c47cd2)

* **Diretório:** `apps/api-with-adapter/`
* **Objetivo:** Adaptar a interface de um sistema legado (`LegacyPaymentSystem`) para um formato moderno esperado pelo controller.
* **Benefícios:**

  * Permite reusar código legado sem modificações
  * Traduz chamadas novas para métodos antigos
  * Separa controller da lógica legada

#### Comparativo

* `with-adapter`: usa um adapter para converter `pay(method, amount)` para chamadas legadas
* `without-adapter`: faz chamadas diretas aos métodos do sistema legado

---

## 🖥️ Frontend (comum para todos)

* **Diretório:** `apps/frontend/`
* **Tecnologia:** React + TypeScript (Vite)
* **Objetivo:** Simular envios de pagamentos via formulário
* **Integração:** A aplicação se conecta ao backend ativo via `http://localhost:3000/api/payment`

---

## 🚀 Como rodar os projetos (Yarn Workspaces)

Este projeto é um **monorepo** com um único `node_modules` gerenciado por Yarn Workspaces.

Instale tudo de uma vez:

```bash
yarn install
```

### 🎯 Comandos para rodar cada projeto

#### Frontend

```bash
yarn dev:frontend
```

Acesse: [http://localhost:5173](http://localhost:5173)

#### Backend - Strategy (com padrão)

```bash
yarn dev:strategy
```

#### Backend - Strategy (sem padrão)

```bash
yarn dev:strategy:no
```

#### Backend - Adapter (com padrão)

```bash
yarn dev:adapter
```

#### Backend - Adapter (sem padrão)

```bash
yarn dev:adapter:no
```

---

## 📌 Observações

* Rode **apenas um backend por vez**, pois todos usam a porta `3000`.
* O frontend funciona com qualquer backend que esteja ativo, contanto que esteja em `http://localhost:3000`.

---

## 📚 Referências

* [Strategy Pattern - Refactoring.Guru](https://refactoring.guru/design-patterns/strategy)
* [Adapter Pattern - Refactoring.Guru](https://refactoring.guru/design-patterns/adapter)
* [Design Patterns Book - GoF](https://en.wikipedia.org/wiki/Design_Patterns)

---

## 🧠 Autor

@KiuryMariano

