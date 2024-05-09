/*

    <div class="container">
        <h2>
            Nota final de la materia <b class="container_mat"></b> es 
            <input type="text" value="" class="container_note">
            <input type="button" value="Guardar" class="container_btn">
        </h2>
    </div>

    <div class="msg">
        <button class="msg_btn">X</button>
        <h2 class="msg_text">Reprobaste la materia</h2>
    </div>

    <style>
        body{
            background-color: coral;
            height:100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0;
            margin: 0;
        }
        .container{
            width:600px;
            height:100px;
            background-color:cornflowerblue;
            display: flex;
            justify-content: center;
            align-items: center;
        }
        .container_note{
            width:20px;
            font-size: .7em;
            border-radius: 5px;
        }
        .container_btn{
            padding: 5px;
            border-radius: 5px;
            cursor:pointer;
        }
        .msg{
            position: absolute;
            width:100%;
            height:100%;
            background-color: rgb(128, 128, 128,.6 );
            display: flex;
            flex-direction: row-reverse;
            justify-content: center;
            align-items: center;
            display: none;
        }
        .msg_text{
            padding:40px 100px;
            border-radius:20px;
            background-color: rgb(170, 189, 128);
        }
        .msg_btn{
            margin-bottom: 90px;
        }
    </style>

*/


let container_btn = document.querySelector('.container_btn');
let nota = document.querySelector('.container_note');
let materia = document.querySelector('.container_mat');
let msg = document.querySelector('.msg');
let msg_text = document.querySelector('.msg_text');
let msg_btn = document.querySelector('.msg_btn');

let materias = ['ingles','sociales','matematicas','economia'];

asignarMateria=()=>{
    let ram = Math.random();
    ram = Math.round(ram*5);
    if(ram!=0){
        ram--;
        if(ram ==4 ){
            ram--;
        }
    }
    return(ram);
}

let mat =materias[asignarMateria()];
materia.innerHTML=mat;

let note;
let valido;
reset=()=>valido=false;

validarNota=()=>{
    if(isNaN(parseInt(nota.value))){
        alert('Has ingresado erroneamente la nota');
    }else{
        note = parseInt(nota.value);
        if(note>0 && note<=10){
            valido=true
        }else{
            alert('Ingresa un rango valido');
        }
    }
}


container_btn.addEventListener('click',()=>{
    validarNota();
    if(valido==true){
        msg.style.display = 'flex';
    }
    if(note<7){
        msg_text.innerHTML=`
        <b style='color:red;font-size:1.4em;'>Reprobaste</b>
        
        la materia Tonto
        `;
    }else if(note>=7){
        msg_text.innerHTML=`
        Felicidades
        <b style='color:green;font-size:1.4em;'>aprobaste</b> 
        ${mat}
        `;
    }
})

msg.addEventListener('click',()=>{
    reset();
    msg.style.display = 'none';
})
msg_text.addEventListener('click',(e)=>{
    e.stopPropagation();
})
msg_btn.addEventListener('click',()=>{
    reset();
    msg.style.display = 'none';
})