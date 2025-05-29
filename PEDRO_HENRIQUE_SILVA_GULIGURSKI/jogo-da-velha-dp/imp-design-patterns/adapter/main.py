import requests
from abc import ABC, abstractmethod

class InterfaceEntrada(ABC):
    @abstractmethod
    def obter_jogada(self, tabuleiro, jogador):
        pass

class EntradaHTTP:
    def __init__(self, url_base):
        self.url_base = url_base

    def validar_posicao(self, posicao: int) -> bool:
        try:
            url = f"{self.url_base}/api/jogada/{posicao}"
            response = requests.post(url)
            if response.status_code == 200:
                return response.json().get("valida", False)
            else:
                raise ConnectionError("Erro na requisição HTTP.")
        except Exception as e:
            print(f"Erro na comunicação com o servidor: {e}")
            return False

class EntradaAdapter(InterfaceEntrada):
    def __init__(self, entrada_http: EntradaHTTP):
        self.entrada_http = entrada_http

    def obter_jogada(self, tabuleiro, jogador):
        while True:
            try:
                entrada = input(f"Jogador {jogador}, escolha uma posição (1-9): ")
                posicao = int(entrada) - 1
                if not (0 <= posicao < 9):
                    print("Número fora do intervalo. Tente novamente.")
                    continue
                if self.entrada_http.validar_posicao(posicao):
                    return posicao
                else:
                    print("Posição já ocupada ou inválida.")
            except ValueError:
                print("Entrada inválida. Digite um número de 1 a 9.")
            except Exception as e:
                print(f"Erro: {e}")

def exibir_tabuleiro_local(tabuleiro):
    print()
    for i in range(3):
        linha = tabuleiro[i*3:(i+1)*3]
        print(" | ".join(linha))
        if i < 2:
            print("--" * 5)
    print()

def jogar():
    tabuleiro_local = [" " for _ in range(9)]  
    entrada_adapter = EntradaAdapter(EntradaHTTP("http://localhost:8000"))
    jogador_atual = "X"

    while True:
        exibir_tabuleiro_local(tabuleiro_local)
        posicao = entrada_adapter.obter_jogada(tabuleiro_local, jogador_atual)

        tabuleiro_local[posicao] = jogador_atual

        if " " not in tabuleiro_local:
            exibir_tabuleiro_local(tabuleiro_local)
            print("Empate!")
            break

        jogador_atual = "O" if jogador_atual == "X" else "X"

if __name__ == "__main__":
    jogar()
