/*


                                                            CALLBACKS 


Los callback son funciones que se pasan como parametros de otra funcion, por ejemplo:


Aca estamos creando la funcion prueba, la cual tiene como parametro la funcion cb, sabemos que es una funcion porque en el codigo a cb se le pasa como parametro 'roberto',

    function prueba(cb){
        cb('roberto')
    }

Una caracteristica principal de los parametros (Sea funcion o variable) es que no es necesario que lleven el mismo nombre pueden llamarse de distinta forma en la declaracion o en la ejecucion de la funcion; (Aunque si usamos funcion flecha no es necesario un nombre en la ejecucion).

Aca vamos a ejecutar prueba, pasando como parametro la referencia a cb, en ambos ejemplos se pasa el parametro nombre (necesario para cb), y se ejecuta console.log; El nombre para la funcion que relaciona a cb es innecesario

    prueba(function hola(nombre){
        console.log(nombre);
    })

    prueba(nombre=>{
        console.log(nombre);
    })




                                                            PROMESAS

Las promesas es un metodo que recibe dos parametros, resolve(res) y reject(rej); Resolve : indica que todo se ejecuto satisfactoriamente, y Reject: es un error que se va a mostrar en caso de que haya habido errores, o que uno de los condicionales no se cumpla.

En este ejemplo vamos a tomar la variable nombre, y asignamos a promesa la clase promise, se ingresan los parametros;
En caso de que nombre no se pedro, se devuelve el error, pero si si es, se devuelve resolve

    let nombre = 'pedo';

    const promesa = new Promise((resolve,reject)=>{
        if(nombre != 'pedro')reject('Lo siento, el nombre no es pedro');
        else resolve('Bienvenido pedro');
    });


Si se devuelve el reject, se mostrara el siguiente error "Uncaught (in promise) Lo siento, el nombre no es pedro".
Si se devuelve resolve, no pasa nada, pero significa que todo se ejecuto correctamente.

Para mostrar resolve por consola, usamos el metodo de promise, then(), ya que no podemos acceder a los datos de promise debido a que estan encapsulados.

El parametro resultado es el resolve que promise devuelve

    promesa.then((resultado)=>{
        console.log(resultado);
    }).catch((e)=>{
        console.log(e);
    })

y con catch se maneja el error, en este caso mostrandolo por consola como un mensaje de texto


*/

//  EJEMPLO:


// class Persona{
//     constructor(nombre,instagram,edad){
//         this.nombre=nombre;
//         this.instagram=instagram;
//         this.edad=edad;
//     }
// };

// const data = [
//     ['Lucas Dalto','@SoyDalto',26],
//     ['Robertico','@Robertico',32],
//     ['RancioRamirez','@RancioRamirez'],
//     ['Camila Mesa',,12]
// ];

// const personas =[];

// for (let i = 0; i < data.length; i++) {
//     personas[i]=new Persona(data[i][0],data[i][1],data[i][2]);
// }

// //En este caso promise se usa para la obtencion de datos y el manejo de sus errores


// const obtenerPersona=(id)=>{
//     return new Promise((res,rej)=>{
//         if(personas[id] == undefined) rej('Lo siento no se encuentra la persona');
//         else{res(personas[id])}
//     })
// }

// const obtenerInstagram=(id)=>{
//     return new Promise((res,rej)=>{
//         if(personas[id].instagram == undefined) rej('Lo siento el instagranm no existe');
//         else(res(personas[id].instagram));
//     })
// }

// const obtenerEdad =(id)=>{
//     return new Promise((res,rej)=>{
//         if (personas[id].edad == undefined) rej ('Edad no disponible');
//         else{res(personas[id].edad)}
//     })
// }

// let id=2;

// obtenerPersona(id).then((persona)=>{
//     console.log(persona.nombre);
//     return obtenerInstagram(id);
// }).then((instagram)=>{
//     console.log(instagram);
// }).catch((err)=>{
//     console.log(err);
// })

// obtenerEdad(id).then((edad)=>{
//     console.log(edad);
// }).catch((err)=>{
//     console.log(err);
// })

/* 

Simplificando un poco este codigo queda asi

obtenerPersona(id).then(return obtenerInstagram(id)).then((e)=>{console.log(e)}).catch((err)=>{
    console.log(err);
})

obtenerPersona muestra por consola la persona y ademas retorna en la funcion la funcion de obtenerInstagram, por lo que asi podemos usar nuevamente el metodo then() fuera de obtenerPersona(), y en la funcion obtenerInstagram() retornamos nuevamnete edad, para usar nuevamente then(), de esta forma generamos un codigo de obtencion de datos en cadena, y si alguno de los datos no se muestra, se muestra el error correspondiente y se para la obtencion de datos








            ASYNC AWAIT

Para solicitar datos ya sea de forma local o de un servidor, normalmente los datos no llegan inmediatamente, sino de forma asincrona, esto significa que se piden los datos, y la funcion que pide los datos continua la ejecucion sin esperar si llegan los datos o no.

Para esto se usa async await, veamos como funciona:

*/


//Primero declaramos la funcion que devolvera los datos solicitados en forma de promesa

const obtenerInformacion=(text)=>{
    return new Promise((res,rej)=>{
        //setTimeout lo usamos en este caso para simular el tiempo que tarda en llegar los datos de un servidor externo, en este caso es aleatorio
        res(text);
        rej('Datos no valido');
    })
}

// Luego declaramos el async, el cual nos dice que en la funcion se va a hacer uso de await

// await no dice que hasta que no tengamos una respuesta del requerimiento, no se va a continuar la ejecucion

const mostrarInformacion= async ()=>{
    let data1=await obtenerInformacion('1: Nombre');
    let data2=await obtenerInformacion('2: Apellido');
    let data3=await obtenerInformacion('3: ID');

    //await simpre espera que se retorne una promesa

    console.log(data1);
    console.log(data2);
    console.log(data3);
}
mostrarInformacion();

