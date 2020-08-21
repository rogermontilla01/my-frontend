import React from 'react';
import { useHistory } from 'react-router-dom';
import { withFormik } from 'formik';
import { UserSingup } from '../Services/UserService';
import { Card, Button, Form, Container } from 'react-bootstrap';

import FormGroup from '../Components/FormGroup';

function Signup(props) {
  const { handleSubmit, isSubmitting, handleChange, handleBlur, values, errors, touched, status } = props;
  //redicreccionar luego del submit
  const history = useHistory();
  if (status && !isSubmitting) {
    history.push("/login");
  }

  return (
    <Container className="d-flex justify-content-center pt-4">
      <Card bg="light" text="dark" style={{ width: '25rem' }}>
        <Card.Body>
          <Card.Title className="text-center">Signup</Card.Title>
          <Form onSubmit={handleSubmit}>
            <FormGroup
              label={'Name'}
              type={'text'}
              placeholder={'Name'}
              name={'name'}
              value={values.name}
              change={handleChange}
              blur={handleBlur}
              errors={errors.name}
              touched={touched.name}
            />

            <FormGroup
              label={'Lastname'}
              type={'text'}
              placeholder={'Lastname'}
              name={'lastname'}
              value={values.lastname}
              change={handleChange}
              blur={handleBlur}
              errors={errors.lastname}
              touched={touched.lastname}
            />

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

            <FormGroup
              label={'Email'}
              type={'email'}
              placeholder={'Email'}
              name={'email'}
              value={values.email}
              change={handleChange}
              blur={handleBlur}
              errors={errors.email}
              touched={touched.email}
            />

            <Button disabled={isSubmitting} variant="success" type="submit" block>
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
      name: '',
      lastname: '',
      user: '',
      password: '',
      email: '',
    };
  },
  validate(values) {
    const errors = {};
    if (!values.password) {
      errors.password = 'Password is required';
    } else if (values.password.length < 6) {
      errors.password = 'Password mush be at least 6 characters';
    }
    if (!values.name) {
      errors.name = 'Name is required';
    }
    if (!values.lastname) {
      errors.lastname = 'Lastname is required';
    }
    if (!values.user) {
      errors.user = 'User is required';
    }
    if (!values.email) {
      errors.email = 'Required';
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid email address';
    }
    return errors;
  },
  async handleSubmit(values, formikBag) {
    UserSingup(values)
      .then(() => {
        formikBag.setSubmitting(false);
        formikBag.setStatus(true);
      })
      .catch((err) => {
        if (err.response.data.code_error == 11000) {
          console.log('user already exists');
          formikBag.setErrors({ user: 'user already exists' });
        }
      });
  },
})(Signup);
