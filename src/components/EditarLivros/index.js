import { useEffect, useState } from 'react';
import './index.scss';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { API_ADDRESS } from '../../api/constant';

import * as livroApi from '../../api/livroApi';

import Footer from '../Footer';
import Header2 from '../Header2';

export default function EditarLivro() {
    const [id, setId] = useState('');
    const [titulo, setTitulo] = useState('');
    const [autor, setAutor] = useState('');
    const [descricao, setDescricao] = useState('');
    const [genero, setGenero] = useState('');
    const [capa, setCapa] = useState(null);
    const [imgSrc, setImgSrc] = useState('');

    const { itemId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchLivro() {
            try {
                const resp = await axios.get(`${API_ADDRESS}/livros/${itemId}`);
                const item = resp.data;
                setId(item.id);
                setTitulo(item.titulo);
                setAutor(item.autor);
                setDescricao(item.descricao);
                setGenero(item.genero);
                setCapa(item.capa);
                setImgSrc(`${API_ADDRESS}/${item.foto.replace(/\\/g, '/')}`);

                
            } catch (error) {
                console.error('Erro ao buscar livro: ', error);
                alert('Erro ao buscar livro');
            }
        }

        if (itemId) {
            fetchLivro();
        }
    }, [itemId]);

    async function productExist() {
        let info = await livroApi.salvarLivro(id, titulo, autor, descricao, genero, navigate);
        return info;
    }

    async function alterarCapa(e) {
        if (!id) {
            alert('Salve o produto antes de alterar a imagem');
            return;
        }
    
        const file = e.target.files[0];
        const url = API_ADDRESS + `/livros/capa/${id}`;
        
        const form = new FormData();
        form.append('foto', file);
    
        try {
            await axios.put(url, form, {
                headers: { 'Content-Type': 'multipart/form' }
            });
            alert('Imagem alterada com sucesso');
    
            const newImgSrc = URL.createObjectURL(file);
            setImgSrc(newImgSrc);
        } catch (error) {
            console.error('Erro ao alterar a imagem:', error);
            alert('Erro ao alterar a imagem');
        }
    }

    async function removerLivro() {
        let info = await livroApi.removerLivro(id, navigate);
        return info;
    }

    return (
        <div className='page-edit'>
            <Header2 />
            <div className='container-edit'>
                <div className='caixaUm'>
                    <div>
                        <h2>Titulo:</h2>
                        <input
                            placeholder='Titulo do Livro'
                            type="text"
                            value={titulo}
                            onChange={(e) => setTitulo(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2>Autor:</h2>
                        <input
                            placeholder='Autor'
                            type='text'
                            value={autor}
                            onChange={(e) => setAutor(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2>Descricao:</h2>
                        <input
                            placeholder='Descricao'
                            type='text'
                            value={descricao}
                            onChange={(e) => setDescricao(e.target.value)}
                        />
                    </div>
                    <div>
                        <h2>Genero:</h2>
                        <input
                            placeholder='Genero'
                            type='text'
                            value={genero}
                            onChange={(e) => setGenero(e.target.value)}
                        />
                    </div>
                </div>
                <div className='caixaDois'>
                    <div>
                        {<img src={imgSrc} alt='capa livro' className='img-preview' />}
                        <label htmlFor='capa'>Alterar Capa</label>
                        <input
                            type='file'
                            id='capa'
                            style={{ display: "none" }}
                            onChange={alterarCapa}
                        />
                    </div>
                    <div className='aceites-edit'>
                        <p onClick={productExist} className='botoes'>Salvar</p>
                        <p onClick={removerLivro} className='botoes'>Remover</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}
