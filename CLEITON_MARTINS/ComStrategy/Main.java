package ComStrategy;


import java.util.Scanner;

public class Main 
{
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);
        CalculadoraFrete calculadora = new CalculadoraFrete();

        System.out.println("Informe o peso do objeto em kg:");
        double peso = scanner.nextDouble();

        System.out.println("Informe a distância em km:");
        double distancia = scanner.nextDouble();

        System.out.println("Escolha a empresa de frete:");
        System.out.println("1 - Correio Rápido");
        System.out.println("2 - Frete Legal");
        System.out.println("3 - Entrega Já");

        int opcao = scanner.nextInt();

        switch (opcao) 
        {
            case 1:
                calculadora.setEstrategia(new CorreioRapido());
                break;
            case 2:
                calculadora.setEstrategia(new FreteLegal());
                break;
            case 3:
                calculadora.setEstrategia(new EntregaJa());
                break;
            default:
                System.out.println("Opção inválida!");
                return;
        }

        double total = calculadora.calcular(peso, distancia);
        System.out.println("Empresa escolhida: " + calculadora.getNomeEmpresa());
        System.out.println("Custo total do frete: R$ " + total);
    }
}
