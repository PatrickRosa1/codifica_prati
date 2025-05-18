const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let soma = 0;
let contador = 0;

function solicitarNumero() {
  if (contador < 5) {
    rl.question(`Digite o ${contador + 1}º número: `, function(input) {
      const numero = parseFloat(input);

      if (isNaN(numero)) {
        console.log("Entrada inválida. Digite um número.");
        solicitarNumero(); // repete a mesma tentativa
      } else {
        soma += numero;
        contador++;
        solicitarNumero(); // próxima entrada
      }
    });
  } else {
    console.log(`\nA soma total dos 5 números é: ${soma}`);
    rl.close();
  }
}

solicitarNumero();
