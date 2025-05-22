from operacao_strategy import OperacaoStrategy

class Soma(OperacaoStrategy):
    def executar(self, a, b):
        return a + b
