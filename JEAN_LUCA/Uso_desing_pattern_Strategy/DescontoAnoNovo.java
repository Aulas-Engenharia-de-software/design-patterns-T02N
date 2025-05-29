package Uso_desing_pattern_Strategy;

public class DescontoAnoNovo implements DescontoStrategy {
    public double calcular(double valor) {
        return valor * 0.85;
    }
}
