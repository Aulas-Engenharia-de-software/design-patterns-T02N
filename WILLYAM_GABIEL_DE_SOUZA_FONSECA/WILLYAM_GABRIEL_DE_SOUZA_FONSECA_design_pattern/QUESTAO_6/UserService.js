class UserService {
  constructor() {
    // Usa diretamente o singleton (alto acoplamento)
    this.logger = new LoggerSingleton();
  }

  login(username) {
    this.logger.log(`Usuário ${username} fez login.`);
  }

  logout(username) {
    this.logger.log(`Usuário ${username} fez logout.`);
  }

  getLogs() {
    return this.logger.getLogs();
  }
}
