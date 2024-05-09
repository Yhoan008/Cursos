// Cofla vio las 3 materias y ya decidio a cual se va a incribir asi que lo hara, el problema es que se rompio el sistema de inscripciones 

//     -Preguntarle a cofla a que materia se quiere inscribir
//     -Si ya hay 4 o mas alumnos inscritos, negarle la inscripcion
//     -Si hay menos de 4 alumnos inscribir a cofla y añadirlo a la lista de alumnos


let matematicas=["jorge","Luis","Mario","Dario"];
let ingles=["jorge","Luis","Mario","Dario","Maria","Dalto"];
let sociales=["jorge","Luis","Mario"];


let materia=parseInt(prompt("Selecciona 1.Matematicas 2.Ingles 3.Sociales"));

switch(materia){
    case 1:
        if(matematicas.length >= 4){
            document.write(`No hay cupos disponibles en matematicas`);
            break;
        }else{
            matematicas.push("Cofla");
            document.write(`Te has inscrito satisfactoriamente a matematicas, tus compañeros de clase son: ${matematicas}`);
            break;
        }

    case 2:
        if(ingles.length >= 4){
            document.write(`No hay cupos disponibles en ingles`);
            break;
        }else{
            ingles.push("Cofla");
            document.write(`Te has inscrito satisfactoriamente a ingles, tus compañeros de clase son: ${ingles}`);
            break;
        }
    
    case 3:
        if(sociales.length >= 4){
            document.write(`No hay cupos disponibles en sociales`);
            break;
        }else{
            sociales.push("Cofla");
            document.write(`Te has inscrito satisfactoriamente a sociales, tus compañeros de clase son: ${sociales}`);
            break;
        }
}



