import React, { useContext, useState } from 'react';
import { Container, Row, Col, Card, Button, ButtonGroup, Form } from 'react-bootstrap';
import NetContext from '../Context/NetContext';
import { addProd } from '../Middlewares/ProductMiddleware';
import PaginationBar from '../Layout/PaginationBar'
import { Link, useHistory } from 'react-router-dom';

export default function Products({ data, filterProducts, categories, clearFilter, changePage, paginationData }) {
  const [priceFilter, setPriceFilter] = useState({
    min: 0,
    max: 0,
    category: 'All',
  });

  const handleInputChange = (event) => {
    setPriceFilter({
      ...priceFilter,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    filterProducts(priceFilter.min, priceFilter.max, priceFilter.category);
  };

  const clearElements = () => {
    clearFilter();
    setPriceFilter({
      min: 0,
      max: 0,
      category: 'All',
    });
    console.log('hola');
  };

  const context = useContext(NetContext);
  const history = useHistory();

  const goCheckout = (prod) => {
    addProd(prod);
    history.push('/checkout');
    console.log(JSON.parse(localStorage.getItem('prods')));
  };

  const addNewProd = (prod) => {
    addProd(prod);
    context.setToast({
      showToast: true,
      eventToast: 'Product added successfully',
    });
  };

  return (
    <Container fluid>
      <Row md={12}>
        <Col md={3}>
          <Card style={{ width: '18rem', marginTop: '1rem', alignItems: 'left', marginLeft: '1rem' }}>
            <Card.Body>
              <Card.Title className="text-center mb-4">Shop by Category</Card.Title>
              <Form onSubmit={sendData}>
                <Form.Control
                  style={{ width: '100%' }}
                  className="mb-2 mr-sm-2"
                  size="sm"
                  placeholder="Min price"
                  value={priceFilter.min}
                  onChange={handleInputChange}
                  name="min"
                />
                <Form.Control
                  style={{ width: '100%' }}
                  className="mb-2 mr-sm-2"
                  size="sm"
                  placeholder="Max price"
                  value={priceFilter.max}
                  onChange={handleInputChange}
                  name="max"
                />
                <Form.Control
                  style={{ width: '100%' }}
                  className="mb-2 mr-sm-2"
                  size="sm"
                  as="select"
                  value={priceFilter.category}
                  onChange={handleInputChange}
                  name="category"
                >
                  <option>All</option>;
                  {categories.map((item) => {
                    return <option key={item._id} value={item._id}>{item.subname}</option>;
                  })}
                </Form.Control>

                <Button
                  type="submit"
                  className="mb-2 mt-2"
                  size="sm"
                  block
                  disabled={priceFilter.max == 0 && priceFilter.category == 'All' ? true : false}
                >
                  Filter Products
                </Button>

                <Button onClick={clearElements} className="mb-2" size="sm" block>
                  Clear
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
        <Col md={9}>
          <Row>
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
                      <div style={{ fontSize: '12px', marginBottom:'5px' }}>
                      Category: {prod.subcategory.subname}
                      </div>
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
            <div style={{width:'100%', paddingBottom:'2rem'}} className='text-center'>
              <PaginationBar changePage={(pageNumber)=>changePage(pageNumber)} paginationData={paginationData}/>
            </div>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
