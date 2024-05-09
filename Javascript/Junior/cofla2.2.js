// Cofla quiere ser el mejor programador de su facultad de la universidad, en su curso son en total 5 alumnos pero ocurrio un problemon 

// Se daño el sistema de registros de asistencias y no se puede tomar asistencia por 10 dias 

// -Crear un sistema para tomar asistencia 
// -Pasados 30 dias mostrar el numero total de ausentes y de presentes 
// -Si algun alumno tiene mas del 10% en fallas o inasistencias, reprueba el curso



let nom = prompt("Cuantos alumnos son ?");

let alumnos=[];

for(let i=0;i<nom;i++){
    alumnos[i]=[prompt(`Nombre del estudiante ${i+1}`),0];
}

var cantidadDias=10;


for(let i=0;i<cantidadDias;i++){
    
    for(let j=0;j<nom;j++){
        
        let present=prompt(`Esta el estudiante ${alumnos[j][0]} presente?`);
        if(present == "P" || present == "p"){
            alumnos[j][1]++;
        }
        
    }
    
}

var contador=0;


for(let i=0;i<nom;i++){
    document.write(`
    <h2><b>${alumnos[i][0]}</b> tuvo: <br></h2>
    ${alumnos[i][1]} asistencias <br>
    ${cantidadDias-alumnos[i][1]} inasistencias
    `)

    let percent=(cantidadDias-alumnos[i][1])/cantidadDias;

    if(percent>.1){
        document.write(`
        <b style="color:red">
        Lo siento has reprobado el curso
        </b>
        `);
    }

    document.write(`<br><br>`);

}



