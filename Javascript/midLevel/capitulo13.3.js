/*
        METODO FETCH

El metodo fetch es otra forma de obtener datos de un servidor, deja obsoleto y resume de mejor forma el metodo XMLHttpRequest()

Cuando trabajamos con fetch siempre vamos a tener una respuesta/promesa encapsulada, ademas fetch usa de forma predetermida el metodo "GET"

La forma de declararlo es:

    fetch("URL")

Como devuelve una promesa, usamos then (si no usamos ";" podemos usar algun metodo del objeto incluso haciendo salto de linea y tabulador)

    fetch("URL")
        .then((e)=>{})

Ahora dentro del then vamos a usar alguno de los siguientes metodos(los cuales devuelven otra promesa), ya que la respuesta esta encapsulada no podemos acceder a los datos, con un simple console.log

    e.text() : Devuelve el json deserializado, en formato string
    e.json() : Devuelve el json en forma de objeto
    e.blob() : Usado para datos binarios, como imagenes, pdfs, etc.

Como ya obtenemos los datos desencapsulado, ya podemos verlos de la siguiente forma:

    fetch("URL")
        .then(e=>e.json())
        .then(e=>console.log(e));



            METODO POST

Para el uso del metodo post con los fetch, en este ejemplo, igualmente debemos de utilizar una URL que nos permita acceder a la informacion, y enviar datos para agregar.
Para la declaracion agregamos una "," despues del URL, y como parametro vamos a crear un obeto, el cual tenda las siguientes propiedades

    method: Aca especificamos que estamos usando POST
    body: Aca pasamos el string input para agregar los datos al json
    headers : Aca aclaramos el tipo de datos que estamos pasando y utilizando

    fetch("https://reqres.in/api/unknown/2",{
        method:"POST",
        body:'{"dato":"aleatorio"}',
        headers:{"Content-type":"application/json"}
    })

El resto funciona exactamente igual como ya lo habiamos visto, devuelve una promesa encapsulada entonces usamos doble then

    fetch("https://reqres.in/api/unknown/2",{
        method:"POST",
        body:'{"dato":"aleatorio"}',
        headers:{"Content-type":"application/json"}
    })
        .then(e=>e.json())
        .then(e=>console.log(e));







            METODO AXIOS

El metodo axios es otro metodo de obtencion de datos que simplifica mas el proceso que fetch, igualmente ambos metodos son los mas usados actualemente y los mas recomendados

Para poder hacer uso de axios debemos de agregar su libreria en el html, esto debido a que no es nativo de javascript

    <script src="https://cdn.jsdelivr.net/npm/axios@1.1.2/dist/axios.min.js"></script>

Para la declaracion

    axios("URL")

axios devuelve una promesa igualmente encapsulada, pero  a diferencia de fetch no es necesario usar un doble then, sino que usamos el then una sola vez, y luego accedemos al metodo data del objeto ya obtenido, asi accedemos al contenido

    axios("URL")
        .then(e=>console.log(e.data));

Y cuando queremos usar el metodo POST podemos hacerlo de dos formas:

1. La primera seria similar que con fetch, con algunas claras diferencias

Se declara como parametro, se indica el method post, pero como el contenido ahora se almacena en data, usamos este valor(sin tener que convertirlos a string como en fetch), y ademas no tenemos que agregar los headers, ya que si verificamos las propiedades del objeto, ya lo tiene incluido

    axios("https://reqres.in/api/unknown/2",{
        method : "post",
        data:{"dato":"aleatorio"}
    })
    .then(e=>console.log(e.data));

2. La segunda forma seria por un punto despues de axios, de esta forma el unico segundo parametro que haria falta seria el body, por lo que no se asigna body sino se da de forma mas inmediata el valor o dato que vamos a enviar 

    axios.post("https://reqres.in/api/unknown/2",{"dato":"aleatorio"})
        .then(e=>console.log(e.data));

*/


axios.post("https://reqres.in/api/unknown/2",{"dato":"aleatorio"})
    .then(e=>console.log(e.data));

