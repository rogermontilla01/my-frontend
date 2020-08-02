import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, CardGroup, Button, ButtonGroup, ListGroup } from 'react-bootstrap';

export default function CheckoutProds({ data, reload, list }) {
  var Total = 0;

  list.forEach((element) => {
    if (element.offert) {
      Total += element.offert * element.quantity;
    } else {
      Total += element.price * element.quantity;
    }
  });

  const deleteProd = (Element) => {
    var actualProds = localStorage.getItem('prods').split(',');
    var filter = actualProds.filter((item) => {
      return item != Element && item != '';
    });
    console.log('actual =>', filter);
    localStorage.setItem('prods', filter);
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
                        {list.map((item) => {
                          let total = 0;
                          if (item.id == data._id) {
                            return (
                              <div key={item.id} style={{ fontSize: '12px' }}>
                                <p key={item.id}>Cantidad: {item.quantity} </p>
                              </div>
                            );
                          }
                        })}
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
                          deleteProd(data._id);
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
            <Card.Header style={{textAlign: 'center' }}>Total</Card.Header>
            <Card.Body>
              {list.map((item) => {
                return (
                  <div style={{ fontSize: '12px' }}>
                    {item.name}: {item.price * item.quantity}
                  </div>
                );
              })}
              <div style={{ fontSize: '16px', marginTop:'1rem' }}>Totale General: {Total}</div>
              <Button size="sm" variant="success" block style={{ marginTop: '1rem' }}>
                Comprar
              </Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
