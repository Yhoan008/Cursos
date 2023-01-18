// La facultad de cofla esta por comenzar y ya las 4 materias tienen asignado un profesor y todos los alumnos que se anotaron a dichas clases, pero necesitamos ver esto mas ordenadamente

//     -Crear una funcion que al pasarle como parametro la mateia nos devuelva el profesor asignado y el nombre de todos los alumnos

//     -Crear una funcion que diga en cuantas clases esta cofla, el nombre de cada clase y los profesores de cada una



class clase{
    constructor(materia,profesor,alumnos){
        this.materia=materia;
        this.profesor=profesor;
        this.alumnos=alumnos;
    }

    show(){
        document.write(`
            Materia: ${this.materia} <br>
            Profesor: ${this.profesor} <br>
            Alumnos: ${this.alumnos}
        `);
    }
}


let ciencias=new clase(
    "ciencias",
    "Leonardo",
    ["Luis","Maria","Camilo","Jorge"]
);

let matematicas=new clase(
    "Matematicas",
    "JulioProfe",
    ["Luis","Maria","Mateo","Cofla","Jorge"]
);

let historia=new clase(
    "Historia",
    "Cesar",
    ["Maria","Cofla","Mateo","Camilo"]
);

let ingles=new clase(
    "Ingles",
    "Juliana",
    ["Luis","Camilo","Jorge","Maria","Mateo"]
);


function consultar(){

    let materia;
    let cont;
    
    do{
        materia=prompt("Que materia desea consultar?");
        cont=0;
        switch(materia){
            case "ciencia":
                ciencias.show();
                break;
        
            case "matematicas":
                matematicas.show();
                break;
    
            case "historia":
                historia.show();
                break;
    
            case "ingles":
                ingles.show();
                break;
        
            default:
                alert(`Parametro invalido, intenta con: 1.ciencia 2.matematicas 3.ingles 4.historia`);
                cont=1;
                break;
        }
    }while(cont == 1)

}

let mat=[];

function cofla(){
    let cont=0;
    
    for(cofla of ciencias.alumnos){
        if(cofla == "Cofla"){
            mat.push("ciencias");
            cont++;
        }
    }
    for(cofla of matematicas.alumnos){
        if(cofla == "Cofla"){
            mat.push("matematicas");
            cont++;
        }
    }
    for(cofla of ingles.alumnos){
        if(cofla == "Cofla"){
            mat.push("ingles");
            cont++;
        }
    }
    for(cofla of historia.alumnos){
        if(cofla == "Cofla"){
            mat.push("historia");
            cont++;
        }
    }

    return cont;
}



consultar();

document.write(`<br><br>Cofla esta en ${cofla()} clases: ${mat}`);







