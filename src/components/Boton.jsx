import '../css/Boton.css'

function Boton({eliminar, clase, contenido, citas, updateState, index}) {
  const handleClick = () => {
    if(!eliminar) return
    const nuevasCitas = [...citas];
    nuevasCitas.splice(index, 1);
    updateState(nuevasCitas);
  }


  return (
    <>
      <button onClick={handleClick} className={clase}>{contenido}</button>
    </>
  )
}

export default Boton
