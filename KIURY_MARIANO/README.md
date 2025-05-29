# 💡 Design Patterns em Node.js + TypeScript + React

Este repositório demonstra na prática a aplicação de dois padrões de projeto fundamentais da engenharia de software: **Strategy** e **Adapter**, com separação clara entre versões **com** e **sem** o uso dos padrões. O frontend React é compartilhado entre todas as versões do backend e pode ser usado para comparar o comportamento das APIs.

---

## 📁 Estrutura do Projeto

```plaintext
KIURY_MARIANO/
├── backend/
│   ├── adapter/
│   │   ├── with-adapter/         → Backend que aplica o padrão Adapter
│   │   └── without-adapter/      → Backend acoplado diretamente ao sistema legado (sem adapter)
│   ├── strategy/
│   │   ├── with-strategy/        → Backend com aplicação do padrão Strategy
│   │   └── without-strategy/     → Backend com lógica procedural sem Strategy
│
├── frontend/                     → Frontend React comum para todos os backends
│   ├── src/
│   └── ...
```

---

## 🎯 Padrões implementados

### 🧩 Strategy Pattern

![Strategy Pattern Diagram](https://refactoring.guru/images/patterns/content/strategy/strategy.png?id=379bfba335380500375881a3da6507e0)

- **Diretório:** `backend/strategy/with-strategy`
- **Objetivo:** Encapsular comportamentos distintos de pagamento (`pix`, `boleto`, `cartão`) em classes separadas, permitindo trocá-los em tempo de execução.
- **Benefícios:**

  - Extensibilidade sem `if` ou `switch`
  - Clareza e organização por tipo de comportamento
  - Redução de acoplamento

#### 🆚 Comparativo

- `with-strategy`: usa classes concretas de pagamento e um contexto (`PaymentContext`)
- `without-strategy`: usa `switch-case` no controller, dificultando manutenção

---

### 🧩 Adapter Pattern

![Adapter Pattern Diagram](https://refactoring.guru/images/patterns/content/adapter/adapter-en.png?id=11ef6ae6177291834323e3f918c47cd2)

- **Diretório:** `backend/adapter/with-adapter`
- **Objetivo:** Adaptar uma interface antiga/incompatível (`LegacyPaymentSystem`) para a interface moderna esperada pela aplicação (`pay(method, amount)`).
- **Benefícios:**

  - Permite reuso de código legado sem modificação
  - Desacopla o controller da lógica legada
  - Facilita substituição futura da dependência

#### 🆚 Comparativo

- `with-adapter`: usa `LegacyPaymentAdapter` para traduzir chamadas modernas
- `without-adapter`: chama diretamente métodos legados (`processPix`, `processCredit`, etc.)

---

## 🖥️ Frontend (comum para todos)

- **Diretório:** `frontend/`
- **Tecnologia:** React + TypeScript (Vite)
- **Objetivo:** Simular envios de pagamentos via formulário
- **Observação:** O frontend é genérico. Para funcionar, basta ativar qualquer API backend (`with-` ou `without-`), e o frontend se conectará via `http://localhost:3000/api/payment`.

---

## 🚀 Como rodar cada projeto

### 📦 Backend - Strategy (com padrão)

```bash
cd backend/strategy/with-strategy
npm install
npm run dev
```

### 📦 Backend - Strategy (sem padrão)

```bash
cd backend/strategy/without-strategy
npm install
npm run dev
```

### 📦 Backend - Adapter (com padrão)

```bash
cd backend/adapter/with-adapter
npm install
npm run dev
```

### 📦 Backend - Adapter (sem padrão)

```bash
cd backend/adapter/without-adapter
npm install
npm run dev
```

---

### 🎨 Frontend

```bash
cd frontend
npm install
npm run dev
```

Acesse: [http://localhost:5173](http://localhost:5173)

---

## 📌 Observações

- Certifique-se de rodar **apenas um backend por vez**, pois todos usam a mesma porta (`3000`).
- O frontend se conecta ao backend ativo via requisição `POST /api/payment`, enviando `{ method, amount }`.

---

## 📚 Padrões usados (referência)

- [Strategy Pattern - Refactoring.Guru](https://refactoring.guru/design-patterns/strategy)
- [Adapter Pattern - Refactoring.Guru](https://refactoring.guru/design-patterns/adapter)
- [Design Patterns Book - GoF](https://en.wikipedia.org/wiki/Design_Patterns)

---

## 🧠 Autor

@KiuryMariano
