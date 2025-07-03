package Uso_desing_pattern_Factory_Method;

public class CriadorWord extends CriadorDocumento {
    @Override
    public Documento criarDocumento() {
        return new WordDocumento();
    }
}
