import { useParams } from 'react-router-dom';
import './index.scss';
import { useEffect, useState } from 'react';

import * as livroApi from '../../api/livroApi.js';
import Header from '../../components/Header';

import Footer from '../../components/Footer/index.js';
import CardVisualizacao from '../../components/CardVisualizacao/index.js';

export default function Visualizacao () {

    const [listLivros, setListLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { itemId } = useParams();

    useEffect(() => {
        async function fetchLivros() {
            try {
                const info = await livroApi.buscarLivros();
                setListLivros(info);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchLivros();
    }, []);

    if (loading) {
        return <div>Carregando...</div>
    }

    if (error) {
        return <div>Erro: {error}</div>
    }

    const itemSelecionado = listLivros.find(item => item.id === parseInt(itemId));

    if (!itemSelecionado) {
        return <div>Item não encontrado</div>;
    }

    return (
        <div>
            <Header />
            <section className='box-visu'>
            <CardVisualizacao
                key={itemSelecionado.id}
                item={itemSelecionado}
            />
            </section>

            <Footer />

        </div>
    )
}