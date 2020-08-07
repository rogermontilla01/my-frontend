import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import Toast from 'react-bootstrap/Toast';
import { Container, Row, Col, Card, Button, ButtonGroup } from 'react-bootstrap';

export default function ToastMessage({show, setShow, event}) {
  

  return (
    <Toast style={{marginLeft:'25%', marginRight:'40%', background:'#D4EDDA' }} onClose={() => setShow(false)} show={show} delay={3000} autohide>
      <Toast.Header>
        <img style={{ height: '1rem', width: '1rem' }} src={process.env.PUBLIC_URL + '/success.png'}  className="rounded mr-2" alt="" />
        <strong className="mr-auto">{event}</strong>
        <small>1 second ago</small>
      </Toast.Header>
    </Toast>
  );
}
