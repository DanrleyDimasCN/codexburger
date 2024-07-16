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
            <Carousel interval={3000} pause={false} className='box-carrosel'>
                <Carousel.Item className='box-item'>
                    <img
                    src={pythonBurguer}
                    alt="Burguer Artesanal Python"
                    className='img-python'/>
                    <Carousel.Caption className='carrosel-caption-python'>
                        <div className="item-logo">
                            <img src={logopython} alt="Logo da Python" className='item-logo-burguer'/>
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
                    />
                    <Carousel.Caption className='carrosel-caption-C'>
                        <div className="item-logo">
                            <img src={logoC} alt="Logo C" className='item-logo-burguer'/>
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
                    />
                    <Carousel.Caption className='carrosel-caption-ruby'>
                        <div className="item-logo">
                            <img src={logoruby} alt="Logo do Ruby" className='item-logo-burguer'/>
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