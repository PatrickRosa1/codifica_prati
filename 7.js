const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Quantas maçãs foram compradas? ", function (input) {
  const quantidade = parseInt(input);

  if (isNaN(quantidade) || quantidade <= 0) {
    console.log("Quantidade inválida. Digite um número inteiro positivo.");
  } else {
    const preco = quantidade < 12 ? 0.30 : 0.25;
    const total = quantidade * preco;

    console.log(`Preço por maçã: R$ ${preco.toFixed(2)}`);
    console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);
  }

  rl.close();
});
