import '../css/InputFormulario.css'

function InputFormulario(props) {
    const textArea = props.tipo == "textarea" ? true : false

    return (
        <>
            <label>{props.contenidoLabel}</label>
            {!textArea && <input className="u-full-width" type={props.tipo} name={props.name} placeholder={props.placeholder}/>}
            {textArea && <textarea className="u-full-width" name={props.name} placeholder={props.placeholder}/>}
        </>
    )
}

export default InputFormulario
