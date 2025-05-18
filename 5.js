const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite seu peso em kg: ", function (pesoInput) {
  const peso = parseFloat(pesoInput);

  rl.question("Digite sua altura em metros (ex: 1.75): ", function (alturaInput) {
    const altura = parseFloat(alturaInput);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
      console.log("Peso ou altura inválidos.");
    } else {
      const imc = peso / (altura * altura);
      console.log(`Seu IMC é: ${imc.toFixed(2)}`);

      if (imc < 18.5) {
        console.log("Classificação: Baixo peso");
      } else if (imc < 24.9) {
        console.log("Classificação: Peso normal");
      } else if (imc < 29.9) {
        console.log("Classificação: Sobrepeso");
      } else {
        console.log("Classificação: Obesidade");
      }
    }

    rl.close();
  });
});
