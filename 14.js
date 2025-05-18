const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número inteiro não negativo para calcular o fatorial: ", function(input) {
  const numero = parseInt(input);

  if (isNaN(numero) || numero < 0) {
    console.log("Por favor, digite um número inteiro não negativo válido.");
  } else {
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    console.log(`O fatorial de ${numero} é: ${fatorial}`);
  }

  rl.close();
});
