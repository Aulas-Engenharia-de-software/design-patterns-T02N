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
    for combinacao in combinacoes_vitoria:
        if all(tabuleiro[i] == jogador for i in combinacao):
            return True
    return False

def verificar_empate(tabuleiro):
    return all(celula != " " for celula in tabuleiro)

def jogada_valida(tabuleiro, posicao):
    return 0 <= posicao < 9 and tabuleiro[posicao] == " "

def obter_jogada(jogador):
    while True:
        try:
            entrada = input(f"Jogador {jogador}, escolha uma posição (1-9): ")
            posicao = int(entrada) - 1
            return posicao
        except ValueError:
            print("Entrada inválida. Digite um número de 1 a 9.")

def jogar():
    tabuleiro = [" " for _ in range(9)]
    jogador_atual = "X"

    while True:
        exibir_tabuleiro(tabuleiro)
        posicao = obter_jogada(jogador_atual)

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
