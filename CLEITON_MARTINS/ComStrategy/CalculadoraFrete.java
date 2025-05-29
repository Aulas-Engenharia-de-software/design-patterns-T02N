package ComStrategy;


public class CalculadoraFrete 
{
    private FreteStrategy estrategia;

    public void setEstrategia(FreteStrategy estrategia) 
    {
        this.estrategia = estrategia;
    }

    public double calcular(double peso, double distancia) 
    {
        return estrategia.calcularFrete(peso, distancia);
    }

    public String getNomeEmpresa() 
    {
        return estrategia.getNomeEmpresa();
    }
}
