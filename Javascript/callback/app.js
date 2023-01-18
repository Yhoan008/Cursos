function alertar(hola){
    alert(`hola ${hola}`);
}

function llamar(callback){
    let name = prompt("ingresa un nombre");
    callback(name);
}

llamar(alertar);