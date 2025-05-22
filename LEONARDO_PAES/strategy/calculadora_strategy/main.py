from soma import Soma
from subtracao import Subtracao
from multiplicacao import Multiplicacao
from divisao import Divisao
from calculadora import Calculadora

if __name__ == "__main__":
    numeros = [100, 5, 2]

    soma = Calculadora(Soma())
    sub = Calculadora(Subtracao())
    mult = Calculadora(Multiplicacao())
    div = Calculadora(Divisao())

    print(f"Soma: {soma.calcular_lista(numeros)}")
    print(f"Subtração: {sub.calcular_lista(numeros)}")
    print(f"Multiplicação: {mult.calcular_lista(numeros)}")
    print(f"Divisão: {div.calcular_lista(numeros)}")
