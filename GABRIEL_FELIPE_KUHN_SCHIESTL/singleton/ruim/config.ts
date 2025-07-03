export class Config {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;

  constructor(
    host: string,
    port: number,
    username: string,
    password: string,
    database: string
  ) {
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.database = database;
  }

  getUrl(): string {
    return `postgres://${this.username}:${this.password}@${this.host}:${this.port}/${this.database}`;
  }
}
