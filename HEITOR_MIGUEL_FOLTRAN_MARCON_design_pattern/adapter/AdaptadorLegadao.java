package HEITOR_MIGUEL_FOLTRAN_MARCON_design_pattern.adapter;

public class AdaptadorLegadao implements Adaptador {
    private final Legadao Legadao;

    public AdaptadorLegadao(Legadao Legadao) {
        this.Legadao = Legadao;
    }

    @Override
    public String getDadosJson() {
        String xml = Legadao.getDadosXml();
        return "{\"dados\": \"" + xml.replace("\"", "\\\"") + "\"}";
    }

}
