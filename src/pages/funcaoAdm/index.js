import { Link } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import './index.scss';


export default function FuncaoAdm() {

    return (
        <div>
            <Header />
            <section className='section-adm'>
                <h1>Area ADM</h1>

                <Link to='/add_livro' className='underline2'>
                <button>Adicionar livro</button>
                </Link>

                <Link to='/ver_livros' className='underline2'>
                <button>Verificar Livros</button>
                </Link>
            </section>

            <Footer />
        </div>


    )
}