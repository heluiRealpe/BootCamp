// RETO 1:

function calculadora(operacion, a, b) {
    switch (operacion) {
        case "sum":
            resultado = a + b;
            break;
        case "subs":
            resultado = a - b;
            break;
        case "mult":
            resultado = a * b;
            break;
        case "div":
            resultado = a / b;
            break;
        default:
            console.log("Los datos son incorrectos");
    }
    return resultado;
}

console.log(calculadora("mult", 2, 5));



