import { Config } from "./config";

export class UserRepository {
  private config: Config;

  constructor(config: Config) {
    this.config = config;
  }

  async getAll() {
    const connection = pg.connect(this.config.getUrl());
    const client = await connection.connect();
    const result = await client.query("SELECT * FROM user");
    return result.rows;
  }
}
