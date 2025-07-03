class DBConnection:
    _instance = None  # Atributo para armazenar a instância única

    def __new__(cls):
        if cls._instance is None:
            print("Criando a conexão com o banco de dados...")
            cls._instance = super(DBConnection, cls).__new__(cls)
            # Simula a conexão com um banco de dados
            cls._instance.connection = "Conexão com o banco de dados"
        return cls._instance

    def connect(self):
        # Método simulado de conexão com o banco
        print(f"Conectado: {self.connection}")

    def disconnect(self):
        # Método simulado de desconexão
        print("Desconectado do banco de dados")
