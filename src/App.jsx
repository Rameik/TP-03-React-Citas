import './App.css'
import Cita from './components/Cita.jsx'
import Titulo from './components/Titulo.jsx'
import InputFormulario from './components/InputFormulario.jsx'
import Boton from './components/Boton.jsx'

function App() {
  const citas = [
    {
      "Mascota": "Nina",
      "Dueño": "Martin",
      "Fecha": "2021-08-05",
      "Hora": "08:20",
      "Sintomas": "Le duele la pierna"
    },
    {
      "Mascota": "Sifon",
      "Dueño": "Flecha",
      "Fecha": "2023-08-05",
      "Hora": "09:24",
      "Sintomas": "Duerme mucho"
    },
    {
      "Mascota": "Floki",
      "Dueño": "Ari",
      "Fecha": "2023-08-05",
      "Hora": "16:15",
      "Sintomas": "No está comiendo"
    }
  ]

  return (
    <>
      
      <div className='container'>
        <Titulo tipo="1" contenido='Administrador de Pacientes'/>
        <div className='row'>
          <div className='one-half column'>
            <Titulo tipo="2" contenido='Crear mi cita'/>
            <form>
              <InputFormulario tipo="text" contenidoLabel="Nombre mascota" name="nombreMascota" placeholder="Nombre mascota"/>
              <InputFormulario tipo="text" contenidoLabel="Nombre dueño" name="nombreDueño" placeholder="Nombre dueño de la mascota"/>
              <InputFormulario tipo="date" contenidoLabel="Fecha" name="fecha" placeholder=""/>
              <InputFormulario tipo="time" contenidoLabel="Hora" name="hora" placeholder=""/>
              <InputFormulario tipo="text" contenidoLabel="Sintomas" name="sintomas" placeholder=""/>
              <Boton clase="u-full-width button-primary" contenido="Agregar cita"/>
            </form>
          </div>
          <div className='one-half column'>
            <Titulo tipo="2" contenido='Administra tus citas'/>
            {citas.map((element) => {
              return <Cita nombreMascota={element.Mascota} dueñoMascota={element.Dueño} fecha={element.Fecha} hora={element.Hora} sintomas={element.Sintomas}/>
            })}
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
