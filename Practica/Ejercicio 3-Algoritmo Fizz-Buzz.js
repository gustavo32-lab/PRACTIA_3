var message = ""
for (numero = 1; numero <= 100; numero++) {
    console.log("Numero: " + numero)
    if (numero % 3 == 0) message += "Fizz"
    if (numero % 5 == 0) message += "Bizz"
    if (message) {
        console.log(message);
        message = ""
    }
}