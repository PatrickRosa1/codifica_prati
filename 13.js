const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;
let quantidade = 0;

function lerNumero() {
  rl.question("Digite um número decimal (0 para encerrar): ", function(input) {
    const numero = parseFloat(input);

    if (isNaN(numero)) {
      console.log("Entrada inválida. Digite um número.");
      lerNumero(); // repete a tentativa
    } else if (numero === 0) {
      if (quantidade === 0) {
        console.log("Nenhum número foi digitado.");
      } else {
        const media = soma / quantidade;
        console.log(`\nMédia aritmética dos ${quantidade} números: ${media.toFixed(2)}`);
      }
      rl.close();
    } else {
      soma += numero;
      quantidade++;
      lerNumero(); // próximo número
    }
  });
}

lerNumero();
