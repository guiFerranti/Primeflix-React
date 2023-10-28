import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Meus_filmes from './pages/Meus_filmes';
import Erro from './pages/Erro'
import Filme from './pages/Filme'

import Header from './components/Header';


function RouterApp() {
    return (
        <div>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={ <Home/> } />
                    <Route path='/meus_filmes' element={ <Meus_filmes/> } />
                    <Route path='/filme/:id' element= { <Filme/> } />

                    <Route path='*' element={ <Erro/> } />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default RouterApp;