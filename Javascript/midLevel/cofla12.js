const datos=[
    ['Fisica',50],
    ['Matematicas',40],
    ['Sociales',25],
    ['CPoliticas',38],
    ['Ingles',43],
    ['Ciencias',35],
    ['Etica',45]
]


const obtenerMateria=(id)=>{
    return new Promise((res,rej)=>{
        res(datos[id]);
        rej('Imposible obtener los Datos');
    })
}
const mostrarDatos = async ()=>{
    for (let i = 0; i < datos.length; i++) {
        let materia=await obtenerMateria(i);

        console.log(materia);
    }
}

mostrarDatos().catch((e)=>{
    console.log(e);
});