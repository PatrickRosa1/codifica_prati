const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o lado A: ", function (aInput) {
  rl.question("Digite o lado B: ", function (bInput) {
    rl.question("Digite o lado C: ", function (cInput) {
      const A = parseFloat(aInput);
      const B = parseFloat(bInput);
      const C = parseFloat(cInput);

      if (isNaN(A) || isNaN(B) || isNaN(C) || A <= 0 || B <= 0 || C <= 0) {
        console.log("Valores inválidos. Os lados devem ser números positivos.");
      } else {
        // Verifica se os lados formam um triângulo
        if (A < B + C && B < A + C && C < A + B) {
          console.log("Os lados formam um triângulo.");

          if (A === B && B === C) {
            console.log("Tipo: Triângulo Equilátero");
          } else if (A === B || A === C || B === C) {
            console.log("Tipo: Triângulo Isósceles");
          } else {
            console.log("Tipo: Triângulo Escaleno");
          }
        } else {
          console.log("Os lados NÃO formam um triângulo.");
        }
      }

      rl.close();
    });
  });
});
