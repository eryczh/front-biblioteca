import './index.scss';

import * as userApi from "../../api/userApi";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function CriarConta() {

    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const navigate = useNavigate()

    async function Criar() {
        let info = await userApi.criarConta(nome, email, senha, navigate);

        return info;

    }

    return (
        
        <div className='content-criar'>
            <div className='fundo'></div>
            <div className='criar-page'>
                <h1>Criar Conta</h1>
                <input
                    type='text'
                    value={nome}
                    onChange={e => setNome(e.target.value)}
                    placeholder='Seu Nome'
                />
                <input
                    type='text'
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='Seu E-mail'
                />
                <input
                    type='password'
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    placeholder='Sua senha'
                />
                <button onClick={Criar}>Criar Conta</button>
                <div className='create-login'>
                    <Link to="/login">
                    <p>Possui uma Conta? Entrar</p>
                    </Link>
                </div>
            </div>
        </div>

    )

}