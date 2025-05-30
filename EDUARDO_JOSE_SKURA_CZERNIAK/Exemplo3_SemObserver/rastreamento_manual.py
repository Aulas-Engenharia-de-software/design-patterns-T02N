#-----------------------------------------------------------------------------
# GO FORA (Group Order For Products From Abroad) 🛫
# Exemplo 003 - Sem Observer
# Objetivo: Sistema de rastreamento manual (sem notificação automática)
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Declaração de Classe

class CEG:

#-----------------------------------------------------------------------------
# Método Construtor

    def __init__(self, codigo, status):
        self.codigo = codigo              # Código da CEG
        self.status = status              # Status Atual

#-----------------------------------------------------------------------------
# Método para Alterar Status

    def atualizar_status(self, novo_status):
        self.status = novo_status         # Atualiza Status
        print(f"🛈 - Status da CEG {self.codigo} atualizado para: {self.status}")

#-----------------------------------------------------------------------------
# Método para Consultar Manualmente

    def consultar_status(self):
        print(f"🛈 - Status atual da CEG {self.codigo}: {self.status}")

#-----------------------------------------------------------------------------
# Simulações de Rastreamento Manual

print("==== GO FORA - Rastreamento de CEG ====\n") # Título

# Atualiza o status manualmente

ceg1 = CEG("CEG001", "「⏳︎」 - Aguardando envio") # Cria CEG
ceg1.consultar_status()                  # Consulta manual

print("\n--------------------------------------\n")

# Atualiza o status manualmente

ceg1.atualizar_status("「⏳︎」 - Enviado do Exterior")   # Atualiza
ceg1.consultar_status()                      # Consulta

print("\n--------------------------------------\n")

# Atualiza mais uma vez

ceg1.atualizar_status("「⏳︎」 - Chegou no Brasil")     # Atualiza
ceg1.consultar_status()                       # Consulta

print("\n--------------------------------------\n")

# E mais uma atualização

ceg1.atualizar_status("「⏳︎」 - Em processo de entrega")
ceg1.consultar_status()

print("\n--------------------------------------\n")

# Finaliza

ceg1.atualizar_status("「✔」 - Entregue")
ceg1.consultar_status()

print("\n==== FIM DO RASTREAMENTO ====\n")

#-----------------------------------------------------------------------------

