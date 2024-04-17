import { useState } from 'react'
import '../css/Cita.css'
import Boton from "./Boton.jsx";

function Cita({nombreMascota, dueñoMascota, fecha, hora, sintomas}) {
  const [count, setCount] = useState(0)

  return (
    <>
        <div className='cita'>
            <p>Mascota: <span>{nombreMascota}</span></p>
            <p>Dueño: <span>{dueñoMascota}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <Boton clase="u-full-width button elimnar" contenido="Eliminar x"></Boton>
        </div>
    </>
  )
}

export default Cita
