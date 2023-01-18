// La respuesta de un servidor estan asociadas a codigos de estado que pueden ser los siguientes :

// Aquí tienes algunos de ellos y su significado:

// 100-199 denota una respuesta informativa.
// 200-299 denota una solicitud exitosa.
// 300-399 denota una redirección.
// 400-499 indica un error del cliente.
// 500-599 denota un error del servidor.



const req = new XMLHttpRequest();

req.open("GET","users.json");
req.send();
req.onload=()=>{
    let respuesta=JSON.parse(req.response);
    console.log(respuesta);
};



const form_name=document.getElementById("name");
const form_user=document.getElementById("user");
const form_pass=document.getElementById("pass");
const form_btn=document.getElementById("btn");

form_btn.addEventListener("click",()=>{
    let name = form_name.value;
    let user = form_user.value;
    let pass = form_pass.value;

    req.open("POST","users.json");
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    
    req.onload=()=>{
        if (req.readyState == 4 && req.status == 201) {
            console.log(JSON.parse(req.response));
        } else {
            console.log(`Error: ${req.status}`);
        }
    }

    const body=`{
        "name":"${name}",
        "user":"${user}",
        "pass":"${pass}"
    }`;
    req.send(body);

})





