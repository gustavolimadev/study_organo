import { useState } from "react";
import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa"
import "./Formulario.css";

const Formulario = (props) => {

 
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')



    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoCriarCard({
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
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <CampoTexto 

                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterar={valor => setNome(valor)}
                    
                />

                <CampoTexto 
                    
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite o cargo"
                    valor={cargo}
                    aoAlterar={valor => setCargo(valor)}

                />

                <CampoTexto 

                    label="Imagem" 
                    placeholder="Insira o endereço da imagem"
                    valor={imagem}
                    obrigatorio={true}
                    aoAlterar={valor => setImagem(valor)}
                
                />

                <ListaSuspensa 
                label="Time" 
                itens={props.times} 
                valor={time}
                aoAlterar={valor => setTime(valor)}
                />

                <Botao>Criar Card</Botao>

            </form>
        </section>
    )
}

export default Formulario;