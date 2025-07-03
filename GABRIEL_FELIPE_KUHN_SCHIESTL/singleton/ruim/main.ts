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

// Problema: é possível criar várias configurações diferentes, levando a inconsistências
const config1 = new Config("localhost", 5432, "postgres", "postgres", "db1");
const config2 = new Config("localhost", 5432, "postgres", "postgres", "db2");

const main1 = new Main(config1);
const main2 = new Main(config2);

main1.run().catch((error) => {
  console.error("Error running main1:", error);
});

main2.run().catch((error) => {
  console.error("Error running main2:", error);
});

// Aqui, diferentes partes do sistema podem usar configurações divergentes, dificultando manutenção e aumentando risco de erro.
