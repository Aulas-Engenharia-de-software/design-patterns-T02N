class CalculadoraAntiga:
    def somar(self, a, b):
        return a + b  # Soma dois números

    def subtrair(self, a, b):
        return a - b  # Subtrai b de a

    def multiplicar(self, a, b):
        return a * b  # Multiplica dois números

    def dividir(self, a, b):
        if b == 0:
            raise ValueError("Divisão por zero!")  # Evita divisão por zero
        return a / b  # Divide a por b
