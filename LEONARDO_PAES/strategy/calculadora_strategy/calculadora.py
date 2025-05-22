class Calculadora:
    def __init__(self, estrategia):
        self.estrategia = estrategia  # Estratégia atual

    def calcular_lista(self, numeros: list):
        if not numeros:
            return 0
        resultado = numeros[0]
        for num in numeros[1:]:
            resultado = self.estrategia.executar(resultado, num)
        return resultado
