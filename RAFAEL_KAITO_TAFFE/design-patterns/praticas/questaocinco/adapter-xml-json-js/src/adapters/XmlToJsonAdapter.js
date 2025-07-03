import JsonParser from "../interfaces/JsonParser.js";

class XmlToJsonAdapter extends JsonParser {
  constructor(xmlParser) {
    super();
    this.xmlParser = xmlParser;
  }

  parseJson() {
    const xml = this.xmlParser.getXml();
    const nome = xml.match(/<nome>(.*?)<\/nome>/)[1];
    const idade = xml.match(/<idade>(.*?)<\/idade>/)[1];

    return {
      usuario: {
        nome,
        idade: Number(idade),
      },
    };
  }
}

export default XmlToJsonAdapter;
