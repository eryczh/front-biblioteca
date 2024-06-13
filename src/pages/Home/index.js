import React, { useState, useEffect } from 'react';
import Header from '../../components/Header'; // Import atualizado
import Footer from '../../components/Footer';

import * as livroApi from '../../api/livroApi';

import './index.scss';
import { Link } from 'react-router-dom';

import Card from '../../components/Card';

export default function Home () {
    

    const [listLivros, setListLivros] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

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

    return (
        <div>
            <Header />
            
            <section className='secao1'>
                <h1>
                    Por que ler?
                </h1>

                <p>
                A leitura é uma atividade poderosa que traz inúmeros benefícios para a mente e o espírito. Ela estimula a imaginação, amplia o vocabulário e melhora a capacidade de concentração e foco. Ao ler, somos transportados para diferentes mundos e perspectivas, o que aumenta nossa empatia e compreensão sobre a diversidade humana. Além disso, a leitura é uma excelente forma de reduzir o estresse, pois proporciona momentos de relaxamento e desconexão das preocupações diárias. Cultivar o hábito da leitura enriquece nossa vida, tornando-nos mais informados, criativos e conectados com o mundo ao nosso redor.
                </p>
            </section>

            <section className='secao2'>
                <img src='/assets/images/home.jpg' alt='foto livros'/>
                <div className='button-container'>
                    <Link to="https://ucam-campos.br/projetos/blog/descubra-os-beneficios-que-a-leitura-traz-para-sua-vida/#:~:text=Ler%20estimula%20o%20racioc%C3%ADnio%2C%20ativa,leitor%20transforma%20a%20sua%20escrita." className='botaoSM'>Saiba Mais</Link>
                </div>
            </section>


            <section className='secao3'>
                <h2>Livros</h2>
            </section>

            <section className='secao4'>
               
                <div>
                {listLivros.map(item => (
                    <Link className='navegacao' key={item.id} to={`/visualizacao/${item.id}`}>
                    <Card item={item} />
                    </Link>
                ))}
                </div>
            </section>

            <Footer />
        </div>
    );
};

