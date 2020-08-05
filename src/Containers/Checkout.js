import React, { useEffect, useState } from 'react';
import CheckoutProds from '../Components/CheckoutProds';
import { getProdsByList } from '../Services/ProductsService';

export default function Checkout() {
  const [prodsCheckout, setProdsCheckout] = useState({
    loading: false,
    prods: [],
  });
  const [reload, setReload] = useState(true);
  useEffect(() => {
    //para evitar el error de prods vacio
    if(localStorage.getItem('prods') == undefined){
      localStorage.setItem('prods', [''])
    }
    setReload(false);
    var prods = localStorage.getItem('prods').split(',');
    var prodsCheck = prods.filter((item) => {
      return item != Element && item != '';
    });
    const fetchData = async () => {
      const prods = await getProdsByList(prodsCheck);
      setProdsCheckout({
        loading: true,
        prods: prods.data,
        list: createList(prods.data), //Lista de Productos con cantidad
      });
    };
    fetchData();
  }, [reload]);

  // Funcion para contar los elementos en el array
  var count = (prods, item) => {
    let cantidad = 0;
    prods.forEach((prod) => {
      if (prod == item) {
        cantidad += 1;
      }
    });
    return cantidad;
  };
// Funcion para crear una lista de elementos con cantidad y precio
  var createList = (data) => {
    let price = 0
    let prods = localStorage.getItem('prods').split(',');
    var List = data.map((item) => {
      if(item.offert){
        price = item.offert
      }else{
        price = item.price
      }
      return {
        id: item._id,
        name: item.name,
        price: price,
        quantity: count(prods, item._id),
      };
    });
    console.log('Prod List => ', List);
    return List;
  };

  return (
    <div>
      {prodsCheckout && console.log('ProdsCheckOut =>', prodsCheckout)}
      {prodsCheckout.loading && (
        <CheckoutProds data={prodsCheckout.prods} reload={setReload} list={prodsCheckout.list}></CheckoutProds>
      )}
    </div>
  );
}
