import { useState } from 'react';
import { toast } from "react-toastify";
import './index.scss';
import { useNavigate } from 'react-router-dom';
import * as livroApi from '../../api/livroApi';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Header2 from '../../components/Header2';

export default function CriarLivro() {

    const[id, setId] = useState("");
    const[titulo, setTitulo] = useState("");
    const[autor, setAutor] = useState("");
    const[descricao, setDescricao] = useState("");
    const[genero, setGenero] = useState("");

    const[capa, setCapa] = useState("");
    const[capaPreview, setCapaPreview] = useState(null);

    const navigate = useNavigate();
    
    async function adicionarLivro() {
        const formData = new FormData();

        formData.append("titulo", titulo);
        formData.append("autor", autor);
        formData.append("descricao", descricao);
        formData.append("genero", genero);
        if (capa) {
            formData.append("foto", capa); // Adiciona o arquivo da capa ao FormData
        }

        try {
            const info = await livroApi.adicionarLivro(formData);
            toast.success("Livro adicionado com sucesso: " + info.id);
            alert("Livro adicionado");
            navigate('/ver_livros');
        } catch (error) {
            toast.error("Erro ao adicionar Livro: " + error.message);
        }
    }

    function handleImageChange(e) {
        const file = e.target.files[0];
        console.log("Arquivo selecionado:", file);
        if (file) {
            setCapa(file); // Armazena o arquivo de imagem
            setCapaPreview(URL.createObjectURL(file)); // Armazena o caminho de pré-visualização
        }
    }
    

    return (
        <div className='page-criacao'>
            <Header2 />

            <div className='container'>
                <div className='caixaUm'>
                    <div>    
                        <h2>Titulo: </h2>
                        <input
                            placeholder='Titulo do livro'
                            type='text'
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2>Autor: </h2>
                        <input
                            placeholder='Autor do livro'
                            type='text'
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2>Descrição: </h2>
                        <textarea
                            placeholder='Descrição'
                            className='msg-desc'
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>  
                    <div>
                        <h2>Genero</h2>
                        <input
                            placeholder='Genero do livro'
                            type='text'
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                    </div>  
                </div>

                <div className='caixaImg'>
                    <div>
                        {capaPreview && (
                            <img src={capaPreview} alt='pré-visualização' className='imgPreview' />
                        )}
                        <label htmlFor='imagemInput'>Adicionar Capa</label>
                        <input
                            type='file'
                            id='imagemInput'
                            style={{ display: "none" }}
                            onChange={handleImageChange}
                        />
                    </div>

                    <div>
                        <button onClick={adicionarLivro}>Adicionar Livro</button>
                    </div>
                </div>
            </div>
            <Footer />        
        </div>
    );
}
