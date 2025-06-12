//Adaptador

class TomadaAntiga {
    conectarRedondo() {
        console.log("Tomada Antiga: Conectado na tomada redonda.");
    }
}

// Ele permite que a TomadaAntiga seja usada onde uma interface "reta" é esperada.
class AdaptadorTomada {
    constructor(tomadaAntigaExistente) {
        this.tomadaAntiga = tomadaAntigaExistente;
    }

    conectarReto() {
        console.log("Adaptador: Adaptando conexão para plugue reto...");
        this.tomadaAntiga.conectarRedondo();
    }
}

const minhaTomadaAntiga = new TomadaAntiga();

// Agora, o adaptador sabe como trabalhar com a Tomada Antiga.
const meuAdaptador = new AdaptadorTomada(minhaTomadaAntiga);

// O cliente não precisa saber que por baixo está sendo usado um conectarRedondo.
console.log("\nTestando o Adaptador");
meuAdaptador.conectarReto();
console.log("Fim do Teste");

//Provando que a TomadaAntiga original não mudou:
console.log("\nTestando a Tomada Antiga diretamente (ainda funciona)");
minhaTomadaAntiga.conectarRedondo();