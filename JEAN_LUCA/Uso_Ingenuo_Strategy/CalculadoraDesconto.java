package Uso_Ingenuo_Strategy;
public class CalculadoraDesconto {

    public double calcular(String tipoDesconto, double valor) {
        if (tipoDesconto.equals("Natal")) {
            return valor * 0.9;
        } else if (tipoDesconto.equals("Ano_Novo")) {
            return valor * 0.85;
        } else if (tipoDesconto.equals("Black_Friday")) {
            return valor * 0.5;
        }
        return valor;
    }

    public static void main(String[] args) {
        CalculadoraDesconto calc = new CalculadoraDesconto();
        double precoComDesconto = calc.calcular("Ano_Novo", 200.0);
        System.out.println("Preço com desconto: " + precoComDesconto);
    }
}
