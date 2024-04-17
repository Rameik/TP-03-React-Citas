import '../css/Titulo.css'

function Titulo({tipo, contenido}) {
    const tipo1 = tipo === "1" ? true : false
    const tipo2 = tipo === "2" ? true : false

    return (
        <>
            {tipo1 && <h1>{contenido}</h1>}
            {tipo2 && <h2>{contenido}</h2>}
        </>
    )
}

export default Titulo
