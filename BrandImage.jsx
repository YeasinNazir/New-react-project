import React from 'react'
import './BrandImage.css'
import HeaderPic from '../Navbar/Assets/designer self pic.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BrandImage() {
  return (
    <Container className='section-1'>
      <Row>
        <Col>
          <h6 className='ImageMaking'>  Branding l Image Making </h6>
          <h1 className='visual'>Visual Designer</h1> <br />
          <p>This is a template Figma file, turn into code using anima.</p>
         <p className='Learn-more'>Learn More at Anima App.com</p><br /><br />
         <button className='Contact-btn'>Contact</button>
       
        
        </Col>





        <Col>
        
        <div className='secondDiv'>
          <img src={HeaderPic} className='pic-1'/>
        </div>

        </Col>
      </Row>
      
    </Container>
   
   
   
  )
}

export default BrandImage
