//        SERIALIZACION

/*
Los datos en un archivo json siempre se guardan como un string, la serializacion es convertir un objeto a string

Para la serializacion de un objeto vamos a usar JSON.stringify(), lo que nos devuelve el string

        serializado = JSON.stringify(objeto);

Y para la deserializacion (de string a objeto) vamos a usar JSON.parse

        deserializado = JSON.parse(string);


*/

/*
        OBTENER DATOS DE UN ARCHIVO JSON

Para esto tenemos dos metodos importantes: "GET" y "POST"

La principales diferencias entre get y post son:

        -Get usa la direccion url para el envio de los datos, Post no
        -En terminos de seguridad, Post es mas confiable
        -Get solo permite datos de tipo ASCI, Post admite cualquier tipo de dato binario

*/


