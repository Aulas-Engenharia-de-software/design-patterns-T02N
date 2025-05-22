from operacao_strategy import OperacaoStrategy

class Multiplicacao(OperacaoStrategy):
    def executar(self, a, b):
        return a * b
