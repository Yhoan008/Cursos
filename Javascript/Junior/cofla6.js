


let constructor = document.querySelector(".contenedor");


class Llaves{
    constructor(nombre,modelo,precio){
        this.nombre=nombre
        this.modelo=modelo;
        this.precio=precio;
    }

    show(){
        let div = document.createElement("DIV");
        div.classList.add("items");
        constructor.appendChild(div);
        div.innerHTML = `<h1>${this.nombre}</h1>` + `<img src="key.png" alt="llave">`+`<h3 style="opacity:.3">${this.modelo}</h3>` + `<h3>${this.precio}</h3>`;
    }
}

for (let i = 0; i < 20; i++) {
    let precio=Math.random()*50+50;
    precio=Math.round(precio);
    let modelo=Math.random()*10000;
    modelo=Math.round(modelo);
    const llave=new Llaves(`LLAVE ${i+1}`,`modelo: ${modelo}`,`precio: <b style="color:green">${precio}$</b>`);
    llave.show();
}





