import './App.css'
import CitaBox from './components/Cita.jsx'
import Titulo from './components/Titulo.jsx'
import InputFormulario from './components/InputFormulario.jsx'
import Boton from './components/Boton.jsx'
import Cita from './models/Cita.js'
import { useState } from 'react'

function App() {
  const [ citas, setCitas ] = useState([
    new Cita("Nina", "Martin", "2021-08-05", "08:20", "Le duele la pierna"),
    new Cita("Sifon", "Flecha", "2023-08-05", "09:24", "Duerme mucho"),
    new Cita("Floki", "Ari", "2023-08-05", "16:15", "No está comiendo")
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
    const { nombreMascota, nombreDueño, fecha, hora, sintomas } = Object.fromEntries(new FormData(e.target))
    const newCita = new Cita(nombreMascota, nombreDueño, fecha, hora, sintomas)
    setCitas([...citas, newCita]); 
  }

  const updateState = (nuevoEstado) => {
    setCitas(nuevoEstado)
  }

  return (
    <>
      <div className='container'>
        <Titulo tipo="1" contenido='Administrador de Pacientes'/>
        <div className='row'>
          <div className='one-half column'>
            <Titulo tipo="2" contenido='Crear mi cita'/>
            <form onSubmit={handleSubmit}>
              <InputFormulario tipo="text" contenidoLabel="Nombre mascota" name="nombreMascota" placeholder="Nombre mascota"/>
              <InputFormulario tipo="text" contenidoLabel="Nombre dueño" name="nombreDueño" placeholder="Nombre dueño de la mascota"/>
              <InputFormulario tipo="date" contenidoLabel="Fecha" name="fecha" placeholder=""/>
              <InputFormulario tipo="time" contenidoLabel="Hora" name="hora" placeholder=""/>
              <InputFormulario tipo="textarea" contenidoLabel="Sintomas" name="sintomas" placeholder=""/>
              <Boton eliminar={false} clase="u-full-width button-primary" contenido="Agregar cita"/>
            </form>
          </div>
          <div className='one-half column'>
            <Titulo tipo="2" contenido='Administra tus citas'/>
            {citas.map((element, index) => (
              <CitaBox index={index} citas={citas} updateState={updateState} key={index} nombreMascota={element.mascota} dueñoMascota={element.dueño} fecha={element.fecha} hora={element.hora} sintomas={element.sintomas}/>
            ))}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
