package SemStrategy;

import java.util.Scanner;

public class Main 
{
    public static void main(String[] args) 
    {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Informe o peso do objeto em kg:");
        double peso = scanner.nextDouble();

        System.out.println("Informe a distância em km:");
        double distancia = scanner.nextDouble();

        System.out.println("Escolha a empresa de frete:");
        System.out.println("1 - Correio Rápido");
        System.out.println("2 - Frete Legal");
        System.out.println("3 - Entrega Já");

        int escolha = scanner.nextInt();
        double custoTotal = 0;


        if (escolha == 1) 
        {
            double precoPorKg = 2.50;
            double precoPorKm = 1.20;
            custoTotal = peso * precoPorKg + distancia * precoPorKm;
            System.out.println("Empresa: Correio Rápido");
        } 
        else if (escolha == 2) 
        {
            double precoPorKg = 2.00;
            double precoPorKm = 1.50;
            custoTotal = peso * precoPorKg + distancia * precoPorKm;
            System.out.println("Empresa: Frete Legal");
        } 
        else if (escolha == 3) 
        {
            double precoPorKg = 3.00;
            double precoPorKm = 1.00;
            custoTotal = peso * precoPorKg + distancia * precoPorKm;
            System.out.println("Empresa: Entrega Já");
        } 
        else 
        {
            System.out.println("Opção inválida.");
            return;
        }

        System.out.println("Custo total do frete: R$ " + custoTotal);
    }
}
