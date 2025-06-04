from db_connection import DBConnection

def main():
    # Tentando criar várias instâncias do Singleton
    first_connection = DBConnection()
    second_connection = DBConnection()

    # Verificando se as instâncias são as mesmas
    if first_connection is second_connection:
        print("As duas instâncias são iguais! Usando a mesma conexão.")
    else:
        print("As instâncias são diferentes.")

    # Usando a conexão
    first_connection.connect()
    first_connection.disconnect()

if __name__ == "__main__":
    main()
