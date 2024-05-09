// Cofla necesita hacer unos ejercicios de matematicas pero es un perezoso de mierda por lo que quiere que le hagamos una calculadora 
// -Crear una calculadora que incluya suma resta division y multiplicacion


const sumar = (a,b) => a+b;
const restar = (a,b) => a-b; 
const dividir = (a,b) => a/b;
const multiplicar = (a,b) => a*b;

let a=parseInt(prompt(`Ingrese le primer numero: `));
let op=prompt(`Ingrese el operador:`);
let b=parseInt(prompt(`Ingrese el segundo numero: `));;

if(op == "+"){
    document.write("Resultado: "+sumar(a,b));
}
else if(op == "-"){
    document.write("Resultado: "+restar(a,b));
}
else if(op == "/"){
    document.write("Resultado: "+dividir(a,b));
}
else if(op == "*"){
    document.write("Resultado: "+multiplicar(a,b));
}
else{
    document.write("Eres imbecil tienes que indicar un operador valido");
}



