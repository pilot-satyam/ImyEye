import React, { useEffect } from "react";
import Base from "../Components/Base";
import {Button, Card,CardHeader,Container, FormGroup,CardBody,Form} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import { useState } from "react";
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
import "../Style/Global.css"
const DoctorSignup = () =>{

    const[data,setData] = useState({
        name:'',
        email:'',
        password:'',
      })
    
      const[error,setError] = useState({
        errors : {},
        // to check error hai ki nahi hai
        isError : false
      })
// it will run only when the data is changed
      useEffect(()=>{
       console.log(data);
      },[data])
    
     //submitting the form, so that preventing the page from getting reloaded after the form is submitted 
 const submitForm = (event) =>{
    event.preventDefault()
    console.log(data);
 }

     //dynamically setting the values 
    const handleChange = (event,property)=>{
        // console.log("name changed");
        //here name will be override by new value
        // setData({...data,name:event.target.value})
        setData({...data,[property] : event.target.value});
        }

    return(
        <Base>
       {/* <Container className='mt-5 text-center'>
        <Row className="mt-4">
            <Col sm={{size:6}}>
            <Card>
            <CardHeader className="formStyle">
               <h6> Hey Doctors,<br/></h6>
               <h3>Please Register Here</h3> */}
               {/* <i style={{fontSize:"24px"}} className="fa">&#xf2bc;</i> */}
               {/* <i className="fa-solid fa-user"></i>
                
            </CardHeader>
        <CardBody className="formStyle">
            <Form>

                <FormGroup>
                    <label htmlFor="id">Enter Your I'd</label>
                    <br></br>
                    <input type="text"
                    placeholder="Enter I'd"
                    invalid="true"
                    id="id"
                    onChange={(e)=>handleChange(e,'id')}
                    value = {data.id}></input>
                   
                </FormGroup>

                <FormGroup>
                    <label htmlFor="name">Enter Name</label>
                    <br></br>
                    <input type="text" 
                    placeholder="Enter Name" 
                    invalid="true" 
                    id="name"
                    onChange= {(e)=>handleChange(e,'name')}
                    value = {data.name}></input> 
                </FormGroup>

                <FormGroup>
                    <label htmlFor="email">Enter Email</label> <br></br>
                    <input type="email" placeholder="Enter email" invalid="true" id="name"
                    onChange= {(e)=>handleChange(e,'email')}
                    value = {data.email}></input>
                </FormGroup>

                <FormGroup>
                    <label htmlFor="password">Enter Password</label> <br></br>
                    <input type="password" placeholder="Enter Password" invalid="true" id="password"
                    onChange= {(e)=>handleChange(e,'password')}
                    value = {data.password}></input>
                </FormGroup>

                <Container className="text-center">
            <Button color="dark">Register</Button>
            <Button color="secondary" className="ms-2" type="reset" value="Reset">Reset</Button>
          </Container>

            </Form>
        
        </CardBody>
        </Card>
            </Col>
        </Row>
       </Container> */}


<MDBContainer fluid className='p-2'>

<MDBRow>

  <MDBCol md='4' className='position-relative' style={{marginRight:"10%"}}>
    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass cardStyle' style={{height:"90%"}}>
          <CardHeader>
              <h4 className="center">Hey Doctor!</h4>
              <h3 className="center">Sign In Here</h3>
              <i style={{fontSize:"24px"}} className="fa center">&#xf2bc;</i>
          </CardHeader>
    <MDBCardBody className='p-2'>


          <CardBody>
              <Form onSubmit={submitForm}>
              <label htmlFor="id"> I'd</label>
                    <br></br>
                    <input type="text"
                    placeholder="Enter I'd"
                    invalid="true"
                    id="id"
                    onChange={(e)=>handleChange(e,'id')}
                    value = {data.id}
                    className="inputLogin"></input>

<br></br>
                <label htmlFor="name">Name</label>
              
                    <br></br>
                    <input type="text" 
                    placeholder="Enter Name" 
                    invalid="true" 
                    id="name"
                    onChange= {(e)=>handleChange(e,'name')}
                    value = {data.name}
                    className="inputLogin"></input> 

<br></br>
                <label htmlFor="email"> Email</label> <br></br>
                    <input type="email" placeholder="Enter email" invalid="true" id="name"
                    onChange= {(e)=>handleChange(e,'email')}
                    value = {data.email}
                    className="inputLogin"></input>
<br></br>
                <label htmlFor="password">Password</label> <br></br>
                    <input type="password" placeholder="Enter Password" invalid="true" id="password"
                    onChange= {(e)=>handleChange(e,'password')}
                    value = {data.password}
                    className="inputLogin"></input>




             
              <br></br>
            
              <Container className="text-center">
              <br></br>
            <Button color="dark" className="btnLogin">Register</Button>

            <Button color="secondary" className="ms-2 btnLogin" type="reset" value="Reset">Reset</Button>
          </Container>

              </Form>
          </CardBody>
    </MDBCardBody>
  </MDBCard>

</MDBCol>
    <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

        <img src ="SignInDoctor.svg"></img>

    </MDBCol>
</MDBRow>
</MDBContainer>
       
        </Base> 
    );
}
export default DoctorSignup