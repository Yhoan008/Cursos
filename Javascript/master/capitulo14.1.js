// Los PROTOTIPOS son la heredacion de las propiedades y metodos de un objeto, y todo en javascript son objetos, incluyendo datos de tipo String, int, array, boolean, etc.

// Aca creamos la clase Objeto, la cual hereda sus propiedades y metodos del prototipo de clases
class Objeto {
  constructor() {}

  saludar() {
    console.log("hola mundo");
  }
}

// Y aca objeto hereda de Objeto de la misma forma el prototipo
const objeto = new Objeto();

// Para ver el prototipo es con el metodo __proto__

// console.log(objeto.__proto__.__proto__);

//Dos veces __proto__ por la doble heredacion

// Tambien funciona con el resto de datos

let string = "hola";
// console.log(string.__proto__);

// Dentro de __proto__ podemos ver los metodos segun los tipos de datos, por ejemplo para arrays podremos ver metodos como pop,push,concat,slice, etc

