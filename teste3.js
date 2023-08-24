const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let totalNumeros = 0;
let maiorNumero = -Infinity;
let soma = 0;
let menorImpar = Infinity;
const ocorrencias = {};

const atualizarOcorrencias = (numero) => {
  if (!ocorrencias[numero]) {
    ocorrencias[numero] = 1;
  } else {
    ocorrencias[numero]++;
  }
};

const imprimirRelatorio = () => {
  console.log(`a) Quantidade de números lidos: ${totalNumeros}`);
  console.log(`b) Maior número lido: ${maiorNumero}`);
  console.log(`c) Média dos números lidos: ${soma / totalNumeros}`);

  if (menorImpar !== Infinity) {
    console.log(`d) Menor número ímpar lido: ${menorImpar}`);
  } else {
    console.log("d) Nenhum número ímpar foi digitado.");
  }

  for (const numero in ocorrencias) {
    console.log(`e) O número ${numero} ocorreu ${ocorrencias[numero]} vezes.`);
  }

  rl.close();
};

const processarEntradaNumero = (entrada) => {
  const numero = parseInt(entrada);

  if (!isNaN(numero)) {
    if (numero === 0) {
      imprimirRelatorio();
    } else {
      totalNumeros++;
      maiorNumero = Math.max(maiorNumero, numero);
      soma += numero;

      if (numero % 2 === 1) {
        menorImpar = Math.min(menorImpar, numero);
      }

      atualizarOcorrencias(numero);

      rl.question(
        "Digite outro número ou 0 para encerrar: ",
        processarEntradaNumero
      );
    }
  } else {
    console.log("O argumento precisa ser do tipo numérico.");
    rl.question(
      "Digite outro número ou 0 para encerrar: ",
      processarEntradaNumero
    );
  }
};

rl.question("Digite um número ou 0 para encerrar: ", processarEntradaNumero);
