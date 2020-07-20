import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import Axios from 'axios';
import { Card, Button, Form, Container, Spinner } from 'react-bootstrap';
import FormGroup from '../Components/FormGroup'

export default function Login({menuHandle}) {
  const history = useHistory();
  const [form, setForm] = useState({ user: '', password: '' });
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    Axios.post('http://localhost:3001/users/login', form, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user_id', res.data.user_id)
        console.log(res);
        console.log(res.data);
        history.push('/')
        setLoading(false);
        menuHandle(true)
      })
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
      });
    e.preventDefault();
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    e.preventDefault();
  };

  return (
    <Container className="d-flex justify-content-center pt-4">
      <Card bg="light" text="dark" style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title className="text-center">Signup</Card.Title>
          <Form onSubmit={handleSubmit}>

              <FormGroup label={'User'} type={'text'} placeholder={'User'} name={'user'} value={form.user} change={handleChange}/> 

              <FormGroup label={'Password'} type={'password'} placeholder={'Password'} name={'password'} value={form.password} change={handleChange}/>
            
            <Button variant="success" type="submit" block>
              {loading && <Spinner as="span" animation="grow" size="sm" role="status" aria-hidden="true" />}
                Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}
