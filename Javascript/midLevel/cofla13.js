/*

Cofla esta cursando el ultimo semestro pero quiere saber cuantas personas de las que estan en su carrera pasan, el tiene acceso a esa informacion 

    crear un sistema para obtener la informacion 
    Mostrarla ordenadamente

*/


const getInfo=async()=>{
    
    try{
        
        let resultado = await axios("info.json");
        const mostrar=document.querySelector(".mostrarInfo");
        mostrar.innerHTML=`
            Aprobados : ${resultado.data.aprobados}\n
            Desaprobados : ${resultado.data.desaprobados}
        `;
    }catch{
        const mostrar=document.querySelector(".mostrarInfo");
        mostrar.innerHTML=`Informacion no pudo ser mostrada`;
    }
    
}


const btn = document.querySelector(".getInfo");

btn.addEventListener('click',()=>{
    getInfo();
})

