from operacao_strategy import OperacaoStrategy

class Subtracao(OperacaoStrategy):
    def executar(self, a, b):
        return a - b
