const parametro = (string) => {
  let resultado = "";
  const arr = new Array(string);
  for (let palavra of arr) {
    let letra = palavra[0];
    let contador = 0;
    for (let i = 0; i <= palavra.length; i++) {
      if (palavra[i] === letra) {
        contador++;
      } else {
        if (contador > 1) {
          resultado += letra + contador;
        } else {
          resultado += letra;
        }

        letra = palavra[i];
        i--;
        contador = 0;
      }
    }
  }
  return resultado;
};
console.log(parametro("jjjjooaoo"));
