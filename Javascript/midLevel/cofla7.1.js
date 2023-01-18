let alto = screen.availHeight;
let ancho = screen.availWidth;


let compra = confirm(`Dimensiones de la pantalla: \nAncho: ${ancho}px \nAlto: ${alto}px \nSeguro que desea realizar la compra?`);

if(compra){
    alert('compra realizada');
}else{
    alert('compra cancelada');
}

let url = location.href;
let host = location.hostname;
let dom = location.pathname;
let pro = location.protocol;

document.write(`url: <h4 style='color:red;display:inline'>${url} </h4><br>`);
document.write(`Host: <h4 style='color:red;display:inline'>${host}</h4> <br>`);
document.write(`Dominio: <h4 style='color:red;display:inline'>${dom} </h4><br>`);
document.write(`Protocolo: <h4 style='color:red;display:inline'>${pro} </h4><br>`);



