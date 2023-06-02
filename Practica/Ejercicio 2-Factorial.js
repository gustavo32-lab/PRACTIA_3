function calcularFactorial(numero) {
  let factorial = 1;

  // Verificar si el número es 0
  if (numero === 0) {
    return factorial;
  }

  // Calcular el factorial
  for (let i = 1; i <= numero; i++) {
    factorial *= i;
  }

  return factorial;
}

// Ejemplo de uso
const numero = 5;
const resultado = calcularFactorial(numero);
console.log("Resultado =", resultado);