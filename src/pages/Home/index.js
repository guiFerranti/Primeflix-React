import {useEffect, useState} from 'react';
import api from '../../services/api';
import './style.css'
import { Link } from 'react-router-dom';

function Home(){

    const [filmes, setFilmes] = useState([])

    useEffect(() =>{
        async function loadApi() {
            const api_key = "28fc232cc001c31e8a031f419d0a14ca"
            const data = await api.get(`/movie/now_playing?api_key=${api_key}&language=pt-BR`)
            setFilmes(data.data.results)
        }
        loadApi()
    }, [])

    return(
    <div className='container'>
            {filmes.map((item) => {
                const img_src = 'https://image.tmdb.org/t/p/original/' + item.poster_path;
                const id = item.id
                return(
                    <div key={item.id} className='filme'>
                        <h3>{item.title}</h3><br/>
                        <div className='imagem'>
                            <img src={img_src}></img>
                        </div>
                            <Link to={'/filme/'+id} className='acessar'>Acessar</Link>

                    </div>
                )
            })}

    </div>
    )

}

export default Home;