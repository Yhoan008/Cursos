import React from 'react'

// En react tenemos una gran varidad de modulos de terceros que podemos utilizar libremente
// por ejemplo en este caso utilizaremos un modulo para el uso de iconos en React


// Para el uso de los iconos primero instalamos el modulo desde la consola 

// npm install react-icons --save

// La lista de iconos esta en https://react-icons.github.io
// una vez instalado, vamos a poder usar los iconos asi : 
import { AiFillAlert } from 'react-icons/ai';


export class Icons extends React.Component{
    render(){
        return (
            <div>
                <AiFillAlert/> {/* De esta forma usamos el componente del icono */}
                hola mundo
            </div>
        );
    }
}