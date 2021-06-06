var Professional = /** @class */ (function () {
    function Professional(name, age, genre, weight, height, hairColor, eyeColor, race, isRetired, nationality, oscarsNumber, profession, foto) {
        this.name = name;
        this.age = age;
        this.genre = genre;
        this.weight = weight;
        this.height = height;
        this.hairColor = hairColor;
        this.eyeColor = eyeColor;
        this.race = race;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
        this.foto = foto;
    }
    Professional.prototype.imprimirValores = function () {
        var properties = "";
        for (var property in this) {
            if (this[property].toString().search(/function/i)) {
                properties += property + " - " + this[property] + "\n";
            }
        }
        console.log(properties);
    };
    return Professional;
}());
var Movie = /** @class */ (function () {
    function Movie(title, releaseYear, nationality, genre, foto) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.nationality = nationality;
        this.genre = genre;
        this.foto = foto;
    }
    Movie.prototype.getTitle = function () {
        return this.title;
    };
    Movie.prototype.setTitle = function (newTitle) {
        this.title = newTitle;
    };
    Movie.prototype.getReleaseYear = function () {
        return this.releaseYear;
    };
    Movie.prototype.setReleaseYear = function (newReleaseYear) {
        this.releaseYear = newReleaseYear;
    };
    Movie.prototype.getActors = function () {
        return this.actors;
    };
    Movie.prototype.setActors = function (newActors) {
        this.actors = newActors;
    };
    Movie.prototype.getNationality = function () {
        return this.nationality;
    };
    Movie.prototype.setNationality = function (newNationality) {
        this.nationality = newNationality;
    };
    Movie.prototype.getDirector = function () {
        return this.director;
    };
    Movie.prototype.setDirector = function (newDirector) {
        this.director = newDirector;
    };
    Movie.prototype.getWriter = function () {
        return this.writer;
    };
    Movie.prototype.setWriter = function (newWriter) {
        this.writer = newWriter;
    };
    Movie.prototype.getLanguage = function () {
        return this.language;
    };
    Movie.prototype.setLanguage = function (newLanguage) {
        this.language = newLanguage;
    };
    Movie.prototype.getPlatform = function () {
        return this.platform;
    };
    Movie.prototype.setPlatform = function (newPlatform) {
        this.platform = newPlatform;
    };
    Movie.prototype.getIsMCU = function () {
        return this.isMCU;
    };
    Movie.prototype.setIsMCU = function (newIsMCU) {
        this.isMCU = newIsMCU;
    };
    Movie.prototype.getMainCharacterName = function () {
        return this.mainCharacterName;
    };
    Movie.prototype.setMainCharacterName = function (newMainCharacterName) {
        this.mainCharacterName = newMainCharacterName;
    };
    Movie.prototype.getProducer = function () {
        return this.producer;
    };
    Movie.prototype.setProducer = function (newProducer) {
        this.producer = newProducer;
    };
    Movie.prototype.getDistributor = function () {
        return this.distributor;
    };
    Movie.prototype.setDistributor = function (newDistributor) {
        this.distributor = newDistributor;
    };
    Movie.prototype.getGenre = function () {
        return this.genre;
    };
    Movie.prototype.setGenre = function (newGenre) {
        this.genre = newGenre;
    };
    Movie.prototype.getFoto = function () {
        return this.foto;
    };
    Movie.prototype.setFoto = function (foto) {
        this.foto = foto;
    };
    //MÉTODO PARA MOSTRAR LOS DATOS DE LAS PELÍCULAS
    Movie.prototype.showProperties = function () {
        var properties = "";
        for (var property in this) {
            if (this[property].toString().search(/function/i)) {
                if (property == "actors") {
                    for (var i = 0; i < this.actors.length; i++) {
                        properties += "Actor:\n";
                        for (var propiedad in this.actors[i]) {
                            properties += propiedad + " - " + this.actors[i][propiedad] + "\n";
                        }
                        properties += "\n";
                    }
                }
                else if (property == "director") {
                    properties += "Director:\n";
                    for (var propiedad in this.director) {
                        properties += propiedad + " - " + this.director[propiedad] + "\n";
                    }
                    properties += "\n";
                }
                else if (property == "producer") {
                    properties += "Producer:\n";
                    for (var propiedad in this.producer) {
                        properties += propiedad + " - " + this.producer[propiedad] + "\n";
                    }
                    properties += "\n";
                }
                else if (property == "writer") {
                    properties += "Writer:\n";
                    for (var propiedad in this.writer) {
                        properties += propiedad + " - " + this.writer[propiedad] + "\n";
                    }
                    properties += "\n";
                }
                else {
                    properties += property.charAt(0).toUpperCase() + property.slice(1) + ": " + this[property] + "\n\n";
                }
            }
        }
        return properties;
    };
    return Movie;
}());

