//En este capitulo vamos a implementar las promesas async await a las peticiones XMLHttpRequest, fetch y axios

const getAxios= async()=>{
    let peticion = await axios("info.json");
    let resultado =peticion.data;
    console.log(resultado);
}

getAxios();


const getFetch= async ()=>{
    let peticion=await fetch("info.txt");
    let respuesta = await peticion.json();
    console.log(respuesta);
}

getFetch();

