//Aca renderizamos el componente app para que 
// react funcione, pero para mostralo lo hacemos desde el servidor

import { renderToString } from "react-dom/server";

import App from "./app.jsx";

export const render = () => {
  return renderToString(<App />);
};
