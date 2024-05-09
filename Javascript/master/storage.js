
// Aca vamos a ver APIs que modifican la forma en que se almacenan datos en la memoria 

let LocalStorage = localStorage; // nos muestra un objeto con informacion de lo que esta actualmente almacenado en memoria local

// Memoria local es del computador, es decir aunque cerremos y abramos nuevamente la pagina los datos van a seguir estando


let SessionStorage = sessionStorage; // sessionStorage devuelve lo mismo pero al recargar la pagina no datos se borran de la memoria del navegador


localStorage.setItem("nombre","mamerto");
sessionStorage.setItem("nombre","roberto"); // Esto define un nuevo dato, se agrega al objeto proto 

let nombre = localStorage.getItem("nombre"); // Devuelve el valor correspondiente a la propiedad indicada 

sessionStorage.removeItem("nombre"); // De esta forma se elimina un dato

sessionStorage.clear(); // Asi limpiamos todos los datos existentes


