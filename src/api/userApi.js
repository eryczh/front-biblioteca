import axios from "axios";
import { API_ADDRESS } from "./constant";

export async function logarConta(email, senha, navigate) {
    try {
        const url = API_ADDRESS + '/user/login';
        const r = await axios.post(url, { email, senha });
        const userData = r.data;

        if (userData && userData.loggedIn) {
            navigate('/funcao_admin');
        } else {
            alert("Verifique se os dados estão corretos");
        }
    } catch (error) {
        alert("Verifique se os dados estão corretos");
    }
}

export async function criarConta(nome, email, senha, navigate) {
    let url = API_ADDRESS + '/user/register';
    let corp = {
        nome, 
        email,
        senha
    };

    try {
        let r = await axios.post(url, corp);
        let info = r.data;

        alert('Cadastro Realizado, seu ID é: ' + info.id);
        navigate('/login');

        return info;
    } catch (error) {
        alert('Erro ao criar conta.');
    }
}

export async function alterarSenha(email, newSenha, navigate) {
    try {
        const url = API_ADDRESS + '/user/senha';
        const resp = await axios.put(url, { email, newSenha });

        if (resp.status === 200) {
            setTimeout(() => {
                alert('Senha alterada!');
                navigate("/login");
            }, 2000);
        }
    } catch (error) {
        alert('Senha não alterada!');
        console.error(error);
    }
}
