package suffixo_design_pattern.Singleton;

public class Main {
    public static void main(String[] args) {
        LoggerSingleton logger1 = LoggerSingleton.getInstance();
        LoggerSingleton logger2 = LoggerSingleton.getInstance();

        logger1.addLog("Primeira mensagem");
        logger2.addLog("Segunda mensagem");

        System.out.println(logger1.getLog());
        System.out.println(logger2.getLog());
    }
}

// Esse exemplo mostra como o padrão Singleton pode ser uma má prática. 
// Aqui temos uma classe Logger com uma única instância global que é acessada de qualquer lugar. 
// Apesar de funcionar, isso pode gerar vários problemas, principalmente em projetos maiores:
// (1) o estado do logger (as mensagens) pode ser alterado de qualquer parte do sistema, o que gera confusão;
// (2) em testes, os logs podem se misturar entre execuções, dificultando o isolamento dos testes;
// (3) se quisermos mudar a forma de logar (ex: salvar em arquivo ou banco de dados), o sistema todo dependerá dessa implementação fixa;
// (4) e por fim, em aplicações com várias threads, essa abordagem pode causar erros se não houver controle de concorrência.
// Por isso, apesar de ser funcional, usar Singleton para esse tipo de classe pode trazer mais problemas do que benefícios.