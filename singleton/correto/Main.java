package singleton.correto;

public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstancia();
        Logger logger2 = Logger.getInstancia();

        logger1.registrar("Mensagem 1");
        logger2.registrar("Mensagem 2");

        System.out.println("São a mesma instância? " + (logger1 == logger2 ? "Sim" : "Não"));
    }
}
