import React from 'react';
import { Container, Row, Col, Card, Table, ListGroup, ListGroupItem } from 'react-bootstrap';

export default function UserPanelComponent({ userData, userSales }) {
  var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });
  var prodsSales = [];
  var total = 0;
  userSales.forEach((item) => {
    item.products.forEach((prod) => {
      total += prod.price;
      prodsSales.push({ name: prod.name, price: prod.price, date: item.date.substring(0, 10) });
    });
  });

  console.log('userDataComponent: ', userData);
  console.log('userSalesComponent: ', userSales);
  console.log('prodsSales: ', prodsSales);
  return (
    <Container>
      <Row>
        <Col>
          <div className="text-center mt-4 mb-4">
            <h5>Panel de Usuario</h5>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md={8}>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Date</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {prodsSales.map((item, index) => {
                return (
                  <tr key={index}>
                    <td key={index}>{index + 1}</td>
                    <td key={item.name}>{item.name}</td>
                    <td key={item.date}>{item.date}</td>
                    <td key={item.price}>{formatter.format(item.price)}</td>
                  </tr>
                );
              })}
            </tbody>
            <thead>
              <tr>
                <th colSpan="3">Total: </th>
                <th colSpan="3">{formatter.format(total)}</th>
              </tr>
            </thead>
          </Table>
        </Col>
        <Col md={4}>
          <Card style={{ width: '20rem' }}>
            <Card.Body>
              <Card.Title className="text-center mb-0">User Data</Card.Title>
            </Card.Body>
            <ListGroup className="list-group-flush">
              <ListGroupItem>
                <strong>Full Name: </strong>
                {userData.name + ' ' + userData.lastname}
              </ListGroupItem>
              <ListGroupItem>
                <strong>User: </strong>
                {userData.user}
              </ListGroupItem>
              <ListGroupItem>
                <strong>Email: </strong>
                {userData.email}
              </ListGroupItem>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
