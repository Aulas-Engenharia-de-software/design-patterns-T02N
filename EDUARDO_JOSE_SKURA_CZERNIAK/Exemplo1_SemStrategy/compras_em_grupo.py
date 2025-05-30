#-----------------------------------------------------------------------
# GO FORA (Group Order For Products From Abroad) 🛫
# Exemplo 001 - Sem Strategy
# Objetivo: Sistema de cálculo de frete simples
#-----------------------------------------------------------------------
# Declaração de Classe:

class ComprasEmGrupo:

#-----------------------------------------------------------------------
# Método Construtor

    def __init__(self, tipo_frete, peso_em_kg):
        self.tipo_frete = tipo_frete            # Frete
        self.peso_em_kg = peso_em_kg            # Peso em Kg 

#-----------------------------------------------------------------------
# Método Cálculo do Frete

    def calcular_frete(self):
        if self.tipo_frete == "aereo":
            return self.peso_em_kg * 20.0  
            # Aéreo: 20 R$ por KG
        elif self.tipo_frete == "maritimo":
            return self.peso_em_kg * 10.0 + 100.0  
            # Marítimo: 10 R$ por KG + Taxa Fixa de 100 R$
        elif self.tipo_frete == "expresso":
            return self.peso_em_kg * 50.0
            # Expresso: 50 R$ por KG
        else:
            print("⚠︎ - Tipo de frete inválido!")
            # Erro
            return None

#-----------------------------------------------------------------------
# Método de Resumo

    def mostrar_resumo(self):
        print(f"ⓘ - Cálculo para {self.peso_em_kg} kg "
                f"usando frete {self.tipo_frete}")
                # Ínicio do Resumo
        valor = self.calcular_frete()
        if valor is not None:
            print(f"「✔」 - Valor total do frete: R$ {valor}")
            # Se houver Valor
        else:
            print("⚠︎ - Não foi possível calcular o frete!")
            # Se Valor estiver vazio

#-----------------------------------------------------------------------
# Simulações de Impressão

print("==== GO FORA - Cálculo de Frete ====\n") # Título

# 1ª Simulação - Frete Aéreo

compra1 = ComprasEmGrupo("aereo", 5) # Aéreo de 5 KG
compra1.mostrar_resumo()             # Resultado: 100 R$

print("\n-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")

# 2ª Simulação - Frete Marítimo

compra2 = ComprasEmGrupo("maritimo", 10) # Marítimo de 10 KG
compra2.mostrar_resumo()                 # Resultado: 200 R$

print("\n-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")

# 3ª Simulação - Frete Expresso

compra3 = ComprasEmGrupo("expresso", 2) # Expresso de 2 KG
compra3.mostrar_resumo()                # Resultado: 100 R$ 

print("\n-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")

# 4ª Simulação - Frete Inexistente

compra4 = ComprasEmGrupo("foguete", 1) # "Foguete" de 1 KG
compra4.mostrar_resumo()               # Resultado: ?

print("\n-~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~\n")

#-----------------------------------------------------------------------