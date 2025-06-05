# Classe de utilização inviável
class SistemaPagamentoLegado:
    def processaPagamento(self, quantia: float):
        print(f"[LEGADO] - Pagamento de R${quantia:.2f} realizado. ")

# Classe para adaptar os métodos de dentro da classe legado
class SistemaPagamentoAdapter:
    def __init__(self, classe_pagamento: SistemaPagamentoLegado):
        self.classe_pagamento = classe_pagamento

    def pagar(self, quantia: float):
        self.classe_pagamento.processaPagamento(quantia=quantia)

pagamento_legado = SistemaPagamentoLegado()
pagamento_legado.processaPagamento(9)

pagamento_adapter = SistemaPagamentoAdapter(pagamento_legado)
pagamento_adapter.pagar(9)
