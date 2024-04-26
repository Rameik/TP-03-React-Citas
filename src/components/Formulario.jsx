import InputFormulario from './InputFormulario.jsx'
import Boton from './Boton.jsx'
import Cita from '../models/Cita.js'
import { useContext } from 'react'
import { CitasContext } from '../context/citas.jsx'

export function Formulario () {
    const { citas, setCitas } = useContext(CitasContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const { nombreMascota, nombreDueño, fecha, hora, sintomas } = Object.fromEntries(new FormData(e.target))
        const newCita = new Cita(nombreMascota, nombreDueño, fecha, hora, sintomas)
        setCitas([...citas, newCita]);
    }

    return (
        <form onSubmit={handleSubmit}>
            <InputFormulario tipo="text" contenidoLabel="Nombre mascota" name="nombreMascota" placeholder="Nombre mascota"/>
            <InputFormulario tipo="text" contenidoLabel="Nombre dueño" name="nombreDueño" placeholder="Nombre dueño de la mascota"/>
            <InputFormulario tipo="date" contenidoLabel="Fecha" name="fecha" placeholder=""/>
            <InputFormulario tipo="time" contenidoLabel="Hora" name="hora" placeholder=""/>
            <InputFormulario tipo="textarea" contenidoLabel="Sintomas" name="sintomas" placeholder=""/>
            <Boton eliminar={false} clase="u-full-width button-primary" contenido="Agregar cita"/>
        </form>
    )
}