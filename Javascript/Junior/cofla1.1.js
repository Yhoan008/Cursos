//3 chicos de 23 años entran en una heladeria a comprar pero hay un problema, los preciso no estan al lado de cada esstante con su respectivo helado 
// Ellos quieren comprar el helado mas caro que puedan con la plata que tienen, asi que veamos como podemos ayudarlos 

// Roberto tiene $1.500 
// Pedro tiene $1700
// Cofla tiene $3000

// Los precios de los helados son:

// Palito de helado de agua : $ 600
// Palito de helado de crema : $ 1000
// Bombon helado marca heladix : $ 1600
// Bombon helado marca heladovich : $ 1700
// Bombon Helado marca helardo : $ 1800
// Potencito de helado con confites : $ 2900
// Pote de 1/4 kg : $ 2900

var nombre = prompt("Quien esta comprando?");
var dinero;

if(nombre == `Roberto`){
    dinero=1500;
}
else if( nombre ==`Pedro`){
    dinero=1700;
}
else if(nombre==`Cofla`){
    dinero=3000;
}
else{
    alert("Nombres no corresponden");
}

//Helados 
var agua = 600;
var crema=1000;
var heladix=1600;
var heladovich=1700;
var helardo=1800;
var poteConfi=2900;
var pote=2900;


if (dinero >= agua && dinero < crema){
    document.write(`${nombre} Comprate un helado de agua`);
}
else if(dinero >= crema && dinero < heladix){
    document.write(`${nombre} Comprate un helado de crema`);
}
else if(dinero >=heladix && dinero < heladovich){
    document.write(`${nombre} comprate un helado marca Heladix`);
}
else if (dinero >= heladovich && dinero < helardo){
    document.write(`${nombre} comprate un helado de marca Heladovich`);
}
else if (dinero >= helardo && dinero < poteConfi){
    document.write(`${nombre} comprate un helado de marca Helardo`);
}
else if (dinero >= poteConfi && dinero < pote){
    document.write(`${nombre} comprate un pontecito de helado con confites`);
}
else if (dinero >= pote){
    document.write(`${nombre} comprate un pote de 1/4 kg <br>`);
    if(dinero > pote){
        let vuelto = dinero - pote;
        document.write(`Ademas te sobran $`+vuelto);
    }
}
