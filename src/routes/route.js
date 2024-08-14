import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import QuemSomos from '../pages/QuemSomos';

export default function Rotas() {
    return (
        <BrowserRouter>
         <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/quemsomos' element={<QuemSomos/>}/>
         </Routes>
        </BrowserRouter>
    )
}