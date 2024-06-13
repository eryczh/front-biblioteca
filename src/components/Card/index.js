import './index.scss';
import { API_ADDRESS } from '../../api/constant';

export default function Card({ item }) {
    // Verifique se item e item.foto existem antes de tentar usar replace
    const imgSrc = item && item.foto ? `${API_ADDRESS}/${item.foto.replace(/\\/g, "/")}` : "assets/images/hp1.jpg";

    console.log("Image URL:", imgSrc);

    return (
        <div className='card'>
            <div className='content'>
                <img src={imgSrc} alt='capa Livro' />
                <div>
                    <h1 className={`${item?.titulo ?? 'titulo livro'}`}>{item?.titulo ?? 'titulo livro'}</h1>
                    <span>{item?.genero ?? 'genero'}</span>
                </div>
            </div>
        </div>
    );
}
