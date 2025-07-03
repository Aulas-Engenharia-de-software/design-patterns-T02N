package Uso_desing_pattern_Strategy;

public class CalculadoraDesconto {
    private DescontoStrategy strategy;

    public CalculadoraDesconto(DescontoStrategy strategy) {
        this.strategy = strategy;
    }

    public double calcular(double valor) {
        return strategy.calcular(valor);
    }

    public static void main(String[] args) {
        CalculadoraDesconto calc = new CalculadoraDesconto(new DescontoNatal());
        double precoComDesconto = calc.calcular(200.0);
        System.out.println("Preço com desconto: " + precoComDesconto);
    }
}

