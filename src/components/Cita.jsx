import '../css/Cita.css'
import Boton from "./Boton.jsx";

function Cita(props) {

  return (
    <>
        <div className='cita'>
            <p>Mascota: <span>{props.nombreMascota}</span></p>
            <p>Dueño: <span>{props.dueñoMascota}</span></p>
            <p>Fecha: <span>{props.fecha}</span></p>
            <p>Hora: <span>{props.hora}</span></p>
            <p>Sintomas: <span>{props.sintomas}</span></p>
            <Boton clase="u-full-width button elimnar" contenido="Eliminar x"></Boton>
        </div>
    </>
  )
}

export default Cita
