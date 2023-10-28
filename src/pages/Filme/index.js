import { useParams } from "react-router-dom"; 
import { useEffect, useState } from 'react';
import api from "../../services/api";
import './style.css'
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Filme() {
    const { id } = useParams();

    const [filme, setFilme] = useState({});
    
    const success = () => toast.success("Filme salvo com sucesso");
    const fail = () => toast.error("Você já salvou esse filme")


    useEffect(() => {
        async function loadApi() {
            const api_key = '28fc232cc001c31e8a031f419d0a14ca'
            const data = await api.get(`/movie/${id}?api_key=${api_key}&language=pt-BR`);
            setFilme(data.data);
        }
        loadApi();
    
    }, [])
    const img_src = 'https://image.tmdb.org/t/p/original/' + filme['backdrop_path']

    function salvarFilme(){
        const filmes_salvos = JSON.parse(localStorage.getItem('@filmes_salvos')) || [];
        const filmeToSave = {
            id: filme['id'],
            title: filme['title']
        }

        const filmeExiste = filmes_salvos.find(filmeSalvo => filmeSalvo.title === filmeToSave.title)
        console.log(filmeExiste)
        if(!filmeExiste){
            filmes_salvos.push(filmeToSave)
            success()
        } else {
            fail()
        }
        localStorage.setItem('@filmes_salvos', JSON.stringify(filmes_salvos))
    }

    const youtube = 'https://www.youtube.com/results?search_query=' + filme['title']

    return(
        <div className="container">
            <div className="info">

                <h1>{filme['title']}</h1>
                <img src={img_src}></img>
                <h2>Sinopse</h2>
                <p> {filme['overview']} </p>
                <h4>Avaliação: {Math.round(filme['vote_average'] * 10) / 10}/10 </h4>
                <div className="links">
                    <Link onClick={salvarFilme}>Salvar</Link>
                    <ToastContainer/>
                    <Link to={youtube}>Trailer</Link>
                </div>
            </div>
        </div>
    )

}

export default Filme;