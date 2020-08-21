import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

export default function Footer() {
  var style = {
    justifyContent: 'center',
    backgroundColor: '#F8F8F8',
    borderTop: '1px solid #E7E7E7',
    padding: '10px',
    bottom: '0',
    height: '50px',
    width: '100%',
  };

  var footerStyle = {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '2.5rem',
  };
  return (
    <div style={{ paddingBottom: '2.5rem' }}>
      <footer style={footerStyle}>
        <Navbar style={style}>
          <div>© 2010 - 2020 | RM SRL - Todos los derechos reservados</div>
          <Nav.Link as={Link} to={'/about'}>
            About
          </Nav.Link>
          <Nav.Link as={Link} to={'/history'}>
            History
          </Nav.Link>
        </Navbar>
      </footer>
    </div>
  );
}
