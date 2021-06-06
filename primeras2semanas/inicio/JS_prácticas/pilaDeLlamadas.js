/*function saludar(quien) {
    console.log("Hola " + quien);
  }
  saludar("Harry");
  console.log("Adios");*/

  function gallina() {
    return huevo();
  }
  function huevo() {
    return gallina();
  }
  console.log(gallina("Kirikiri") + " vino primero.");