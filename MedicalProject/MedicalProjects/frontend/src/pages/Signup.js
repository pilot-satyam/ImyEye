import React, { useEffect } from "react";
import Base from "../Components/Base";
import {Button, Card,CardHeader,Container, FormGroup,CardBody,Form,Label,FormFeedback,Input} from 'reactstrap'
import {Row,Col} from 'react-bootstrap'
import { signUp } from "../services/user-service";
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

// import FloatingLabel from 'react-bootstrap/FloatingLabel'; 

import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "../Style/Global.css"


const Signup = () => {

    const[data,setData] = useState({
        name:'',
        email:'',
        password:'',
        age:'',
        weight:'',
        height:'',
        contact:'',
        address:'',
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
    event.preventDefault();

    // if(error.isError){
    //     toast.error("Form data is invalid!!!");
    //     setError({...error,isError:false})
    //     return;
    // }

    console.log(data);
    //data validation
    //call server api for sending data
    signUp(data).then((resp)=>{
        console.log(resp)
        console.log("Successfully log");
        toast.success("User Registered Successfully!");
        setData({
            name:'',
            email:'',
            password:'',
            age:'',
            weight:'',
            height:'',
            contact:'',
            address:'',
        })
    }).catch((error)=>{
        console.log(error);
        console.log("Error log");

        //handling errors
        setError({
            errors : error,
            isError : true
        })
    });
 };

     //dynamically setting the values 
    const handleChange = (event,property)=>{
        // console.log("name changed");
        //here name will be override by new value
        setData({...data,name:event.target.value})
        setData({...data,[property] : event.target.value});
        }

    return(
        <Base>
       {/* <Container className='mt-5 text-center '>
        <Row className="mt-4">
            <Col sm={{
                size:6, 
                offset:2}}>
            <Card className='mt-4'>
            <CardHeader className='mt-4 formStyle'>
               <h4> Fill Information To Register
                <br/>
                <i style={{fontSize:"24px"}} className="fa">&#xf2bc;</i>
               </h4>
            </CardHeader>
        <CardBody className="formStyle">
            <Form onSubmit={submitForm}>
                      
                
                    
                    
                    <Input type="text" 
                    placeholder='Enter Name' 
                    invalid={error.errors?.response?.data?.name ? true : false}
                    id="name"
                    onChange= {(e)=>handleChange(e,'name')}
                    value = {data.name}
                    />
                    <Label htmlFor="name" className="col-sm-2 col-form-label">Enter Name</Label>
                    <FormFeedback>
                    {error.errors?.response?.data?.name ? true : false}
                    </FormFeedback>

                

                 
                    <Input type="email" placeholder="Enter email" 
                     invalid={error.errors?.response?.data?.email ? true : false}
                    id="email"
                    onChange= {(e)=>handleChange(e,'email')}
                    value = {data.email}  />
                    
                    <Label htmlFor="email"  >Enter Email</Label> <br></br>
                    <FormFeedback>
                    {error.errors?.response?.data?.email ? true : false}
                    </FormFeedback>
                

                
                
                    <Input type="password" 
                     placeholder="Enter Password" 
                     id="password"
                     invalid={error.errors?.response?.data?.password ? true : false}
                    onChange= {(e)=>handleChange(e,'password')}
                    value = {data.password} />
                    <Label htmlFor="password"  >Enter Password</Label> <br></br>
                    <FormFeedback>
                    {error.errors?.response?.data?.password ? true : false}
                    </FormFeedback>
                

                
                    
                    <Input type="text" 
                    placeholder="Enter age" 
                    invalid={error.errors?.response?.data?.age ? true : false}
                    id="age"
                    onChange= {(e)=>handleChange(e,'age')}
                    value = {data.age} /> 
                    <Label htmlFor="age"  >Enter Age</Label>
                    <br></br>
                    <FormFeedback>
                    {error.errors?.response?.data?.age ? true : false}
                    </FormFeedback>
                

                
                    
                    <Input type="text" 
                    placeholder="Enter weight" 
                    invalid={error.errors?.response?.data?.weight ? true : false} 
                    id="weight"
                    onChange= {(e)=>handleChange(e,'weight')}
                    value = {data.weight} /> 
                    <Label htmlFor="weight"  >Enter weight</Label>
                    <br></br>
                    <FormFeedback>
                    {error.errors?.response?.data?.weight ? true : false}
                    </FormFeedback>
                

                
                    
                    <Input type="text" 
                    placeholder="Enter Height" 
                    invalid={error.errors?.response?.data?.height ? true : false}
                    id="height"
                    onChange= {(e)=>handleChange(e,'height')}
                    value = {data.height} />
                    <Label htmlFor="height"  >Enter Height</Label>
                    <br></br>
                    <FormFeedback>
                    {error.errors?.response?.data?.height ? true : false}
                    </FormFeedback>
                

                
                    
                    
                    <Input type="text" 
                    placeholder="Enter Contact" 
                    invalid={error.errors?.response?.data?.contact ? true : false}
                    id="contact"
                    onChange= {(e)=>handleChange(e,'contact')}
                    value = {data.contact} /> 
                    <Label htmlFor="contact"  >Enter contact</Label>
                    <br></br>
                    <FormFeedback>
                    {error.errors?.response?.data?.contact ? true : false}
                    </FormFeedback>
                

                
                    <Input type="text" 
                    placeholder="Enter Address" 
                    invalid={error.errors?.response?.data?.address ? true : false}
                    id="address"
                    onChange= {(e)=>handleChange(e,'address')}
                    value = {data.address} />
                    <Label htmlFor="address"  >Enter Address</Label>
                    <br/><br/>
                    <FormFeedback>
                    {error.errors?.response?.data?.address ? true : false}
                    </FormFeedback>
                

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






<MDBContainer fluid className='p-4'>

<MDBRow>

 

  <MDBCol md='4' className='position-relative' style={{marginRight:"150px"}}>

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass cardStyle' style={{height:"90%",width:"140%"}}>
          <CardHeader>
              <h3 className="center">Sign Up</h3>
              <i style={{fontSize:"24px"}} className="fa center">&#xf2bc;</i>
          </CardHeader>
   
            <CardBody style={{height:"50%"}}>

            <Form onSubmit={submitForm}>
                      
                        <Label htmlFor="name" className="mt-2 mb-2">Enter Name</Label>
                        <Input type="text" 
                          placeholder='Enter Name' 
                          invalid={error.errors?.response?.data?.name ? true : false}
                          id="name"
                          onChange= {(e)=>handleChange(e,'name')}
                          value = {data.name}
                          className="inputLogin"
                          />
                          
                          <FormFeedback>
                          {error.errors?.response?.data?.name ? true : false}
                          </FormFeedback>
      
                      
                          <Label htmlFor="email" className="mt-2 mb-2" >Enter Email</Label>
                          <Input type="email" placeholder="Enter email" 
                           invalid={error.errors?.response?.data?.email ? true : false}
                          id="email"
                          onChange= {(e)=>handleChange(e,'email')}
                          value = {data.email} 
                          className="inputLogin" />
                          
                          <FormFeedback>
                          {error.errors?.response?.data?.email ? true : false}
                          </FormFeedback>
                      
      
                          <Label htmlFor="password" className="mt-2 mb-2" >Enter Password</Label>
                          <Input type="password" 
                           placeholder="Enter Password" 
                           id="password"
                           invalid={error.errors?.response?.data?.password ? true : false}
                          onChange= {(e)=>handleChange(e,'password')}
                          value = {data.password} 
                          className="inputLogin"/>
                           
                          <FormFeedback>
                          {error.errors?.response?.data?.password ? true : false}
                          </FormFeedback>
                      
      
                          <Label htmlFor="age" className="mt-2 mb-2" >Enter Age</Label>
                          <Input type="text" 
                          placeholder="Enter age" 
                          invalid={error.errors?.response?.data?.age ? true : false}
                          id="age"
                          onChange= {(e)=>handleChange(e,'age')}
                          value = {data.age} 
                          className="inputLogin"/> 
                         
                          <FormFeedback>
                          {error.errors?.response?.data?.age ? true : false}
                          </FormFeedback>
                      
                     
                          <Label htmlFor="weight" className="mt-2 mb-2" >Enter weight</Label>
                          <Input type="text" 
                          placeholder="Enter weight" 
                          invalid={error.errors?.response?.data?.weight ? true : false} 
                          id="weight"
                          onChange= {(e)=>handleChange(e,'weight')}
                          value = {data.weight} 
                          className="inputLogin"/> 
                         
                          <FormFeedback>
                          {error.errors?.response?.data?.weight ? true : false}
                          </FormFeedback>
                      
      
                          <Label htmlFor="height" className="mt-2 mb-2" >Enter Height</Label>
                          <Input type="text" 
                          placeholder="Enter Height" 
                          invalid={error.errors?.response?.data?.height ? true : false}
                          id="height"
                          onChange= {(e)=>handleChange(e,'height')}
                          value = {data.height} 
                          className="inputLogin"/>
                       
                          <FormFeedback>
                          {error.errors?.response?.data?.height ? true : false}
                          </FormFeedback>

                       
                         <Label htmlFor="contact" className="mt-2 mb-2" >Enter contact</Label>
                         <Input type="text" 
                          placeholder="Enter Contact" 
                          invalid={error.errors?.response?.data?.contact ? true : false}
                          id="contact"
                          onChange= {(e)=>handleChange(e,'contact')}
                          value = {data.contact} 
                          className="inputLogin"/> 
                          <FormFeedback>
                          {error.errors?.response?.data?.contact ? true : false}
                          </FormFeedback>
                      
                      
                          <Label htmlFor="address" className="mt-2 mb-2" >Enter Address</Label>
                          <Input type="text" 
                          placeholder="Enter Address" 
                          invalid={error.errors?.response?.data?.address ? true : false}
                          id="address"
                          onChange= {(e)=>handleChange(e,'address')}
                          value = {data.address} 
                          className="inputLogin"/>
                          <FormFeedback>
                          {error.errors?.response?.data?.address ? true : false}
                          </FormFeedback>
              
                      <Container className="text-center mt-2 mb-2">
                  <Button color="dark" className="btnLogin">Register</Button>
                  <Button color="secondary" className="ms-2 btnLogin" type="reset" value="Reset">Reset</Button>
                </Container>
      
                  </Form> 

            </CardBody>
   
  </MDBCard>

</MDBCol>
<MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

<img src ="SignInPatient.svg"></img>

</MDBCol>
</MDBRow>
</MDBContainer>

        </Base> 
    );
}
export default Signup;