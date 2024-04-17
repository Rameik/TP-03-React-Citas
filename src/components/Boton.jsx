import '../css/Boton.css'

function Boton(props) {

  return (
    <>
      <button className={props.clase}>{props.contenido}</button>
    </>
  )
}

export default Boton
