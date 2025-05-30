#-----------------------------------------------------------------------------
# GO FORA (Group Order For Products From Abroad) 🛫
# Exemplo 004 - Com Observer (Interface)
# Objetivo: Classe Principal CEG com Suporte a Observers
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Declaração da Classe CEG (Subject)

class CEG:

#-----------------------------------------------------------------------------
# Método Construtor

    def __init__(self, codigo, status_inicial):
        self.codigo = codigo            # Código da CEG
        self.status = status_inicial    # Status Inicial
        self.observadores = []          # Lista de Observadores

#-----------------------------------------------------------------------------
# Método para Adicionar Observador

    def adicionar_observador(self, observador):
        self.observadores.append(observador)

#-----------------------------------------------------------------------------
# Método para Remover Observador

    def remover_observador(self, observador):
        self.observadores.remove(observador)

#-----------------------------------------------------------------------------
# Método para Notificar Observadores

    def notificar_observadores(self):
        mensagem = f"🛈 - CEG {self.codigo} atualizado para: {self.status}"
        for observador in self.observadores:
            observador.atualizar(mensagem)

#-----------------------------------------------------------------------------
# Método para Atualizar Status

    def atualizar_status(self, novo_status):
        self.status = novo_status           # Atualiza Status
        self.notificar_observadores()       # Notifica Observadores

#-----------------------------------------------------------------------------
