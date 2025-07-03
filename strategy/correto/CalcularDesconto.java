package strategy.correto;

public class CalcularDesconto {
    private Desconto desconto;

    public void setDesconto(Desconto desconto) {
        this.desconto = desconto;
    }

    public double calcular(double valor) {
        if (desconto == null) {
            return valor;
        }
        return desconto.calcular(valor);
    }
}
