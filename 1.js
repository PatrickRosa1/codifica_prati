
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite um número inteiro: ", function(input) {
  const numero = parseInt(input); 
  
  if (isNaN(numero)) {
    console.log("Por favor, digite um número válido.");
  } else {
    if (numero % 2 === 0) {
      console.log(`${numero} é par.`);
    } else {
      console.log(`${numero} é ímpar.`);
    }
  }
});
