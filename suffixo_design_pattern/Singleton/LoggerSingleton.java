package suffixo_design_pattern.Singleton;

public class LoggerSingleton {
    private static LoggerSingleton instance;
    private String log = "";

    private LoggerSingleton() {}

    public static LoggerSingleton getInstance() {
        if (instance == null) {
            instance = new LoggerSingleton();
        }
        return instance;
    }

    public void addLog(String message) {
        log += message + "\n";
    }

    public String getLog() {
        return log;
    }
}
