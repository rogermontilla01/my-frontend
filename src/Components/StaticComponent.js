import React from 'react';
import './quill.css'
import {Container, Row, Col} from 'react-bootstrap'
export default function StaticComponent({ data }) {



  return (
    <Container style={{paddingTop:'2rem'}}>
      <td dangerouslySetInnerHTML={{__html: data}}/>
    </Container>
  );
}
