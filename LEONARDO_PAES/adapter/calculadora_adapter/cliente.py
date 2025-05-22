class Cliente:
    def __init__(self, calculadora):
        self.calculadora = calculadora  # Recebe uma calculadora com interface moderna (via adapter)

    def realizar_operacoes(self, numeros: list):
        # Executa e exibe as operações usando listas
        print(f"Somando {numeros} = {self.calculadora.somar_lista(numeros)}")
        print(f"Subtraindo {numeros} = {self.calculadora.subtrair_lista(numeros)}")
        print(f"Multiplicando {numeros} = {self.calculadora.multiplicar_lista(numeros)}")
        print(f"Dividindo {numeros} = {self.calculadora.dividir_lista(numeros)}")
