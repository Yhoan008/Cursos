
//  Arrays 
let frutas = ["manzana","pera","uvas","piña"];

document.write(frutas+`<br>`);
document.write(frutas[2]+`<br>`);



//  ARRAY ASOCIATIVOS 

let pc = {
    marca : "epson",
    cpu : "2 GHZ",
    Ram : "4 GB",
    Memoria : "1 TB"
};

document.write(pc["Ram"]);


if (pc["Ram"] == "4 GB"){
    document.write("<br>"+"Esta mierda funciona");
}



//      SENTENCIA WHILE 

let count = 0;

document.write("<br>");

while (count != 10){
    document.write(count);
    count++;
}

document.write("<br>");

count = 0;

do {
    document.write(count);
    count++;
}
while(count != 10)

document.write(`<br><br>`)




//  SENTENCIA FOR 

for(let i = 0 ; i>=-10 ; --i){
    document.write(i);
}

document.write(`<br>`);

for(let i = 0 ; i <= 10; i++){
    if(i==3){
        continue; // continue salta la iteracion actual
    }
    if(i==9){
        break;  // break rompe el bucle en la iteracion actual
    }
    document.write(i);
}
document.write(`<br><br>`)


//  En la siguiente sentencia declaramos ("variable" in "referencia ") donde referencia es el array ya declarado y que vamos a recorrer, y variable va a ser el valor devuelto por el recorrido

let animales = ["perro","gato","raton"];

for(animal in animales){
    document.write(animales[animal]+" es el animal numero: "+animal+`<br>`);
}

document.write(`<br><br>`);

for(animal of animales){
    document.write(animal+`<br>`);
}



let familia1 = ["Sara","Camila","Consuelo","Alvaro"];
let familia2= ["Yhoan","Lisbeht","Khloe",familia1];

for(let familia in familia2){
    if(familia == 3){
        document.write(`<br>`);
        for(let familia in familia1){
            document.write(familia1[familia]);
        }
        continue;
    }
    document.write(familia2[familia]);
}


function espacio(){
    document.write(`<br>`);
    document.write(`<br>`);
    document.write(`<br>`);
}

// FUNCIONES 

// Dos formas de declarar una funcion pero la primera tiene mayor prioridad

saludar = function(){
    console.log("hola");
    // Todo dentro de la funcion se ejecuta pero el comando return define el tipo de dato retornado 
    return("Hola soy una funcion");
}
function saludar(){
    console.log("Hola soy otra funcion");
}


saludar();  // Asi se llama la funcion para que se ejecute


document.write(saludar());

espacio();


//  Parametros 
sumar = function(num1,num2){
    let sum= num1+num2;
    document.write(`<br>`+sum);
}

sumar(12,44);
sumar(27,12);


function saludos(nombre){
    let frace=`<br>Hola ${nombre} como estas ? espero que bien`;
    document.write(frace);
}

saludos("Pedro");

// Otras formas de declarar funciones, funciones flecha 
espacio();

flecha = () => {
    document.write(`<br>Hola soy una funcion flecha`);
}

flecha=()=> document.write("Hola");


flecha=parametro=>document.write(parametro);

flecha("Hola soy el parametro");





