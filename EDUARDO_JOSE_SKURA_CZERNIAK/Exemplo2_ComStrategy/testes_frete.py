#-----------------------------------------------------------------------------
# GO FORA (Group Order For Products From Abroad) 🛫
# Exemplo 002 - Testes Unitários
# Objetivo: Validação dos Cálculos das Estratégias de Frete
#-----------------------------------------------------------------------------
# Estratégia: Botão de Testes Unitários
# Comando: python testes_frete.py
#
#-----------------------------------------------------------------------------
# Imports

import unittest
from fretes import FreteAereo, FreteMaritimo, FreteExpresso, FreteSedex, FretePersonalizado

#-----------------------------------------------------------------------------
# Classe de Testes

class TesteFretes(unittest.TestCase):

    def test_frete_aereo(self):
        frete = FreteAereo()
        self.assertEqual(frete.calcular(10), 200)

    def test_frete_maritimo(self):
        frete = FreteMaritimo()
        self.assertEqual(frete.calcular(10), 200)

    def test_frete_expresso(self):
        frete = FreteExpresso()
        self.assertEqual(frete.calcular(2), 100)

    def test_frete_sedex(self):
        frete = FreteSedex()
        self.assertEqual(frete.calcular(1), 150)

    def test_frete_personalizado(self):
        frete = FretePersonalizado(15, 50)
        self.assertEqual(frete.calcular(5), 125)

#-----------------------------------------------------------------------------
# Execução dos Testes

if __name__ == '__main__':
    unittest.main()

#-----------------------------------------------------------------------------
