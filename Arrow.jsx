import React from 'react'
import './Arrow.css'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FirstPic from './Assets/Arrow-1.png'
import SecondPic from './Assets/Arrow-2.png'
import ThirdPic from './Assets/Arrow-3.png'


function Arrow() {
  return (
    <Container className='containerCol-3'>
      
      <Row className='containerCol-2'>
        <Col><img src={FirstPic} className='Arr-1'/></Col>
        <Col><img src={SecondPic} className='Arr-2'/></Col>
        <Col><img src={ThirdPic} className='Arr-3'/></Col>
      </Row>
    </Container>
  )
}

export default Arrow
