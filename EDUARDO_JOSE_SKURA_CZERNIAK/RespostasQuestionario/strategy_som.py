from abc import ABC, abstractmethod

class SomStrategy(ABC):
    @abstractmethod
    def fazer_som(self):
        pass

class SomAlto(SomStrategy):
    def fazer_som(self):
        print("SOM ALTO!")

class SomBaixo(SomStrategy):
    def fazer_som(self):
        print("som baixo...")

class SomMedio(SomStrategy):
    def fazer_som(self):
        print("som médio...")

class Animal:
    def __init__(self, comportamento_som: SomStrategy):
        self.comportamento_som = comportamento_som

    def emitir_som(self):
        self.comportamento_som.fazer_som()

animal1 = Animal(SomAlto())
print("Animal 1:")
animal1.emitir_som()

animal1.comportamento_som = SomBaixo()
print("Animal 1 muda comportamento:")
animal1.emitir_som()

animal2 = Animal(SomMedio())
print("Animal 2:")
animal2.emitir_som()
