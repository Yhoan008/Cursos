// Hola me presento soy un comentario soy un comentario 



//  Js es un lenguaje de programacion, funciona sin necesidad de usar ";" pero si no lo usamos nos puede generar muchos errores, por lo que es buena practica usarlo 




//      VARIABLES 
// los tipos de variables son var, let y const



// var es una declaracion de variable global, es decir si por ejemplo declaramos la variable una vez, y dentro de un bloque de codigo la declaramos nuevamente, amblas declaraciones van a referenciar a la misma variable 

var numero;
numero =12;
if(true){
    var numero =15;
}
// console.log(numero); // Esto devuelve 15



// Let es una declaracion de variable mas limitada que var, si la declaramos en un bloque de codigo, solo va a funcionar para ese bloque unicamente

let cadena = "Soy la cadena global";
if(true){
    let cadena="Soy la variable local";
   // console.log(cadena); // Esto devuelve "Soy la cadena local"
}
// console.log (cadena); // Mientras que esto devuelve "Soy la cadena global"


//Const es una declaracion de variable, al igual que let, solo podremos acceder a las declaraciones de const dentro del bloque en el que fueron declaradas, la diferencia es que const es constante, solo se puede declarar una unica vez y NO permite modificaciones 

const costante = 14;

// console.log(costante); 




