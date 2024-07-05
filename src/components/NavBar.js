import '../styles/header.css';
import logoburguer from '../assets/logo-burguer.svg';
import phone from '../assets/phone.svg'
import carrinho from '../assets/shopcart.svg'
import { useState } from 'react';

export default function NavBar() {
    const [isOpen, SetisOpen] = useState(false)
    
    function toggleMenu() {
        SetisOpen(!isOpen);
    }

    return (
            <header className="box-principal">
                <div className='box-'>
                    <h1>CodeXburguer</h1>
                </div>
                <img src={logoburguer} alt="logo da hamburgueria"/>
                    <button onClick={toggleMenu}>
                        ☰
                    </button>
                    {isOpen && (<nav>
                        <ul>
                            <li><a href="#">Inicio</a></li>
                            <li><a href="#">Quem Somos</a></li>
                            <li><a href="#">Novidades</a></li>
                            <li><a href="#">Cardápio</a></li>
                            <li><a href="#">Delivery<img src={phone} alt="Icone de delivery"/></a></li>
                        </ul>
                    </nav>) }
                    <a href="#"><img src={carrinho} alt="Carrinho de itens selecionados"/></a>
            </header>
    )
}