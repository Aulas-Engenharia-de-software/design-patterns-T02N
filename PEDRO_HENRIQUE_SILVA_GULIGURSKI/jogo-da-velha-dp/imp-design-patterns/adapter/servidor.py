from fastapi import FastAPI
from fastapi.responses import JSONResponse

tabuleiro_fake = [" " for _ in range(9)]

app = FastAPI()

jogador_atual = ["X"]  


@app.post("/api/jogada/{posicao}")
def realizar_jogada(posicao: int):
    if 0 <= posicao < 9 and tabuleiro_fake[posicao] == " ":
        tabuleiro_fake[posicao] = jogador_atual[0]  
        print_tabuleiro()  
        jogador_atual[0] = "O" if jogador_atual[0] == "X" else "X"  
        return JSONResponse(content={"valida": True})
    return JSONResponse(content={"valida": False})


def print_tabuleiro():
    print("\n[TABULEIRO ATUALIZADO]")
    for i in range(3):
        linha = tabuleiro_fake[i*3:(i+1)*3]
        print(" | ".join(linha))
        if i < 2:
            print("--" * 5)
    print()
