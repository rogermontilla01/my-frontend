import React, { useState } from 'react';
import {useHistory} from 'react-router-dom'
import Axios from 'axios';
import { Card, Button, Form, Container, Spinner } from 'react-bootstrap';
import FormGroup from '../Components/FormGroup'

export default function Signup() {
  const history = useHistory();
  const [form, setForm] = useState({ name: '', lastname: '', user: '', password: '', email: '' });
  const [errors, setErrors] = useState({ name: '', lastname: '', user: '', password: '', email: '' })
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
      if(form.name == ''){
        setErrors({...errors, name: 'Name is required'})
      }
    setLoading(true);
    Axios.post('http://localhost:3001/users/signin', form, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        console.log(res);
        console.log(res.data);
        setLoading(false);
        history.push('/')
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
              <FormGroup label={'Name'} type={'text'} placeholder={'Name'} name={'name'} value={form.name} change={handleChange} errors={errors.name}/>

              <FormGroup label={'Lastname'} type={'text'} placeholder={'Lastname'} name={'lastname'} value={form.lastname} change={handleChange}/>

              <FormGroup label={'User'} type={'text'} placeholder={'User'} name={'user'} value={form.user} change={handleChange}/> 

              <FormGroup label={'Password'} type={'password'} placeholder={'Password'} name={'password'} value={form.password} change={handleChange}/>
            
              <FormGroup label={'Email'} type={'email'} placeholder={'Email'} name={'email'} value={form.email} change={handleChange}/>
            
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
