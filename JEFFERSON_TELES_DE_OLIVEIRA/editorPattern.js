//Factory method
class EditorDeTexto {
  criarDocumento() {
    
    return this.fabricarDocumento();
  }

  fabricarDocumento() {
    throw new Error("Este método deve ser implementado pelas subclasses");
  }
}

class EditorPDF extends EditorDeTexto {
  fabricarDocumento() {
    return "Documento PDF criado";
  }
}

class EditorDOCX extends EditorDeTexto {
  fabricarDocumento() {
    return "Documento DOCX criado";
  }
}

class EditorTXT extends EditorDeTexto {
  fabricarDocumento() {
    return "Documento TXT criado";
  }
}

const pdf = new EditorPDF();
console.log(pdf.criarDocumento()); 
const docx = new EditorDOCX();
console.log(docx.criarDocumento()); 

const txt = new EditorTXT();
console.log(txt.criarDocumento());