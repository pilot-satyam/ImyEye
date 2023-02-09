import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
import { loadUser } from '../../services/user-service'
// import { loadDoctor } from '../services/doctor-service'
// import Base from '../Components/Base

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
    <Container className='mt-4'>
      <Link to="/">Home</Link> / {users && (<Link to="">{users.name}</Link>)}
      <Row>
        <Col md={{
          size:12
        }}>
          {users && 
            <Card className='mt-3'>
              <CardBody>
                <CardText>
                  <h3>
                  User Details :<b>{users.name}</b>
                  </h3>
                </CardText>
                <CardText>
                <h3>
                User Id :
                  {users.id}
                  </h3>
                </CardText>
                <CardText>
                  <h3>
                  User Email :
                {users.email}
                  </h3>
                </CardText>
                <CardText>
                  <h3>
                    User Height :
                    {users.height}
                  </h3>
                </CardText>
                <CardText>
                  <h3>
                   User Age:
                   {users.age}
                  </h3>
                </CardText>
                <CardText>
                  <h3>
                   User Weight:
                   {users.weight}
                  </h3>
                </CardText>
                <CardText>
                  <h3>
                    User Address:
                    {users.address}
                  </h3>
                </CardText>
              </CardBody>
            </Card>
          }
        </Col>
      </Row>
    </Container>
  )
}

export default SingleUserVisible

