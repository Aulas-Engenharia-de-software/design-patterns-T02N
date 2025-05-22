from operacao_strategy import OperacaoStrategy

class Divisao(OperacaoStrategy):
    def executar(self, a, b):
        if b == 0:
            raise ValueError("Divisão por zero!")
        return a / b
