import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';

export default function Products({ data }) {
  return (
    <Container>
      <Row md={12}>
        {data.map((prod) => {
          return (
            <Col md={3} key={prod._id}>
              <Card style={{ width: '16rem', marginTop:'1rem' }}>
                <Card.Img variant="top" src={'http://localhost:3001/images/'+prod.images.filename} />
                <Card.Body>
                  <Card.Title>{prod.name}</Card.Title>
                  <Card.Text>
                    {prod.description.substring(0, 20).concat('...')}
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
