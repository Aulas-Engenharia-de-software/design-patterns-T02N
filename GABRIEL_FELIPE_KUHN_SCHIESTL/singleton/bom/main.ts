import { Config } from "./config";
import { ProductRepository } from "./ProductRepository";
import { UserRepository } from "./UserRepository";

export class Main {
  userRepo: UserRepository;
  productRepo: ProductRepository;

  constructor(config: Config) {
    this.userRepo = new UserRepository(config);
    this.productRepo = new ProductRepository(config);
  }

  async run() {
    const users = await this.userRepo.getAll();
    console.log("Users: ", users);

    const products = await this.productRepo.getAll();
    console.log("Products: ", products);
  }
}

const config = Config.getInstance(
  "localhost",
  5432,
  "postgres",
  "postgres",
  "postgres"
);
const config2 = Config.getInstance(
  "localhost",
  5432,
  "postgres",
  "postgres",
  "postgres"
);

console.log(config.getUrl() === config2.getUrl()); // true
// Aqui, diferentes partes do sistema usam a mesma configuração, garantindo consistência e facilitando manutenção.

const main1 = new Main(config);
const main2 = new Main(config2);

main1.run().catch((error) => {
  console.error("Error running the application:", error);
});

main2.run().catch((error) => {
  console.error("Error running the application:", error);
});
// Ambos trarão o mesmo resultado, pois estão usando a mesma configuração.
