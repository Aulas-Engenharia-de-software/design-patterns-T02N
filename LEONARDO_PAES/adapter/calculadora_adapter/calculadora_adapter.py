from calculadora_antiga import CalculadoraAntiga  # Importa a calculadora legada
from nova_calculadora_interface import NovaCalculadoraInterface  # Interface moderna (com listas)

# Adapter que adapta a CalculadoraAntiga para funcionar com listas
class CalculadoraAdapter(NovaCalculadoraInterface):
    def __init__(self):
        self.calculadora = CalculadoraAntiga()  # Instancia a calculadora antiga

    def somar_lista(self, numeros: list):
        resultado = 0
        for num in numeros:
            resultado = self.calculadora.somar(resultado, num)  # Soma dois a dois
        return resultado

    def subtrair_lista(self, numeros: list):
        if not numeros:
            return 0
        resultado = numeros[0]
        for num in numeros[1:]:
            resultado = self.calculadora.subtrair(resultado, num)  # Subtrai sequencialmente
        return resultado

    def multiplicar_lista(self, numeros: list):
        if not numeros:
            return 1
        resultado = numeros[0]
        for num in numeros[1:]:
            resultado = self.calculadora.multiplicar(resultado, num)  # Multiplica sequencialmente
        return resultado

    def dividir_lista(self, numeros: list):
        if not numeros:
            return 1
        resultado = numeros[0]
        for num in numeros[1:]:
            resultado = self.calculadora.dividir(resultado, num)  # Divide sequencialmente
        return resultado
