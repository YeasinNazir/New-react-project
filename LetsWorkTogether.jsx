import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import vector1 from './Assets/Vector (1).png'
import vector2 from './Assets/Vector (2).png'
import vector3 from './Assets/Vector (3).png'
import vector4 from './Assets/Vector (4).png'
import vector5 from './Assets/Vector (5).png'
import Form from 'react-bootstrap/Form';




function LetsWorkTogether() {
  return (
    <Container> 
    <h2>Letsv Work Together</h2>
    <Row>
        <Col>
        <p style={{marginRight:60}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit incidunt vel expedita inventore consectetur voluptatibus est nemo distinctio dolorum quia?</p>
        <div style={{marginTop:50, marginBottom:100 }}>
            <img src={vector1} style={{marginRight:25}} />
            <img src={vector2} style={{marginRight:25}} />
            <img src={vector3} style={{marginRight:25}} />
            <img src={vector4} style={{marginRight:25}} />
            <img src={vector5} style={{marginRight:25}} />
        </div>
        
        </Col>


        <Col> 
        
        <Form>
        <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column md="2">
          Name  :
        </Form.Label>
        <Col md="10">
          <Form.Control type='text'  />
        </Col>
      </Form.Group>


      <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
        <Form.Label column md="2">
          Email :
        </Form.Label>
        <Col sm="10">
          <Form.Control type='email'  />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
        <Form.Label column md="2">
          Password  :
        </Form.Label>
        <Col md="10">
          <Form.Control type="password" placeholder="Password" />
        </Col>
      </Form.Group>
    </Form> 
        </Col>
      </Row>



    </Container>
  )
}

export default LetsWorkTogether