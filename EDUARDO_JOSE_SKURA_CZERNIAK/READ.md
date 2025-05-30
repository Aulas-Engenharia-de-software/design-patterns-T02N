
GO FORA 🛫 — Group Order For Products From Abroad

Sistema de Gestão Colaborativa para CEG (Compras em Grupo) de Produtos Importados.
Este projeto simula funcionalidades de uma plataforma que auxilia no processo de frete, rastreamento e organização de compras internacionais em grupo.

------------------------------------------------------------
📦 Estrutura do Projeto

GO_FORA/
├── Exemplo1_SemStrategy/       # Sistema de Cálculo de Frete (Código Tosco, Sem Strategy)
├── Exemplo2_ComStrategy/       # Sistema de Cálculo de Frete com Interface + Strategy + Factory
├── Exemplo3_SemObserver/       # Sistema de Rastreamento Manual (Sem Observer)
├── Exemplo4_ComObserver/       # Sistema de Rastreamento com Notificações Automáticas (Observer)
├── assets/                     # (Opcional) Ícones, imagens, recursos visuais
└── README.md                   # Documentação do Projeto

------------------------------------------------------------
🔍 Descrição dos Exemplos

📘 Exemplo 1 — Sem Strategy
> Simulação simples de cálculo de frete com muitos if/else.
✔️ Funciona, mas é feio, pouco escalável, difícil de manter.

📗 Exemplo 2 — Com Strategy (com Interface Gráfica)
> Sistema de cálculo de frete com GUI (Tkinter), utilizando o padrão Strategy + Factory.
- ✅ Interface bonita, estilizada com cores (laranja neon, vermelho queimado, amarelo quente, branco e preto).
- ✅ Possui cálculo de frete normal e frete personalizado.
- ✅ Modularizado, organizado, com suporte a testes unitários.

📙 Exemplo 3 — Sem Observer
> Sistema de rastreamento de pedidos onde o usuário precisa consultar manualmente o status.
✔️ Funciona, mas é ineficiente, chato, sem reação automática.

📕 Exemplo 4 — Com Observer
> Sistema de rastreamento inteligente utilizando o padrão Observer.
- ✅ Quando o status da CEG muda, todos os participantes, organizadores e sistemas de log são notificados automaticamente.
- ✅ Muito mais profissional, limpo e eficiente.

------------------------------------------------------------
🚀 Como Executar Cada Projeto

⚙️ Pré-requisitos:
- Ter o Python instalado na sua máquina (versão 3.8 ou superior).

📥 Clonar o Projeto (Opcional):

git clone https://github.com/seu-usuario/go-fora.git
cd go-fora

✅ Executar os Códigos:

🛍️ Exemplo 1 — Sem Strategy (Terminal)
cd Exemplo1_SemStrategy
python compras_em_grupo.py

🖥️ Exemplo 2 — Com Strategy (Interface Gráfica)
cd Exemplo2_ComStrategy
python app_calculo_frete.py

🚚 Exemplo 3 — Sem Observer (Terminal)
cd Exemplo3_SemObserver
python rastreamento_ceg.py

📲 Exemplo 4 — Com Observer (Terminal)
cd Exemplo4_ComObserver
python app_observer.py

------------------------------------------------------------
🔍 Como Executar os Testes Unitários

python testes_frete.py       # Para testar fretes (Exemplo 2)
python testes_observer.py    # Para testar observer (Exemplo 4)

------------------------------------------------------------
🎨 Pasta de Assets

- A pasta assets/ pode conter ícones, imagens, logos ou outros recursos visuais usados na interface (Exemplo 2).

------------------------------------------------------------
👑 Autor

Desenvolvido por [@seu-nome], com apoio e consultoria da melhor IA arquiteta de software — ChatGPT by OpenAI 💖.

------------------------------------------------------------
🧠 Tecnologias Utilizadas

- 🐍 Python
- 🎨 Tkinter (Interface Gráfica)
- 🧠 Padrões de Projeto:
- Strategy + Factory
- Observer
- 🧪 unittest (Testes Unitários)

------------------------------------------------------------
💖 Licença

Este projeto foi desenvolvido para fins acadêmicos, educacionais e portfólio.
Sinta-se livre para usar, estudar e modificar! ✨
