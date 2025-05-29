package Uso_desing_pattern_Factory_Method;

public class PdfDocumento implements Documento {
    @Override
    public void abrir() {
        System.out.println("Abrindo documento PDF");
    }
}
