import React from 'react';
import { Container, Row, Col, Card, CardGroup, Button, ButtonGroup } from 'react-bootstrap';
import NetContext from '../Context/NetContext';
import { UserSales } from '../Services/UserService';
import { Link } from 'react-router-dom';

export default function Products({ data }) {
  const handleSale = async (e, value) => {
    e.preventDefault();
    await UserSales({
      user_id: localStorage.getItem('user_id'),
      productsList: [value],
    });
  };
  return (
    <NetContext.Consumer>
      {(context) => (
        <Container>
          <Row md={12}>
            {data.map((prod) => {
              return (
                <Col xl={3} lg={4} md={6} xs={12} key={prod._id}>
                  <Card
                    className="shadow-sm p-3 mb-5 bg-white rounded"
                    style={{ width: '14rem', height: '18rem', marginTop: '1rem', alignItems: 'center' }}
                  >
                    <Card.Img
                      variant="top"
                      style={{ height: '8rem', width: '8rem' }}
                      src={`http://localhost:3001/images/${prod.images.filename}`}
                    />
                    <Card.Body style={{ width: '14rem', textAlign: 'center' }}>
                      <h6>{prod.name}</h6>
                      <p>{prod.description.substring(0, 20).concat('...')}</p>
                      {context.login && (
                        <ButtonGroup size="sm">
                          <Button variant="success" onClick={(e) => handleSale(e, prod._id)}>
                            Comprar
                          </Button>
                          <Button as={Link} to={'/prods-detail/'+prod._id} variant="success">
                            Detalle
                          </Button>
                        </ButtonGroup>
                      )}
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
