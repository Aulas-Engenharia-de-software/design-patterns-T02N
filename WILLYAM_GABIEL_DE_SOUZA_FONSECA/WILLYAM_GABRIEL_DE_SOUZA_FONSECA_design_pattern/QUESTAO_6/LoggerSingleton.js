// Singleton com estado global (má prática)
class LoggerSingleton {
  constructor() {
    if (LoggerSingleton.instance) {
      return LoggerSingleton.instance;
    }

    this.logs = [];
    LoggerSingleton.instance = this;
  }

  log(message) {
    const timestamp = new Date().toISOString();
    const fullMessage = `[${timestamp}] ${message}`;
    this.logs.push(fullMessage);
    console.log(fullMessage);
  }

  getLogs() {
    return this.logs;
  }
}
