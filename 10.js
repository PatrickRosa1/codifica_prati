const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número inteiro: ", function(input) {
  const numero = parseInt(input);

  if (isNaN(numero)) {
    console.log("Por favor, digite um número inteiro válido.");
  } else {
    for (let i = 1; i <= 10; i++) {
      console.log(`${i}: ${numero}`);
    }
  }

  rl.close();
});
