import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Container, Card, Button, Row, Col, ButtonGroup } from 'react-bootstrap';

export default function ProdsDetail({ data }) {
  //console.log('data desde ProdsDetail =>',data)
  console.log('Img =>', data);
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col  style={{ marginTop: '1rem' }}>
          <Card style={{width:'50%'}} key={data._id} border="light" className="text-left mx-auto">
            <Card.Title style={{ marginTop: '1rem' }} className='text-center'>{data.name}</Card.Title>
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
                  <p style={{ marginBottom: '5px' }}>Description: {data.description}</p>
                </div>
              </div>
            </Card.Body>
            <div style={{ textAlign: 'center', marginBottom:'1rem' }}>
                          <ButtonGroup size="sm">
                            <Button
                              style={{ fontSize: '14px', padding: '6px' }}
                              variant="success"
                              onClick={() => {
                                
                              }}
                            >
                              Buy Now
                            </Button>
                            <Button
                              onClick={() => {
                                
                              }}
                              variant="success"
                              style={{ fontSize: '14px', padding: '6px' }}
                            >
                              Add to Car
                            </Button>
                          </ButtonGroup>
                        </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
