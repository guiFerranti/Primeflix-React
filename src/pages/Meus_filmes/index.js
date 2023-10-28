import { useEffect, useState } from 'react';
import './style.css'
import { Link } from 'react-router-dom'

function Meus_filmes() {
    
    const [filmes, setFilmes] = useState([]);
    
    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem('@filmes_salvos'));
        if(data) {
            setFilmes(data)
        } else {
            setFilmes([])
        }
    
    
    }, [])

    function excluirFilme(ids){
        const filmes_salvos = JSON.parse(localStorage.getItem('@filmes_salvos'));
        const resultado = filmes_salvos.filter(item => item.id !== ids)
        localStorage.setItem('@filmes_salvos', JSON.stringify(resultado))
        setFilmes(resultado)
    }

    return(
        <div className='container_'>
            <h1>Meus filmes</h1>
            <ul>
                {filmes.map((item) => {
                    return(
                        <div key={item.id} className='infos'>
                            <li> {item.title} </li>
                            <div className='botoes'>
                                <Link to={'/filme/'+ item.id}>Ver detalhes</Link>
                                <button onClick={() => excluirFilme(item.id)}>Excluir</button>
                            </div>
                        </div>
                    )
                })}
            </ul>
        </div>
    )

}

export default Meus_filmes;