var persona = {
        "nombre": "Hijo", 
        "apellidos": ["ApellidoHijo1", "ApellidoHijo2"], 
        "edad": 38, 
        "padres": { 
            padre : {
                "nombre": "Padre", 
                "apellidos": ["ApellidoPadre1", "ApellidoPadre2"], 
                "edad": 72, 
                "padres": {
                    abuelo : {
                        "nombre": "AbueloPadre", 
                        "apellidos": ["ApellidoAbuelo1", "ApellidoAbuelo2"], 
                        "edad": 98,
                        "colorPelo": "negro", 
                        "dinero": 500000, 
                        "coches": {
                                coche1: {
                                    "marca": "marca1",
                                    "numerosAsientos": 5,
                                    "esElectrico": false
                                }
                            }
                        },
                    abuela : {
                        "nombre": "AbuelaPadre",
                        "apellidos": ["ApellidoAbuelaPadre1", "ApellidoAbuelaPadre2"],
                        "edad": 94,
                        "colorPelo": "negro", 
                        "dinero": 500000, 
                        "coches": {
                                coche1: {
                                    "marca": "marca1",
                                    "numerosAsientos": 5,
                                    "esElectrico": false
                                    }
                                }
                            }
                    },
                "colorPelo": "negro", 
                "dinero": 5000000, 
                "coches": {
                        coche1: {
                            "marca": "marca1", 
                            "numerosAsientos": 5, 
                            "esElectrico": false
                        }
                    }
            },
            madre : {
                "nombre": "Madre", 
                "apellidos": ["ApellidoMadre1", "ApellidoMadre2"], 
                "edad": 69, 
                "padres": {
                    abuelo : {
                        "nombre": "AbueloMadre", 
                        "apellidos": ["ApellidoAbueloMadre1", "ApellidoAbueloMadre2"], 
                        "edad": 91,
                        "colorPelo": "blanco",
                        "dinero": 45000,
                        "coches": {
                                coche1: {
                                    "marca": "marca0",
                                    "numerosAsientos": 0,
                                    "esElectrico": true
                                    }
                            }
                        },
                    abuela : {
                        "nombre": "AbuelaPadre",
                        "apellidos": ["ApellidoAbuelaMadre", "ApellidoAbuelaMadre"],
                        "edad": 96,
                        "colorPelo": "negro", 
                        "dinero": 5000000, 
                        "coches": {
                                coche1: {
                                    "marca": "marca1",
                                    "numerosAsientos": 5,
                                    "esElectrico": true
                                    },
                                coche2: {
                                    "marca": "marca5",
                                    "numerosAsientos": 4,
                                    "esElectrico": false
                                    }                           
                                }
                            }
                        },
                "colorPelo": "castaño", 
                "dinero": 500000, 
                "coches": {
                        coche1: {
                            "marca": "marca2",
                            "numerosAsientos": 4,
                            "esElectrico": false
                            },
                        coche2: {
                            "marca": "marca1",
                            "numerosAsientos": 3,
                            "esElectrico": true
                            }     
                        }
                    }  
                },
        "colorPelo": "negro",
        "dinero": 1000000,
        "coches": {
            coche1: {
                "marca": "marca2",
                "numerosAsientos": 3,
                "esElectrico": true
                },
             coche2: {
                "marca": "marca1",
                "numerosAsientos": 3,
                "esElectrico": true
                }
            }
        }

