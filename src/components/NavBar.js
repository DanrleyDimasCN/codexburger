import '../styles/header.css'

export default function NavBar() {
    return (
        <div className="cabecalho">
            <header>
                <h1>CodeXburguer</h1>
                <nav className="navbar">
                    <a href="#">Inicio</a>
                    <a href="#">Quem Somos</a>
                    <a href="#">Novidades</a>
                    <a href="#">Cardápio</a>
                    <a href="#">Delivery</a>
                    <a href="#">Carrinho</a>
                </nav>
            </header>
        </div>
    )
}