package HEITOR_MIGUEL_FOLTRAN_MARCON_design_pattern.singleton;

public class Logger {
    private static Logger instancia;
    private final StringBuilder logs = new StringBuilder();

    private Logger() {}

    public static Logger getInstance() {
        if (instancia == null) {
            instancia = new Logger();
        }
        return instancia;
    }

    public void log(String mensagem) {
        logs.append(mensagem).append("\n");
    }

    public String getLogs() {
        return logs.toString();
    }
}
