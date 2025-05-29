package strategy.simples;

public class Main {
    public static void main(String[] args) {
        DescontoSimples calculadora = new DescontoSimples();

        System.out.println("Valor total com o desconto de Natal: R$ " + calculadora.calcular("DESCONTO_NATAL", 100.0));
        System.out.println("Valor total com o desconto de primeira compra: R$ " + calculadora.calcular("DESCONTO_PRIMEIRA_COMPRA", 100.0));
    }
}
