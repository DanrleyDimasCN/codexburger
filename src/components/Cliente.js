import '../styles/cliente.css'
import React from 'react';
import { useLocation } from 'react-router-dom';

export default function Cliente() {
  const location = useLocation();
  const { pedidos } = location.state || { pedidos: [] };
  const total = pedidos.reduce((acc, pedido) => acc + pedido.preco, 0);

  return (
    <section className='secao-cliente'>
      <div className="secao-perfil">
        <h1>Seja Bem-Vindo Danrley</h1>
        <h2>Seus Pedidos</h2>
        <ul>
          {pedidos.length > 0 ? (
            pedidos.map((pedido, index) => (
              <li key={index}>{pedido.nome} - R$ {pedido.preco.toFixed(2)}</li>))
          ) : (
            <li>Nenhum pedido realizado.</li>
          )}
        </ul>

        {pedidos.length > 0 && (
          <h3>Total: R$ {total.toFixed(2)}</h3>
        )}
      </div>
    </section>
  );
}