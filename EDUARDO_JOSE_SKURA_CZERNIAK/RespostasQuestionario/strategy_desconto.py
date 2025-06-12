from abc import ABC, abstractmethod

class DescontoStrategy(ABC):
    @abstractmethod
    def calcular_desconto(self, valor):
        pass

class DescontoClienteNormal(DescontoStrategy):
    def calcular_desconto(self, valor):
        return valor * 0.05

class DescontoClienteVIP(DescontoStrategy):
    def calcular_desconto(self, valor):
        return valor * 0.15

class DescontoPromocao(DescontoStrategy):
    def calcular_desconto(self, valor):
        return valor * 0.30

class CarrinhoDeCompras:
    def __init__(self, strategy: DescontoStrategy):
        self.strategy = strategy

    def calcular_total_com_desconto(self, valor):
        desconto = self.strategy.calcular_desconto(valor)
        return valor - desconto

valor = 200.0

carrinho_normal = CarrinhoDeCompras(DescontoClienteNormal())
print("Cliente normal paga:", carrinho_normal.calcular_total_com_desconto(valor))

carrinho_vip = CarrinhoDeCompras(DescontoClienteVIP())
print("Cliente VIP paga:", carrinho_vip.calcular_total_com_desconto(valor))

carrinho_promo = CarrinhoDeCompras(DescontoPromocao())
print("Cliente em promoção paga:", carrinho_promo.calcular_total_com_desconto(valor))
