// Un joven muy afortunado logro ganar un premio de la loteria, y decide hacer una fiesta y compro una maquina que solo permite pasar a las personas que :

// - Son mayores de edad 
// - La primera persona que entre despues de las 2AM, no paga entrada

const fecha = ()=>{
    var today = new Date();
    
    var now = today.toLocaleString();
    
    return now;

}

let edad;
let time;
let fila=2;

const entrada = (edad,time) =>{
    let free=false;
    if(edad >= 18){
        if(time >= 2 && time <= 6){
            alert("Puedes entrar papasito, y Gratis");
        }
        else{
            alert("Entras pero invitas la primera ronda");
        }
    }
    else {
        alert("Vete a casa a llorar a casas niñato");
    }
}



while(fila!=0){
    edad=prompt("Que edad tienes?");
    time=prompt("Papi me regala la hora?");
    entrada(edad,time);
    fila--;
}

document.write("Todos los clientes han sido atendidos");

