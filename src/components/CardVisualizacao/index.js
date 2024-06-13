import './index.scss';
import { API_ADDRESS } from '../../api/constant';

export default function CardVisualizacao({ item }) {
    
    //const imgSrc = item.foto ? `${API_ADDRESS}/storage/capa/${item.foto}` : "assets/images/hp1.jpg";

    const imgSrc =  `${API_ADDRESS}/${item.foto}`;

    console.log("Image URL:", imgSrc); 
    return (
        <section className='section-visu'>
            <div className='card-visu'>
                <div className='box1'>
                <img src={imgSrc} alt='capa livro' onError={(e) => {
                    console.error("Erro ao carregar a imagem:", imgSrc);
                    e.target.src = "assets/images/hp1.jpg"; 
                }} />

                </div>
                <div className='box2'>
                    <h1>{item.titulo ?? "titulo livro"}</h1>
                    <h2>{item.autor ?? "autor"}</h2>
                    <h3>{item.descricao ?? "descricao"}</h3>
                    <p>{item.genero ?? "genero"}</p>
                </div>
            </div>
        </section>
    );
}
