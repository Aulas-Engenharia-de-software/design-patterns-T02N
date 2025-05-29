package singleton.simples;

public class Main {
    public static void main(String[] args) {
        LoggerSimples loggerSimples1 = new LoggerSimples();
        LoggerSimples loggerSimples2 = new LoggerSimples();

        loggerSimples1.registrar("Mensagem 1");
        loggerSimples2.registrar("Mensagem 2");

        System.out.println("São a mesma instância? " + (loggerSimples1 == loggerSimples2 ? "Sim" : "Não"));
    }
}
