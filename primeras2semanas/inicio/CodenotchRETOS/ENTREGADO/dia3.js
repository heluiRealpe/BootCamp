// RETO 1:
/*
var semaforo = "verde";

if (semaforo == "verde") {
    console.log("No cruzar el paso de cebra.");
} else {
    console.log("Puede cruzar el paso de cebra.");
}
*/

/****************************************************/

// RETO 2:
/*
console.log("¿Con que ingrediente principal quieres hacer tu receta de cocina?");
console.log("¿avena?, ¿pollo?, ¿lentejas, ¿huevos?, ¿carne?, ¿garbanzos?, ¿platano?, ¿arroz?, ¿pasta?, ¿tomate?");
var ingrediente = "pollo";

switch (ingrediente) {
    case 'avena': {
        console.log('Cookies de avena, plátano y almendras: son una opción muy fácil, con pocos ingredientes y que podemos tener disponible siempre en casa para reemplazar galletas comerciales que a diferencia de estas, poseen muchos azúcares libres.');
        break;
    }
    case 'pollo': {
        console.log('El pollo al horno con patatas es una receta muy completa que gustará tanto a niños como los más mayores de la casa. Es muy fácil de hacer y no requiere esfuerzo en la cocina.');
        break;
    }
    case 'lentejas': {
        console.log('Las lentejas con chorizo son un clásico de la gastronomía española que apetece mucho cuando las temperaturas bajan. Y tienen una ventaja, las lentejas las podemos preparar con antelación y conservarlas en la nevera un par de días, lo que nos facilita comer bien a pesar del ajetreo diario.');
        break;
    }
    case 'huevos': {
        console.log('Aunque las recetas con huevos son, en general, muy fáciles y agradecidas, la de huevos al plato es de las más sencillas y ricas. La única dificultad que tiene prepararlos el el cogerle el puntillo para que nos queden cuajados a nuestro gusto, pero con estar vigilando el horno nos aseguramos de que van a quedar en su justo punto.');
        break;
    }
    case 'carne': {
        console.log('Comenzamos destacando tres tradicionales recetas de toda la vida que he comido desde mi infancia: el «Lomo en leche»  un clásico que resulta muy útil ya que con los restos se preparan unos bocadillos extraordinarios; la «Carne mechada con salsa de chalotas»   socorrida donde las haya  y perfecta  para grandes comidas con muchos invitados ya que es deliciosa, muy sencilla de preparar y baratita, se puede preparar con anterioridad y el resultado siempre es del «10».');
        break;
    }
    case '¿platano': {
        console.log(' bla bla de platano blablado');
        break;
    }
    case '¿arroz': {
        console.log(' bla bla de arroz blablado');
        break;
    }
    case '¿pasta': {
        console.log(' bla bla de pasta blablado');
        break;
    }
    case '¿tomate': {
        console.log(' bla bla de tomate blablado');
        break;
    }
    default: {
        console.log('Imposible proponer receta');
    }
}
*/

/****************************************************/

//RETO 3
/*
var platos = 2;
var dj = true;
var barraLibre = 1;
var coctel = true;

if ((platos == 3 && dj == true && barraLibre == 2 && coctel == true) || (platos == 2 && coctel == true && barraLibre == 1)) {
    console.log('Tenemos una propuesta para lo que usted busca.');
} else {
    console.log('No disponemos de una propuesta para lo que usted busca.');
}
*/

/****************************************************/

//RETO 4:

var persona1 = {
    "nombre": "Héctor",
    "apellido": "Realpe",
    "anyoNacimiento": new Date(1982,9,28),
    "aficiones": ["programacion", "bicicleta", "bicipolo"],
    "dni": {"anyoExpedicion": new Date(2014,1,1), "lugarNacimiento": "Maracay/Venezuela"},
    "colorPelo": "castaño",
};

var persona2 = {
    "nombre": "Nombre2",
    "apellido": "Apellido2",
    "anyoNacimiento": new Date(1991,9,28),
    "aficiones": ["comer", "dormir", "correr"],
    "dni": {"anyoExpedicion": new Date(2010,1,1), "lugarNacimiento": "Pamplona"},
    "colorPelo": "negro",
};

var persona3 = {
    "nombre": "Nombre3",
    "apellido": "Apellido3",
    "anyoNacimiento": new Date(2009,9,28),
    "aficiones": ["correr", "gimnasio", "dormir"],
    "dni": {"anyoExpedicion": new Date(2010,1,1), "lugarNacimiento": "Calahorra"},
    "colorPelo": "castaño",
};

