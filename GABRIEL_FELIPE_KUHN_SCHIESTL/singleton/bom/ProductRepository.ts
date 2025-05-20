import { Config } from "./config";

export class ProductRepository {
  constructor(public readonly config: Config) {}

  async getAll(): Promise<any[]> {
    const connection = pg.connect(this.config.getUrl());
    const client = await connection.connect();
    const result = await client.query("SELECT * FROM product");
    return result.rows;
  }
}
