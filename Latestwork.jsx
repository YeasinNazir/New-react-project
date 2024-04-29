import React from 'react'
import { Container } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import aaa from './Assets/Image (1).png'
import bbb from './Assets/Image (2).png'
import ccc from './Assets/Image (3).png'
import ddd from './Assets/Image (4).png'
import eee from './Assets/Image (5).png'
import fff from './Assets/Image.png'



function Latestwork() {
  return (
    <Container>

       
<h3 style={{fontWeight:'bold', textAlign:'center', marginTop:200}}>Latest work</h3>
         <Row>
           <Col><img src={aaa} alt="" srcset="" />
           <h5 style={{fontWeight:'bold', marginTop:30}}>Project Title</h5>
           <p>UI, Art drection</p>
           </Col>
           <Col><img src={bbb} alt="" srcset="" />
           <h5 style={{fontWeight:'bold', marginTop:30}}>Project Title</h5>
           <p>UI, Art drection</p>
           </Col>
           <Col><img src={ccc} alt="" srcset="" />
           <h5 style={{fontWeight:'bold', marginTop:30}}>Project Title</h5>
           <p>UI, Art drection</p>
           </Col>
         </Row>

         <Row>
           <Col><img src={ddd} alt="" srcset="" />
           <h5 style={{fontWeight:'bold', marginTop:30}}>Project Title</h5>
           <p>UI, Art drection</p>
           </Col>
           <Col><img src={eee} alt="" srcset="" />
           <h5 style={{fontWeight:'bold', marginTop:30}}>Project Title</h5>
           <p>UI, Art drection</p>
           </Col>
           <Col><img src={fff} alt="" srcset="" />
           <h5 style={{fontWeight:'bold', marginTop:30}}>Project Title</h5>
           <p>UI, Art drection</p>
           </Col>
         </Row>
        </Container>
            
        

       
       
  )
}

export default Latestwork