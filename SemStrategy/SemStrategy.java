package SemStrategy;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

class Produto {
    String nome;
    double preco;
    int quantidade;

    public Produto(String nome, double preco, int quantidade) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    public double getTotal() {
        return preco * quantidade;
    }
}

public class SemStrategy {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Produto> carrinho = new ArrayList<>();
        int opcao;

        do {
            System.out.println("\n--- Menu ---");
            System.out.println("1. Adicionar produto");
            System.out.println("2. Remover produto");
            System.out.println("3. Ver carrinho");
            System.out.println("4. Calcular total");
            System.out.println("5. Calcular total com forma de pagamento");
            System.out.println("0. Sair");
            System.out.print("Escolha: ");
            opcao = scanner.nextInt();
            scanner.nextLine();

            switch (opcao) {
                case 1:
                    System.out.print("Nome do produto: ");
                    String nome = scanner.nextLine();
                    System.out.print("Preço unitário: ");
                    double preco = scanner.nextDouble();
                    System.out.print("Quantidade: ");
                    int quantidade = scanner.nextInt();
                    carrinho.add(new Produto(nome, preco, quantidade));
                    System.out.println("Produto adicionado!");
                    break;

                case 2:
                    System.out.print("Índice do produto para remover: ");
                    int indice = scanner.nextInt();
                    if (indice >= 0 && indice < carrinho.size()) {
                        carrinho.remove(indice);
                        System.out.println("Produto removido.");
                    } else {
                        System.out.println("Índice inválido.");
                    }
                    break;

                case 3:
                    System.out.println("Itens no carrinho:");
                    for (int i = 0; i < carrinho.size(); i++) {
                        Produto p = carrinho.get(i);
                        System.out.printf("%d. %dx %s - R$%.2f\n", i, p.quantidade, p.nome, p.preco);
                    }
                    break;

                case 4:
                    double total = 0;
                    for (Produto p : carrinho) {
                        total += p.getTotal();
                    }
                    System.out.printf("Total: R$%.2f\n", total);
                    break;

                case 5:
                    double valor = 0;
                    for (Produto p : carrinho) {
                        valor += p.getTotal();
                    }

                    System.out.println("Escolha a forma de pagamento:");
                    System.out.println("1. À vista (10% de desconto)");
                    System.out.println("2. Parcelado até 5x (sem desconto)");
                    System.out.println("3. Parcelado acima de 5x (10% de juros)");
                    int forma = scanner.nextInt();

                    if (forma == 1) {
                        valor *= 0.9;
                        System.out.printf("Total com desconto: R$%.2f\n", valor);
                    } else if (forma == 2) {
                        System.out.printf("Total sem desconto: R$%.2f\n", valor);
                    } else if (forma == 3) {
                        valor *= 1.1;
                        System.out.printf("Total com juros: R$%.2f\n", valor);
                    } else {
                        System.out.println("Forma de pagamento inválida.");
                    }
                    break;

                case 0:
                    System.out.println("Saindo...");
                    break;

                default:
                    System.out.println("Opção inválida.");
            }

        } while (opcao != 0);

        scanner.close();
    }
}
