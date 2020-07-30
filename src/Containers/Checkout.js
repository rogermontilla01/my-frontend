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
      });
    };
    fetchData();
  }, [reload]);

  return (
    <div>
      {prodsCheckout && console.log('ProdsCheckOut =>', prodsCheckout)}
      {prodsCheckout.loading && <CheckoutProds data={prodsCheckout.prods} reload={setReload}></CheckoutProds>}
    </div>
  );
}
