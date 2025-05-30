#-----------------------------------------------------------------------------
# GO FORA (Group Order For Products From Abroad) 🛫
# Exemplo 004 - Testes Unitários com Observer
# Objetivo: Validar Notificação Automática
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Imports

import unittest
from ceg import CEG
from observers import Participante

#-----------------------------------------------------------------------------
# Classe de Testes

class TesteObserver(unittest.TestCase):

    def test_notificacao(self):
        ceg = CEG("✧ CEGTEST", "🛈 - Aguardando envio")
        participante = Participante("Teste_User")

        mensagens_recebidas = []

        def capturar_mensagem(mensagem):
            mensagens_recebidas.append(mensagem)

        participante.atualizar = capturar_mensagem

        ceg.adicionar_observador(participante)

        ceg.atualizar_status("「✔」 - Enviado")

        self.assertEqual(mensagens_recebidas[0], "🛈 - CEG CEGTEST atualizado para: Enviado")

#-----------------------------------------------------------------------------
# Execução dos Testes

if __name__ == '__main__':
    unittest.main()

#-----------------------------------------------------------------------------
