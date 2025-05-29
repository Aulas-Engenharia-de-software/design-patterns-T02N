import random
from abc import ABC, abstractmethod

class EstrategiaJogada(ABC):
    @abstractmethod
    def obter_jogada(self, tabuleiro, jogador: str) -> int:
        pass

class JogadorHumano(EstrategiaJogada):
    def obter_jogada(self, tabuleiro, jogador: str) -> int:
        while True:
            try:
                entrada = input(f"Jogador {jogador}, escolha uma posição (1-9): ")
                posicao = int(entrada) - 1
                return posicao
            except ValueError:
                print("Entrada inválida. Digite um número de 1 a 9.")

class JogadorIAAleatoria(EstrategiaJogada):
    def obter_jogada(self, tabuleiro, jogador: str) -> int:
        posicoes_livres = [i for i, c in enumerate(tabuleiro) if c == " "]
        return random.choice(posicoes_livres)


def exibir_tabuleiro(tabuleiro):
    print()
    for i in range(3):
        linha = tabuleiro[i*3:(i+1)*3]
        print(" | ".join(linha))
        if i < 2:
            print("--" * 5)
    print()

def verificar_vencedor(tabuleiro, jogador):
    combinacoes_vitoria = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],  # linhas
        [0, 3, 6], [1, 4, 7], [2, 5, 8],  # colunas
        [0, 4, 8], [2, 4, 6]              # diagonais
    ]
    return any(all(tabuleiro[i] == jogador for i in comb) for comb in combinacoes_vitoria)

def verificar_empate(tabuleiro):
    return all(c != " " for c in tabuleiro)

def jogada_valida(tabuleiro, posicao):
    return 0 <= posicao < 9 and tabuleiro[posicao] == " "

def jogar():
    tabuleiro = [" " for _ in range(9)]

    estrategias = {
        "X": JogadorHumano(),
        "O": JogadorIAAleatoria() 
    }

    jogador_atual = "X"

    while True:
        exibir_tabuleiro(tabuleiro)
        estrategia = estrategias[jogador_atual]
        posicao = estrategia.obter_jogada(tabuleiro, jogador_atual)

        if not jogada_valida(tabuleiro, posicao):
            print("Jogada inválida! Tente novamente.")
            continue

        tabuleiro[posicao] = jogador_atual

        if verificar_vencedor(tabuleiro, jogador_atual):
            exibir_tabuleiro(tabuleiro)
            print(f"Parabéns! Jogador {jogador_atual} venceu!")
            break
        elif verificar_empate(tabuleiro):
            exibir_tabuleiro(tabuleiro)
            print("Empate!")
            break

        jogador_atual = "O" if jogador_atual == "X" else "X"

if __name__ == "__main__":
    jogar()
