import React, { Component } from 'react';
import { Navbar, Nav,Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = ({ data }) => {
  return (
    
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">MyEcommerce</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            {data.map(option=><Nav.Link as={Link} to={option.path}>{option.label}</Nav.Link>)}
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    
  );
};

export default Menu;
