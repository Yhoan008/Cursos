// CADENAS 

// concat() = junta dos o mas cademas y retorna una nueva

// startsWidth() = Si una cadena comienza con los caracteres de otra cadena devuelve true, sino false
// endsWidth() Si una cadena termina con los caracteres de otra cadena devuelve true, sino false
// includes() = Si una cadena puede encontrarse dentro de otra en cualquier posicion, devuelve true, sino false
// indexOf() = Devuelve el indice del primer caracter de la cadena si existe, si no devuelve -1
// lastIndexOf() = Devuelve el indice del primer caracter de la ultima cadena encontrada, en caso de que se repita

let cad1="Hola querido querido querido traicionero";

let cad2="rido";


document.write(cad1.indexOf(cad2));

espacio();espacio();

//padStart() = Rellena la cadena al principio con los caracteres deseados, para que todos los caracteres en total sumen cierta cantidad
// padEnd() = Rellena la cadena al final con los caracteres deseados, para que todos los caracteres en total sumen cierta cantidad
// repeat() = Repite la cadena la cantidad de veces deseadas

let cad3 = "Hola";

let padStart = cad3.padStart(10,"0");
let padEnd = cad3.padEnd(10,"0");
let repetir = cad3.repeat(4);

document.write(padStart); espacio();
document.write(padEnd); espacio();
document.write(repetir); espacio();espacio();



// split() = Divide la cadeda como querramos 
// substring() = Nos retorna una seccion de la cadena que seleccionemos 
// toLowerCase() = Convierte una cadena a minusculas 
// toUpperCase() = Convierte una cadena a MAYUSCULA 
//toString() = Convierte un numero a String
// trim() = Elimina los espacios en blanco 
//trimStart() = Elimina los espacios en blanco del comienzo
// trimEnd() = Elimina los espacios en blanco del final

cad4 = "      Hola como estas   ";

let result = cad4.trim();

document.write(result.length);espacio();espacio();



// METODOS DE ARRAYS 

//Transformaciones 
// pop() =  Elimina el ultimo elemento del array y lo devuelve
// shift() = Elimina el primer elemento del array y lo elimina
// push() = Agrega un elemento al arrray al final de la lista 
// unshift() = Agrega uno o mas elementos al inicio del array, y devuelve la nueva longitud del array 
// reverse() = invierte el orden de los elementos de un array
// sort() = Ordena los elementos de una array localmente y devuelve un arreglo ordenado 
// splice() = Cambia el contenido de un array eliminando elementos o agregando nuevos elementos



let frutas = ["manzana","pera","uva","piña","curuba"];

result= frutas.splice(0,-1,"hola");

document.write(frutas); espacio(); espacio();




// Accesores 
// join() = Une todos los elementos de un array a una cadena y lo devuelve
// slice() = Devuelve una parte del array dentro de un nuevo array 
// Metodos ya vistos en cadenas: toString(), includes(), indexOf(), lastIndexOf()


let nombres= ["maria","jorge","Andres"];

result=nombres.slice(0,2);

document.write(result); espacio();espacio();



// Repeticion (FUNCIONES)
// .filter(variable => funcion o condicion) =  Ejecuta la funcion indicada por cada elemento del array, si en lugar de una funcion se indica una condicion, solo devuelve los valores que cumplan la condicion
// .forEach(variable => funcion) = Ejecuta la funcion indicada por cada elemento del array

let numeros = ["cero","uno","dos","tres","cuatro","cinco"];

numeros.forEach(number =>{
    document.write(number+ "<br>")
});


let number= numeros.filter(number => number.length >= 4);
document.write(number);













function espacio(){
    document.write(`<br>`);
}
