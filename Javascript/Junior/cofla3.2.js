// Cofla ya tiene su nuevo celular y esta viendo los juegos mas populares de la play store, que tengan buena puntuacion y sean libianos, y si! el muy descarado jodio tanto con celulares de alta gama para ahora esta ahorrando espacio. 
// En primer lugar le llaman la atencion 7 aplicaciones que son muy similares, pero el solo va a descargar 2, ya que no quiere ser un perdedor y gastar mucho tiempo jugando, quiere que le ayudemos a decidir cuales descargar 

    // -Crear un sistema que ayude a cofla a decidir cual descargar 
    // -La informacion de los instaladores debe contener la cantidad de descargar, la puntuacion y el peso segun play store
    // -Las apps se deben poder instalar, abrir, cerrar, y desinstalar



class App{
    constructor(app,descargas,puntuacion,peso){
        this.app=app;
        this.descargas=descargas;
        this.puntuacion=puntuacion;
        this.peso=peso;
        this.iniciada=false;
        this.instalada=false;
    }

    get getDescargas(){
        return this.descargas;
    }
    get getPuntuacion(){
        return this.puntuacion;
    }
    get getPeso(){
        return this.peso;
    }

    show(){
        return (`
            <b>Nombre de la app: </b>${this.app}<br>
            <b>Descargas: </b>${this.descargas}M<br>
            <b>Puntuacion: </b>${this.puntuacion}<br>
            <b>Peso: </b>${this.peso}Mb<br>
        `);
    }

    instalar(){
        if(this.instalada == false){
            this.instalada = true;
            alert(`${this.app} ha sido instalada correctamente`);
        }else{
            alert(`${this.app} ya se encuentra instalada`);
        }
    }
    desinstalar(){
        if(this.instalada == true){

            if(this.iniciada == true){
                this.iniciada-false;
                alert(`${this.app} finalizada`);
            }

            this.instalada = false;

            alert(`${this.app} ha sido desinstalada correctamente`);

        }else{
            alert(`${this.app} no se encuentra instalada`);
        }
    }
    abrir(){
        if(this.iniciada == false){

            if(this.instalada == false){
                alert("Porfavor instale la aplicacion primero");
            }else{
                this.iniciada = true;
                alert(`${this.app} ha sido iniciada`);
            }

        }else{
            alert(`${this.app} ya se encuentra en ejecucion`);
        }
    }
    cerrar(){
        if(this.iniciada == true){
            this.iniciada = false;
            alert(`${this.app} finalizada`);
        }else{
            alert(`${this.app} no se encuentra en ejecucion`);
        }
    }

}


let subway=new App("Subway Surfers",1000,4.6,131);
let guys=new App ("Stumble Guys",100,4.4,79);
let snow=new App("Snow Race",10,2.6,52);
let emoji=new App("Emoji legend",1,4,39);
let billar=new App("8 Ball Billiards",1,4.4,55);
let car=new App("GT Car Stund Master 3D",10,3.7,71);
let parchis=new App("Parchis STAR",100,4.3,79);


document.write(
    subway.show()+`<br>`+
    guys.show()+`<br>`+
    snow.show()+`<br>`+
    emoji.show()+`<br>`+
    billar.show()+`<br>`+
    car.show()+`<br>`+
    parchis.show()+`<br>`
);


