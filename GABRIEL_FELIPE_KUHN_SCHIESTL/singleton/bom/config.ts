export class Config {
  private static instance: Config;

  private constructor(
    public readonly host: string,
    public readonly port: number,
    public readonly username: string,
    public readonly password: string,
    public readonly database: string
  ) {}

  static getInstance(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string
  ): Config {
    if (!Config.instance) {
      Config.instance = new Config(host, port, username, password, database);
    }
    return Config.instance;
  }

  getUrl(): string {
    if (!Config.instance) return "";
    return `postgres://${Config.instance.username}:${Config.instance.password}@${Config.instance.host}:${Config.instance.port}/${Config.instance.database}`;
  }
}
