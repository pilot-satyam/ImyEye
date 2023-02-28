
//this component is responsible to view single user

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card,CardBody, CardFooter, CardHeader, CardText, CardTitle } from 'reactstrap'

// function PrescriptionList({prescription={name:"THis is default user",age:"Default age"}}  ){
  function PrescriptionList(){
  return (
//     <Card className='border-0 shadow-sm  mt-3 my-2'>
//        <CardHeader tag="h3" className='text-center bold'>
//         Patient's Prescription
//       </CardHeader>
//     <CardBody>
//         <h1>{prescription.user.name}</h1>
//         <CardText>
//           Age :  {prescription.user.age}yrs<br></br>
//           Weight :  {prescription.user.weight}Kgs<br></br>
//           Height :  {prescription.user.height}Cms<br></br>
//           {/* Contact : {user.contact} <br></br>
//           Address : {user.address} <br></br> */}
//         </CardText>
//         <div>
//           <Link className='btn btn-secondary' to={'/prescriptions/'+prescription.id}>View Prescription</Link>
//         </div>
//     </CardBody>
// </Card>

<>

<Card className='border-0 shadow-sm  mt-5 my-2'>
       <CardHeader tag="h3" className='text-center bold'>
        Patient's Prescription
      </CardHeader>
      <br/>
      <CardTitle className='centerIt'><h2>Sanmati Porlekar</h2></CardTitle>
    <CardBody>
    
        <br/>
        <CardText>
          Age :  20yrs<br></br>
          Weight :  50Kgs<br></br>
          Height :  150Cms<br></br>
          {/* Contact : {user.contact} <br></br>
          Address : {user.address} <br></br> */}

          
<div> <Link className='btn btn-primary' to="#">View Prescription</Link>
        </div>
        </CardText>
      <br/>
  
        {/* <Link className='btn btn-secondary' to={'/prescriptions/'+prescription.id}>View Prescription</Link>  this is not taken*/}
       
    
      
    
      
        
    </CardBody>
</Card>

</>

  )
}

export default PrescriptionList

