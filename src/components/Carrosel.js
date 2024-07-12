import React from 'react';
import { Carousel } from 'react-bootstrap';
import pythonBurguer from '../assets/python-burguer.png';
import javaBurguer from '../assets/java-burguer.png';
import rubyBurguer from '../assets/ruby-burguer.png';
import logopython from '../assets/logo-python.svg';
import logojava from '../assets/logo-java.svg';
import logoruby from '../assets/logo-ruby.svg';
import '../styles/carrosel.css';

export default function Carrosel() {
    return (
        <Carousel interval={3000} pause={false}>
            <Carousel.Item>
                <img 
                src={pythonBurguer}
                alt="Burguer Artesanal Python"
                />
                <Carousel.Caption>
                    <img src={logopython} alt="Logo da Python"/>
                    <h3>Python</h3>
                    <p>
                        Pão de alto nível, Hamburguer de carne de urso,
                        com aquele sabor forte e para dar aquela dinâmica,
                        Queijo Prato, Salada e maionese verde.
                    </p>
                        <p>Acompanha Fritas</p>
                        <p>R$ 34,90</p>
                </Carousel.Caption>
             </Carousel.Item>
            * <Carousel.Item>
                    <img
                    src={javaBurguer}
                    alt="Burguer Artesanal Java"
                />
                <Carousel.Caption>
                    <img src={logojava} alt="Logo do Java" />
                    <h3>Java</h3>
                    <p>
                        Pão de Hamburguer simples, 2 hamburguers de 70 gramas,
                        alface, tomate e maionese, um lanche humilde mas excelente.
                    </p>
                    <p>Acompanha Fritas</p>
                    <p>R$ 28,90</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <img
                    src={rubyBurguer}
                    alt="Burguer Artesanal Ruby"
                />
                <Carousel.Caption>
                    <img src={logoruby} alt="Logo do Ruby" />
                    <h3>Ruby</h3>
                    <p>
                        Pão Italiano, presunto parma, rúcula e brócolis,
                        um sandwich dinâmico com um gosto forte e marcante.
                    </p>
                    <p>Acompanha Fritas</p>
                    <p>R$ 29,90</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}