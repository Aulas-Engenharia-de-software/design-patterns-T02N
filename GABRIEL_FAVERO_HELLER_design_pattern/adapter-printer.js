class OldPrinter {
  printOld() {
    console.log("Impressão antiga");
  }
}

class NewPrinterInterface {
  printNew() {}
}

class PrinterAdapter extends NewPrinterInterface {
  constructor(oldPrinter) {
    super();
    this.oldPrinter = oldPrinter;
  }

  printNew() {
    this.oldPrinter.printOld();
  }
}

const old = new OldPrinter();
const adapter = new PrinterAdapter(old);
adapter.printNew();
