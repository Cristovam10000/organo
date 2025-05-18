import { useState } from 'react'; // <-- ESSENCIAL
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';





export const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorCadastrado ({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>

                <h2>Preencha os dados para criar o card desejado</h2>

                <CampoTexto 
                label = 'Nome'
                valor={nome}
                aoAlterado ={valor => setNome(valor)}
                obrigatorio = {true}
                placeholder = 'Digite seu nome'
                />

                <CampoTexto
                label = 'Cargo' 
                valor={cargo} 
                aoAlterado ={valor => setCargo(valor)}
                obrigatorio = {true}  
                placeholder = 'Digite seu Cargo'
                />

                <CampoTexto
                label = 'Imagem' 
                valor={imagem}
                aoAlterado ={valor => setImagem(valor)}
                obrigatorio = {true} 
                placeholder = 'Digite o endereço da imagem'
                />

                <ListaSuspensa
                label = "Time" 
                valor={time}
                required={true} 
                itens={props.times}
                Alterado={valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao>

            </form>
        </section>
    )
    
} 