import React from 'react';
import Form from 'react-bootstrap/Form';

function FormGroup(props) {
  return (
    <Form.Group controlId="formBasicName">
      <Form.Label>{props.label}</Form.Label>
      <Form.Control type={props.type} placeholder={props.placeholder} value={props.value} name={props.name} onChange={props.change} />

        {
            props.errors && 
            <Form.Text>
                {props.errors}
            </Form.Text>
        }
    </Form.Group>
  );
}

export default FormGroup
