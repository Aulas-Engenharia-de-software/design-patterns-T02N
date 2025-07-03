package Uso_desing_pattern_Strategy;

public class DescontoNatal implements DescontoStrategy {
    public double calcular(double valor) {
        return valor * 0.9;
    }
}
