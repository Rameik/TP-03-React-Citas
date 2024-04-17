import { useState } from 'react'
import '../css/Boton.css'

function Boton({clase, contenido}) {
  const [count, setCount] = useState(0)

  return (
    <>
      <button className={clase}>{contenido}</button>
    </>
  )
}

export default Boton
