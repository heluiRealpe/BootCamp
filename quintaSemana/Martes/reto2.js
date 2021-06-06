function cuadrado(x){
    return x*x;
}
function aleatorio(x){
    return Math.round(Math.random()*x);
}
function compose(a, b){
    return function (x){
        return a(b(x));
    };
}
let resultado = compose(cuadrado, aleatorio);
console.log(resultado(5));