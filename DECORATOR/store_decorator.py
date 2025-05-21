import functools
from datetime import datetime

def log_venda(func):

    @functools.wraps(func)
    def wrapper(*args, **kwargs):
        print(f"[{datetime.now()}]")
        return func(*args, **kwargs)
    return wrapper

class Frutaria:
    def __init__(self, nome, produtos=[]):
        self.nome = nome
        self.produtos = produtos

    @log_venda    
    def vender(self, produto):
        """
            Verifica se temos o produto em estoque e caso sim realiza a venda, senão, retorna dizendo que não temos!
        """
        if(produto in self.produtos):
            print(f"O produto {self.produtos[self.produtos.index(produto)]} foi vendido!")
        else:
            print(f"Não temos esse produto em estoque!")

    def listarProdutos(self):
        print(self.produtos)

frutaria = Frutaria("Frutaria da Rosa", ["Laranja", "Pêra", "Maça"])
frutaria.vender("Pêra")

frutaria.vender("Kiwi")