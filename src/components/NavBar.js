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
            <header className="cabecalho">
                <div className='cabecalho_titulo'>
                    <h1>codeXburguer</h1>
                    <img src={logoburguer} alt="logo da hamburgueria" className='cabecalho_logo_burguer'/>
                    <div className='cabecalho_car'>
                    <a href="#">
                        <img src={carrinho}
                        alt="Carrinho de itens selecionados"/>
                    </a>
                    </div>           
                </div>
                <div className='menu_burguer'>
                    <div>
                        <button onClick={toggleMenu} className='menu_burguer_button'>
                            ☰
                        </button>
                        {isOpen && (<nav>
                            <ul className='menu_burguer_lista'>
                                    <li className='item'><a href="#">Inicio</a></li>
                                    <li className='item'><a href="#">Quem Somos</a></li>
                                    <li className='item'><a href="#">Novidades</a></li>
                                    <li className='item'><a href="#">Cardápio</a></li>
                                    <li className='item' id='delivery-phone'><a href="#">Delivery
                                    <img src={phone} alt="Icone de delivery"/></a>
                                    </li>
                            </ul>
                            </nav>)}
                        </div>
                </div>
            </header>
    )
}