// Al compilar typescript se genera un archivo javascript

// Para ejecutarlo usamos el comando tsc index.ts
// Para tener el modo observador usamos tsc index.ts -w
// Para iniciar la configuracion ts usamos tsc --init

console.log("Hola TypeScript");

// Los tipos de datos en TypeScript son:
// number
let numero: number = 42;

// string
let texto: string = "Hola TypeScript";

// boolean
let esVerdadero: boolean = true;

// array
let numeros: number[] = [1, 2, 3, 4, 5];
let textos: string[] = ["uno", "dos", "tres"];
let booleanos: boolean[] = [true, false, true];

//Definir los tipos de dato tambien nos ayuda a tener facil acceso a las propiedades y metodos
//Tambien podemos usar null o undefined como tipo de dato

let number2: number | null | undefined = 10;

console.log(number2.toFixed(2) );



//EVITAR USO DE ANY

let number: any;  // number | string | boolean

number = 5;
number = "cinco";
number = true;



//enum
enum diasSemana {
  lunes,
  martes,
  miercoles,
  jueves,
  viernes,
  sabado,
  domingo,
}

// FUNCIONES
//En la declaracion de funciones debemos especificar el tipo de dato en parametros y el tipo de dato que retorna la funcion
//Si es funcion flecha y los parametros son el mismo tipo de dato, ts infiere el tipo de dato

function sumar(a: number, b: number): number {
  return a + b;
}

let division = (a: number, b: number) => a / b;

//Es buena practica colocar void si la funcion no retorna nada
function saludar(nombre: string): void {
  let mensaje: string = `No devuelvo nada`;
}

// Las clases en TypeScript son similares a las de JavaScript, pero con tipado estático
// En ts tenemos las interfaces, que son instancias de un modelo de datos
// no generan codigo en js, solo son para el tipado estatico que luego se compila a js

interface libroInterface {
  titulo: string;
  autor: string;
  publicacion: number;
  genero: string;
}

class Biblioteca {
  libros: libroInterface[];
  constructor(libros: libroInterface[]=[]) {
    this.libros = libros;
  }

  agregarLibro(libro: libroInterface) {
    this.libros.push(libro);
  }

  eliminarLibro(titulo: string) {
    this.libros = this.libros.filter((libro) => {
      if (libro.titulo !== titulo) {
        return libro;
      } else {
        console.log(`El libro ${titulo} ha sido eliminado.`);
      }
    });
  }

  listarLibros() {
    return this.libros;
  }
}

/*let libro1: libroInterface = {
  titulo: "1984",
  autor: "George Orwell",
  publicacion: 1949,
  genero: "Distopía",
};

let miBiblioteca = new Biblioteca([libro1]);

console.log(miBiblioteca.listarLibros());
*/

let millonarios: number = 12;
let santaFe: number = 12;
let juegaElTrigre: boolean = true;
let elTigre: number = 1;

function ganadorCopa(millonarios: number, santaFe: number): string {
  if (juegaElTrigre) {
    millonarios += elTigre;
    console.log("Gracias al tigre");
  }
  if (millonarios > santaFe) return "Millonarios es el ganador";
  if (santaFe > millonarios) return "Santa Fe es el ganador";
  return "Empate";
}





