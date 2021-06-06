const usuario = {
    id: "012345678",
    username: "carlosazaustre",
    password: "fkldfn4r09330adafnanf9843fbcdkjdkks",
    data: {
        name: "Carlos Azaustre",
        email: "carlosazaustre@gmail.com",
        city: "Madrid",
        countre: "ES",
    },
    preferences:{
        contact:{
            email:true,
            notify:true,
        },
        interest:["javascript","nodejs","React.js"],
    },
};

var jsonSerializado = JSON.stringify(usuario);