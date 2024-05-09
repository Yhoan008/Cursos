import './style.css';

export function Styles(){
    const style={
        width:"100px",
        height:"100px",
        backgroundColor: 'blue'
    }
    return (
        <>
            {/* Aca vemos las distintas formas para agregar estilos en React */}

            {/* Por medio de estilos en linea, se adjunta como objeto javascript*/}
            <div style={{width:"100px",height:"100px",backgroundColor:"red"}}></div>
            <div style={style}></div>

            {/* O tambien por medio de las clases, usando un archivo hoja de estilos externa, y haciendo la importacion previamente  */}
            <div className="box"></div>
        </>
    )
}



// Otra forma de usar estilos es mediante styled-components, que es un modulo que facilita el uso de CSS en React
// Primero debemos de instalar el modulo en las dependencias "styled-components"

// Luego importamos del modulo
import styled from 'styled-components'

// Y de la siguiente forma vamos a utilizarlos
const Button = styled.button`
    background: red;
    padding:20px;
    margin-top: 10px;
`;

// Se crean por fuera de la funcion que hace el llamado para evitar un Warning de creacion dinamica

//Recuerda usar Backtypes
const Input = styled.input`
    color: pink;
`;

export function StyledComponent(){
    return(
        <>
            <Button>Hola mundo</Button>
            <Input placeholder='hola' />
        </>
    )
}

