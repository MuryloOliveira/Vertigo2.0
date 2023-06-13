import { useState } from 'react'
import eye from '../images/eye.png'
import eyeOff from '../images/eye-off.png'
import '../Formulario.css'

export function Formulario() {
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [inputSenha, setInputSenha] = useState("text")

    function handleAlterarInput(event) {
        if (event.target.id == "email")
            return setEmail(event.target.value)
        return setSenha(event.target.value)
    } 

    function handleEntrar(valor1, valor2) {
        alert(`Email: ${valor1}\nSenha: ${valor2}`)
        setEmail('')
        setSenha('')
    }

    function handleInputSenha() {
        if (inputSenha == "text")
            return setInputSenha("password")
        return setInputSenha("text")
    }

    return (
        <div className="formulario">
            <form action="" id="form-inicial">
                <div className="div-label">
                    <label htmlFor="email" className="cinza-escuro">E-mail</label>
                </div>
                <div className="div-input">
                    <input id="email" type="text" placeholder="Digite seu e-mail" value={email} onChange={handleAlterarInput} />
                </div>

                <div className="div-label esqueceu">
                    <label htmlFor="senha" className="cinza-escuro">Senha</label>
                    <button type="button" className="botao-label">Esqueceu a senha?</button>
                </div>
                <div className="div-input">
                    <input id="senha" type={inputSenha} placeholder="Digite sua senha" value={senha} onChange={handleAlterarInput} />
                    <button type="button" onClick={handleInputSenha} className="on-off">
                        <img src={inputSenha == "text" ? eye : eyeOff} alt="ícone de esconder" />
                    </button>
                </div>
            </form>

            <div>
                <button type="button" className="entrar" onClick={() => handleEntrar(email, senha)}>Entrar</button>
            </div>

            <div className="div-sem-conta">
                <p className="cinza">Ainda não tem uma conta?</p>
                <button type="button" className="inscrever">Inscreva-se</button>
            </div>
        </div>
    )
}