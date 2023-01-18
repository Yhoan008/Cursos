
// OBJETOS Y CLASES 

// Un objeto es una coleccion de datos relacionados, el cual puede tener propiedades y metodos, por ejemplo un carro puede ser un objeto, las propiedades del carro son que tiene llantas, tiene altura, tiene velocidad maxima, tiene cantidad de puertas , etc. Y tambien tiene metodos como por ejemplo arrancar, frenar, encender, etc.

// Inicializacion de un nuevo objeto
let myCar = new Object();

// Propiedades de un objeto 
myCar.make="Ford";
myCar.model="Mustang";
myCar.year=1969;

// Los objetos y los arrays asociativos se pueden utilizar de la misma forma 
myCar={
    make:"Ford",
    model:"Mustang",
    year:1969,
    color:"red",
    height:"1000cm",
    1:"number"//Tambien podemos crear propiedades numerales pero solo dentro de un array asociativo
}
// De esta forma creamos un array para el objto myCar, por lo que las propiedades de la linea 10 ya no se tendran en cuenta


// Para acceder a las propiedades y metodos de un objeto es con el nombre del objeto, un punto y la propiedad o metodo a llamar
myCar.make="Tesla";
// o asi
myCar["year"]=1970;


// hasOwn Property es un funcion que filtra propiedades de un objeto
for(car in myCar){
    if(myCar.hasOwnProperty(car)){
        document.write(`myCar.${car}=${myCar[car]}<br>`);
    }
}

espacio();





// La siguiente es una funcion constructora, al instanciarla podremos crear la cantidad de objetos que querramos, todos teniendo las propiedades mensionadas despues del this 
function Person(altura,sexo,raza,funcion){
    this.altura=altura;
    this.sexo=sexo;
    this.raza=raza;
}


let oscar= new Person("1.70m","male","boyaco");
let maria=new Person("1.55m","female","Costeña");

for(p in oscar){
    document.write(`
    oscar.${p}=${oscar[p]}<br>
    `);
}

espacio();

// Podemos agregar una nueva propiedad al constructor con el comando prototype, esto se aplica a todas las clases
Person.prototype.color=null;
maria.color="red";// Luego asignamos el valor de color a la clase maria


for(p in maria){
    document.write(`
        maria.${p}=${maria[p]}<br>
    `);
}


espacio();




// En la creacion de nuevos objetos podemos tambien incluir funciones como metodos
//Hay dos formas de agregar metodos
let mateo={
    altura:"1.68m",
    sexo: "male",
    raza:"rolo",
    caminar:function(){
        document.write("Caminando");
    },
    correr(){
        document.write("Corriendo");
    }
}

// Otra forma de instancia nuevos objetos a partir de arrays asociativos
let yhoan=Object.create(mateo);

yhoan.caminar();
espacio();
yhoan.correr();





//  METODOS GETTER AND SETTER 


let number={

    a:2,
    b:4,

    //  Metodo get devuelve una propiedad del objeto
    get(){
        return this.a;
    },

    // Metodo set cambia una propiedad del objeto
    set(b){
        this.b=b;
    }

}

espacio();
espacio();

number.set(5);

document.write(number.b);

espacio();

// De esta forma eliminamos una propiedad o metodo de un objeto
delete number.b;
document.write(number.b);









//      CLASES  

// Son funciones especiales usadas para la creacion de objetos, suponen una mejora sintactica para la declaracion de las mismas, de sus propiedades y metodos 

espacio();
espacio();

// Por buena practica se declara en mayuscula 
class Rectangulo{

    //Funcion constructora, solo puede haber un metodo asi o arrojara error
    constructor(ancho,largo){
        this.ancho=ancho;
        this.largo=largo;
    }

    //Metodo
    show(){
        return "Hola me invoco la clase instanciada";
    }


    //Metodo estatico, a diferencia del anterior metodo, solo funciona si declaramos desde la clase constructora en vez de sus instancias 

    static staticShow(){
        return "Hola me invoco la clase madre constructora";
    }

    // Dentro de las clases podemos crear los Getter and Setters, que son metodos pero al llamarlos funcionan como propiedad, Get devuelve un valor, Set redefine un valor 

    get getAncho(){
        return this.ancho;
    }
    get getLargo(){
        return this.largo;
    }

    set setAncho(ancho){
        this.ancho=ancho;
    }
    set setLargo(largo){
        this.largo=largo;
    }

}

//Inicializamos el nuevo objeto
const cuadrado=new Rectangulo(10,10);

//Diferencia entre un metodo normal y estatico
document.write(cuadrado.show());espacio();
document.write(Rectangulo.staticShow());espacio();espacio();


// Metodo GETTER 
document.write(`Soy un cuadrado ${cuadrado.getAncho} X ${cuadrado.getLargo}`);espacio();

// Metodo SETTER
cuadrado.setAncho = 20;
cuadrado.setLargo = 20;

document.write(`Soy un cuadrado ${cuadrado.getAncho} X ${cuadrado.getLargo}`);


espacio();espacio();


//HERENCIA 
class Animales{
    constructor(nombre){
        this.nombre=nombre;
    }

    hablar(){
        return `${this.nombre} hacer ruido`;
    }
    
}

class Perro extends Animales{

    constructor(nombre,patas){
        //Para llamr a propiedades de la clase padre se utiliza super, el resto se definen normalmente
        super(nombre);
        this.patas=patas;
    }
    
    ladrar(){
        return (
            `
            ${super.hablar()} <br> pero ademas tambien ladra
            <br> y tiene ${this.patas} patas
            `
        );
    }
    
}


let rana=new Animales("Reveg");
let perro=new Perro("firulais",4);

document.write(perro.ladrar());
























function espacio(){
    document.write(`<br>`);
}