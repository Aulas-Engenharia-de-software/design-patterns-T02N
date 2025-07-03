package suffixo_design_pattern;

interface AntigoControle {
    void ligarLuz();
    void desligarLuz();
}

class ControleDeLuzAntigo implements AntigoControle {
    public void ligarLuz() {
        System.out.println("Luz ligada pelo controle antigo");
    }

    public void desligarLuz() {
        System.out.println("Luz desligada pelo controle antigo");
    }
}

interface NovoControle {
    void ligar();
    void desligar();
}

class ControleAdapter implements NovoControle {
    private AntigoControle controleAntigo;

    public ControleAdapter(AntigoControle controleAntigo) {
        this.controleAntigo = controleAntigo;
    }

    public void ligar() {
        controleAntigo.ligarLuz();
    }

    public void desligar() {
        controleAntigo.desligarLuz();
    }
}

public class Main {
    public static void main(String[] args) {
        AntigoControle controleAntigo = new ControleDeLuzAntigo();
        NovoControle controleNovo = new ControleAdapter(controleAntigo);

        controleNovo.ligar();
        controleNovo.desligar();
    }
}
