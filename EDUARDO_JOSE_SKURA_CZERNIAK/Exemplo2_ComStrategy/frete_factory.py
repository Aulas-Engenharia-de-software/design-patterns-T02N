#-----------------------------------------------------------------------------
# GO FORA (Group Order For Products From Abroad) 🛫
# Exemplo 002 - Com Strategy
# Objetivo: Fábrica de Estratégias de Frete (Padrão Factory)
#-----------------------------------------------------------------------------
# Estratégia: Define Regras e Escolha de Frete

#-----------------------------------------------------------------------------
# Imports

from fretes import FreteAereo, FreteMaritimo, FreteExpresso, FreteSedex, FretePersonalizado

#-----------------------------------------------------------------------------
# Classe Fábrica de Frete

class FreteFactory:
    @staticmethod
    def criar_frete(tipo_frete, valor_por_kg=None, taxa_fixa=None):

        if tipo_frete == "✧ Aéreo":
            return FreteAereo()

        elif tipo_frete == "✧ Marítimo":
            return FreteMaritimo()

        elif tipo_frete == "✧ Expresso":
            return FreteExpresso()

        elif tipo_frete == "✧ Sedex":
            return FreteSedex()

        elif tipo_frete == "✧ Personalizado":
            if valor_por_kg is None or taxa_fixa is None:
                raise ValueError("⚠︎ - Informe os valores para frete personalizado.")
            return FretePersonalizado(valor_por_kg, taxa_fixa)

        else:
            raise ValueError(f"⚠︎ - Tipo de frete '{tipo_frete}' não reconhecido.")

#-----------------------------------------------------------------------------
