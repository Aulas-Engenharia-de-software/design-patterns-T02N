class OldLogger {
    log(message) {
        console.log(`Old Logger: ${message}`);
    }
}
class NewLogger {
  write(level, message) {
   
  }
}

class LoggerAdapter {
  constructor(oldLogger) {
    this.oldLogger = oldLogger;
  }

  write(level, message) {

    this.oldLogger.log(`${level.toUpperCase()}: ${message}`);
  }
}

const oldLogger = new OldLogger();
const adapter = new LoggerAdapter(oldLogger);

adapter.write('info', 'Sistema iniciado');
adapter.write('error', 'Erro detectado');