let actor1 = new Professional("nombreActor1", 21, "masculino", 79, 1.80, "cabelloActor1", "ojosActor1", "caucásica", false, "española", 0, "actor", "fotoActor1");
let actor2 = new Professional("nombreActor2", 22, "femenino", 65, 1.76, "cabelloActor2", "ojosActor2", "negroide", true, "venezolana", 0, "actor", "fotoActor2");
let actor3 = new Professional("nombreActor3", 23, "masculino", 81, 1.82, "cabelloActor3", "ojosActor3", "caucásica", false, "estadounidense", 1, "actor", "fotoActor");

let director1 = new Professional("nombreDirector1", 51, "masculino", 74, 1.72, "cabelloDirector1", "ojosDirector1", "caucásica", true, "española", 0, "director", "fotoDirector1");
let director2 = new Professional("nombreDirector2", 52, "masculino", 75, 1.73, "cabelloDirector2", "ojosDirector2", "caucásica", false, "aleman", 1, "director", "fotoDirector2");
let director3 = new Professional("nombreDirector3", 53, "femenino", 64, 1.73, "cabelloDirector3", "ojosDirector3", "australoide", false, "australiana", 1, "director", "fotoDirector3");

let escritor1 = new Professional("nombreEscritor1", 30, "masculino", 70, 1.75, "cabelloEscritor1", "ojosEscritor1", "caucásica", false, "española", 0, "escritor", "fotoEscritor1");
let escritor2 = new Professional("nombreEscritor2", 31, "masculino", 71, 1.76, "cabelloEscritor2", "ojosEscritor2", "negroide", false, "frances", 0, "escritor", "fotoEscritor2");
let escritor3 = new Professional("nombreEscritor3", 32, "masculino", 72, 1.77, "cabelloEscritor3", "ojosEscritor3", "mogoloide", true, "ingles", 0, "escritor", "fotoEscritor3");

let productor1 = new Professional("nombreProductor1", 41, "femenino", 80, 1.80, "cabelloProductor1", "ojosProductor1", "caucásica", false, "española", 0, "productor", "fotoProductor1");
let productor2 = new Professional("nombreProductor2", 42, "masculino", 81, 1.79, "cabelloProductor2", "ojosProductor2", "caucásica", false, "española", 0, "productor", "fotoProductor2");
let productor3 = new Professional("nombreProductor3", 43, "femenino", 71, 1.78, "cabelloProductor3", "ojosProductor3", "negroide", true, "española", 0, "productor", "fotoProductor3");

let movie1 = new Movie ("The Plataform", 2002, "Española", "Aventura", "https://pics.filmaffinity.com/El_hoyo-215714351-large.jpg");
let movie2 = new Movie ("Back to the Future", 2015, "Española", "Aventura", "https://m.media-amazon.com/images/M/MV5BZmU0M2Y1OGUtZjIxNi00ZjBkLTg1MjgtOWIyNThiZWIwYjRiXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UY1200_CR71,0,630,1200_AL_.jpg");
let movie3 = new Movie ("I Am Mother", 2019, "Española", "Aventura", "https://1.bp.blogspot.com/-8ceIzLOqKgM/XQFsU6icYvI/AAAAAAAAG1Q/FutWkG0ghHos9N_AglmErpbfUJ_q8IBmACLcBGAs/s1600/i-am-mother.jpg");

movie1.setActors([actor1, actor2, actor3]);
movie2.setActors([actor1, actor2]);
movie3.setActors([actor1, actor3]);

movie1.setDirector(director1);
movie2.setDirector(director2);
movie3.setDirector(director3);

movie1.setWriter(escritor1);
movie2.setWriter(escritor2);
movie3.setWriter(escritor3);

movie1.setProducer(productor1);
movie2.setProducer(productor2);
movie3.setProducer(productor3);

let peliculas = [movie1, movie2, movie3];

var local = 0;

function crearStorage() {
    if(local = 0){
        localStorage.setItem("misPeliculas", JSON.stringify(peliculas));
        local++;
    }
}

function insertarMovie() {

    let mostrar = JSON.parse(localStorage.getItem('misPeliculas'));

    let title = $('#titulo').val();
    let anyo = $('#anyo').val();
    let pais = $('#pais').val();
    let genre = $('#genre').val();
    let imagen = $('#imagen').val();

    let pelicula = new Movie(title, anyo, pais, genre, imagen);
    alert(JSON.stringify(pelicula));
    mostrar.push(pelicula);
    localStorage.setItem("misPeliculas", JSON.stringify(mostrar));
}

function mostrarPeliculas() {
    let mostrar = JSON.parse(localStorage.getItem('misPeliculas'));
    let cadena = "";
    let i = 0;
    for (let movie of mostrar) {
        cadena += `
            <div class="col">
                <div class="card">
                    <img src="${movie.foto}" class="card-img-top" style="height: 450px">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">Disgruta de tus peliculas.</p>
                        <a href="#" onclick="mostrarDetalles(${i})" class="btn btn-warning">MÁS INFO</a>
                    </div>
                </div>
            </div>`;
        i++;
    }
}

function mostrarDetalles(value) {
    let mostrar = JSON.parse(localStorage.getItem('misPeliculas'));
    alert(JSON.stringify(mostrar[value]));
}
