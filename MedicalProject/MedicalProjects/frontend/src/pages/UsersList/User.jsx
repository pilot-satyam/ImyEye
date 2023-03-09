
//this component is responsible to view single user

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Card,CardBody, CardFooter, CardHeader, CardText } from 'reactstrap'

function User({user={name:"THis is default user",age:"Default age"}}  ){
  return (
    


        <div className='col d-flex justify-content-center'>
    <Card className='border-1 shadow-sm  mt-5 centerIt' style={{width:"50%"}}>
      <CardHeader> <h1 className='centerIt'>{user.name}</h1></CardHeader>
      <CardBody>
 
    <CardText>
           Age :  {user.age}<br></br>
          Weight :  {user.weight}<br></br>
          Height :  {user.height}<br></br>
          {/* Contact : {user.contact} <br></br>
          Address : {user.address} <br></br> */}
    </CardText>
      </CardBody>
      <CardFooter>
      <div className='centerIt'>
          <Link className='btn btn-secondary' to={'/users/'+user.id}>Details Of Patient</Link>
        </div>
      </CardFooter>
</Card>
</div>
        



  )
}

export default User
