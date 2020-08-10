import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function Footer() {
    var style = {
        backgroundColor: "#F8F8F8",
        borderTop: "1px solid #E7E7E7",
        textAlign: "center",
        padding: "10px",
        position: "fixed",
        left: "0",
        bottom: "0",
        height: "50px",
        width: "100%",
    }
    
    var phantom = {
      display: 'block',
      padding: '10px',
      height: '50px',
      width: '100%',
    }
    return (
        
            <footer style={phantom}>
                <div style={style}>
                    <span className='text-muted'>Place sticky footer content here.</span>
                </div>
            </footer>
        
    )
}
