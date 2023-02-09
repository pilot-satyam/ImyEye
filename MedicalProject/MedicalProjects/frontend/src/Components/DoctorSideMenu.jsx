import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import { ListGroup, ListGroupItem } from 'reactstrap'
import { loadAllDoctors } from '../services/doctor-service'

function DoctorSideMenu() {
    const[doctors,setDoctors] = useState([])
    useEffect(()=>{
        loadAllDoctors().then(data=>{
            console.log("Loading Doctors")
            console.log(data)
           //since we are getting an array and hence we are creating its copy first
           setDoctors([...data])
        }).catch(error=>{
           console.log(error)
           toast.error("error in loading doctors")
        })
   },[])
  return (
    <div>
      <ListGroup>
        <ListGroupItem tag={Link} to="/" action={true} className='border-0'>
            All Docs
        </ListGroupItem>

        {/* using map since we need to repeat same info for other docs */}

        {doctors && doctors.map((doc,index)=>{
            return(
            // <ListGroupItem tag={Link} to={'/doctors/'+doc.doctorId} key={doc.doctorId} action={true} className='border-0 shadow-0 mt-1 '>
            <ListGroupItem tag={Link} to={'/feedplusmenu/'+doc.doctorId} key={doc.doctorId} action={true} className='border-0 shadow-0 mt-1 '>
                {doc.name}
            </ListGroupItem>
            )
        })}
      </ListGroup>
    </div>
  )
}

export default DoctorSideMenu
