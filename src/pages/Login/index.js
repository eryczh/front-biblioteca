import React, { useState } from 'react';
import './index.scss';

import * as userApi from "../../api/userApi.js";
import { useNavigate } from 'react-router-dom';


export default function Login () {
    
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const navigate = useNavigate();

    async function Login() {
        let info = await userApi.logarConta(email, senha, navigate);
        return info;
    }
    
    
    return (
        <div className='content-login'>
            <div className='fundo-inicial'></div>
            <div className='login-page'>
                <div className='login-form'>
                    <h1>Login</h1>

                    <input
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='e-mail'
                    />
                    <input
                    type='password'
                    onChange={(e) => setSenha(e.target.value)}
                    placeholder='senha'
                    />
                    <button onClick={Login}>Entrar</button>

                    <div className='create-login'>
                        <a href='/esqueceu_senha'>
                            <p>Esqueci a senha</p>
                        </a>

                        <a href='/cadastrar'>
                            <p>Criar Conta</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        

    );
};


