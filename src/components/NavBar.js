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
                <div className='box-title'>
                    <h1>codeXburguer</h1>
                    <img src={logoburguer} alt="logo da hamburgueria"/>
                </div>
                <div className='box-cart'>
                    <a href="#"><img src={carrinho} alt="Carrinho de itens selecionados"/></a>
                </div>           
                <div className='box-menu'>
                    <button onClick={toggleMenu} className='box-button'>
                        ☰
                    </button>
                    {isOpen && (<nav>
                        <ul className='box-list'>
                                <li className='item'><a href="#">Inicio</a></li>
                                <li className='item'><a href="#">Quem Somos</a></li>
                                <li className='item'><a href="#">Novidades</a></li>
                                <li className='item'><a href="#">Cardápio</a></li>
                                <li className='item' id='delivery-phone'><a href="#">Delivery
                                <img src={phone} alt="Icone de delivery" className='icon-phone'/></a></li>
                                </ul>
                        </nav>)}
                    </div>
            </header>
    )
}