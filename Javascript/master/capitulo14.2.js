//El metodo estricto es una buena practica que elimina algunos errores en la semantica de Javascript
"use strict";


// Con el 'use strict' javascript va a detectar errores semanticos existentes en el codigo

// Hay que aclarar que javascript esta diseñado para facil entendimiento, por lo que tiene pequeños fallos no detectable en ejecucion


// ALGUNOS ERRORES COMUNES

    numero = 32;    //numero is not defined

// // Aca se entiende que es var, pero lanza error porque no es el codigo quien tiene que decidirlo, si no el dev



    let undefined = 5;  // SyntaxError: Identifier 'undefined' has already been declared
    var Infinity = 5; // TypeError: Cannot assign to read only property 'Infinity' of object '#<Window>'


// // defineProperty : "Agrega un nuevo elemento a un objeto"

//  defineProperty(objeto,propidad,{valor})

// //writeable:"Sobreescribible"
    var obj1 = {};
    Object.defineProperty(obj1, "x", { value: 42, writable: false });

    obj1.x = 9; // TypeError: Cannot assign to read only property 'x' of object '#<Object>'



    var objeto = {get x(){return 17}};
    console.log(objeto.x()); // TypeError: objeto.x is not a function



    var fix = {};
    Object.preventExtensions(fix);
    fix.newProp="hola";// TypeError: Cannot add property newProp, object is not extensible

// Sin embargo si se agrega fix={prop:"valor"} si funciona 




    delete Object.prototype;// TypeError: Cannot delete property 'prototype' of function Object() { [native code] }


var o = { p: 1, p: 2 }; // !!! error de sintaxis(este no se me muestra)


// No se permiten 0 a la izquierda
    var sum = 015;  // SyntaxError: Octal literals are not allowed in strict mode.


    false.true = ""; //TypeError: Cannot create property 'true' on boolean 'false'

    (14).sailing = 'home';   // TypeError: Cannot create property 'sailing' on number '14'
    'with'.you = 'far away'; // TypeError: Cannot create property 'you' on string 'with'




    var x = 17;
    // with (obj) { // !!! error de sintaxis
    // Si este no estuviera un modo estricto, ¿sería var x?, o
    // ¿sería obj.x en su lugar?  Es imposible en general
    // decirlo sin ejecutar el código, por lo que el nombre no
    // se puede optimizar.
    // x;
    // }

    



// En modo estricto una lista de identificadores se convierte en palabras reservadas. Estas palabras son implements, interface, let, package, private, protected, public, static, y yield. De modo que en modo estricto, no se pueden usar estas palabras para nombrar variables o argumentos.








// TENER CUIDADO CON EL MODO ESTRICTO, YA QUE NO ES COMPATIBLE CON TODOS LOS NAVEGADORES, LO CUAL PROVOCARIA ERRORES