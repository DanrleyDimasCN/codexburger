import '../styles/header.css';
import logoburguer from '../assets/logo-burguer.svg';
import phone from '../assets/phone.svg'
import carrinho from '../assets/shopcart.svg'

export default function NavBar() {
    return (
            <header className="cabecalho">
                <h1>CodeXburguer</h1>
                <img src={logoburguer} alt="logo da hamburgueria" className='logo' />
                <nav className="navbar">
                    <a href="#" className="nav-item">Inicio</a>
                    <a href="#" className="nav-item">Quem Somos</a>
                    <a href="#" className="nav-item">Novidades</a>
                    <a href="#" className="nav-item">Cardápio</a>
                    <a href="#" className="delivery">Delivery<img src={phone} alt="Icone de delivery" className='phone-icone' /></a>
                    <a href="#"><img src={carrinho} alt="Carrinho de itens selecionados" className='cart'/></a>
                </nav>
            </header>
    )
}