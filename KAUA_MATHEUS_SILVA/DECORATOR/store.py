class Carro:
    def __init__(self, nome: str, valor: float):
        self.nome = nome
        self.valor = valor

class CarroAr:
    """
        Carro com Ar-Condicionado.
    """
    def __init__(self, nome: str, valor: float):
        self.nome = nome + " + Ar-Condicionado"
        self.valor = valor + 2000

class CarroVidro:
    """
        Carro com Vidro Elétrico.
    """
    def __init__(self, nome: str, valor: float):
        self.nome = nome + " + Vidro Elétrico"
        self.valor = valor + 1500

class CarroSom:
    """
        Carro com Som Automotivo.
    """
    def __init__(self, nome: str, valor: float):
        self.nome = nome + " + Som Automotivo"
        self.valor = valor + 800

class CarroSomVidro:
    """
        Carro com Som Automotivo e Vidro Elétrico.
    """
    def __init__(self, nome: str, valor: float):
        self.nome = nome + " + Som Automotivo + Vidro Elétrico"
        self.valor = valor + 800 + 1500

def apresentaCarro(nome: str, valor: float):
    """
        Faz uma apresentação do carro, logando uma mensagem pronta.
    """
    print(f"O {nome} está valendo {valor}")

celta = Carro('Celta', 45000)
celta_c_Ar = CarroAr('Celta', 45000)
celta_c_Som = CarroSom('Celta', 45000)

celta_c_Som_Vidro = CarroSomVidro('Celta', 45000)


apresentaCarro(celta.nome, celta.valor)
apresentaCarro(celta_c_Ar.nome, celta_c_Ar.valor)
apresentaCarro(celta_c_Som_Vidro.nome, celta_c_Som_Vidro.valor)