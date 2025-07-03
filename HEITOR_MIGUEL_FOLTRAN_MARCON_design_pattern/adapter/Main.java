package HEITOR_MIGUEL_FOLTRAN_MARCON_design_pattern.adapter;

public class Main {
    public static void main(String[] args) {
        Legadao legado = new Legadao();
        AdaptadorLegadao adaptador = new AdaptadorLegadao(legado);

        System.out.println(adaptador.getDadosJson());
    }
}
