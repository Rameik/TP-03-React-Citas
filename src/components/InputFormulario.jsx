import '../css/InputFormulario.css'

function InputFormulario(props) {

    return (
        <>
            <label>{props.contenidoLabel}</label>
            <input className="u-full-width" type={props.tipo} name={props.name} placeholder={props.placeholder}/>
        </>
    )
}

export default InputFormulario
