import React from "react"
import pythonBurguer from '../assets/python-burguer.png'
import javaBurguer from '../assets/java-burguer.png'
import rubyBurguer from '../assets/ruby-burguer.png'
import logopython from '../assets/logo-python.svg'
import logojava from '../assets/logo-java.svg'
import logoruby from '../assets/logo-ruby.svg'
import '../styles/carrosel1.css'

export default function() {
    return  (
       <div className="box-main">
            <div className="box-anuncio">
                <img src={pythonBurguer} alt="Burguer Artesanal Python" className="python-burguer"/>
                <div className="box-text"> 
                    <h3><img src={logopython} alt="logo da Python" />Python</h3>
                    <p>Pão de alto nível, Hamburguer de carne de urso,
                    com aquele sabor forte e para dar aquela dinamica,
                    Queijo Prato, Salada e maionese verde.</p>
                    <p>Acompanha Fritas</p>
                    <div className="box-pedido">
                        <p>R$ 34,90</p>
                        <button>Pedir Agora</button>
                    </div>
                </div>
            </div>
                {/* <div className="anuncio-2">
                    <img src={javaBurguer} alt="Burguer Artesanal Java"/>
                    <img src={logojava} alt="logo do Java" />
                    <h3>Java</h3>
                    <p>
                    Pão de Hamburguer simples, 2 hamburguers de 70 grama,
                    alface, tomate e maionese,um lanche humilde mas,
                    excelente e se achar pouco pode complementar.
                    </p>
                    <p>Acompanha Fritas</p>
                    <p>R$ 28,90</p>

                </div>
                <div className="anuncio-3">
                    <img src={rubyBurguer} alt="Burguer Artesanal Ruby"/>
                    <img src={logoruby} alt="logo do Ruby" />
                    <h3>ruby</h3>
                    <p>
                    Pão Italiano, presunto parma, rúcula e brócolis,
                    um sandwich dinâmico que possuí um gosto forte
                    e marcante que automaticamente vai ficar na sua memória.
                    </p>
                    <p>Acompanha Fritas</p>
                    <p>R$ 29,90</p>
                </div> */}
        </div>
    )
}