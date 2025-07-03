package ComStrategy;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CarrinhoComStrategy {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        List<Produto> carrinho = new ArrayList<>();
        CalculadoraTotal calculadora = new PagamentoParceladoAte5(); 

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
                    System.out.println("Escolha a forma de pagamento:");
                    System.out.println("1. À vista (10% de desconto)");
                    System.out.println("2. Parcelado até 5x (sem desconto)");
                    System.out.println("3. Parcelado acima de 5x (10% de juros)");
                    int forma = scanner.nextInt();

                    switch (forma) {
                        case 1:
                            calculadora = (CalculadoraTotal) new PagamentoAVista();
                            break;
                        case 2:
                            calculadora = new PagamentoParceladoAte5();
                            break;
                        case 3:
                            calculadora = new PagamentoParceladoAcima5();
                            break;
                        default:
                            System.out.println("Forma inválida.");
                            continue;
                    }

                    double totalFinal = calculadora.calcular(carrinho);
                    System.out.printf("Total com forma de pagamento: R$%.2f\n", totalFinal);
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
