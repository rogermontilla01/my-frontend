import React from 'react';
import '../Styles/quill.css'
import {Container,} from 'react-bootstrap'
export default function StaticComponent({ data }) {



  return (
    <Container style={{paddingTop:'2rem'}}>
      <td dangerouslySetInnerHTML={{__html: data}}/>
    </Container>
  );
}
