public class Usuario 
{
    private static Usuario instancia;
    private String nome;

    private Usuario(String nome) 
    {
        this.nome = nome;
    }

    public static Usuario getInstancia(String nome) 
    {
        if (instancia == null) 
        {
            instancia = new Usuario(nome);
        }
        return instancia;
    }

    public String getNome() 
    {
        return nome;
    }
}