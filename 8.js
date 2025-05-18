const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite o primeiro valor: ", function(valor1Input) {
  rl.question("Digite o segundo valor: ", function(valor2Input) {
    const valor1 = parseFloat(valor1Input);
    const valor2 = parseFloat(valor2Input);

    if (isNaN(valor1) || isNaN(valor2)) {
      console.log("Por favor, digite apenas números válidos.");
    } else if (valor1 === valor2) {
      console.log("Os valores não podem ser iguais.");
    } else {
      if (valor1 < valor2) {
        console.log(`Ordem crescente: ${valor1}, ${valor2}`);
      } else {
        console.log(`Ordem crescente: ${valor2}, ${valor1}`);
      }
    }

    rl.close();
  });
});
