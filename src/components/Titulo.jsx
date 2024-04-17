import '../css/Titulo.css'

function Titulo(props) {
    const tipo1 = props.tipo === "1" ? true : false
    const tipo2 = props.tipo === "2" ? true : false

    return (
        <>
            {tipo1 && <h1>{props.contenido}</h1>}
            {tipo2 && <h2>{props.contenido}</h2>}
        </>
    )
}

export default Titulo