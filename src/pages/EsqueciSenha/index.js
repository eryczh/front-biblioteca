import { useState } from "react";
import * as userApi from "../../api/userApi"

import './index.scss';
import { useNavigate } from "react-router-dom";

export default function EsqueceuSenha() {

    const [email, setEmail] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();

    async function ChangeSenha() {
        let info = await userApi.alterarSenha(email, novaSenha, navigate);
        setMessage(message);
    }

    return (
        <div className="content-senha">
            <div className="fundo-inicial"> </div>
            <div className="senha-page">
                <div className="senha-form">
                    <h1>Nova Senha</h1>
                    <p>Digite seu e-mail e sua nova senha</p>
                    <input
                        type="email"
                        placeholder="e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="senha"
                        value={novaSenha}
                        onChange={(e) => setNovaSenha(e.target.value)}
                    />
                    <button onClick={ChangeSenha}> Mudar Senha </button>
                    {message && <p>{message}</p>}
                </div>

            </div>
        </div>
    );
}