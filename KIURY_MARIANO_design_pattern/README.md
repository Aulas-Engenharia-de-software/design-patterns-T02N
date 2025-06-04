# Exemplo de Padrão Singleton em Python

Este é um exemplo simples de como implementar o **padrão Singleton** em Python, aplicando-o a um **gerenciador de conexão com banco de dados**. O objetivo é garantir que apenas uma instância da conexão seja criada durante a execução da aplicação, evitando múltiplas conexões desnecessárias.

## Estrutura do Projeto

O projeto tem a seguinte estrutura de arquivos:

```

database\_example/
├── __init__.py
├── db_connection.py
└── main.py

```

### Descrição dos Arquivos:

1. **`db_connection.py`**: Contém a classe `DBConnection`, que implementa o padrão Singleton e gerencia a conexão com o banco de dados.
2. **`main.py`**: Arquivo principal onde o padrão Singleton é testado, criando instâncias da classe de conexão e verificando se elas são iguais.
3. **`__init__.py`**: Este arquivo garante que a pasta `singleton_example` seja tratada como um pacote Python (pode estar vazio).

## Como Funciona

A classe `DBConnection` utiliza o método especial `__new__` para garantir que **apenas uma instância** seja criada durante a execução. Quando uma nova instância é solicitada, ela retorna a instância já criada, garantindo o padrão Singleton.

### O Fluxo do Código:

1. O método `__new__` é usado para criar a instância única de `DBConnection` apenas uma vez.
2. O método `connect` simula a conexão com um banco de dados.
3. O método `disconnect` simula a desconexão do banco de dados.
4. O arquivo `main.py` cria duas instâncias da classe `DBConnection` e verifica se ambas são a mesma instância, como esperado no padrão Singleton.

## Como Rodar

Siga os passos abaixo para rodar o projeto:

### 1. Clone o repositório

Primeiro, clone o repositório em sua máquina local:

```bash
git clone https://github.com/Aulas-Engenharia-de-software/design-patterns-T02N.git
```

### 2. Navegue até o diretório do projeto

Depois de clonar o repositório, entre na pasta do projeto:

```bash
cd singleton-example
```

### 3. Rodar o código

Certifique-se de que o Python 3 está instalado. Para verificar a instalação do Python, use o seguinte comando:

```bash
python3 --version
```

Se o Python 3 estiver instalado, você pode executar o código com:

```bash
python3 main.py
```

### Resultado Esperado

Ao rodar o programa, a saída esperada será:

```
Criando a conexão com o banco de dados...
As duas instâncias são iguais! Usando a mesma conexão.
Conectado: Conexão com o banco de dados
Desconectado do banco de dados
```

### Explicação:

1. **Criando a conexão**: O primeiro acesso cria a conexão com o banco de dados e imprime uma mensagem indicando que a conexão foi estabelecida.
2. **Verificando as instâncias**: A comparação entre `first_connection` e `second_connection` confirma que ambas são a mesma instância, conforme esperado no padrão Singleton.
3. **Conectando e desconectando**: O método `connect` simula a conexão com o banco, e `disconnect` simula a desconexão.

## Conclusão

Este exemplo ilustra como o **padrão Singleton** pode ser útil para garantir que apenas uma instância de um recurso compartilhado, como uma conexão com o banco de dados, seja criada e utilizada durante a execução do programa.

Esse padrão ajuda a evitar múltiplas instâncias desnecessárias, economizando recursos e simplificando o gerenciamento de conexões em sistemas maiores.

## Personalizações

Você pode modificar a classe `DBConnection` para adicionar funcionalidades extras, como:

- Gerenciamento de múltiplos tipos de banco de dados (MySQL, PostgreSQL, SQLite, etc.).
- Implementar autenticação ou configurações de tempo de espera para as conexões.

Se você quiser expandir esse exemplo para um sistema de produção, basta adicionar a lógica necessária para trabalhar com um banco de dados real.