// PRIMER PUNTO DE LOS RETOS OPCIONALES:
/*
if ((persona.padres.madre.padres.abuela.colorPelo != "castaño") && (Object.keys(persona.padres.padre.padres.abuelo.coches).length ==1)) {
    if (persona.colorPelo == "verde") {
        persona.colorPelo = "azul";
    } else {
        persona.colorPelo = "verde";
    }
}
*/
// SEGUNDO PUNTO DE LOS RETOS OPCIONALES:
/*
if ((persona.padres.padre.dinero + persona.padres.madre.dinero + persona.padres.padre.padres.abuelo.dinero) > 100000) {
    persona.coches.cocheNuevo1 = {"marca": "Ferari", "numerosAsientos": 4, "esElectrico": false};
} else if (((persona.padres.padre.dinero + persona.padres.madre.dinero + persona.padres.padre.padres.abuelo.dinero) > 35000) && ((persona.padres.padre.dinero + persona.padres.madre.dinero + persona.padres.padre.padres.abuelo.dinero) < 100000)) {
    persona.coches.coche.Nuevo2 = {"marca": "Tesla", "numerosAsientos": 6, "esElectrico": true};
} else if (((persona.padres.padre.dinero + persona.padres.madre.dinero + persona.padres.padre.padres.abuelo.dinero) < 35000)) {
    persona.coches.cocheNuevo3 = {"marca": "Peugeot", "numerosAsientos": 4, "esElectrico": false};
}
*/
// TERCER PUNTO DE LOS RETOS OPCIONALES:
/*
if (((Object.keys(persona.padres.padre.coches).length) > 2) || ((Object.keys(persona.padres.madre.coches).length) > 2)) {
    if (((Object.keys(persona.padres.padre.coches).length) > 2)) {
        persona.coches.choches3 = persona.padres.padre.coches.pop();
    } else if (((Object.keys(persona.padres.madre.coches).length) > 2)) {
        persona.coches.coches4 = persona.padres.madre.coches.pop();
    }
}
*/
// CUARTO PUNTO DE LOS RETOS OPCIONALES:
/*
if (persona.padres.madre.coches.coche1.esElectrico == true) {
    persona.padres.madre.padres.abuela.dinero += 5000;
    persona.padres.madre.padres.abuelo.dinero += 5000;
}
*/
// QUINTO PUNTO DE LOS RETOS OPCIONALES:
/*
if ((persona.padres.padre.padres.abuela.coches.coche1.numerosAsientos) > (persona.padres.madre.padres.abuela.coches.coche2.numerosAsientos)) {
    persona.padres.madre.padres.abuela.coches.cocheNuevo = {"marca": "MarcaNueva", "numerosAsientos": 4, "esElectrico": false};
}
*/
// SEXTO PUNTO DE LOS RETOS OPCIONALES:
/*
persona.nacimiento = new Date(1982,9,28);
persona.padres.padre.nacimiento = new Date(1949,3,16);
persona.padres.madre.nacimiento = new Date(1952,1,12);
persona.padres.padre.padres.abuelo.nacimiento = new Date(1923,1,1);
persona.padres.padre.padres.abuela.nacimiento = new Date(1927,1,1);
persona.padres.madre.padres.abuelo.nacimiento = new Date(1930,1,1);
persona.padres.madre.padres.abuela.nacimiento = new Date(1925,1,1);

if (persona.padres.padre.padres.abuelo.edad > persona.padres.madre.padres.abuelo.edad) {
    if (persona.padres.padre.padres.abuelo.nacimiento < persona.padres.madre.padres.abuelo.nacimiento) {
        persona.padres.padre.padres.abuelo.nombre = "El abuelo más anciando de la familia.";
    }
}
console.log(persona.padres.padre.padres.abuelo);
*/
// SÉPTIMO PUNTO DE LOS RETOS OPCIONALES:

if ((persona.padres.padre.coches.coche1.esElectrico == true) || (persona.padres.madre.coches.coche1.esElectrico == true) || (persona.padres.madre.coches.coche2.esElectrico == true) || (persona.padres.padre.padres.abuelo.coches.coche1.esElectrico == true) || (persona.padres.padre.padres.abuela.coches.coche1.esElectrico == true) || (persona.padres.madre.padres.abuelo.coches.esElectrico == true) || (persona.padres.madre.padres.abuela.coches.coche1 == true)) {
    persona.nombre = "Thomas Alva Edison";
} else {
    var newMatriz = [];
    if (persona.padres.padre.coches.coche1.esElectrico == true) {
        newMatriz.push(persona.padres.padre.nombre);
    }
    if (persona.padres.madre.coches.coche1.esElectrico == true) {
        newMatriz.push(persona.padres.madre.nombre);
    }
    if (persona.padres.madre.coches.coche2.esElectrico == true) {
        newMatriz.push(persona.padres.madre.nombre);
    }
    if (persona.padres.padre.padres.abuelo.coches.coche1.esElectrico == true) {
        newMatriz.push(persona.padres.padre.padres.abuelo.nombre);
    }
    if (persona.padres.padre.padres.abuela.coches.coche1.esElectrico == true) {
        newMatriz.push(persona.padres.padre.padres.abuela.nombre);
    }
    if (persona.padres.madre.padres.abuelo.coches.coche1.esElectrico == true) {
        newMatriz.push(persona.padres.madre.padres.abuelo.nombre);
    }
    if (persona.padres.madre.padres.abuela.coches.coche1.esElectrico == true) {
        newMatriz.push(persona.padres.madre.padres.abuela.nombre);
    }
}

console.log(newMatriz);

// OCTAVO PUNTO DE LOS RETOS OPCIONALES:

// if (persona.padres.padre.coches.coche1.esElectrico == true) {
//     persona.coches.cocheNuevoPadre = persona.padres.padre.coches.coche1;
// }
// if (persona.padres.madre.coches.coche1.esElectrico == true) {
//     persona.coches.cocheNuevo1Madre = persona.padres.madre.coches.coche1;
// }
// if (persona.padres.madre.coches.coche2.esElectrico == true) {
//     persona.coches.cocheNuevo2Madre = persona.padres.madre.coches.coche2;
// }
// if (persona.padres.padre.padres.abuelo.coches.coche1.esElectrico == true) {
//     persona.coches.cocheNuevoPadreAbuelo = persona.padres.padre.padres.abuelo.coches.coche1;
// }
// if (persona.padres.padre.padres.abuela.coches.coche1.esElectrico == true) {
//     persona.coches.cocheNuevoPadreAbuela = persona.padres.padre.padres.abuela.coches.coche1;
// }
// if (persona.padres.madre.padres.abuelo.coches.coche1.esElectrico == true) {
//     persona.coches.cocheNuevoMadreAbuelo = persona.padres.padre.padres.abuelo.coches.coche1;
// }
// if (persona.padres.madre.padres.abuela.coches.coche1.esElectrico == true) {
//     persona.coches.cocheNuevoMadreAbuela = persona.padres.madre.padres.abuela.coches.coche1;
// }

// console.log(persona);

