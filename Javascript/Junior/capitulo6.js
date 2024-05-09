// CONCEPTOS 

// DOM : (Document Object Model)Es una interfaz que representa el conjunto de documentos html, incluyendo archivos css y javascript
//Nodos : Representa cada conexion de la pagina en general, representa todos y cada uno de las etiquetas existentes







//  SELECCION DE ELEMENTOS 
// Los siguientes metodos se aplican a la interfaz document.

// document.getElementById("id") = Selecciona un elemento por id
// .getElementsByTagName(etiqueta) = Selecciona todos los elementos que coincidan con el nombre de la etiqueta especificada en forma de lista
// .querySelector(".class / .id") = Devuelve el primer elemento que coincida con el grupo especificado de selectores, con este comando podemos seleccionar clases y Ids
// .querySelectorAll() = Es igual que el anterior selector pero devuelve todos los elementos que coincidan con el nombre, no solo el primero


// let elemento=document.getElementsByTagName(); // Elemento tipo parrafo





// ATRIBUTOS HTML

// .setAttribute("atributo","valor") = Define o mofica un atributo
// .getAttribute("atributo") = Obtiene el valor del atributo
// .removeAttribute("atributo") = Elimina el atributo seleccionado













// ATRIBUTOS GLOBALES 
// Son los atributos presentes en todos los elementos HTML 

// contenteditable = Indica si el elemento puede ser modificado por el usuario (boleano), aplica tambien para elementos en linea 
// dir = Indica la direccionalidad del texto
// hidden = Funciona igual que display: none, hace desaparecer el elemento
// style = Contiene declaraciones css para ser aplicadas al elemento
// tabIndex = Se le indican valores de numeros e indica el orden en el que el tabilador va a seleccionar los elementos
// title = Indica la infomacion que va a tener un elemento cuando pongamos el mouse encima












// ATRIBUTOS DE LO INPUT 
// className = Muestra el valor dado en el atributo class
// value = Muestra el valor que contiene el input
// type = Tipo de input(text,range,number,etc)
// accept = Define que se va a aceptar, se usa generalmente con inputs de tipo file, donde definimos el formato de archivo aceptado
// form = En los input de tipo submit(Botones para envio de formularios) dentro de una etiqueta form envia siempre la info del formulario, pero si el submit esta fuera de la etiqueta no funcionara a menos que con este atributo le indiquemos el formulario
// minLenght = Define la cantidad minima de caracteres que debe de tener el input 
// placeholder = Texto fantasma que aparece antes de escribir sobre el input 
// required = Define como obligatorio a llenar el campo antes de enviar el formulario 












//CLASES, CLASSlIST Y SUS METODOS

// add() = Añade una nueva clase
// remove() = remueve una clase
// item() = Enumera todas las clases de un elemento como en un array, se le pasa como parametro el indice de la clase y devuelve el nombre de la clase
// contains() = Verifica si el elemento contiene o no la clase indicada
// replace() = Reemplaza una clase por otra 
// toggle() = Si no tiene la clase especificada la agrega, y si la tiene la elimina 













// OBTENCION Y MODIFICACION DE ELEMENTOS 

// textContent = Devuelve el texto de cualquier nodo, independientemente de sus etiquetas
// innerHTML = Devuelve el contenido HTML de un elemento, inluyendo etiquetas
// outerHTML = Devuelve el codigo HTML completo de un elemento









// CREACION DE ELEMENTOS 
//Para esto siempre lo haremos con la etiqueta document.
// .createElement() = Como parametro se le indica que elemento vamos a crear, ejemplo ("LI"), Debe de esta en mayuscula 
// .createTextNode() = Crea un nodo de texto, el cual se puede implementar en elementos como li, div, h1, p, etc.
// .createDocumentFragment() = Con este metodo nos ahorramos el consumo innecesario de recursos cuando agregamos elementos, se crea una variable, le asignamos el metodo, luego agregamos todos los elementos que querramos y luego instanciamos la variable


// let div = document.createElement("div");
// let contenedor = document.createElement("p");
// let text = document.createTextNode("Esto es un nodo de texto");
// let fragmento = document.createDocumentFragment();

// console.log(div);
// console.log(contenedor);
// console.log(text);








// OBTENCION Y MODIFICACION DE CHILDS (HIJOS)
// firstChild = devuelve el primer nodo hijo (los espacios o saltos de linea en el html cuentan tambien)
// lastChild = Devuelve el ultimo nodo hijo
// firstElementChild = Devuelve el primer elemento hijo (solo elementos, no cuenta saltos de linea)
//lastElementChild = Devuelve el ultimo elemento hijo
// childNodes = Devuelve una lista nodo, que contiene todos los nodos del elemento madre (se puede recorrer con un forEach)
//children = Devuelve una lista nodo con todos los elemetos hijos (se recorre con un forIn o forOf)








// METODOS DEL LOS CHILDS
// replaceChild() = Reemplaza el elemento o nodo por uno nuevo
// removeChild() = Elimina el elemento
// hasChildNodes() = Si el elemento contiene hijos devuelve true, si no, false


let contenedor = document.querySelector(".contenedor");

let h2 = document.getElementsByTagName("h2");
const h2Nuevo = document.createElement("h2");
h2Nuevo.textContent="Hola mundo";


contenedor.replaceChild(h2Nuevo,h2[0]);





// METODOS DE LOS PADRES 
// parentElement = Selecciona el elemento padre, que contiene al elemento seleccionado
// parentNode = Selecciona el nodo padre

let padre = h2Nuevo.parentElement;

console.log(padre);






// PROPIEDADES SIBLINGS (Hermanos)
// nextSibling = Selecciona el nodo hermano continuo
// previousSibling = Selecciona el nodo hermano anterior
// nextElementSibling = Selecciona el elemento hermano siguiente
//previousElementSibling = Selecciona el elemento hermano anterior








// closest() = Selecciona el elemento ascendente mas cercano que coincida con la especificaciones del parametro
 
