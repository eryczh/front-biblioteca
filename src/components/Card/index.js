import './index.scss';
import { API_ADDRESS } from '../../api/constant';

export default function Card ({ item }) {
    //const imgSrc = item.foto ? `${API_ADDRESS}/storage/capa/${item.foto.replace(/\\/g, "/")}` : "assets/images/hp1.jpg";

    const imgSrc = `${API_ADDRESS}/${item.foto}`;

    console.log("Image URL:", imgSrc);
    return (
        <div className='card'>
            <div className='content'>
                <img src={imgSrc} alt='capa Livro' />
                
                <div>
                    <h1 className={`${item.titulo}`}>{item.titulo ?? 'titulo livro'}</h1>
                    <span>{item.genero ?? 'genero'}</span>
                </div>
            </div>
        </div>
    )
}