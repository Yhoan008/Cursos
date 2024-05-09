
/*

MANEJO DE ERRORES 

Esto se refiere al control de los distintos errores que podemos tener, que dependen de cada situacion en especifico por lo que lo siguiente solo son conceptos que en un capitulo mas adelante profundizaremos mas 


SWITCH
switch es una sentencia que reemplaza los if else (aunque if else es mas optimizado)

    switch (key) {
        case value:
            
            break;

        default:
            break;
    }




TRY .. CATCH...
Esta sentencia detecta errores en una seccion de codigo, evita que el error se muestre por consola y en vez de eso lo convierte en un objeto manejable para utilizarlo como nosotros mas querramos 

    try{
        console.log(variable_sin_definir);
    }
    catch(error){
        console.log(error);
    }

En este caso variable_sin_definir no esta definida, por lo que console.log lanza el error " capitulo10.js:38 Uncaught ReferenceError: variable_sin_definir is not defined "

con la sentencia try se intenta ejecutar el codigo, si no hay error no se va a ejecutar catch, pero si lanza error se ejecuta catch pasando el error como parametro 

Como alternativa al catch tambien tenemos el finally, que esta seccion de codigo se va a ejecutar si o si, da igual si try lanza error o no.

    try{
        console.log(car);
    }
    finally{
        console.log(error)
    }


*/ 

