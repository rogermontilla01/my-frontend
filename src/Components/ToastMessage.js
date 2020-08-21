import React, { } from 'react';
import Toast from 'react-bootstrap/Toast';
import NetContext from '../Context/NetContext';

export default function ToastMessage() {
  return (
    <NetContext.Consumer>
      {(context) => (
        <div className='fixed-bottom'>
          <Toast
            style={{ marginLeft: '35%', background: '#D4EDDA', marginBottom: '1rem' }}
            onClose={() =>
              context.setToast({
                showToast: false,
              })
            }
            show={context.showToast}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <img
                style={{ height: '1rem', width: '1rem' }}
                src={process.env.PUBLIC_URL + '/success.png'}
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">{context.eventToast}</strong>
              <small>1 second ago</small>
            </Toast.Header>
          </Toast>
        </div>
      )}
    </NetContext.Consumer>
  );
}
