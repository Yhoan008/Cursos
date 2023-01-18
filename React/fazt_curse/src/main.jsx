import React from 'react'
import ReactDOM from 'react-dom/client'
import { Estados, EstadosClass } from './Pruebas'

ReactDOM.createRoot(document.getElementById('root')).render(
  // React.StrictMode es el modo estricto 
  <React.StrictMode>
    <EstadosClass/>
  </React.StrictMode>,
)
