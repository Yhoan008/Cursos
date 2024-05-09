//      CONSOLA console


// Funciones de registro 
// .assert(condicion) = Si la condicion es falsa mostrara una error, si es verdadera, no mostrara nada
// .clear() = Limpia la consola 
// .error("") = Muestra por consola el error indicado
// .info("") = Es igual que console.log(), pero algunas cosas varian entre navegadores 
// .log() = Muestra mensaje por consola 
// .table(array) = Muestra la informacion en forma de tabla, funciona unicamente con arrays u objetos
// .warn() = Muestra mensaje en consola como advertencia 
// .dir() = Muestra la informacion en forma de lista, solo funciona con arrays u objetos


let nombres ="maria" ;

console.dir(nombres);



// Funciones de conteo
// .count() = Inicia un conteo por cada vez que se ejecuta 
// .countReset() = Reinicia el conteo

console.count();
console.count();
console.countReset();
console.count();



// Funciones de agrupacion

// .group() = Crea un grupo de informacion en consola que puede ser grupo de comados, estos grupos pueden formar subgrupos y asimismos colapsarse
// .groupEnd() = Cierra el grupo actual 
// .groupCollapse() = Crea un nuevo grupo, pero lo cierra al instante





//  Funciones de Temporizacion

// .time() = Inicializar contador de tiempo en ms
// .timeLog() = Muestra la instancia actual del temporizador
// .timeEnd() = Finaliza el temporizador

