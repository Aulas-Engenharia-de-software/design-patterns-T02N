# Classe Calculadora que realiza operações com listas, baseada em uma string de operação
class Calculadora:
    def calcular_lista(self, numeros: list, operacao: str):
        if not numeros:
            return 0  # Retorna 0 se a lista estiver vazia

        resultado = numeros[0]  # Começa com o primeiro número da lista
        for num in numeros[1:]:  # Itera sobre o restante dos números
            if operacao == "soma":
                resultado += num
            elif operacao == "subtracao":
                resultado -= num
            elif operacao == "multiplicacao":
                resultado *= num
            elif operacao == "divisao":
                if num == 0:
                    raise ValueError("Divisão por zero!")  # Trata divisão por zero
                resultado /= num
            else:
                raise ValueError("Operação inválida!")  # Se a operação não for reconhecida
        return resultado  # Retorna o resultado final


# Bloco principal de execução
if __name__ == "__main__":
    numeros = [100, 5, 2]  # Lista de entrada
    calc = Calculadora()  # Cria a calculadora

    # Chama a função para cada operação desejada e imprime o resultado
    print(f"Soma: {calc.calcular_lista(numeros, 'soma')}")
    print(f"Subtração: {calc.calcular_lista(numeros, 'subtracao')}")
    print(f"Multiplicação: {calc.calcular_lista(numeros, 'multiplicacao')}")
    print(f"Divisão: {calc.calcular_lista(numeros, 'divisao')}")
