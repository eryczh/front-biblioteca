import './index.scss';
import { Link } from 'react-router-dom';


export default function Footer () {

    return (
        <section className='footerzinho'>
            <div>
                <Link to="/" className='ab'>
                    <p>
                        Biblioteca Online
                    </p>
                </Link>
                <div>
                    <Link to='https://wa.me/message/5540028922'>
                    <p>Whatsapp</p>
                    </Link>

                    <Link to='https://www.instagram.com'>
                    <p>Instagram</p>
                    </Link>

                    <Link to='https://x.com/' >
                    <p>X</p>
                    </Link>
                </div>
            </div>

            <footer>
                <div>
                    <p>library@icloud.com</p>
                    <p>(11) 4002-8922 </p>
                    <p>CNPJ 00.000.000/0000-00</p>
                </div>

                <a href='/contato'>
                    <p>Informações</p>
                </a>
                <a href='/privacidade'>
                    <p>Política e privacidade</p>
                </a>
                <a href='/termos_uso'>
                    <p>Termos de Uso</p>
                </a>
            </footer>
        </section>
    )
}