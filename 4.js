const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function mostrarMenu() {
  console.log("\n=== MENU ===");
  console.log("1. Verificar se um número é par ou ímpar");
  console.log("2. Classificar idade");
  console.log("3. Sair");

  rl.question("Escolha uma opção: ", function (opcao) {
    switch (opcao) {
      case "1":
        rl.question("Digite um número inteiro: ", function (num) {
          const numero = parseInt(num);
          if (isNaN(numero)) {
            console.log("Entrada inválida.");
          } else {
            if (numero % 2 === 0) {
              console.log(`${numero} é par.`);
            } else {
              console.log(`${numero} é ímpar.`);
            }
          }
          mostrarMenu();
        });
        break;

      case "2":
        rl.question("Digite a idade: ", function (idadeInput) {
          const idade = parseInt(idadeInput);
          if (isNaN(idade) || idade < 0) {
            console.log("Idade inválida.");
          } else {
            if (idade <= 12) {
              console.log("Criança");
            } else if (idade <= 17) {
              console.log("Adolescente");
            } else if (idade <= 59) {
              console.log("Adulto");
            } else {
              console.log("Idoso");
            }
          }
          mostrarMenu(); // 
        });
        break;

      case "3":
        console.log("Saindo do programa...");
        rl.close();
        break;

      default:
        console.log("Opção inválida.");
        mostrarMenu(); 
    }
  });
}
mostrarMenu();
