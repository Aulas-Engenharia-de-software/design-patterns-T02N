public class Cliente 
{
    public static void main(String[] args) 
    {
        SistemaPagamentoAntigo sistemaAntigo = new SistemaPagamentoAntigo();
        Pagamento pagamento = new PagamentoAdapter(sistemaAntigo);
        pagamento.pagar(150.00);
    }
}