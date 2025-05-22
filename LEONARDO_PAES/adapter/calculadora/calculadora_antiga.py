# Classe legada que trabalha com dois números
class CalculadoraAntiga:
    def somar(self, a, b):
        return a + b

    def subtrair(self, a, b):
        return a - b

    def multiplicar(self, a, b):
        return a * b

    def dividir(self, a, b):
        if b == 0:
            raise ValueError("Divisão por zero!")
        return a / b


# Uso direto da calculadora antiga com lógica de listas
if __name__ == "__main__":
    numeros = [100, 5, 2]

    calc = CalculadoraAntiga()

    # Soma com lista
    resultado_soma = 0
    for num in numeros:
        resultado_soma = calc.somar(resultado_soma, num)

    # Subtração com lista
    resultado_sub = numeros[0]
    for num in numeros[1:]:
        resultado_sub = calc.subtrair(resultado_sub, num)

    # Multiplicação com lista
    resultado_mult = numeros[0]
    for num in numeros[1:]:
        resultado_mult = calc.multiplicar(resultado_mult, num)

    # Divisão com lista
    resultado_div = numeros[0]
    for num in numeros[1:]:
        resultado_div = calc.dividir(resultado_div, num)

    # Resultado final
    print(f"Soma: {resultado_soma}")
    print(f"Subtração: {resultado_sub}")
    print(f"Multiplicação: {resultado_mult}")
    print(f"Divisão: {resultado_div}")
