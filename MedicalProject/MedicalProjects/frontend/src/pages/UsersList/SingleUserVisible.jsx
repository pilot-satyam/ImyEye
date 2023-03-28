import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardHeader, CardText, Col, Container, Row } from 'reactstrap'
import { loadUser } from '../../services/user-service'
// import { loadDoctor } from '../services/doctor-service'
// import Base from '../Components/Base
import Table from 'react-bootstrap/Table';

const SingleUserVisible=()=>{
  const {userId} = useParams()
  const[users,setUsers] = useState(null)

  useEffect(()=>{
   //load users of DoctorsId
   console.log(userId)
    loadUser(userId).then(data=>{
      console.log(data);
      setUsers(data)
    }).catch(error=>{
      console.log(error);
      toast.error("error in loading user");
    })
  },[userId])

  return (
   
    <Container className='mt-5' style={{width:"50%",height:"50%"}}>
      <br/>
      <Link to="/">Home</Link> / {users && (<Link to="">{users.name}</Link>)}
    
      {users && 
      <Table striped bordered hover>
      <thead>
        <th>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<b>{users.name}</b></th>
       
        
       
      </thead>

      <tbody>
        <tr>
          <td>User Id :</td>
          <td>{users.id}</td>
        </tr>
        <tr>
          <td>User Email :</td>
          <td>{users.email}</td>
        </tr>
        <tr>
          <td> User Height :</td>
          <td>{users.height}</td>
        </tr>
        <tr>
          <td>User Age:</td>
          <td> {users.age}</td>
        </tr>
        <tr>
          <td> User Weight:</td>
          <td>{users.weight}</td>
        </tr>
        <tr>
          <td>User Address:</td>
          <td>{users.address}</td>
        </tr>
      </tbody>
      </Table>
}
    </Container>
  )
}

export default SingleUserVisible
