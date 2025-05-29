document.addEventListener('DOMContentLoaded', () => {
  const moneyMaskOptions = {
    mask: 'R$ num',
    blocks: {
      num: {
        mask: Number,
        thousandsSeparator: '.',
        radix: ',',
        scale: 2,
        padFractionalZeros: true,
        normalizeZeros: true,
        signed: false
      }
    }
  };

  const valorInput  = document.getElementById('valor');
  const aporteInput = document.getElementById('aporte');

  const maskValor  = IMask(valorInput,  moneyMaskOptions);
  const maskAporte = IMask(aporteInput, moneyMaskOptions);

  let lastValor = maskValor.value;
  maskValor.on('accept', () => {
    const cur = maskValor.value;
    valorInput.classList.remove('pulse-green','pulse-red');
    void valorInput.offsetWidth; // Reinicia a animação
    if (cur.length > lastValor.length) {
      valorInput.classList.add('pulse-green');
    } else if (cur.length < lastValor.length) {
      valorInput.classList.add('pulse-red');
    }
    lastValor = cur;
  });

  let lastAporte = maskAporte.value;
  maskAporte.on('accept', () => {
    const cur = maskAporte.value;
    aporteInput.classList.remove('pulse-green','pulse-red');
    void aporteInput.offsetWidth; // Reinicia a animação
    if (cur.length > lastAporte.length) {
      aporteInput.classList.add('pulse-green');
    } else if (cur.length < lastAporte.length) {
      aporteInput.classList.add('pulse-red');
    }
    lastAporte = cur;
  });
});
