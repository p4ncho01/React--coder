import React, { useContext } from 'react';
import { contextoGeneral } from '../components/ContextContainer';
import ItemCount from './ItemCount';

export default function ItemDetail({ producto }) {
  const { addItem } = useContext(contextoGeneral);
  function onAdd(cant) {
    addItem(producto, cant);
  }
  return (
    <div style={{ border: '2px solid violet', margin: '10px' }}>
      {producto.id ? (
        <>
          ID: {producto.id}
          <br />
          PRODUCTO: {producto.nombre}
          <br />
          CATEGORIA: {producto.categoria}
          <br />
          PRECIO: {producto.precio}
          <br />
          STOCK: {producto.stock}
          <br />
          <ItemCount ini={1} max={producto.stock} onAdd={onAdd} />
        </>
      ) : (
        <>Loading...</>
      )}
    </div>
  );
}