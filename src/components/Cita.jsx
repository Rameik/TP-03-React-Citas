import '../css/Cita.css'
import Boton from "./Boton.jsx";

function Cita({nombreMascota, dueñoMascota, fecha, hora, sintomas, updateState, citas, index}) {

  return (
    <>
        <div className='cita'>
            <p>Mascota: <span>{nombreMascota}</span></p>
            <p>Dueño: <span>{dueñoMascota}</span></p>
            <p>Fecha: <span>{fecha}</span></p>
            <p>Hora: <span>{hora}</span></p>
            <p>Sintomas: <span>{sintomas}</span></p>
            <Boton updateState={updateState} citas={citas} index={index} eliminar={true} clase="u-full-width button elimnar" contenido="Eliminar x"/>
        </div>
    </>
  )
}

export default Cita
