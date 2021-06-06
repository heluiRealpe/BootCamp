function alerta (numeroLink){

    alert(`Has hecho click en el link ${numeroLink}`)
}

function consola (){

    console.log(document.getElementById("parrafo1").innerHTML);
}


function imprimePantalla (numero, frase){

    document.getElementById("parrafo1").innerHTML = `${numero}. Has elegido la ${frase}`

}


function recogeDatos (){

    let email = document.getElementById("email").value
    let pass = document.getElementById("pass").value

    // document.getElementById("parrafo1").innerHTML = `El email del usuario es ${email} y la contraseña es ${pass}`


    document.getElementById("title").innerHTML = email
}


function cambiaEstilos (){

    document.getElementById("head").style.backgroundColor = "red"
}

function estiloDinamico (){

    if (document.getElementById("head").style.backgroundColor == "rgb(75, 75, 141)"){

        document.getElementById("head").style.backgroundColor = "red"

    } else {
        document.getElementById("head").style.backgroundColor = "rgb(75, 75, 141)"
    }
}

function introduceEstructura (){

    let bloque = ""

    for ( let i = 0; i < 4; i++){

        bloque += 
        `<div class="col card">
            <img onclick="imprimePantalla(${i}, 'Tercera imagen')" src="https://astelus.com/wp-content/viajes/Lago-Moraine-Parque-Nacional-Banff-Alberta-Canada.jpg" alt="">
            <h3 onclick="consola()" id="title">Paisaje Bonito</h3>
            <p onclick="cambiaEstilos()">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, eum quas. Iusto aliquid quas quos corporis architecto cum hic, soluta dignissimos quidem, ad pariatur vero perspiciatis est suscipit adipisci odit.</p>
        </div>`
    }

    document.getElementById("divBloque").innerHTML = bloque


}