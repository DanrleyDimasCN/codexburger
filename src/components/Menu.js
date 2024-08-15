import React, {useState} from "react"
import { useNavigate } from "react-router-dom";
import pythonBurguer from '../assets/python-burguer.png';
import cBurguer from '../assets/C-burguer.png';
import rubyBurguer from '../assets/ruby-burguer.png';
import javaBurguer from '../assets/java-burguer.png';

import logopython from '../assets/logo-python.svg';
import logoC from '../assets/logo-c.svg';
import logoruby from '../assets/logo-ruby.svg';
import logojava from '../assets/logo-java.svg';

import '../styles/menu.css'


export default function Menu() {
    const navigate = useNavigate([]);
    const [pedidos, setPedidos ] = useState([]);

    const handleAdicionarPedido = (nome, preco) => {
        const novoPedido = { nome, preco };
        setPedidos([...pedidos, novoPedido]);
      };
    
      const handleVerPedidos = () => {
        navigate('/pagecliente', { state: { pedidos } });
      };

    return (
        <div>
            <main className="cardapio">
            <h1 className="title">
                Cardápio
            </h1>
                <section>
                <div className="secao-title-burguers">
                    <h2>Burgers Artesanais</h2>
                </div>
                <div className="secao-burguers">
                    <div className="secao-burguer">
                            <img src={pythonBurguer} alt="" />
                        <div className="secao-name-burguer">
                            <img src={logopython} alt=""/>
                            <h3>Python</h3>
                        </div>
                        <p>
                        Pão de alto nível, Hamburguer de carne de urso,
                        com aquele sabor forte e para dar aquela dinamica
                        Queijo Prato, Salada e maionese verde.
                        </p>
                    </div>
                    <div className="secao-preco">
                        <p>R$ 34,90</p>
                    </div>
                    <div className="secao-button">
                        <button onClick={() => handleAdicionarPedido('Python', 34.9)}>Adicionar ao carrinho</button>
                    </div>
                </div>

                <div className="secao-burguer">
                            <img src={javaBurguer} alt="" />
                        <div className="secao-name-burguer">
                            <img src={logojava} alt=""/>
                            <h3>Java</h3>
                        </div>
                        <p>
                        Pão de Hamburguer simples, 2 hamburguers de 70 grama, alface,
                        tomate e maionese, um lanche humilde mas,
                        excelente e se achar pouco pode complementar.
                        </p>
                    </div>
                    <div className="secao-preco">
                        <p>R$ 28,90</p>
                    </div>
                    <div className="secao-button">
                    <button onClick={() => handleAdicionarPedido('Java', 28.9)}>Adicionar ao carrinho</button>
                    </div>

                <div className="secao-burguer">
                        <img src={rubyBurguer} alt="" />
                    <div className="secao-name-burguer">
                        <img src={logoruby} alt=""/>
                        <h3>Ruby</h3>
                    </div>
                    <p>
                    Pão Italiano, presunto parma, rúcula e brócolis,
                    um sandwich dinâmico que possuí um gosto forte e
                    marcante que automaticamente vai ficar na sua memória.
                    </p>
                </div>
                <div className="secao-preco">
                    <p>R$ 29,90</p>
                </div>
                <div className="secao-button">
                <button onClick={() => handleAdicionarPedido('Ruby', 29.9)}>Adicionar ao carrinho</button>
                </div>

                <div className="secao-burguer">
                        <img src={cBurguer} alt="" />
                    <div className="secao-name-burguer">
                        <img src={logoC} alt=""/>
                        <h3>C++</h3>
                </div>
                    <p>
                    Pão integral chapeado, queijo prato derretido no banho maria,
                    ovo e guacamole, Tão gostoso que em 3 mordidas você já acabou,
                    é um dos nossos mais populares e recomendados.
                    </p>
                </div>
                <div className="secao-preco">
                    <p>R$ 27,90</p>
                </div>
                <div className="secao-button">
                <button onClick={() => handleAdicionarPedido('C++', 27.9)}>Adicionar ao carrinho</button>
                </div>
               
                <div>
                    <p>Todos os Lanches acompanham Batata Frita</p>
                </div>
                </section>

                <section>
                <div className="secao-bebida-list">
                     <div className="secao-title-bebidas">
                    <h2>Bebidas</h2>
                </div>
                    <ul>
                        <li>Agua sem gás...................R$ 3,99 <button onClick={() => handleAdicionarPedido('Agua Sem gás', 3.9)}>+</button></li>
                        <li>Agua com gás...................R$ 3,99 <button onClick={() => handleAdicionarPedido('Agua com gás', 3.9)}>+</button></li>
                        <li>H2O limão.........................R$ 4,49 <button onClick={() => handleAdicionarPedido('H2O limão', 4.49)}>+</button></li>
                        <li>H2O limoneto.......................R$ 4,49<button onClick={() => handleAdicionarPedido('H2O Limoneto', 4.49)}>+</button></li>
                        <li>
                            Refrigerante lata................R$ 4,99<button onClick={() => handleAdicionarPedido('Refrigerante', 4.9)}>+</button>
                            Consultar os sabores disponivéis com os nossos atendentes
                        </li>
                        <li>
                            Suco natural................R$ 11,50<button onClick={() => handleAdicionarPedido('Suco Natural', 11.5)}>+</button>
                            Consultar os sabores disponivéis com os nossos atendentes
                        </li>
                        <li>
                            Soda Italiana....................R$ 14,99<button onClick={() => handleAdicionarPedido('Soda Italiana', 14.9)}>+</button>
                            Consultar os sabores disponivéis com os nossos atendentes
                        </li>
                        <li>
                            Milk Shake.......................R$ 19,90<button onClick={() => handleAdicionarPedido('Milk Shake', 19.9)}>+</button>
                            Morango, Ovomaltine, Maracujá
                        </li> 
                    </ul>
                </div>
                </section>
                <button className="button-pedido" onClick={handleVerPedidos}>Conferir Pedidos</button>
            </main>
        </div>
    )
}