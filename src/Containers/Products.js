import React,{useContext} from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';
import NetContext from '../Context/NetContext';
import { addProd } from '../Middlewares/ProductMiddleware';
import { Link, useHistory } from 'react-router-dom';

export default function Products({ data }) {
  const context = useContext(NetContext)
  const history = useHistory();
 
  const goCheckout = (prod) => {
    addProd(prod);
    history.push('/checkout');
    console.log(JSON.parse(localStorage.getItem('prods')));
  };
  
  const addNewProd = (prod)=>{
    addProd(prod)
    context.setToast({
      showToast: true,
      eventToast: 'Product added successfully'
    });
  }
  

  return (
        <Container>
          <Row md={12}>
            {data.map((prod) => {
              return (
                <Col xl={3} lg={4} md={6} xs={12} key={prod._id}>
                  <Card
                    className="shadow-sm p-3 mb-5 bg-white rounded"
                    style={{ width: '14rem', marginTop: '1rem', alignItems: 'center' }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: '8rem', width: '8rem' }}
                      src={`http://localhost:3001/images/${prod.images.filename}`}
                    />
                    <Card.Body style={{ width: '14rem', textAlign: 'left' }}>
                      <h6>{prod.name}</h6>
                      <p>{prod.description.substring(0, 20).concat('...')}</p>
                      {prod.offert && (
                        <div style={{ fontSize: '12px' }}>
                          <p style={{ color: 'red', marginBottom: '5px' }}>
                            <del>Old Price: {prod.price}</del>
                          </p>
                          <p>Offert: {prod.offert}</p>
                        </div>
                      )}
                      {!prod.offert && (
                        <div style={{ fontSize: '12px' }}>
                          <p>Price: {prod.price}</p>
                        </div>
                      )}
                      {context.login && (
                        <div style={{ textAlign: 'center' }}>
                          <ButtonGroup size="sm">
                            <Button
                              style={{ fontSize: '12px', padding: '4px' }}
                              variant="success"
                              onClick={() => {
                                goCheckout(prod);
                              }}
                            >
                              Buy Now
                            </Button>
                            <Button
                              as={Link}
                              to={'/prods-detail/' + prod._id}
                              variant="success"
                              style={{ fontSize: '12px', padding: '4px' }}
                            >
                              Detail
                            </Button>
                            <Button
                              onClick={() => {
                                addNewProd(prod);
                              }}
                              variant="success"
                              style={{ fontSize: '12px', padding: '4px' }}
                            >
                              Add to Car
                            </Button>
                          </ButtonGroup>
                        </div>
                      )}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
  );
}
