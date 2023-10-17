import React, {useState} from "react";
import '../hojas-de-estilo/Formulario.css'
import {v4 as uuidv4} from "uuid"

function Formulario(props) {
  
  const [input, setInput] = useState('');
  
  const manejarCambio = evento => {
    setInput(evento.target.value);
  }
  
  const manejarEnvio = evento => {
    evento.preventDefault();
    
    const tareaNueva = {
      id: uuidv4(),
      texto: input,
      completada: false
    }

    props.onSubmit(tareaNueva); 
    // esto ocurre cuando un formulario se intente enviar
  }
  
  return (
    <form 
    className="formulario-tarea"
    onSubmit={manejarEnvio}
    >
      <input
        className="input-tarea"
        type="text"
        placeholder="Ingresa una tarea"
        name="texto"
        onChange={manejarCambio}
      />
      <button className="boton-tarea">
        Agregar tarea
      </button>
    </form>
  )
}

export default Formulario;