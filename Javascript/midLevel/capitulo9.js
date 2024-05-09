//          EVENTOS 

/*

<button onclick="alert('activado')">
        Activar
</button>

A los eventos se les puede dar manejo desde el archivo html, pero invocan codigo javascript.

Los eventos on(onclick,onmousedown,onfocus,onblur) tiene soporte para todos los navegadores desde los inicios de internet, sin embargo el uso de estos esta obsoleto debido a que son sobrescribibles si se usan en el mismo elemento html, y porque tambien no se puede controlar la propagacion del evento

En lugar de esto se usa addEventListener('evento',funcion), de la siguiente forma:


// .addEventListener('evento',funcion) : para agregar el evento a un elemento
// .removeEventListener('evento',funcion asociada) : Para remover el evento

Un ejemplo seria el siguiente: 

Primero creamos el elemento que va a recibir el evento

    <button class="btn">
        Activar
    </button>

Y para signar la funcion se puede hacer de dos formas: 

Mediante una funciona flecha (acepta parametros)

    <script>
        let btn = document.querySelector('.btn');
        btn.addEventListener('click',()=>{
            alert('Activado');
        })
    </script>

O mediante una funcion corriente (No acepta parametros)

    <script>
        let btn = document.querySelector('.btn');
        btn.addEventListener('click',saludar);

        function saludar(){
            alert('Activado');
        }
    <script>


Los eventos solo pueden manejar un tipo de parametro y es el evento en si mismo.

Por ejemplo aca asignamos el parametro "cualquiera" y mediante el metodo target, accedemos al elemento que invoco el evento. en este caso el <button>

    <script>
        let btn = document.querySelector('.btn');
        btn.addEventListener('event',(cualquiera)=>{
            console.log(cualquiera.target);
        })
    </script>






FLUJO DE EVENTOS 

Los elementos padre e hijos que tienen asignado el mismo evento tienen lo que se llama la propagacion de eventos hacia arriba, es decir si por ejemplo padre e hijo tienen el evento click, y se da click en el evento hijo, tambien se ejecutara el evento padre.

Por ejemplo 

    <div class="container">
        <button class="btn">
            Activar
        </button>
    </div>  

    container.addEventListener('click',()=>{
        console.log('evento padre');
    });

    hijo.addEventListener('click',()=>{
        console.log('evento hijo');
    });

Al hacer click en hijo el resultado es: 

    evento hijo
    evento padre

Esto es la propagacion, pero se puede controlar con el valor true como tercer parametro del addEventListener

    container.addEventListener('click',()=>{
        console.log('evento padre');
    },true);

    hijo.addEventListener('click',()=>{
        console.log('evento hijo');
    });

Asi el resultado es : 

    evento padre
    evento hijo

Asi se invierte la propagacion de padres a hijos; Si hay mas elementos con eventos en intermedios la propagacion funciona igual.

Y para detener la propagacion se usa stopPropagation(), por ejemplo

    container.addEventListener('click',(e)=>{
        console.log('evento padre');
        e.stopPropagation();
    },true);

    hijo.addEventListener('click',()=>{
        console.log('evento hijo');
    },true);

Resultado: 

    evento padre



EVENTOS DE MOUSE  

'click' : Ocurre un click
'dblclick' : ocurre con un doble click
'mouseover' : Ocurre cuando el mouse se mueve sobre un elemento
'mouseout' : Ocurre cuando el mouse se mueve fuera de un elemento
'contextmenu' : Ocurre cuando se da click derecho
'mousedown' : Ocurre cuando se presiona el boton de click
'mouseup' : Ocurre cunado se suelta el boton de click



EVENTOS DE TECLADO

'keydown' : Ocurre cuando una tecla cualquiera se deja presionada
'keypress' : Ocurra cuando una tecla se presiona y se suelta 
'onkeyup' : Ocurre cuando una tecla deja de presionarse



EVENTOS DE INTERFAZ

'error' : Ocurre cuando ocurre un error durante la carga de un archivo multimedia
'load' : Ocurre cuando un objeto se ha cargado, por ejemplo una imagen
'beforeunload' : Ocurre cuando el documento esta a punto de ser cargado
'resize' : Ocurre cuando se cambia el tamaño de vista del documento
'scroll' : Ocurre cuando se desplazala barra de desplazamiento, tambien funciona con elementos individuales 
'select' : Ocurre cuando un usuario selecciona un <input> o <textarea>  





TEMPORIZADORES  

setTimeout(funcion, delay) : Espera que se complete el delay, que es el tiempo en ms que pasan antes de la ejecucion, solo se ejecuta una vez

setInterval() : Se ejecuta constantemente cada delay (tiempo en ms).

    setTimeout(()=>{
        console.log('hola mundo');
    },2000)

    setInterval(()=>{
        console.log('hola mundo');
    },2000)

Para cancelar el temporizador se le asigna una variable y se cancela con setInterval(variable) o setTimeof(variable) segun corresponda, por ejemplo: 


    let intervalo = setInterval(()=>{
    console.log('hola mundo');
},2000)

setTimeout(()=>{
    clearInterval(intervalo)
},10000);

*/