import React, { useState } from "react"
import '../styles/login.css'
import { useNavigate } from "react-router-dom"

export default function Login() {

    const navegacao = useNavigate()

    const [nomeUsuario, setNomeUsuario] = useState('')
    const [senhaUsuario, setSenhaUsuario] = useState('')

    function pegarDadosUsuario(e) {
        e.preventDefault()

        if (!nomeUsuario || !senhaUsuario) {
            alert('Campos em branco')
            return
        }

        if (nomeUsuario === 'danrley' && senhaUsuario === '135791') {
            alert('Login Efetuado com sucesso')
          
            navegacao('/pagecliente')
        } else {
            alert('Usuario/senha incorretos')
        }
    }

    return (
        <div>
            <div className="form-box">
                <form onSubmit={pegarDadosUsuario}>
                    <input
                    type="text"
                    placeholder='Digite o Usuário'
                    value={nomeUsuario}
                    onChange={(e) => setNomeUsuario(e.target.value)}
                    />
                    <input
                    type="password"
                    placeholder="Digite a Senha"
                    value={senhaUsuario}
                    onChange={(e) => setSenhaUsuario(e.target.value)}
                    />
                    <button type="submit">Enviar</button>
                </form>
            </div>
        </div>   
    )
}