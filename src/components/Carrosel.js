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

export default function Carrosel() {
    return (
        <div className='box-global'>
            <div className='box-main'>
                <Carousel interval={3000} pause={false}>
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
                                <p>Acompanha Fritas</p>
                                <div className="box-preco">
                                    <p>R$</p>
                                    <p>34</p>
                                    <p>,90</p>
                                </div>
                                <div className="button-pedir">
                                    <p>Pedir Agora</p>
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
                            <p>Acompanha Fritas</p>
                            <div className="box-preco">
                                <p>R$</p>
                                <p>27</p>
                                <p>,90</p>
                            </div>
                            <div className="button-pedir">
                                <p>Pedir Agora</p>
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
                            <p>Acompanha Fritas</p>
                            <div className="box-preco">
                                <p>R$</p>
                                <p>29</p>
                                <p>,90</p>
                            </div>
                            <div className="button-pedir">
                                <p>Pedir Agora</p>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
                </div>
                <div className='box-main-2'>
                    <Carousel interval={3000} pause={false}>
                        <Carousel.Item className='box-milk-shake'>
                            <div className='img-shake'>
                                <img
                                src={milkshake}
                                alt='Milk-Shake Artesanal'
                                />
                            </div>
                            <div className='box-info'>
                                <div className='box-descricao'>
                                    <h3>Milk Shake</h3>
                                    <p>Perfeito para acompanhar o seu Burger.</p>
                                </div>
                                <div className="box-preco">
                                        <p>R$</p>
                                        <p>29</p>
                                        <p>,90</p>
                                    </div>
            
                                        <div className="button-pedir">
                                            <p>Pedir Agora</p>
                                        </div>
            
                            </div>
                            </Carousel.Item>
                            <Carousel.Item className='box-soda'>
                            <div className='img-soda'>
                                <img
                                src={soda}
                                alt='soda Italiana'
                                />
                            </div>
                            <div className='box-info'>
                                <div className='box-descricao'>
                                    <h3>Soda Italiana</h3>
                                    <p>Que tal uma bebida refrescante ? nossas sodas italiana serão perfeitas</p>
                                </div>
                                <div className="box-preco">
                                        <p>R$</p>
                                        <p>29</p>
                                        <p>,90</p>
                                    </div>
            
                                        <div className="button-pedir">
                                            <p>Pedir Agora</p>
                                        </div>
            
                            </div>
                            </Carousel.Item>
                            <Carousel.Item className='box-suco'>
                            <div className='img-suco'>
                                <img
                                src={suco}
                                alt='Sucos Naturais'
                                />
                            </div>
                            <div className='box-info'>
                                <div className='box-descricao'>
                                    <h3>Sucos Naturais</h3>
                                    <p>Todos os nossos sucos são naturais, A base de leite ou água, escolha o que preferir.</p>
                                </div>
                                <div className="box-preco">
                                        <p>R$</p>
                                        <p>29</p>
                                        <p>,90</p>
                                    </div>
                                    <div className="button-pedir">
                                    <p>Pedir Agora</p>
                                    </div>
                            </div>
                            </Carousel.Item>
                    </Carousel>
                </div>
        </div>
       
    )
}