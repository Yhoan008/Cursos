import styled, { createGlobalStyle } from 'styled-components';
//Realizamos la impotacion del hook
import { useState } from 'react';

const GlobalStyles = createGlobalStyle`
    body{
        background: coral;
        display: flex;
        justify-content: center;
        align-items: center;
        height:100vh;
    }
`;
const Button = styled.button`
    padding : 10px;
    margin: 0 20px 0 20px;
    border-radius: 10px;
    font-weight:900;
    background-color: rgb(255, 165, 0);
    cursor:pointer;
    &:hover{
        background-color: rgb(255, 100, 0);
    }
`;
const Text = styled.h2`
    text-align: center;
`;


export function UseState(){

    // Con la siguiente linea de codigo se establece el setState, que es el valor que va a estar cambiando en la pagina, esto es para no recargar la pagina entera cuando algo se actualiza
    let [counter , setCount] = useState(0);



    // Este es un ejemplo de que podemos tambien hacer la declaracion de variables fitrando un array
    const array1 = ["yhoan","mateo","moreno"];
    const [primerValor] = array1; // Para devolver solo el primer valor del arreglo
    const [primerValores, segundoValor] = array1; // 
    console.log(segundoValor);

    // Si imprimimos useState() vemos que es un array que espera dos valores, [undefined, ƒ], la primer propiedad es el valor que va a estar variando, y la segunda propiedad es la funcion del cambio
    console.log(useState());

    // let [counter , setCount] = useState(0); Por lo anterio se usa esta sintaxis 
    // useState() define el valor inicial
    
    return <>
        <GlobalStyles/>
        <Text>Counter: {counter}</Text>
        <Button onClick={()=>{setCount(counter=counter+1)}}> Sumar </Button>
        <Button onClick={()=>{setCount(counter=counter-1)}}> restar </Button>
        <Button onClick={()=>setCount(counter=100)}> reiniciar </Button>
    </>
}


