// strategy
class ZipCompression {
  compress(file) {
    console.log(`Comprimindo ${file} usando ZIP...`);
  }
}

class RarCompression {
  compress(file) {
    console.log(`Comprimindo ${file} usando RAR...`);
  }
}

class TarCompression {
  compress(file) {
    console.log(`Comprimindo ${file} usando TAR...`);
  }
}

class Compressor {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  compress(file) {
    this.strategy.compress(file);
  }
}

const zip = new ZipCompression();
const rar = new RarCompression();
const tar = new TarCompression();

const compressor = new Compressor(zip);
compressor.compress("documento.txt");

compressor.setStrategy(rar);
compressor.compress("documento.txt");

compressor.setStrategy(tar);
compressor.compress("documento.txt");
