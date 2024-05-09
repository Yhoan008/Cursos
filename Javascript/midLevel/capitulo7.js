
// OBJETO WINDOW 
// window.metodo() = El objeto window se refiere a la ventana del navegador, lo que engloba practicamente todo

// window.open('url') : De esta forma se abre una nueva ventana direccionando al url indicado, tambien podemos poner el url en variable
// window.close() : cierra la ventana actual, si usamos el metodo atraves de una variable, cerraremos el enlace, conservando la ventana actual
// window.closed : verifica si la ventana referenciada esta cerrada o abierta
// window.stop() : detiene la carga de recursos, es decir si hace falta por cargar imagenes por ejemplo, ya no se cargaran y la pagina quedara en su estado al momento de ejecutar el metodo
// window.print() : Este metodo es para hacer impresiones de la pagina (Impresora)
//window.prompt() : Pide informacion al usuario por medio de una alerta 




// SCREEN Y SCROLL
// window.screen : Se refiere a las propiedades (de lectura, es decir no son editables) de la ventana con respecto a los limites de la pantalla
// screenTop : Devuelve la distancia entre la ventana y el borde top de la pantalla
// screenLeft : Devuelve la distancia entre la ventana y el borde Left de la pantalla
// screen.availHeight : Devuelve el alto de la pantalla
// screen.availWidth: Devuelve el ancho de la pantalla
// scroll(X,Y) : Con este metodo podemos dirigir el scroll a un punto cualquiera en X y Y
// scrollY  : Devuelve lo que se ha movido el scroll en el eje Y
// scroll X : Devuelve lo que se ha movido el scroll en el eje X





// LOCATION
// window.location
// location.href  :  Devuelve el href (url) de la pagina actual, en servidores locales devuelve la carpeta donde esta almacenada
// location.hostname : Devuelve el nombre del dominio del servidor web 
// location.pathname : Devuelve la ruta y el nombre del archivo de la pagina actual
// location.protocol : DEvuelve el protocolo web utilizado (http: o https:)
// location.assign('') : Carga un nuevo documento

// Como ejemplo de este servidor local
/*

location.href
'http://127.0.0.1:5500/'

location.pathname
'/'

location.protocol
'http:'

*/

// Como ejemplo de una pagina cualquiera montada en servidor web 
/*

location.href
'https://www.youtube.com/'

location.pathname
'/'

location.protocol
'https:'

*/
