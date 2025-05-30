#-----------------------------------------------------------------------------
# GO FORA (Group Order For Products From Abroad) 🛫
# Exemplo 004 - Com Observer (Interface)
# Objetivo: Observadores (Participantes, Organizador, Sistema de Notificações)
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Classe Observer (Interface)

class Observer:
    def atualizar(self, mensagem):
        pass

#-----------------------------------------------------------------------------
# Participante como Observador

class Participante(Observer):
    def __init__(self, nome):
        self.nome = nome

    def atualizar(self, mensagem):
        print(f"🛈 - Notificação para {self.nome}: {mensagem}")

#-----------------------------------------------------------------------------
# Organizador como Observador

class Organizador(Observer):
    def __init__(self, nome):
        self.nome = nome

    def atualizar(self, mensagem):
        print(f"🛈 - Organizador {self.nome} recebeu: {mensagem}")

#-----------------------------------------------------------------------------
# Sistema de Log como Observador

class SistemaLog(Observer):
    def atualizar(self, mensagem):
        print(f"🛈 - [LOG DO SISTEMA] {mensagem}")

#-----------------------------------------------------------------------------
