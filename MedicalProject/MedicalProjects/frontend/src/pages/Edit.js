import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Base from '../Components/Base'
import {Button, Card,CardHeader,Container, FormGroup,CardBody,Form,Label,Input} from 'reactstrap'
import { Row, Col } from 'react-bootstrap';


function Edit(props) {
    const [data, setData] = useState({});

    useEffect(() => {
        // Fetch data from backend
        // axios.get('' + props.id)
        //     .then(res => setData(res.data))
        //     .catch(err => console.log(err));
    }, []);

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // Send PUT request to update data
        // axios.put('/api/data/' + props.id, data)
        //     .then(res => console.log(res))
        //     .catch(err => console.log(err));
    }

    return (
      




<Base>
<Container className='mt-5 text-center '>
 <Row className="mt-4">
     <Col sm={{
         size:6, 
         offset:2}}>
     <Card className='mt-4'>
     <CardHeader className='mt-4 formStyle'>
        <h4> Edit the Profile
         <br/>
         <i style={{fontSize:"24px"}} className='fas'>&#xf044;</i>
        </h4>
     </CardHeader>
 <CardBody className="formStyle">
     <Form onSubmit={handleSubmit}>
              
         <FormGroup floating>
             
             
             <Input type="text" 
             placeholder='Enter Name' 
             
             id="name"
             name="name" 
             value={data.name} 
             onChange={handleChange}
            
             />
             <Label htmlFor="name" className="col-sm-2 col-form-label">Enter Name</Label>
           

         </FormGroup>

         <FormGroup floating> 
             <Input type="email" placeholder="Enter email" 
             
             id="email"
             name="email"
             value={data.emial} 
             onChange={handleChange}  />
             
             <Label htmlFor="email"  >Enter Email</Label> <br></br>
             
         </FormGroup>

         <FormGroup floating>
         
             <Input type="password" 
              placeholder="Enter Password" 
              id="password"
              
              value={data.password} 
              onChange={handleChange} />
             <Label htmlFor="password"  >Enter Password</Label> <br></br>
             
         </FormGroup>

         <FormGroup floating>
             
             <Input type="text" 
             placeholder="Enter age" 
            
             id="age"
             name="age"
             value={data.age} 
             onChange={handleChange} /> 
             <Label htmlFor="age"  >Enter Age</Label>
             <br></br>
             
         </FormGroup>

         <FormGroup floating>
             
             <Input type="text" 
             placeholder="Enter weight" 
            
             id="weight"
             name="weight"
             value={data.weight} 
             onChange={handleChange}/> 
             <Label htmlFor="weight"  >Enter weight</Label>
             <br></br>
             
         </FormGroup>

         <FormGroup floating>
             
             <Input type="text" 
             placeholder="Enter Height" 
            
             id="height"
             name="height"
             value={data.height} 
             onChange={handleChange} />
             <Label htmlFor="height"  >Enter Height</Label>
             <br></br>
             
         </FormGroup>

         <FormGroup floating>
             
             <Input type="text" 
             placeholder="Enter Contact" 
            
             id="contact"
             name="contact"
             value={data.contact} 
             onChange={handleChange} /> 
             <Label htmlFor="contact"  >Enter contact</Label>
             <br></br>
             
         </FormGroup>

         <FormGroup floating>
             <Input type="text" 
             placeholder="Enter Address" 
            
             id="address"
             name="address"
             value={data.address} 
             onChange={handleChange}/>
             <Label htmlFor="address"  >Enter Address</Label>
             <br/><br/>
            
         </FormGroup>

         <Container className="text-center">
     <Button color="dark"> Edit </Button>
     
   </Container>

     </Form>
 
 </CardBody>
 </Card>
     </Col>
 </Row>
</Container>
 </Base> 
    );
}

export default Edit;
