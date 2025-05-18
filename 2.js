const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Digite a idade: ", function(input) {
  const idade = parseInt(input);

  if (isNaN(idade) || idade < 0) {
    console.log("Por favor, digite uma idade válida.");
  } else {
    if (idade <= 12) {
      console.log("Categoria: Criança");
    } else if (idade <= 17) {
      console.log("Categoria: Adolescente");
    } else if (idade <= 59) {
      console.log("Categoria: Adulto");
    } else {
      console.log("Categoria: Idoso");
    }
  }

  rl.close();
});
