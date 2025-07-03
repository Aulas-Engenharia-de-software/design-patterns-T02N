import XmlParserAntigo from "./legacy/XmlParserAntigo.js";
import XmlToJsonAdapter from "./adapters/XmlToJsonAdapter.js";

const xmlParser = new XmlParserAntigo();
const jsonAdapter = new XmlToJsonAdapter(xmlParser);

console.log("JSON convertido:");
console.log(JSON.stringify(jsonAdapter.parseJson(), null, 2));
