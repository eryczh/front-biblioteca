import { useEffect, useState } from "react";

import './index.scss';

import * as livroApi from "../../api/livroApi";
import Header from "../../components/Header";

import Footer from "../../components/Footer";
import Header2 from "../../components/Header2";
import CardVerificacao from "../../components/CardVerificacao";

export default function VerificarLivros() {

    const [listLivros, setListLivros] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

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
        return <div>Carregando...</div>;
    }
    
    if (error) {
        return <div>Erro: {error}</div>;
    }

    return (
        <div>
            <Header2 />
            
            <section className="secaoVerificaLivros">
                <div>
                    {listLivros.map((item) => (
                        <CardVerificacao key={item.id} item={item} />
                    ))}
                </div>

            </section>
            <Footer />
        </div>
    )

}