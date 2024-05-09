// En las siguientes dos lineas inicializamos las funciones de react y reactDom
import React from "react";
import ReactDom from "react-dom/client";

// document.getElementById('root') es la ruta al contenedor de la aplicacion en el archivo html(carpeta public)

// Y con reactDom.createRoot inicializamos la aplicacion react, indicando el contenedor
const root = ReactDom.createRoot(document.getElementById("root"));

// Y con render() inicializamos un elemento en la aplicacion, solo podemos hacer una vez la renderizacion de la app con todos sus componentes ya activos, si se ejectua nuevamente, se cargara la pagina nuevamnete

// root.render(<h1>Hola React!!</h1>);

// CONCEPTOS

// React solo hace uso de javascript
// En react cada seccion o conjunto de elementos se le llaman componentes, los cuales son replicables

// Los componentes son funciones, debe de siempre iniciarse con mayuscula.

function MiPrimerComponente() {
  return <h1>Hola React!!!</h1>;
}

// Para hacer uso de los componentes se puede de la siguientes formas :

root.render(MiPrimerComponente());

root.render(
  // Uso de llaves para ejecutar codigo dentro de un html
  <h1>{MiPrimerComponente()}</h1>
);

root.render(
  <div>
    <MiPrimerComponente></MiPrimerComponente>
    <MiPrimerComponente />
  </div>
);





/// Otra forma de crear un componente es por medio de clase hija de React.Component

class MiSegundoComponente extends React.Component{
  render(){
    return (<h1>Hola mundo</h1>)
  }
}





// Para el uso de las propiedades se usa los props, o parametros

function Saludar (props){
  return (<div>Hola { props.name } un gusto saludarte</div>);
}

root.render(<Saludar name="sara" />);


