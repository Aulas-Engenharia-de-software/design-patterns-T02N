package ComStrategy;

public class CorreioRapido implements FreteStrategy 
{
    @Override
    public double calcularFrete(double peso, double distancia) 
    {
        return peso * 2.50 + distancia * 1.20;
    }

    @Override
    public String getNomeEmpresa() 
    {
        return "Correio Rápido";
    }
}
