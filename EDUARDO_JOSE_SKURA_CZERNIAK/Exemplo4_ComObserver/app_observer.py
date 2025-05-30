#-----------------------------------------------------------------------------
# GO FORA (Group Order For Products From Abroad) 🛫
# Exemplo 004 - Com Observer (Interface com ComboBox)
# Objetivo: Rastreamento com Notificações Automáticas via GUI
#-----------------------------------------------------------------------------

#-----------------------------------------------------------------------------
# Imports

import tkinter as tk                # Biblioteca Interface
from tkinter import ttk, messagebox # Widgets e Mensagens
from ceg import CEG                 # Classe CEG
from observers import Participante, Organizador, SistemaLog # Observadores

#-----------------------------------------------------------------------------
# Paleta de Cores

COR_FUNDO = '#1a1a1a'
COR_LARANJA = '#FF6700'
COR_VERMELHO = '#B34700'
COR_AMARELO = '#FFD000'
COR_BRANCO = '#FFFFFF'
COR_PRETO = '#000000'

#-----------------------------------------------------------------------------
# Criação da Janela Principal

janela = tk.Tk()
janela.title("• GO FORA 🛍️ ────  Rastreamento de CEG •")
janela.configure(bg=COR_FUNDO)
janela.geometry("600x650")

#-----------------------------------------------------------------------------
# Configuração da CEG e Observadores

ceg1 = CEG("✧ CEG001", "「⏳︎」 - Aguardando envio")

participante1 = Participante("Alice")
participante2 = Participante("Bruno")
organizador = Organizador("Manager_Compra")
sistema = SistemaLog()

ceg1.adicionar_observador(participante1)
ceg1.adicionar_observador(participante2)
ceg1.adicionar_observador(organizador)
ceg1.adicionar_observador(sistema)

#-----------------------------------------------------------------------------
# Função de Atualização de Status

def atualizar_status():
    status_selecionado = combo_status.get()
    status_digitado = entrada_status.get()

    # Prioriza o ComboBox se tiver valor
    novo_status = status_selecionado if status_selecionado != "" else status_digitado

    if novo_status.strip() == "":
        messagebox.showerror("✧ Erro", "⚠︎ -  O status não pode estar vazio.")
        return

    ceg1.atualizar_status(novo_status)

    texto_notificacoes.config(state='normal')
    texto_notificacoes.insert(tk.END, f"\n「✔」 -  Status atualizado para: {novo_status}")
    texto_notificacoes.config(state='disabled')

    entrada_status.delete(0, tk.END)
    combo_status.set("")

#-----------------------------------------------------------------------------
# Interface Gráfica

titulo = tk.Label(janela, text="◉ GO FORA ────  Rastreamento de CEG ",
                    fg=COR_AMARELO, bg=COR_FUNDO, font=("Arial Black", 18))
titulo.pack(pady=10)

# Texto do ComboBox

tk.Label(janela, text="✧ Selecione um Status:", fg=COR_BRANCO, bg=COR_FUNDO,
        font=("Arial", 12)).pack()

# ComboBox de Status Padrão

combo_status = ttk.Combobox(janela, values=[
    "「⏳︎」 - Aguardando envio",
    "「⏳︎」 - Enviado do Exterior",
    "「⏳︎」 - Chegou no Brasil",
    "「⏳︎」 - Em processo de entrega",
    "「✔」 - Entregue"
], font=("Arial", 12), state="readonly")
combo_status.pack(pady=5)

# Ou entrada manual

tk.Label(janela, text="✧ Ou digite um Status personalizado:", fg=COR_BRANCO, bg=COR_FUNDO,
        font=("Arial", 12)).pack()

entrada_status = tk.Entry(janela, width=40, font=("Arial", 12))
entrada_status.pack(pady=5)

# Botão de Atualizar

botao_atualizar = tk.Button(janela, text="➜  Atualizar Status",
                            command=atualizar_status, bg=COR_VERMELHO,
                            fg=COR_BRANCO, font=("Arial Black", 12))
botao_atualizar.pack(pady=10)

# Notificações

tk.Label(janela, text="✧ Notificações:", fg=COR_AMARELO, bg=COR_FUNDO,
        font=("Arial", 12)).pack()

texto_notificacoes = tk.Text(janela, height=15, width=60, state='disabled',
                            bg=COR_PRETO, fg=COR_BRANCO, font=("Arial", 11))
texto_notificacoes.pack(pady=10)

#-----------------------------------------------------------------------------
# Loop da Interface

janela.mainloop()

#-----------------------------------------------------------------------------
