package HEITOR_MIGUEL_FOLTRAN_MARCON_design_pattern.singleton;

public class Main {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        logger1.log("Teste 1");

        Logger logger2 = Logger.getInstance();
        logger2.log("Teste 2");

        System.out.println("Mesma instância? " + (logger1 == logger2));
        System.out.println("QTD de logs acumulados:\n" + logger1.getLogs());
    }
}

//Má prática porque esse exemplo pode virar tipo uma variável global e estraga os testes automatizados.