from datetime import datetime

class Frutaria:
    def __init__(self, nome, produtos=[]):
        self.nome = nome
        self.produtos = produtos
    
    def vender(self, produto):
        """
            Verifica se temos o produto em estoque e caso sim realiza a venda, senão, retorna dizendo que não temos!
        """
        if(produto in self.produtos):
            print(f"[{datetime.now()}]")
            print(f"O produto {self.produtos[self.produtos.index(produto)]} foi vendido!")
        else:
            print(f"[{datetime.now()}]")
            print(f"Não temos esse produto em estoque!")

    def listarProdutos(self):
        print(self.produtos)

frutaria = Frutaria("Frutaria da Rosa", ["Laranja", "Pêra", "Maça"])
frutaria.vender("Pêra")

frutaria.vender("Kiwi")