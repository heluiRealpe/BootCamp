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
                    "coches": [
                             {
                                "marca": "marca1",
                                "numerosAsientos": 5,
                                "esElectrico": false
                            },
                             {
                                "marca": "marca2",
                                "numerosAsientos": 2,
                                "esElectrico": true
                                }
                            ]
                    },
                abuela : {
                    "nombre": "AbuelaPadre",
                    "apellidos": ["ApellidoAbuelaPadre1", "ApellidoAbuelaPadre2"],
                    "edad": 94,
                    "colorPelo": "negro", 
                    "dinero": 500000, 
                    "coches": [
                            {
                                "marca": "marca3",
                                "numerosAsientos": 5,
                                "esElectrico": false
                                },
                            {
                                "marca": "marca4",
                                "numerosAsientos": 0,
                                "esElectrico": true
                                }
                            ]
                        }
                },
            "colorPelo": "negro", 
            "dinero": 5000000, 
            "coches": [
                    {
                        "marca": "marca5", 
                        "numerosAsientos": 5, 
                        "esElectrico": false
                    },
                    {
                        "marca": "marca6",
                        "numerosAsientos": 0,
                        "esElectrico": true
                        }
                    ]
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
                    "coches": [
                            {
                                "marca": "marca7",
                                "numerosAsientos": 4,
                                "esElectrico": false
                                },
                            {
                                "marca": "marca8",
                                "numerosAsientos": 2,
                                "esElectrico": true
                                }
                            ]
                    },
                abuela : {
                    "nombre": "AbuelaPadre",
                    "apellidos": ["ApellidoAbuelaMadre", "ApellidoAbuelaMadre"],
                    "edad": 96,
                    "colorPelo": "negro", 
                    "dinero": 5000000, 
                    "coches": [
                            {
                                "marca": "marca9",
                                "numerosAsientos": 5,
                                "esElectrico": true
                                },
                            {
                                "marca": "marca10",
                                "numerosAsientos": 4,
                                "esElectrico": false
                                }                           
                        ]
                        }
                    },
            "colorPelo": "castaño", 
            "dinero": 500000, 
            "coches": [
                    {
                        "marca": "marca11",
                        "numerosAsientos": 4,
                        "esElectrico": false
                        },
                    {
                        "marca": "marca12",
                        "numerosAsientos": 3,
                        "esElectrico": true
                        }     
                    ]
                }  
            },
    "colorPelo": "negro",
    "dinero": 1000000,
    "coches": [
        {
            "marca": "marca13",
            "numerosAsientos": 3,
            "esElectrico": false
            },
        {
            "marca": "marca14",
            "numerosAsientos": 3,
            "esElectrico": true
            }
        ]
    };

// CUARTO PUNTO DE LOS RETOS OPCIONALES:

//console.log(persona.padres.madre.coches[0]);

// console.log(persona.padres.madre.padres.abuela.dinero);
// for (var i = 0; i < persona.padres.madre.padres.abuelo.coches.length; i++) {
//     if (persona.padres.madre.padres.abuelo.coches[i].esElectrico) {
//         persona.padres.madre.padres.abuela.dinero += 5000;
//         persona.padres.madre.padres.abuelo.dinero += 5000;
//     }
// }
// console.log(persona.padres.madre.padres.abuela.dinero);


// OCTAVO PUNTO DE LOS RETOS OPCIONALES:

// for (var i in persona.padres) {
//     for (var j in persona.padres[i].coches) {
//         if (persona.padres[i].coches[j].esElectrico) {
//             persona.coches.push(persona.padres[i].coches[j]);
//         }
//     }
//     for (var k in persona.padres[i].padres) {
//         for (var l in persona.padres[i].padres[k].coches) {
//             if (persona.padres[i].padres[k].coches[l].esElectrico) {
//             persona.coches.push(persona.padres[i].padres[k].coches[l]);
//             }
//         }
//     }
// }
// console.log(persona.coches);


// SÉPTIMO PUNTO DE LOS RETOS OPCIONALES:

var sinElectrico = [];
for (var i in persona.padres.madre.coches) {
    if (persona.padres.madre.coches[i].esElectrico) {
        console.log(persona.padres.madre.coches[i]);
    } else {
        sinElectrico.push(persona.padres.madre.nombre);
    }
}

console.log(sinElectrico);

    


//         for (var j in persona.padres.madre.coches) {
//             console.log(persona.padres.madre.coches[j].esElectrico) {
//             if (persona.padres.madre.coches[j].esElectrico) {
//                 for (var k in persona.padres.padre.padres.abuelo)

//             if (persona.padres.padre.padres.abuelo.coches[i]) {
//                 if (persona.padres.padre.padres.abuela.coches[i]) {
//                     if (persona.padres.madre.padres.abuelo.coches[i]) {
//                         if (persona.padres.madre.padres.abuela.coches[i]) {
//                             persona.nombre = "Thomas Alva Edison";
//                         }
//                     }
//                 }
//             }
//         }
//     }
// }

        // while ((persona.padres[i].coches[j].esElectrico == true) && (electrico != 0)) {
        //     console.log(persona.padres[i].coches[j]);
        //     electrico++;
        // }
    //     for (var k in persona.padres[i].padres) {
    //         for (var l in persona.padres[i].padres[k].coches) {
    //             for (var m in persona.padres[i].padres[k].padres) {
    //                 for (var n in persona.padres[i].padres[k].padres[m].coches)
    //                 if ((persona.padres[i].coches[j].esElectrico && persona.padres[i].padres[k].coches[l].esElectrico && persona.padres[i].padres[k].padres[m].coches[n].esElectrico) == true) {
    //                     persona.nombre = "Thomas Alva Edison";
    //                 }
    //             }
    //         }
    //     }
  

//console.log(persona.nombre);
