import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import star from './Assets/Stars.png'
import clientimg from './Assets/designer face.png'
import './Testimoniul.css'


function Testimonial() {
  return (
    <Container style={{marginTop:40 }}>
       <h4 style={{textAlign:'center', fontWeight:'bold', marginBottom:30 }}>Testimonial</h4>
      <Row>
        <Col style={{backgroundColor:'#f4f4f4', margin:15}}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque consequatur provident facilis a alias ad et quae, tenetur beatae.</p>
        <section className='inLineBlock' >
        <div >
         <img src={clientimg} className='cliEmg'/>
         </div>
         <div className='div-2' >
         <img src={star} style={{paddingTop:'0', marginTop:'0'}} />
         <p className='Gems'>Gemmes Nollen</p>
         <p className='googl'>Google</p>
         </div>
         </section>
        </Col>

        <Col style={{backgroundColor:'#f4f4f4', margin:15}}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque consequatur provident facilis a alias ad et quae, tenetur beatae.</p>
        <section className='inLineBlock' >
        <div >
         <img src={clientimg} className='cliEmg'/>
         </div>
         <div className='div-2' >
         <img src={star} style={{paddingTop:'0', marginTop:'0'}} />
         <p className='Gems'>Gemmes Nollen</p>
         <p className='googl'>Google</p>
         </div>
         </section>
        </Col>

        <Col style={{backgroundColor:'#f4f4f4',margin:15}}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque consequatur provident facilis a alias ad et quae, tenetur beatae.</p>
        <section className='inLineBlock' >
        <div >
         <img src={clientimg} className='cliEmg'/>
         </div>
         <div className='div-2' >
         <img src={star} style={{paddingTop:'0', marginTop:'0'}} />
         <p className='Gems'>Gemmes Nollen</p>
         <p className='googl'>Google</p>
         </div>
         </section>
        </Col>
      </Row>

    
      <Row>
        <Col style={{backgroundColor:'#f4f4f4', margin:15}}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque consequatur provident facilis a alias ad et quae, tenetur beatae.</p>
        <section className='inLineBlock' >
        <div >
         <img src={clientimg} className='cliEmg'/>
         </div>
         <div className='div-2' >
         <img src={star} style={{paddingTop:'0', marginTop:'0'}} />
         <p className='Gems'>Gemmes Nollen</p>
         <p className='googl'>Google</p>
         </div>
         </section>
        </Col >

        <Col style={{backgroundColor:'#f4f4f4', margin:15}}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque consequatur provident facilis a alias ad et quae, tenetur beatae.</p>
        <section className='inLineBlock' >
        <div >
         <img src={clientimg} className='cliEmg'/>
         </div>
         <div className='div-2' >
         <img src={star} style={{paddingTop:'0', marginTop:'0'}} />
         <p className='Gems'>Gemmes Nollen</p>
         <p className='googl'>Google</p>
         </div>
         </section>
        </Col>

        <Col style={{backgroundColor:'#f4f4f4', margin:15}}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora doloremque consequatur provident facilis a alias ad et quae, tenetur beatae.</p>
        <section className='inLineBlock' >
        <div >
         <img src={clientimg} className='cliEmg'/>
         </div>
         <div className='div-2' >
         <img src={star} style={{paddingTop:'0', marginTop:'0'}} />
         <p className='Gems'>Gemmes Nollen</p>
         <p className='googl'>Google</p>
         </div>
         </section>
        </Col>
      </Row>

    

    </Container>


  )
}

export default Testimonial