var persona4 = {
    "nombre": "Nombre4",
    "apellido": "Apellido4",
    "anyoNacimiento": new Date(1986,9,28),
    "aficiones": ["comer", "bicicleta", "bicipolo"],
    "dni": {"anyoExpedicion": new Date(2010,1,1), "lugarNacimiento": "Madrid"},
    "colorPelo": "negro",
};

console.log("A continuación los nombres de las personas con el pelo color castaño: ");

if (persona1.colorPelo == "castaño") {
    console.log(persona1.nombre);
} 
if (persona2.colorPelo == "castaño") {
    console.log(persona2.nombre);
} 
if (persona3.colorPelo == "castaño") {
    console.log(persona3.nombre);
} 
if (persona4.colorPelo == "castaño") {
    console.log(persona4.nombre);
}
console.log("A continuación la edad de todos los que son mayores de 30: ");

if ((2021 - persona1.anyoNacimiento.getFullYear()) > 30 ) {
    var edad = 2021 - persona1.anyoNacimiento.getFullYear();
    console.log(persona1.nombre + " y tiene " + edad + " años.");
} 
if ((2021 - persona2.anyoNacimiento.getFullYear()) > 30 ) {
    var edad = 2021 - persona2.anyoNacimiento.getFullYear();
    console.log(persona2.nombre + " y tiene " + edad + " años.");
} 
if ((2021 - persona3.anyoNacimiento.getFullYear()) > 30 ) {
    var edad = 2021 - persona3.anyoNacimiento.getFullYear();
    console.log(persona3.nombre + " y tiene " + edad + " años.");
} 
if ((2021 - persona4.anyoNacimiento.getFullYear()) > 30 ) {
    var edad = 2021 - persona4.anyoNacimiento.getFullYear();
    console.log(persona4.nombre + " y tiene " + edad + " años.");
}

console.log("A continación el lugar de nacimiento de todos aquellos que tienen el pelo negro y el dni caducado, o son menores de edad y su afición es comer o dormir: ");

console.log(persona2.aficiones.indexOf("correr"));

/*
if (((persona1.colorPelo == "negro") && ((2021 - persona1.dni.anyoExpedicion.getFullYear()) > 10)) || ((2021 - persona1.anyoNacimiento.getFullYear() < 18) && ((persona1.aficiones[0] == "comer") || (persona1.aficiones[0] == "domir") || ((persona1.aficiones[1] == "comer") || (persona1.aficiones[1] == "domir")) || (persona1.aficiones[2] == "comer") || (persona1.aficiones[2] == "domir")))) {
    console.log(persona1.dni.lugarNacimiento);
}
if (((persona2.colorPelo == "negro") && ((2021 - persona2.dni.anyoExpedicion.getFullYear()) > 10)) || ((2021 - persona2.anyoNacimiento.getFullYear() < 18) && ((persona2.aficiones[0] == "comer") || (persona2.aficiones[0] == "domir") || ((persona2.aficiones[1] == "comer") || (persona2.aficiones[1] == "domir")) || (persona2.aficiones[2] == "comer") || (persona2.aficiones[2] == "domir")))) {
    console.log(persona2.dni.lugarNacimiento);
} 
if (((persona3.colorPelo == "negro") && ((2021 - persona3.dni.anyoExpedicion.getFullYear()) > 10)) || ((2021 - persona3.anyoNacimiento.getFullYear() < 18) && ((persona3.aficiones[0] == "comer") || (persona3.aficiones[0] == "domir") || ((persona3.aficiones[1] == "comer") || (persona3.aficiones[1] == "domir")) || (persona3.aficiones[2] == "comer") || (persona3.aficiones[2] == "domir")))) {
    console.log(persona3.dni.lugarNacimiento);
} 
if (((persona4.colorPelo == "negro") && ((2021 - persona4.dni.anyoExpedicion.getFullYear()) > 10)) || ((2021 - persona4.anyoNacimiento.getFullYear() < 18) && ((persona4.aficiones[0] == "comer") || (persona4.aficiones[0] == "domir") || ((persona4.aficiones[1] == "comer") || (persona4.aficiones[1] == "domir")) || (persona4.aficiones[2] == "comer") || (persona4.aficiones[2] == "domir")))) {
    console.log(persona4.dni.lugarNacimiento);
}*/


