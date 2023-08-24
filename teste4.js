const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const contaVogal = (str) => {
  return str.match(/[aeiou]/gi).length;
};

const contaConsoante = (str) => {
  return str.match(/[bcdfghjklmnpqrstvwxyz]/gi).length;
};

rl.question("Digite o nome do arquivo (.txt): ", (nomeArquivo) => {
  fs.readFile(nomeArquivo, "utf8", (erro, dados) => {
    if (erro) {
      console.error("Erro ao ler o arquivo.");
      rl.close();
      return;
    }

    const linhas = dados.split("\n");
    let maxVogais = 0;
    let linhaMaxVogais = "";
    let maxConsoantes = 0;
    let linhaMaxConsoantes = "";

    linhas.forEach((linha, indice) => {
      const quantidadeVogais = contaVogal(linha);
      const quantidadeConsoantes = contaConsoante(linha);

      if (quantidadeVogais > maxVogais) {
        maxVogais = quantidadeVogais;
        linhaMaxVogais = indice + 1;
      }

      if (quantidadeConsoantes > maxConsoantes) {
        maxConsoantes = quantidadeConsoantes;
        linhaMaxConsoantes = indice + 1;
      }
    });

    console.log(`Linha com mais vogais: ${linhaMaxVogais}`);
    console.log(`Linha com mais consoantes: ${linhaMaxConsoantes}`);

    rl.close();
  });
});
