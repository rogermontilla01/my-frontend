import React, { useState } from 'react';
import { Card, Button, Form, Container } from 'react-bootstrap';

export default function Signup() {
  const [form, setForm] = useState({ name: '', lastname: '', user: '', password: '', email: '' });
  
  const handleSubmit = (e)=>{
        console.log(form)
        e.preventDefault()
    }
    const handleChange = (e)=>{
        setForm({
            ...form, [e.target.name]:e.target.value
        })
        e.preventDefault()
    }
  return (
    <Container className="d-flex justify-content-center pt-4">
      <Card bg="light" text="dark" style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title className="text-center">Signup</Card.Title>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter name" value={form.name} name='name' onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicLastname">
              <Form.Label>Lastname</Form.Label>
              <Form.Control type="text" placeholder="Enter lastname" value={form.lastname} name='lastname' onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicUser">
              <Form.Label>User</Form.Label>
              <Form.Control type="text" placeholder="Enter user" value={form.user} name='user' onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={form.password} name='password' onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" value={form.email} name='email' onChange={handleChange}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="success" type="submit" block>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
