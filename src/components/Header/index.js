import { Link } from 'react-router-dom';
import './style.css'

function Header(){
    return(
        <header>
            <div className='menu'>
                <Link to='/'><h1>Prime Flix</h1></Link> 
                <Link to='/meus_filmes' className='botao_filmes'>Meus filmes</Link>
            </div>
        </header>
    )

}

export default Header;