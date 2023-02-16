import {Button, Card,CardHeader,Container, FormGroup,CardBody} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
import React, { useState } from "react";
import Base from "../Components/Base";
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import DoctorSignup from './DoctorSignup';
import '../Style/login.css';

const PhysicianLogin = () =>{
    return(
        <Base>
             <MDBContainer fluid className='p-4'>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

  <img src ="appointment-img.svg"></img>

  </MDBCol>

  <MDBCol md='4' className='position-relative' style={{marginLeft:"90px"}}>

    

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass cardStyle'>
                <CardHeader>
                    <h4 className="center">Hey Amazing Doctors,</h4>
                    <h3 className="center">Login Here</h3>
                    <i style={{fontSize:"24px"}} className="fa center">&#xf2bc;</i>
                </CardHeader>
          <MDBCardBody className='p-4'>
                
     <CardBody>
        <Form>
          <FloatingLabel
             controlId="floatingInput"
             label="Email address"
             className="mb-3">
            <Form.Control type="email" placeholder="email" />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Password">
            <Form.Control type="password" placeholder="password" />
          </FloatingLabel>
 <br></br>
                    <Container className='text-center'>
                        <Button color="dark" outline>Login</Button>
                        <Button className='ms-2' color='dark' outline>Reset</Button>
                        <Button  color='dark' className='ms-2 my-2 ' href='./DoctorSignup' outline >New Here ? Register Here </Button>
                    </Container>
                        </Form>
       </CardBody>
    </MDBCardBody>  
                   
             
  </MDBCard>

</MDBCol>
</MDBRow>
</MDBContainer>
</Base>
    );
}
export default PhysicianLogin