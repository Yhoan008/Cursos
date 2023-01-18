// Cofla termino el primer semestre pero no sabe si aprobo o no las materias, para saberlo debe de : 

// Contar con al menos el 90% de asistencias completas 
// El promedio por materia debe de ser al menos de 7/10
// Debe de tener al menos el 75% de los trabajos entregados 

//     -Solicitar los datos y decirle si aprueba o no
//     -Mostrar todo esto con colores representativos en consola
//     -Mostrar todo estructurado como tabla


//console.log("%cMensaje rojo","color:red")


let materias={
    ciencia:[],
    matematicas:[],
    ingles:[],
    sociales:[],
    calculo:[],
    geometria:[],
    geografia:[],
    algebra:[]
}


let names=Object.keys(materias);


function asis(materia){
    for(i=0;i<3;i++){
        materia[i]=Math.random()*100;
        materia[i]=Math.round(materia[i]);
    }
}

repro = (materia) =>{
    let aprueba=true;
    for(mater in materia){
        if(materia[0]<50){
            aprueba=false;
        }
        if(materia[1]<50){
            aprueba=false;
        }
        if(materia[2]<50){
            aprueba=false;
        }
    }
    return aprueba;
}



for(mates in materias){
    asis(materias[mates]);
    if(repro(materias[mates])==false){
        console.log(`%cLa materia ${mates} ha sido reprobada, eres un pendejo`,`color:red;padding:3px`);
    }
}

console.table(materias);


repro(materias.ciencia);




