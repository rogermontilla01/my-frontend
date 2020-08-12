import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';

export default function Footer() {
  var style = {
    backgroundColor: '#F8F8F8',
    borderTop: '1px solid #E7E7E7',
    textAlign: 'center',
    padding: '10px',
    position: 'fixed',
    left: '0',
    bottom: '0',
    height: '50px',
    width: '100%',
  };

  var phantom = {
    display: 'block',
    padding: '10px',
    height: '50px',
    width: '100%',
  };
  return (
    <footer style={phantom}>
      <Navbar style={style}>
        <Nav.Link as={Link} to={'/about'}>
          About
        </Nav.Link>
      </Navbar>
    </footer>
  );
}
