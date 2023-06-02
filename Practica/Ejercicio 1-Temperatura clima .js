function obtenerClima(temperatura) {
    if (temperatura >= -10 && temperatura <= 15) {
      return "Clima Frío";
    } else if (temperatura >= 16 && temperatura <= 25) {
      return "Clima Templado";
    } else if (temperatura >= 26 && temperatura <= 40) {
      return "Clima Calor";
    } else {
      return "Temperatura fuera de rango";
    }
  }
  
  // Ejemplo de uso
  var temperatura = 20;
  var clima = obtenerClima(temperatura);
  console.log("Temperatura =", temperatura);
  console.log("Resultado =", clima);
  