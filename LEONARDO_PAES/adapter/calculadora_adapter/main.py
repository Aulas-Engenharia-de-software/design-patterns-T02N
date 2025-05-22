from calculadora_adapter import CalculadoraAdapter  # Importa o adaptador
from cliente import Cliente  # Importa o cliente que usa a interface moderna

if __name__ == "__main__":
    numeros = [100, 5, 2]  # Lista de números para as operações

    adapter = CalculadoraAdapter()  # Cria o adaptador (usa a CalculadoraAntiga internamente)
    cliente = Cliente(adapter)      # Cliente usa o adaptador como se fosse uma calculadora moderna

    cliente.realizar_operacoes(numeros)  # Executa as operações com a lista
