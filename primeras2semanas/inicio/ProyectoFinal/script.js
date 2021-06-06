function calcularIMC() {
    var peso = prompt('Ingrese su peso: '); 
    var altura = prompt('Ingrese su altura: ');
    var imc = peso/(altura*altura);
    if (imc<18.5) {
        alert("IMC = " + imc + ". Peso insuficiente");
    } else if (imc>=18.5 && imc<=24.9) {
        alert("IMC = " + imc + ". Peso Normal");
    } else if (imc>=25 && imc<=26.9) {
        alert("IMC = " + imc + ". Sobrepeso grado I");
    } else if (imc>=27 && imc<=29.9) {
        alert("IMC = " + imc + ". Sobrepeso grado II");
    } else if (imc>=30 && imc<=34.9) {
        alert("IMC = " + imc + ". Obesidad grado I");
    } else if (imc>=35 && imc<=39.9) {
        alert("IMC = " + imc + ". Obesidad grado II");
    } else if (imc>=40 && imc<=49.9) {
        alert("IMC = " + imc + ". Obesidad Morbida");
    } else if (imc>49.9) {
        alert("IMC = " + imc + ". Obesidad Extrema");
    } else {
        alert("Has introducido mal tus datos, vuelvelos a introducir");
    }
    return imc;
}

