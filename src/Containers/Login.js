import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { withFormik } from 'formik';
import Axios from 'axios';
import { Card, Button, Form, Container, Spinner } from 'react-bootstrap';
import FormGroup from '../Components/FormGroup';
import NetContext from '../Context/NetContext'

function Login(props) {
  const context = useContext(NetContext)
  const { handleSubmit, isSubmitting, handleChange, handleBlur, values, errors, touched, status } = props;
  //redicreccionar luego del submit
  const history = useHistory();
  if (status && !isSubmitting) {
    context.loginUser()
    context.setToast({
      showToast: true,
      eventToast: 'Successful login'
    });
    history.push('/');
  }

  return (
    <Container className="d-flex justify-content-center pt-4">
      <Card bg="light" text="dark" style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title className="text-center">Login</Card.Title>
          <Form onSubmit={handleSubmit}>
            <FormGroup
              label={'User'}
              type={'text'}
              placeholder={'User'}
              name={'user'}
              value={values.user}
              change={handleChange}
              blur={handleBlur}
              errors={errors.user}
              touched={touched.user}
            />

            <FormGroup
              label={'Password'}
              type={'password'}
              placeholder={'Password'}
              name={'password'}
              value={values.password}
              change={handleChange}
              blur={handleBlur}
              errors={errors.password}
              touched={touched.password}
            />

            <Button variant="success" type="submit" block>
              Submit
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default withFormik({
  mapPropsToValues(props) {
    return {
      user: '',
      password: '',
    };
  },
  validate(values) {
    const errors = {};
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password mush be at least 6 characters';
    }
    if (!values.user) {
      errors.user = 'User is required';
    }
    return errors;
  },
  handleSubmit(values, formikBag) {
    
    Axios.post('http://localhost:3001/users/login', values, {
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((res) => {
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('user_id', res.data.user_id);
        
        console.log(res);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    formikBag.setSubmitting(false);
    formikBag.setStatus(true);
  },
})(Login);
