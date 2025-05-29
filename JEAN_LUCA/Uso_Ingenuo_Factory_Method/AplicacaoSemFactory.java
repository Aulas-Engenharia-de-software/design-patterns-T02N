package Uso_Ingenuo_Factory_Method;


interface Documento {
    void abrir();
}


class PdfDocumento implements Documento {
    public void abrir() {
        System.out.println("Abrindo documento PDF");
    }
}

class WordDocumento implements Documento {
    public void abrir() {
        System.out.println("Abrindo documento Word");
    }
}


public class AplicacaoSemFactory {
    public static void main(String[] args) {
        Documento doc1 = new PdfDocumento(); 
        doc1.abrir();

        Documento doc2 = new WordDocumento();
        doc2.abrir();
    }
}
