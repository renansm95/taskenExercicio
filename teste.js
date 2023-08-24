const imprimeLinhas = (numero) => {
  if (typeof numero !== "number" || numero <= 0) {
    console.log("O argumento precisa ser do tipo numérico e maior que 0.");
  }

  for (let i = numero; i >= 1; i--) {
    let linha = "";
    for (let j = i; j >= 1; j--) {
      linha += j * j + " ";
    }
    console.log(linha);
  }
};

imprimeLinhas(10);
