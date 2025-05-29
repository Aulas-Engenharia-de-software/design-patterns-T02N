//strategy 
function compress(file, algorithm) {
  if (algorithm === "zip") {
    console.log(`Comprimindo ${file} usando ZIP...`);
  } else if (algorithm === "rar") {
    console.log(`Comprimindo ${file} usando RAR...`);
  } else if (algorithm === "tar") {
    console.log(`Comprimindo ${file} usando TAR...`);
  } else {
    console.log("Algoritmo de compressão desconhecido.");
  }
}

compress("documento.txt", "zip");
compress("documento.txt", "rar");
compress("documento.txt", "tar");