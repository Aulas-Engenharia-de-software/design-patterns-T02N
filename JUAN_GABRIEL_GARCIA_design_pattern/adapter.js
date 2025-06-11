class XMLProcessor {
    processXML(xmlData) {
        throw new Error("Método processXML deve ser implementado");
    }
}

class JSONProcessor {
    processJSON(jsonData) {
        console.log("Processando JSON:", jsonData);
        return { result: `Processado: ${JSON.stringify(jsonData)}` };
    }
}

class JSONToXMLAdapter extends XMLProcessor {
    constructor(jsonProcessor) {
        super();
        this.jsonProcessor = jsonProcessor;
    }

    processXML(xmlData) {
        console.log("Adaptando XML para JSON...");
        const jsonData = this.convertXMLToJSON(xmlData);
        return this.jsonProcessor.processJSON(jsonData);
    }

    convertXMLToJSON(xmlData) {
        console.log("Convertendo XML:", xmlData);
        return { data: xmlData.replace(/<[^>]+>/g, "").trim() };
    }
}

function legacySystem(processor, xmlData) {
    console.log("Sistema legado chamando processXML...");
    return processor.processXML(xmlData);
}

const jsonProcessor = new JSONProcessor();
const adapter = new JSONToXMLAdapter(jsonProcessor);

// Dados de exemplo (XML simulado como string)
const xmlData = "<data>Hello, Adapter Pattern!</data>";

const result = legacySystem(adapter, xmlData);
console.log("Resultado:", result);