"use strict";


// Funciones flecha


// Funcion normal

function constructor1(nombre,edad){
    this.nombre = nombre;
    this.edad = edad;
}

const persona = new constructor1("yhoan","moreno");

//console.log(persona); // constructor {nombre: 'yhoan', edad: 'moreno'}


const constructor2=(nombre,edad)=>{
    this.nombre=nombre;
    this.edad = edad;
}

try{
    const persona2 = new constructor2("lucas","dalto"); // TypeError: constructor2 is not a constructor
}catch(e){
    //console.log(e);
}





// LAS FUNCIONES FLECHA NO PUEDEN SER CONSTRUCTORES, PORQUE THIS ESTARIA APUNTANDO A WINDOW 




// Anidacion de funciones

//Una funcion puede hacerse el llamado asi misma pero hay que tener cuidado ya que puede generar un bucle infinito 

function saludar(x){
    try{
        //let edad = prompt("Porfavor ingresa tu edad");
        edad = parseInt(edad);
        if(isNaN(edad)) throw "introduce un numero para tu edad";
    }catch(e){
        //console.log(e);
    }
}
saludar(12);






// Funcion hecha para crear un formato html
function crearEntorno(){
    const body = document.querySelector("body");
    
    
    const cajas = `
        <div class="container">
            <div class="caja t14">14px</div>
            <div class="caja t20">20px</div>
            <div class="caja t25">25px</div>
        </div>
        <p class="text">
            Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora   quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris.    Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat    cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos     flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum  cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead. Cum     horribilem walking dead resurgere de crazed sepulcris creaturis, zombie sicut de grave feeding iride et     serpens. Pestilentia, shaun ofthe dead scythe animated corpses ipsa screams. Pestilentia est plague.
        </p>
    `;

    body.innerHTML = cajas;
    
    const container = document.querySelector(".container");

    container.style.display="flex";
    container.style.flexDirection="row";
    container.style.width ="100%";

    const caja = document.querySelectorAll(".caja");
    
    caja.forEach(box=>{
        const scaja = box.style;
        
        scaja.width = "50px";
        scaja.height = "50px";
        scaja.backgroundColor = "red";
        scaja.marginRight = "10px";
        scaja.cursor = "pointer";
    })    

}
crearEntorno();

// Definimos las variables a editar 

const px14 = function (){document.querySelector(".text").style.fontSize="14px"};
const px20 = function (){document.querySelector(".text").style.fontSize="20px"};
const px25 = function (){document.querySelector(".text").style.fontSize="25px"};

document.querySelector(".t14").addEventListener("click",px14);
document.querySelector(".t20").addEventListener("click",px20);
document.querySelector(".t25").addEventListener("click",px25);





// ARGUMENT

let arr = ["hola","me","lo"];
let arr2 = ["chupas","?"];

// ... los tres puntos se usan para hacer uso de cada uno de los valores de arr2
arr.push(...arr2);

console.log(arr);