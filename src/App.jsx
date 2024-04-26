import './App.css'
import Citas from './components/Citas.jsx'
import Titulo from './components/Titulo.jsx'
import { Formulario } from './components/Formulario.jsx'

function App() {

  return (
    <>
      <div className='container'>
        <Titulo tipo="1" contenido='Administrador de Pacientes'/>
        <div className='row'>
          <div className='one-half column'>
            <Titulo tipo="2" contenido='Crear mi cita'/>
            <Formulario/>
          </div>
          <div className='one-half column'>
            <Titulo tipo="2" contenido='Administra tus citas'/>
            <Citas/>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
