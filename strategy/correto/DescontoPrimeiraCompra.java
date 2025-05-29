package strategy.correto;

public class DescontoPrimeiraCompra implements Desconto {
    @Override
    public double calcular(double valor) {
        return valor * 0.5;
    }
}
