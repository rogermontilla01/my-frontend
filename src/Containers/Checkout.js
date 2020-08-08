import React, { useEffect, useState } from 'react';
import { removeDuplicates, total } from '../Middlewares/CheckoutMiddleware';
import CheckoutProds from '../Components/CheckoutProds';
import ToastMessage from '../Components/ToastMessage';
//import { getProdsByList } from '../Services/ProductsService';
import { Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Checkout() {
  const [show, setShow] = useState(false);
  const [renderCheckout, setRenderCheckout] = useState(false);
  const [prodsCheckout, setProdsCheckout] = useState({
    loading: true,
    prods: [],
  });
  const [reload, setReload] = useState(true);

  useEffect(() => {
    //para evitar el error de prods vacio
    if (localStorage.getItem('prods') != undefined) {
      var prods = JSON.parse(localStorage.getItem('prods'));
      var prodsWithQuantity = removeDuplicates(prods, 'id');
      var totalPurchase = total(prodsWithQuantity);
      setProdsCheckout({
        loading: false,
        prods: prodsWithQuantity,
        total: totalPurchase,
      });
      setReload(false);
    } else {
      setRenderCheckout(true);
    }
  }, [reload]);

  return (
    <div>
      {renderCheckout && (
        <div className="d-flex justify-content-center mt-4">
          <Card style={{ width: '18rem' }}>
            <Card.Img
              className="rounded mx-auto d-block mt-4"
              style={{ height: '8rem', width: '8rem' }}
              variant="top"
              src={process.env.PUBLIC_URL + '/triste.png'}
            />
            <Card.Body className="text-center">
              <Card.Title>You have no products</Card.Title>
              <Card.Text>Please add products to continue</Card.Text>
              <Button variant="primary" as={Link} to={'/'} block>
                Go Home
              </Button>
            </Card.Body>
          </Card>
          <div style={{ position: 'fixed', bottom: '0', width: '100%' }}>
            <ToastMessage show={show} setShow={setShow} even={'Succesful purchase'} />
          </div>
        </div>
      )}
      {!prodsCheckout.loading && !renderCheckout && (
        <CheckoutProds data={prodsCheckout.prods} reload={setReload} total={prodsCheckout.total}></CheckoutProds>
      )}
    </div>
  );
}
