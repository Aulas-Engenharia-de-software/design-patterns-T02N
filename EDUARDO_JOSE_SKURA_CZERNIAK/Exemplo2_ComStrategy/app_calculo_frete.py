#-----------------------------------------------------------------------------
# GO FORA (Group Order For Products From Abroad) 🛫
# Exemplo 002 - Com Strategy
# Objetivo: Sistema de cálculo de frete encapsulado com Interface
#-----------------------------------------------------------------------------
# Imports da Biblioteca:

import tkinter as tk                # Biblioteca Padrão para Interfaces
from tkinter import ttk, messagebox # Widgets e Mensagens/Avisos de Tela
from frete_factory import FreteFactory # Herança


#-----------------------------------------------------------------------------
# Interface Gráfica com TKINTER

# Paleta de Cores

COR_FUNDO = '#1a1a1a'
COR_LARANJA = '#FF6700'
COR_VERMELHO = '#B34700'
COR_AMARELO = '#FFD000'
COR_BRANCO = '#FFFFFF'
COR_PRETO = '#000000'

#-----------------------------------------------------------------------------
# Função Principal de Cálculo de Frete

# Mostra/Esconde Campo Personalizado

def alternar_campos_personalizado(event):
    """✧ Mostra ou esconde os campos personalizados."""
    if combo_frete.get() == "✧ Personalizado":
        frame_personalizado.pack(pady=5)
    else:
        frame_personalizado.pack_forget()

# Leitura e Conversões

def calcular_frete():
    produto = entrada_produto.get()

    try:
        peso = float(entrada_peso.get())
    except ValueError:
        messagebox.showerror("✧ Erro", "⚠︎ - Peso inválido!")
        return

    tipo_frete = combo_frete.get()

    try:
        if tipo_frete == "✧ Personalizado":
            try:
                valor_kg = float(entrada_valor_kg.get())
                taxa_fixa = float(entrada_taxa_fixa.get())
            except ValueError:
                messagebox.showerror("✧ Erro", "✧ Preencha os campos de frete personalizado corretamente.")
                return

            estrategia = FreteFactory.criar_frete(tipo_frete, valor_kg, taxa_fixa)

        else:
            estrategia = FreteFactory.criar_frete(tipo_frete)


# Exibição do Resultado

        valor = estrategia.calcular(peso) # Peso (String para Float)
        resultado = f"""
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
【🛍️】- Produto: {produto}
【⚖️】- Peso: {peso} kg
【🚚】- Frete: {tipo_frete}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
【💰】- Valor Total: R$ {valor:.2f}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
"""
        # Formatação de Texto

        texto_resultado.config(state='normal') # Habilita campo de texto
        texto_resultado.delete('1.0', tk.END)  # Apaga conteúdo
        texto_resultado.insert(tk.END, resultado) # Inserção do resultado
        texto_resultado.config(state='disabled') # Desabilita campo de texto

        messagebox.showinfo("✧ Cálculo Concluído", "「✔」 - Frete calculado com sucesso!")

    except Exception as e:
        messagebox.showerror("✧ Erro", str(e))

#-----------------------------------------------------------------------------
# Criação a Janela Principal

janela = tk.Tk()
janela.title("• GO FORA 🛍️ ────  Cálculo de Frete 🏷️ •") # Título
janela.configure(bg=COR_FUNDO) # Definição do Background
janela.geometry("550x600") # Tamanho de Tela

# Título

titulo = tk.Label(janela, text="◉ GO FORA ────  Cálculo de Frete ", 
fg=COR_AMARELO, bg=COR_FUNDO, font=("Arial Black", 18))
titulo.pack(pady=10)

#  Produto

tk.Label(janela, text="✧ Nome do Produto:", fg=COR_BRANCO, bg=COR_FUNDO
, font=("Arial", 12)).pack()
entrada_produto = tk.Entry(janela, width=30, font=("Arial", 12))
entrada_produto.pack(pady=5)

# Peso

tk.Label(janela, text="✧ Peso da Carga em Kg:", fg=COR_BRANCO, bg=COR_FUNDO, 
font=("Arial", 12)).pack()
entrada_peso = tk.Entry(janela, width=10, font=("Arial", 12))
entrada_peso.pack(pady=5)

# Formatação do Tipo de Frete

tk.Label(janela, text="✧ Selecione o tipo de frete:", fg=COR_BRANCO,
bg=COR_FUNDO, font=("Arial", 12)).pack()
combo_frete = ttk.Combobox(janela, values=["✧ Aéreo", "✧ Marítimo", 
                                        "✧ Expresso", "✧ Personalizado"],
                            font=("Arial", 12), state="readonly")
combo_frete.pack(pady=5)
combo_frete.bind("<<ComboboxSelected>>", 
            alternar_campos_personalizado) # Mostra Campo Personalizado

# Formatação de Campos para Frete Personalizado

    # Valor por KG
frame_personalizado = tk.Frame(janela, bg=COR_FUNDO) # Contêiner

tk.Label(frame_personalizado, text="✧ Valor por Kg (R$):", fg=COR_LARANJA,
        bg=COR_FUNDO, font=("Arial", 11)).grid(row=0, column=0, padx=5, pady=2)
entrada_valor_kg = tk.Entry(frame_personalizado, width=10)
entrada_valor_kg.grid(row=0, column=1, padx=5)

    # Taxa Fixa
tk.Label(frame_personalizado, text="✧ Taxa Fixa (R$):", fg=COR_LARANJA,
        bg=COR_FUNDO, font=("Arial", 11)).grid(row=1, column=0, padx=5, pady=2)
entrada_taxa_fixa = tk.Entry(frame_personalizado, width=10)
entrada_taxa_fixa.grid(row=1, column=1, padx=5)

frame_personalizado.pack(pady=5) # Une os dois

# Formatação do Resultado

tk.Label(janela, text="✧ Resultado:", fg=COR_AMARELO, bg=COR_FUNDO,
        font=("Arial", 12)).pack()
texto_resultado = tk.Text(janela, height=10, width=50, state='disabled',
                        bg=COR_PRETO, fg=COR_BRANCO, font=("Arial", 11))
texto_resultado.pack(pady=10)

# Formatação do Botão 'Calcular Frete'

botao_calcular = tk.Button(janela, text="✧ Calcular Frete",
                            command=calcular_frete, bg=COR_VERMELHO,
                            fg=COR_BRANCO, font=("Arial Black", 12))
botao_calcular.pack(pady=10)

# Esconde Campo Personalizado

frame_personalizado.pack_forget()

#-----------------------------------------------------------------------------
# Loop da Interface

janela.mainloop()
#-----------------------------------------------------------------------------
