package Uso_desing_pattern_Factory_Method;

public class CriadorPdf extends CriadorDocumento {
    @Override
    public Documento criarDocumento() {
        return new PdfDocumento();
    }
}
