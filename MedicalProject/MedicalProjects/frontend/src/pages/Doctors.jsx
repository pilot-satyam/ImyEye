import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardText, Col, Container, Row } from 'reactstrap'
import { loadDoctor } from '../services/doctor-service'
// import Base from '../Components/Base

const Doctors=()=>{
  const {doctorId} = useParams()
  const[doctors,setDoctors] = useState(null)

  useEffect(()=>{
   //load doctors of DoctorsId
    loadDoctor(doctorId).then(data=>{
      console.log(data);
      setDoctors(data)
    }).catch(error=>{
      console.log(error);
      toast.error("error in loading doctor");
    })
  },[])

  return (
    <Container className='mt-4'>
      <Link to="/">Home</Link> / {doctors && (<Link to="">{doctors.name}</Link>)}
      <Row>
        <Col md={{
          size:12
        }}>
          {doctors && 
            <Card className='mt-3'>
              <CardBody>
                <CardText>
                  <h3>
                  Doc Details :<b>{doctors.name}</b>
                  </h3>
                </CardText>
                <CardText>
                <h3>
                Doc Id :
                  {doctors.doctorId}
                  </h3>
                </CardText>
                <CardText>
                  <h3>
                  Doc Email :
                {doctors.email}
                  </h3>
                </CardText>
                <CardText>
                  <h3>
                    Doc Experience :
                    {doctors.experience}
                  </h3>
                </CardText>
                <CardText>
                  <h3>
                    Doc Fees:
                   Rs. {doctors.fees}
                  </h3>
                </CardText>
                <CardText>
                  <h3>
                    Doc Qualification:
                    {doctors.qualification}
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

export default Doctors

