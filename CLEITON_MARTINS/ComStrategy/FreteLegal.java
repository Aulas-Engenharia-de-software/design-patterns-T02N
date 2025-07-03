package ComStrategy;


public class FreteLegal implements FreteStrategy 
{
    @Override
    public double calcularFrete(double peso, double distancia) 
    {
        return peso * 2.00 + distancia * 1.50;
    }

    @Override
    public String getNomeEmpresa() 
    {
        return "Frete Legal";
    }
}

