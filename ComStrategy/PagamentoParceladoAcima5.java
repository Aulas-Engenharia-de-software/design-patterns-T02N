package ComStrategy;

import java.util.List;

public class PagamentoParceladoAcima5 implements CalculadoraTotal {
    @Override
    public double calcular(List<Produto> produtos) {
        double total = 0;
        for (Produto p : produtos) {
            total += p.getTotal();
        }
        return total * 1.1;
    }
}
