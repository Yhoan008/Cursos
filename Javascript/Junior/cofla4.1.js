// Optimizar la calculadora para operar tambien potencias, raices cuadradas y cubicas 



const sumar = (a,b) => a+b;
const restar = (a,b) => a-b; 
const dividir = (a,b) => a/b;
const multiplicar = (a,b) => a*b;
const potencia = (a,b) => Math.pow(a,b);
const raiz2 = (a) =>  Math.sqrt(a);
const raiz3 = (a) => Math.cbrt(a);

let a=parseInt(prompt(`Ingrese le primer numero: `));
let op=prompt(`Ingrese el operador:`);
let b=parseInt(prompt(`Ingrese el segundo numero: `));;


switch(op){
    case "+":
        document.write("Resultado: "+sumar(a,b));
        break;
    
    case "-":
        document.write("Resultado: "+restar(a,b));
        break;

    case "/":
        document.write("Resultado: "+dividir(a,b));
        break;

    case "*":
        document.write("Resultado: "+multiplicar(a,b));
        break;

    case "**":
        document.write("Resultado: "+potencia(a,b));
        break;

    case "v2":
        document.write("Resultado: "+raiz2(a));
        break;

    case "v3":
        document.write("Resultado: "+raiz3(a));
        break;

    default:
        document.write("Idiota selecciona una opcion valida!");
    

}
