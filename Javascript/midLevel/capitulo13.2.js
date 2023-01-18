/*

            METODO PARA LA OBTENCION DE DATOS 


XMLHttpRequest

Este objeto nos permite hacer peticiones a servidores

        peticion = new XMLHttpRequest();   

Luego vamos a usar el metodo open(metodo,archivo), para el ejemplo vamos a usar el metodo "GET" y el archivo informacion.txt.

        peticion.open("GET","informacion.txt")          Para crear la consulta
        peticion.send()                                 Para enviar la consulta al servidor

Para mostrar el resultado lo hacemos con: 

        peticion.response

Pero no podemos ejecutar el comando de inmediato, ya que la respuesta a la consulta y las peticiones a servidores normalmente tardan un tiempo

Para ver en que estado esta la solicitud, usamos peticion.readyState, lo cual nos devuelve cuatro estados posible:

        "1": La solicitud ha sido creada (peticion.open())
        "2": La solicitud ha sido enviada (peticion.send())
        "3": La solicitud se esta procesado 
        "4": La solicitud tiene una respuesta

Entonces para mostrar el resultado solo lo haremos si el estado es 4

        peticion.addEventListener('readystatechange',()=>{
                if(peticion.readyState == 4){
                        console.log(peticion.response);
                }
        })

El resultado es 

        {
                "nombre":"Yhoan",
                "edad":21,
                "apellido":"moreno"
        }

Ahora, el hecho de que el readyState sea 4, solo significa que la solicitud se completo, pero no significa que hayamos recibido correctamente los datos, para la obtencion de los datos tenemos cierto codigos, algunos son:

        "404":No se ha encontrado el recurso
        "200": Si se ha encontrado el recurso
        "201": Tambien se ha encontrado el recurso

Segun lo anterior la completa validacion seria :

        peticion.addEventListener('readystatechange',()=>{
                if(peticion.readyState == 4 && peticion.status == 200){
                        console.log(peticion.response);
                }
        })


Las anterior validacion es lo que se hacia anteriormente, ahora hay una forma mas optima de hacerlos y es con el evento load

        peticion.addEventListener('load',()=>{
                console.log(peticion.response);
        })


                METODO POST

Para el metodo post lo declaramos de la misma manera que get, despues especificamos la url
En este caso POST solo funciona obligatorialemte con algun URL indicado en la pagina https://reqres.in

        peticion.open("POST","https://reqres.in/api/users");

Despues indicamos caracteres de aclaracion, esto es para decirle al metodo como dar tratamiento al envio de datos 

        peticion.setRequestHeader("Content-type","application/json;charset=UFT8");

Despues usamos send si queremos enviar informacion adicional al servidor
En este caso para la URL tambien exige obligatoriamente un input para funcionar

        peticion.send(JSON.stringify({
                "nombre":"dalto",
                "trabajo":"edutuber"
        }));


*/

let peticion = new XMLHttpRequest();

peticion.open("POST","https://reqres.in/api/users");

peticion.setRequestHeader("Content-type","application/json;charset=UFT8");

peticion.send('{"dato":"aleatorio"}');

peticion.addEventListener('readystatechange',()=>{
        if(peticion.readyState == 4){
                let respuesta=JSON.parse(peticion.response);
                console.log(respuesta);
        }
})






