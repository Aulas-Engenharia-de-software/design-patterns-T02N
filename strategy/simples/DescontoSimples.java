package strategy.simples;

public class DescontoSimples {
    public double calcular(String tipoDesconto, double valor) {
        if ("DESCONTO_NATAL".equals(tipoDesconto)) {
            return valor * 0.75;
        } else if ("DESCONTO_PRIMEIRA_COMPRA".equals(tipoDesconto)) {
            return valor * 0.5;
        }
        return valor;
    }
}
