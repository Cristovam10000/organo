import './CampoTexto.css';

// let valor = '';

// useState é um hook do React que permite adicionar o estado a um componente funcional.
// const [valor, setValor] = useState('')






const CampoTexto = (props) => {

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    
    return(
       <div className="campo-texto">

            <label>{props.label}</label>

            <input 
            value={props.valor}
            onChange={aoDigitado}
            required={props.obrigatorio}
            placeholder={props.placeholder}
            >
            </input>

       </div> 
    )
}

export default CampoTexto;  