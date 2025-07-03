#-----------------------------------------------------------------------------
# GO FORA (Group Order For Products From Abroad) 🛫
# Exemplo 002 - Com Strategy
# Objetivo: Módulo das Estratégias de Frete (Padrão Strategy)
#-----------------------------------------------------------------------------
# Estratégia: Define Instruções de cada Frete
#
#-----------------------------------------------------------------------------
# Classe Base de Cálculo

class CalculadoraFrete:
    def calcular(self, peso):
        pass

#-----------------------------------------------------------------------------
# Estratégias Concretas de Frete

# Frete Aéreo
class FreteAereo(CalculadoraFrete):
    def calcular(self, peso):
        return peso * 20.0

# Frete Marítimo
class FreteMaritimo(CalculadoraFrete):
    def calcular(self, peso):
        return (peso * 10.0) + 100.0

# Frete Expresso
class FreteExpresso(CalculadoraFrete):
    def calcular(self, peso):
        return peso * 50.0

# Frete Sedex
class FreteSedex(CalculadoraFrete):
    def calcular(self, peso):
        return (peso * 100.0) + 50.0

# Frete Personalizado
class FretePersonalizado(CalculadoraFrete):
    def __init__(self, valor_por_kg, taxa_fixa):
        self.valor_por_kg = valor_por_kg
        self.taxa_fixa = taxa_fixa

    def calcular(self, peso):
        return (peso * self.valor_por_kg) + self.taxa_fixa

#-----------------------------------------------------------------------------
