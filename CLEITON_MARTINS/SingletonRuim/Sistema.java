public class Sistema 
{
    public static void main(String[] args) 
    {
        Usuario usuario1 = Usuario.getInstancia("Alice");
        System.out.println("Usuário 1: " + usuario1.getNome());

        Usuario usuario2 = Usuario.getInstancia("Bob");
        System.out.println("Usuário 2: " + usuario2.getNome());

        System.out.println("Mesma instância? " + (usuario1 == usuario2));
    }
}