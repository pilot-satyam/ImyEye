//this component is responsible to view single doctor

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card,CardBody, CardText } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../../auth'

function Doctor({doctor={id:-1,name:"THis is default doctor",qualification:"Default qualification"}}){

  const[user,setUser] = useState(null)
  const[login,setLogin] = useState(null)
  useEffect(()=>{
       setUser(getCurrentUserDetail())
       setLogin(isLoggedIn())
  },[])

  return (
    <Card className='border-0 shadow-sm  mt-3'>
    <CardBody>
        <h1>{doctor.name}</h1>
        <CardText>
          Qualification :  {doctor.qualification}<br></br>
          Experience :  {doctor.experience}<br></br>
          Fees : Rs. {doctor.fees}
        </CardText>
        <div>
          <Link className='btn btn-secondary' to={'/doctors/'+doctor.doctorId}>Details Of Doc</Link>
          {/* {isLoggedIn && (user.id === doctor.user.id ? <Button color='danger' className='ms-2'>Delete</Button> : '')} */}
        </div>
    </CardBody>
</Card>

  )
}

export default Doctor
