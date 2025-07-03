import { Config } from "./config";

export class UserRepository {
  constructor(public readonly config: Config) {}

  async getAll(): Promise<any[]> {
    const connection = pg.connect(this.config.getUrl());
    const client = await connection.connect();
    const result = await client.query("SELECT * FROM user");
    return result.rows;
  }
}
