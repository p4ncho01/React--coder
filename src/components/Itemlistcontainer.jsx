import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import './ItemListcontainer';

export default function ItemListContainer() {
  console.log('render de item list container');
  const { idcategory } = useParams();

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const db = getFirestore();
    let productos;
    if (idcategory) {
      productos = query(collection(db, 'productos'), where('categoria', '==', idcategory));
    } else {
      productos = collection(db, 'productos');
    }

    getDocs(productos).then((res) => {
      console.log(res.docs);

      const arrayNorm = res.docs.map((element) => {
        return { id: element.id, name: element.data().nombre, category: element.data().categoria, precio: element.data().precio, stock: element.data().stock };
      });

      console.log(arrayNorm);
      setProductos(arrayNorm);

    });
  }, [idcategory]);

  return (
    <div style={{ border: '2px solid red', margin: '10px' }}>
      <ItemList productos={productos} />;
    </div>
  );
}