import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import QuemSomos from '../pages/QuemSomos';
import Cardapio from '../pages/Cardapio';

export default function Rotas() {
    return (
        <BrowserRouter>
         <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/cardapio' element={<Cardapio/>}/>
                <Route path='/quemsomos' element={<QuemSomos/>}/>
                
         </Routes>
        </BrowserRouter>
    )
}