import React from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';

export default function ProdsDetail({ data }) {
  //console.log('data desde ProdsDetail =>',data)
  console.log('Img =>', data);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col style={{marginTop: '1rem'}}>
          <Card className="text-center">
            <Card.Header>Featured</Card.Header>
            <Card.Body className="media position-relative">
              <Card.Img
                variant="top"
                style={{ height: '8rem', width: '8rem' }}
                src={`http://localhost:3001/images/${data.images.filename}`}
              />
              <div className="text-left">
                <Card.Title>{data.name}</Card.Title>
                <Card.Text>{data.description}</Card.Text>
                <p>{}</p>
              </div>
            </Card.Body>
            <Card.Footer className="text-muted">
              <Button variant="primary">Go somewhere</Button>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
