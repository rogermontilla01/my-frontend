import React, { useState } from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';
import NetContext from '../Context/NetContext';

const Menu = ({ data }) => {
  const history = useHistory();

  const [searchItem, setSearchItem] = useState({
    name: '',
  });

  const handleSubmit = (event) => {
    setSearchItem({
      ...searchItem,
      [event.target.name]: event.target.value,
    });
  };

  const sendData = (event) => {
    event.preventDefault();
    localStorage.setItem('search', searchItem.name)
    history.push('/');
  };

  return (
    <NetContext.Consumer>
      {(context) => (
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="/">My Ecommerce</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              {context.login && (
                <>
                  <Nav.Link as={Link} to={'/'}>
                    Home
                  </Nav.Link>
                  <Nav.Link onClick={context.logoutUser}>Logout</Nav.Link>
                </>
              )}
              {!context.login && (
                <>
                  <Nav.Link as={Link} to={'/'}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/login'}>
                    Login
                  </Nav.Link>
                  <Nav.Link as={Link} to={'/signup'}>
                    Signup
                  </Nav.Link>
                </>
              )}
            </Nav>
            <Form onSubmit={sendData} inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={handleSubmit}
                name="name"
              />
              <Button type="submit" variant="outline-success">Search</Button>
            </Form>
            <Navbar.Brand style={{ marginLeft: '2rem' }} href="/checkout">
              <img
                src={process.env.PUBLIC_URL + '/shopper.png'}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
            <Navbar.Brand style={{ marginLeft: '1rem' }} href="/user-panel">
              <img
                src={process.env.PUBLIC_URL + '/usuario.png'}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="logo"
              />
            </Navbar.Brand>
          </Navbar.Collapse>
        </Navbar>
      )}
    </NetContext.Consumer>
  );
};

export default Menu;
