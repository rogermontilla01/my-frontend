import React from 'react'
import NetContext from '../Context/NetContext';

export default function Checkout() {
    return (
        <NetContext.Consumer>
      {(context) => (
        <Container>
          
        </Container>
      )}
    </NetContext.Consumer>
    )
}
