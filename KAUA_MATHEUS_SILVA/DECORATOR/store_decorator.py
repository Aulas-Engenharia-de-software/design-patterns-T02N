class Carro:
    def __init__(self, nome: str, valor: float):
        self.nome = nome
        self.valor = valor

class addAr:
    """
        Adiciona Ar-Condicionado ao Carro.
    """
    def __init__(self, carro: Carro):
        self.nome = carro.nome + " + Ar-Condicionado"
        self.valor = carro.valor + 2000

class addVidro:
    """
        Adiciona Vidro Elétrico ao Carro.
    """
    def __init__(self, carro: Carro):
        self.nome = carro.nome + " + Vidro Elétrico"
        self.valor = carro.valor + 1500

class addSom:
    """
        Adiciona Som Automotivo ao Carro.
    """
    def __init__(self, carro: Carro):
        self.nome = carro.nome + " + Som Automotivo"
        self.valor = carro.valor + 800

def apresentaCarro(nome: str, valor: float):
    """
        Faz uma apresentação do carro, logando uma mensagem pronta.
    """
    print(f"O {nome} está valendo {valor}")

celta = Carro('Celta', 45000)
celta_c_Ar = addAr(celta)
celta_c_Som = addSom(celta)

celta_c_Som_Vidro = addVidro(celta_c_Som)


apresentaCarro(celta.nome, celta.valor)
apresentaCarro(celta_c_Ar.nome, celta_c_Ar.valor)
apresentaCarro(celta_c_Som_Vidro.nome, celta_c_Som_Vidro.valor)