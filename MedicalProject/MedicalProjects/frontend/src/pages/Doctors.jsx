import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Card, CardBody, CardText, Col, Container, Table } from 'reactstrap'
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
    <Container className='mt-5' style={{backgroundColor:"#99ffdd"}}>
      <Link to="/">Home</Link> / {doctors && (<Link to="">{doctors.name}</Link>)}
     
          {doctors && 
          
          
      






      <div className="container mt-4 mb-4 p-3 d-flex justify-content-center"> 
        <div className="card p-4"> 
          <div className=" image d-flex flex-column justify-content-center align-items-center"> 
            <button className="btn btn-secondary"> 
              <img src="https://i.imgur.com/wvxPV9S.png" height="100" width="100" /></button> 
              <span className="name mt-3">{doctors.name}</span> 
              <span className="idd">Doctor@IMyCare</span>
              <div>

            <Table striped hover bordered={true}>
                <tr>
                  <td>
                  Doctor Id :
                  </td>
                  <td>
                  {doctors.doctorId}
                  </td>
                </tr>

                <tr>
                  <td>
                  Doc Email :
                  </td>
                  <td>
                  {doctors.email}
                  </td>
                </tr>

                <tr>
                  <td>
                  Doc Experience :
                  </td>
                  <td>
                  {doctors.experience}
                  </td>
                </tr>

                <tr>
                  <td>
                  Doc Fees:
                  </td>
                  <td>
                  Rs. {doctors.fees}
                  </td>
                </tr>


                <tr>
                  <td>
                  Doc Qualification:
                  </td>
                  <td>
                  {doctors.qualification}
                  </td>
                </tr>
            </Table>
              </div>
              
          </div> 
        </div>
      </div>

    }
    </Container>
  )
}

export default Doctors

