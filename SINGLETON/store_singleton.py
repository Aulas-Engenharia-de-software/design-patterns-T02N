class Frutaria:
    _instancia = None

    def __new__(self, nome, produtos=[]):
        if self._instancia is None:
            print("Criando nova instância da classe!")
            self._instancia = super(Frutaria, self).__new__(self)
            self.nome = nome
            self.produtos = produtos
        else:
            print("Uma instância dessa classe já existe!")
        return(self._instancia)
        
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

frutaria2.listarProdutos()

# Verificando se as frutarias são as mesmas
if(frutaria1 == frutaria2):
    print("Existe somente uma instância da mesma frutaria!")
else:
    print("Existem duas instâncias da mesma frutaria!")
