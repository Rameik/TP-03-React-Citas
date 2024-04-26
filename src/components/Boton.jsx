import { useContext } from 'react';
import '../css/Boton.css'
import { CitasContext } from '../context/citas';

function Boton({eliminar, clase, contenido, index}) {
  const { citas, setCitas } = useContext(CitasContext)

  const handleClick = () => {
    if(!eliminar) return
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    setCitas(nuevasCitas);
  }

  return (
    <>
      <button onClick={handleClick} className={clase}>{contenido}</button>
    </>
  )
}

export default Boton
