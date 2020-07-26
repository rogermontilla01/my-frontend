import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button } from 'react-bootstrap';
import NetContext from '../Context/NetContext';
import context from 'react-bootstrap/esm/AccordionContext';

export default function Products({ data }) {
  return (
    <NetContext.Consumer>
      {(context) => (
        <Container>
          <Row md={12}>
            {data.map((prod) => {
              return (
                <Col xl={3} lg={4} md={6} xs={12} key={prod._id}>
                  <Card style={{ width: '16rem', marginTop: '1rem' }}>
                    <Card.Img variant="top" src={'http://localhost:3001/images/' + prod.images.filename} />
                    <Card.Body>
                      <Card.Title>{prod.name}</Card.Title>
                      <Card.Text>{prod.description.substring(0, 20).concat('...')}</Card.Text>
                      {context.login && <Button variant="primary">Go somewhere</Button>}
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      )}
    </NetContext.Consumer>
  );
}
