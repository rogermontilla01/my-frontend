import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button, ButtonGroup, ListGroup } from 'react-bootstrap';

export default function CheckoutProds({ data, reload }) {
  const deleteProd = (Element) => {
    var actualProds = localStorage.getItem('prods').split(',');
    var filter = actualProds.filter((item) => {
      return (item != Element && item != "");
    });

    console.log('actual =>', filter);
    localStorage.setItem('prods', filter);
    reload(true);
  };

  return (
    <Container>
      <Row>
        <Col>
          <ListGroup>
            <Card style={{ width: '60%' }}>
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
                            <p>Offert: {data.offert}</p>
                          </div>
                        )}
                        {!data.offert && (
                          <div style={{ fontSize: '12px' }}>
                            <p>Price: {data.price}</p>
                          </div>
                        )}
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
      </Row>
    </Container>
  );
}
