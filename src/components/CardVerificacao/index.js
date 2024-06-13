import { API_ADDRESS } from "../../api/constant";
import { Link } from "react-router-dom";

import './index.scss';

export default function CardVerificacao({ item }) {
    
    const imgSrc = `${API_ADDRESS}/${item.foto}`;
    console.log("Image URL:", imgSrc); 

    return (

        <div className="card-ver">
            <div className="content">
                <img src={imgSrc} alt="capa"/>
                <div className="card-section">
                    <div>
                        <h1 className={`${item.titulo}`}>
                            {item.titulo ?? 'Titulo'}
                        </h1>
                        <span>
                            {item.autor ?? 'autor'}
                        </span>
                        <Link to={`/editar_item/${item.id}`} className='editar'>
                            <p>Editar item</p>
                        </Link>
                    </div>

                </div>
            </div>

        </div>
    )
}