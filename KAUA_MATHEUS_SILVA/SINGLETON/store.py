class Frutaria:
    def __init__(self, nome, produtos=[]):
        self.nome = nome
        self.produtos = produtos
        
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


frutaria1 = Frutaria("Frutaria Moura", ["Laranja"])
frutaria1.vender('Laranja')

frutaria2 = Frutaria("Frutaria Moura", ["Manga"])
frutaria2.vender('Manga')

frutaria1.listarProdutos()

# Verificando se as frutarias são as mesmas
if(frutaria1 == frutaria2):
    print("Existe somente uma instância da mesma frutaria!")
else:
    print("Existem duas instâncias da mesma frutaria!")
