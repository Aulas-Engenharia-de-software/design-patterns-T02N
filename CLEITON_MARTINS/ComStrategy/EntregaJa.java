package ComStrategy;

public class EntregaJa implements FreteStrategy 
{
    @Override
    public double calcularFrete(double peso, double distancia)
    {
        return peso * 3.00 + distancia * 1.00;
    }

    @Override
    public String getNomeEmpresa() 
    {
        return "Entrega Já";
    }
}
