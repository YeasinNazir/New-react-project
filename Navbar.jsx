import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



function Navbar() {
  return (
  
    <Container style={{marginTop:40}}>
    <Row>
      <Col md={3}>
    <h3>Logo</h3>
      </Col>



      <Col md={9}>
        
      <Nav className="justify-content-end" activeKey="/home" style={{marginRight:'50px'}}>
        <Nav.Item>
          <Nav.Link href="/home">About</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-1">Work</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="link-2">Link</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
        
        </Col>
    </Row>
   
  </Container>
  
  
  
  
  
  
  
   
  )
}

export default Navbar
