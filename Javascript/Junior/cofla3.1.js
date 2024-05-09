// Cofla entro a una tienda de celulares robados porque quiere comprar uno, le llamaron la atencion 3 de ellos. Quiere ver las cualidades y comportamientos de cada uno para compararlos 

// - Crear un sistema que muestre las particularidades de cada celular 
// -Cada celular debe tener color, peso, resolucion de pantalla, resolucion de camara y memoria ram
// -Cada celular debe poder prender, reiniciar, apagar, tomar fotos y grabar 


class Cell{
    constructor(marca,color,peso,resPantalla,resCamara,ram){
        this.marca=marca;
        this.color=color;
        this.peso=peso;
        this.resPantalla=resPantalla;
        this.resCamara=resCamara;
        this.ram=ram;
    }

    show(){
        return (`
            marca:                  ${this.marca} <br>
            color:                  ${this.color}   <br>
            peso:                   ${this.peso}Kg  <br>
            Resolucion de pantalla: ${this.resPantalla} px<br>
            Resolucion de Camara:   ${this.resCamara} px  <br>
            Ram :                   ${this.ram} Gb   <br>

        `);
    }

    prender(){
        return "Encendiendo..";
    }
    reiniciar(){
        return "Reiniciando..";
    }
    apagar(){
        return "Apagando";
    }
    foto(){
        return "Tomando fotografia, Diga Wiskey!"
    }
    grabar(){
        return "Grabando";
    }

}


let moto = new Cell("Moto","rojo",2.5,"1200X4000","1600x1200",4);
let huawei = new Cell("Huawei","verde",3,"1400X6000","1200x600",4);
let blu = new Cell("Blu","amarillo",2,"500X2000","1800x1500",2);

document.write(moto.show());
espacio();
document.write(huawei.show());
espacio();
document.write(blu.show());






// Cofla no esta satisfecho con los celulares asi que decide ir a la secion de celulares de alta gama, donde encuentra los mas caros
// De estos le gustaron dos celulares de alta gama, hacen todo lo que hacian los tres anteriores pero tambien pueden grabar en camara super lenta, tienen reconocimiento facial y una camara extra.

//     -Implementar todas estas cualidades 

class AltaGama extends Cell{
    constructor(marca,color,peso,resPantalla,resCamara,ram,resNewCamara){
        super(marca,color,peso,resPantalla,resCamara,ram);
        this.resNewCamara=resNewCamara;
    }


    showAltaGama(){
        return (
            super.show()+
            `Resolucion camara 2: ${this.resNewCamara} <br>`
        );

    }


    camaraLenta(){
        return "Grabando en camara lenta";
    }

    reconocerCara(){
        return "Analizando... estas bien feo!";
    }

}


let apple=new AltaGama("Apple","Marron",2.4,"1080X1360","1800x1500",2,"2000x1500");

let samsun=new AltaGama("Samsun","Rojo",3.2,"1080X1360","1500x1200",2,"1800x1500");


espacio();
document.write(apple.showAltaGama());
espacio();
document.write(samsun.showAltaGama());







function espacio(){
    document.write(`<br><br>`);
}



