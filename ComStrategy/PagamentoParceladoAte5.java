package ComStrategy;

import java.util.List;

public class PagamentoParceladoAte5 implements CalculadoraTotal {
    @Override
    public double calcular(List<Produto> produtos) {
        double total = 0;
        for (Produto p : produtos) {
            total += p.getTotal();
        }
        return total;
    }
}
