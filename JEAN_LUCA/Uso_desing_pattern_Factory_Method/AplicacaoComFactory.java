package Uso_desing_pattern_Factory_Method;

public class AplicacaoComFactory {
    public static void main(String[] args) {
        CriadorDocumento criadorPdf = new CriadorPdf();
        Documento doc1 = criadorPdf.criarDocumento();
        doc1.abrir();

        CriadorDocumento criadorWord = new CriadorWord();
        Documento doc2 = criadorWord.criarDocumento();
        doc2.abrir();
    }
}

