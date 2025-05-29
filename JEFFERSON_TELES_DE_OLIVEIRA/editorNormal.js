// Factory Method
class EditorDeTexto {
  criarDocumento(tipo) {
    if (tipo === "PDF") {
      return this.criarPDF();
    } else if (tipo === "DOCX") {
      return this.criarDOCX();
    } else if (tipo === "TXT") {
      return this.criarTXT();
    } else {
      throw new Error("Tipo de documento não suportado");
    }
  }

  criarPDF() {
    return "Documento PDF criado";
  }

  criarDOCX() {
    return "Documento DOCX criado";
  }

  criarTXT() {
    return "Documento TXT criado";
  }
}

const editor = new EditorDeTexto();
console.log(editor.criarDocumento("PDF")); 
console.log(editor.criarDocumento("DOCX")); 
console.log(editor.criarDocumento("TXT")); 