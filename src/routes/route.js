import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from '../pages/Inicio';
import QuemSomos from '../pages/QuemSomos';
import Cardapio from '../pages/Cardapio';
import Logar from '../pages/Logar';
import PageCliente from '../pages/PageCliente';

export default function Rotas() {
    return (
        <BrowserRouter>
         <Routes>
                <Route path='/' element={<Inicio/>}/>
                <Route path='/pagecliente' element={<PageCliente/>}/>
                <Route path='/logar' element={<Logar/>}/>
                <Route path='/cardapio' element={<Cardapio/>}/>
                <Route path='/quemsomos' element={<QuemSomos/>}/>
                
         </Routes>
        </BrowserRouter>
    )
}