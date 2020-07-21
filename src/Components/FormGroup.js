import React from 'react';
import Form from 'react-bootstrap/Form';

function FormGroup(props) {
  return (
    <Form.Group>
      <Form.Label>{props.label}</Form.Label>
      <Form.Control
        type={props.type}
        placeholder={props.placeholder}
        value={props.value}
        name={props.name}
        onChange={props.change}
      />
      {props.touched && props.errors && <Form.Text style={{color: "red", textAlign: 'center' }}>{props.errors}</Form.Text>}
    </Form.Group>
  );
}

export default FormGroup;
