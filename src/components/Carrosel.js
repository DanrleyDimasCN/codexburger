import React from 'react';
import { Carousel } from 'react-bootstrap';
import pythonBurguer from '../assets/python-burguer.png';
import soda from '../assets/soda-italiana.png'
import suco from '../assets/sucos-naturais.png'

import cBurguer from '../assets/C-burguer.png';
import rubyBurguer from '../assets/ruby-burguer.png';
import milkshake from '../assets/milk-shake.png';
import logopython from '../assets/logo-python.svg';
import logoC from '../assets/logo-c.svg';
import logoruby from '../assets/logo-ruby.svg';
import '../styles/carrosel.css';
import { Link } from 'react-router-dom';

export default function Carrosel() {
    return (
        <div className='box-global'>
            <div className='box-main'>
                <Carousel interval={30000} pause={false}>
                    <Carousel.Item>
                        <img
                        src={pythonBurguer}
                        alt="Burguer Artesanal Python"
                        className='img-burguer'/>
                        <Carousel.Caption>
                            <div className='logo-icon'>
                                <img src={logopython} alt="Logo da Python"/>
                                <h3>Python</h3>
                            </div>
                            <p>
                                Pão de alto nível, Hamburguer de carne de urso,
                                com aquele sabor forte e para dar aquela dinâmica,
                                Queijo Prato, Salada e maionese verde.
                            </p>
                                <p className='fritas'>Acompanha Fritas</p>
                                <div className='box-oferta'>
                                    <div className="box-preco">
                                        <p>R$</p>
                                        <p>34</p>
                                        <p>,90</p>
                                    </div>
                                    <div className="button-pedir">
                                        <button>
                                        <Link to='/cardapio'>Pedir Agora</Link>
                                        </button>
                                    </div>
                                </div>
                        </Carousel.Caption>
                     </Carousel.Item>
                     <Carousel.Item>
                            <img
                            src={cBurguer}
                            alt="Burguer Artesanal C"
                        className='img-burguer'/>
                        <Carousel.Caption>
                            <div className='logo-icon'>
                                <img src={logoC} alt="Logo C"/>
                                <h3>C++</h3>
                            </div>
                            <p>
                            Pão integral chapeado, queijo prato derretido no banho maria,
                            ovo e guacamole, Tão gostoso que em 3 mordidas você já acabou,
                            é um dos nossos mais populares e recomendados.
                            </p>
                            <p className='fritas'>Acompanha Fritas</p>
                            <div className='box-oferta'>
                                <div className="box-preco">
                                    <p>R$</p>
                                    <p>27</p>
                                    <p>,90</p>
                                </div>
                                <div className="button-pedir">
                                <button>
                                <Link to='/cardapio'>Pedir Agora</Link>
                                </button>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                            src={rubyBurguer}
                            alt="Burguer Artesanal Ruby"
                        className='img-burguer'/>
                        <Carousel.Caption>
                            <div className='logo-icon'>
                                <img src={logoruby} alt="Logo do Ruby"/>
                                <h3>Ruby</h3>
                            </div>
                            <p>
                                Pão Italiano, presunto parma, rúcula e brócolis,
                                um sandwich dinâmico com um gosto forte e marcante.
                            </p>
                            <p className='fritas'>Acompanha Fritas</p>
                            <div className='box-oferta'>
                                <div className="box-preco">
                                    <p>R$</p>
                                    <p>29</p>
                                    <p>,90</p>
                                </div>
                                <div className="button-pedir">
                                <button>
                                <Link to='/cardapio'>Pedir Agora</Link>
                                </button>
                                </div>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className='carrosel-bebidas'>
                    <Carousel interval={30000} pause={false}>
                        <Carousel.Item className='carrosel-bebida'>
                            <div className='carrossel-img'>
                                <img
                                src={milkshake}
                                alt='Milk-Shake Artesanal'
                                />
                            </div>
                            <Carousel.Caption>
                                <div className='carrosel-info'>
                                    <div className='carrosel-descricao'>
                                        <h3>Milk Shake</h3>
                                        <p>Que tal um Milk-shake ? Perfeito para acompanhar o seu Burger.</p>
                                    </div>
                                    <div className='carrosel-valor'>
                                        <div className="carrosel-preco">
                                            <p>R$</p>
                                            <p>29</p>
                                            <p>,90</p>
                                        </div>
                                        <div className="button-pedir">
                                        <button>
                                        <Link to='/cardapio'>Pedir Agora</Link>
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='carrosel-bebida'>
                            <div className='carrosel-img'>
                                <img
                                src={soda}
                                alt='soda Italiana'
                                />
                            </div>
                            <Carousel.Caption>
                                <div className='carrosel-info'>
                                    <div className='carrosel-descricao'>
                                        <h3>Soda Italiana</h3>
                                        <p>Que tal uma soda italiana ? doce e refrescantes.</p>
                                    </div>
                                    <div className='carrosel-valor'>
                                        <div className="carrosel-preco">
                                            <p>R$</p>
                                            <p>29</p>
                                            <p>,90</p>
                                        </div>
                                        <div className="button-pedir">
                                        <button>
                                        <Link to='/cardapio'>Pedir Agora</Link>
                                        </button>
                                        </div>
                                    </div>
                                    </div>
                            </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className='carrosel-bebida'>
                            <div className='carrosel-img'>
                                <img
                                src={suco}
                                alt='Sucos Naturais'
                                />
                            </div>
                            <Carousel.Caption>
                                <div className='carrosel-info'>
                                    <div className='carrosel-descricao'>
                                        <h3>Sucos Naturais</h3>
                                        <p>Todos os nossos sucos são naturais. Escolha o que preferir.</p>
                                    </div>
                                    <div className='carrosel-valor'>
                                        <div className="carrosel-preco">
                                            <p>R$</p>
                                            <p>29</p>
                                            <p>,90</p>
                                        </div>
                                        <div className="button-pedir">
                                        <button>
                                        <Link to='/cardapio'>Pedir Agora</Link>
                                        </button>
                                        </div>
                                    </div>
                                </div>
                            </Carousel.Caption>
                            </Carousel.Item>
                    </Carousel>
                </div>
        </div>
       
    )
}