import '../styles/header.css';
import logoburguer from '../assets/logo-burguer.svg';
import carrinho from '../assets/shopcart.svg'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function NavBar() {
    const [isOpen, SetisOpen] = useState(false)
    
    function toggleMenu() {
        SetisOpen(!isOpen);
    }

    return (
            <header className="cabecalho">
                <div className='cabecalho_titulo'>
                    <Link to='/'><h1>codeXburguer</h1></Link>
                    <img src={logoburguer} alt="logo da hamburgueria" className='cabecalho_logo_burguer'/>
                    <div className='cabecalho_car'>
                    <Link to='/carrinho'>
                        <img src={carrinho}
                        alt="Carrinho de itens selecionados"/>
                    </Link>
                    </div>           
                </div>
                <div className='menu_burguer'>
                    <div>
                        <button onClick={toggleMenu} className='menu_burguer_button'>
                            ☰
                        </button>
                        {isOpen && (
                            <nav className={`menu_burguer_nav ${isOpen ? 'active' : ''}`}>
                            <ul className='menu_burguer_lista'>
                                    <li className='item'><Link to='/'>Inicio</Link></li>
                                    <li className='item'><Link to='/quemsomos'>Quem Somos</Link></li>
                                    <li className='item'><Link to='/cardapio'>Cardápio</Link></li>
                            </ul>
                            </nav>
                        )}
                        </div>
                </div>
            </header>
    )
}