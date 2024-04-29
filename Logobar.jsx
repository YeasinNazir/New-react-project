import React from 'react'
import image1 from './Assets/image-1.png'
import image2 from './Assets/image-2.png'
import image3 from './Assets/image-3.png'
import image4 from './Assets/image-4.png'
import './Logobar.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Logobar() {
  return (
    <Container className='logobar'>
    <Row>
      <Col md={4}>
      <div >
      <h1 className='google'>Google </h1>
   </div>
     </Col>

      <Col md={8} className='col-2'>
      <img src={image1} className='emage-1'/>
      <img src={image2} className='emage-2'/>
      <img src={image3} className='emage-3'/>
      <img src={image4} className='emage-4'/>
      </Col>
    </Row>
    
  </Container>

  )
}

export default Logobar