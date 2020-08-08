import React, { useContext } from 'react';
import NetContext from '../Context/NetContext';
import { UserSales } from '../Services/UserService';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';
import { deleteProd } from '../Middlewares/CheckoutMiddleware';

export default function CheckoutProds({ data, reload, total }) {
  const context = useContext(NetContext)
  const deleteElement = (id) => {
    deleteProd(id);
    context.setToast({
      showToast: true,
      eventToast: 'Product deleted successfully'
    });
    reload(true);
  };

  //Realizar la compra
  const purchase = (list) => {
    let data = {
      user_id: localStorage.getItem('user_id'),
      productsList: list,
    };
    UserSales(data);
    localStorage.removeItem('prods');
    context.setToast({
      showToast: true,
      eventToast: 'Successful purchase'
    });
    reload(true);
  };

  return (
        <Container>
          <Row>
            <Col md={8} sm={12}>
              <ListGroup>
                <Card style={{ marginTop: '5px' }}>
                  {data.map((data) => {
                    return (
                      <Card key={data._id} border="light" className="text-left">
                        <Card.Title style={{ marginTop: '1rem', marginLeft: '2rem' }}>{data.name}</Card.Title>
                        <Card.Body className="media position-relative">
                          <Card.Img
                            variant="top"
                            style={{ height: '8rem', width: '8rem', marginRight: '2rem' }}
                            src={`http://localhost:3001/images/${data.images.filename}`}
                          />
                          <div className="text-left">
                            <p>{data.description}</p>
                            {data.offert && (
                              <div style={{ fontSize: '12px' }}>
                                <p style={{ color: 'red', marginBottom: '5px' }}>
                                  <del>Old Price: {data.price}</del>
                                </p>
                                <p style={{ marginBottom: '5px' }}>Offert: {data.offert}</p>
                              </div>
                            )}
                            {!data.offert && (
                              <div style={{ fontSize: '12px' }}>
                                <p style={{ marginBottom: '5px' }}>Price: {data.price}</p>
                              </div>
                            )}
                            <div style={{ fontSize: '12px' }}>
                              <p style={{ marginBottom: '5px' }}>Quantity: {data.purchase}</p>
                            </div>
                          </div>
                        </Card.Body>
                        <div
                          style={{ marginBottom: '1rem', marginRight: '30%', marginLeft: '30%' }}
                          className="text-center"
                        >
                          <Button
                            size="sm"
                            variant="danger"
                            block
                            onClick={() => {
                              deleteElement(data.id);
                            }}
                          >
                            Delete
                          </Button>
                        </div>
                      </Card>
                    );
                  })}
                </Card>
              </ListGroup>
            </Col>
            <Col md={4} sm={12}>
              <Card style={{ position: 'fixed', marginTop: '5px', minWidth: '300px' }}>
                <Card.Header style={{ textAlign: 'center' }}>Total</Card.Header>
                <Card.Body>
                  <ListGroup variant="flush">
                    {data.map((item) => {
                      return (
                        <ListGroup.Item
                          style={{
                            fontSize: '14px',
                            paddingTop: '0.5rem',
                            paddingBottom: '0.5rem',
                            paddingLeft: '0px',
                          }}
                        >
                          {item.offert && (
                            <div>
                              <strong>{item.name}</strong>: {item.offert * item.purchase}
                            </div>
                          )}
                          {!item.offert && (
                            <div>
                              <strong>{item.name}</strong>: {item.price * item.purchase}
                            </div>
                          )}
                        </ListGroup.Item>
                      );
                    })}
                  </ListGroup>

                  <div style={{ fontSize: '16px', marginTop: '1rem' }}>
                    <strong>Totale General: </strong>
                    {total}
                  </div>
                  <Button
                    size="sm"
                    variant="success"
                    block
                    style={{ marginTop: '1rem' }}
                    onClick={() => {
                      purchase(data);
                    }}
                  >
                    Comprar
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
  );
}
