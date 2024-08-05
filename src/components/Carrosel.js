import React from 'react';
import { Carousel } from 'react-bootstrap';
import pythonBurguer from '../assets/python-burguer.png';
import cBurguer from '../assets/C-burguer.png';
import rubyBurguer from '../assets/ruby-burguer.png';
import logopython from '../assets/logo-python.svg';
import logoC from '../assets/logo-c.svg';
import logoruby from '../assets/logo-ruby.svg';
import '../styles/carrosel.css';

export default function Carrosel() {
    return (
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
                            <p>Acompanha Fritas</p>
                            <p>R$ 34,90</p>
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
                        <p>R$ 27,90</p>
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
                        <p>R$ 29,90</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}