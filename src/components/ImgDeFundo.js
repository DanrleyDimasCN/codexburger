import React from 'react';
import '../styles/imgdefundo.css';
import  estabelecimento  from '../assets/estabelecimento.jpg'

export default function ImgDeFundo() {
    return (
        <div>
            <img src={estabelecimento} alt="Estabelecimento de restaurante" className='img-inicio'/>
        </div>
    )
}