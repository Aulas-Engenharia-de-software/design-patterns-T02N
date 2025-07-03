package Uso_desing_pattern_Factory_Method;

public class WordDocumento implements Documento {
    @Override
    public void abrir() {
        System.out.println("Abrindo documento Word");
    }
}
