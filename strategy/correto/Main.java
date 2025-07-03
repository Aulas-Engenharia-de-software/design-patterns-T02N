package strategy.correto;

public class Main {
    public static void main(String[] args) {
        CalcularDesconto calculadora = new CalcularDesconto();

        calculadora.setDesconto(new DescontoNatal());
        System.out.println("Valor total com o desconto de Natal aplicado: R$ " + calculadora.calcular(100.0));

        calculadora.setDesconto(new DescontoPrimeiraCompra());
        System.out.println("Valor total com o desconto de primeira compra aplicado: R$  " + calculadora.calcular(100.0));
    }
}
