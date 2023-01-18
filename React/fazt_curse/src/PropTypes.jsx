// Los propTypes son una forma de decirle a react que tipo de valores se esperan, por lo que si se ingresan valores de distinto tipo, no lanza una advertencia


// Primero debemos de instalarlo desde node js con el comando 
// npm i prop-types

// Una vez instalado lo importamos 

import PropTypes from 'prop-types';

export function PropiesTypes({name,edad}){
    return (
        <>
            <h2>Tu nombre es {name}</h2>
            <p>Y tu edad es {edad}</p>
        </>
    )
}

// Para usar los proptypes en un componente lo hacemos con el objeto :

PropiesTypes.propTypes = {
    text : PropTypes.string, // Aca especificamos el tipo de dato que estamos recibiendo
    edad : PropTypes.number.isRequired // Y aca decimos que es necesario
}

/*

root.render(
    <PropiesTypes
    name="carlos"
    edad={12}
    />
    );

*/
