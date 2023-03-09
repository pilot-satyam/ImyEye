//this component is responsible to view single doctor

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card,CardBody, CardFooter, CardHeader, CardText } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../../auth'

function Doctor({doctor={id:-1,name:"THis is default doctor",qualification:"Default qualification"}}){

  const[user,setUser] = useState(null)
  const[login,setLogin] = useState(null)
  useEffect(()=>{
       setUser(getCurrentUserDetail())
       setLogin(isLoggedIn())
  },[])

  return (
    <div className='col d-flex justify-content-center'>
    <Card className='border-1 shadow-sm  mt-5 centerIt' style={{width:"50%"}}>
      <CardHeader> <h1 className='centerIt'>{doctor.name}</h1></CardHeader>
      <CardBody>
 
    <CardText>
      Qualification :  {doctor.qualification}<br></br>
      Experience :  {doctor.experience}<br></br>
      Fees : Rs. {doctor.fees}
    </CardText>
      </CardBody>
      <CardFooter>
      <div className='centerIt'>
          <Link className='btn btn-secondary' to={'/doctors/'+doctor.doctorId}>Details Of Doc</Link>
          {/* {isLoggedIn && (user.id === doctor.user.id ? <Button color='danger' className='ms-2'>Delete</Button> : '')} */}
        </div>
      </CardFooter>
</Card>
</div>
  )
}

export default Doctor
