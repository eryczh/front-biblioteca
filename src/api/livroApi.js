import axios from "axios";
import { API_ADDRESS } from "./constant";

export async function adicionarLivro(formData) {
    try {
        const url = `${API_ADDRESS}/livros`;
        const response = await axios.post(url, formData);
        return response.data;
    } catch (error) {
        throw new Error(error.response.data.message || "Erro ao adicionar livro");
    }
}

export async function salvarLivro(id, titulo, autor, descricao, genero, navigate) {
    const url = `${API_ADDRESS}/livros/${id}`;
    const corpo = { titulo, autor, descricao, genero };

    try {
        await axios.put(url, corpo);
        alert('Livro alterado com sucesso.');
        navigate('/ver_livros');
    } catch (error) {
        console.error('Erro ao salvar livro: ', error);
        alert('Erro ao salvar livro');
    }
}

export async function removerLivro(id, navigate) {
    const url = `${API_ADDRESS}/livros/${id}`;

    try {
        await axios.delete(url);
        alert('Livro deletado com sucesso');
        navigate('/ver_livros');
    } catch (error) {
        console.error('Erro ao remover Livro: ', error);
        alert('Erro ao remover Livro');
    }
}

export async function buscarLivros() {
    const url = API_ADDRESS + '/livros';

    try {
        let r = await axios.get(url);
        return r.data;
    } catch (error) {
        console.error('Erro ao buscar livros: ', error);
        throw error;
    }
}
