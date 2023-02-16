import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'
import { Container } from 'reactstrap'
import { getCurrentUserDetail } from '../../auth'
import AddPrescription from '../../Components/AddPrescription'
import Base from '../../Components/Base'
import { loadPrescriptionUserWise } from '../../services/prescription-service'
import Doctor from '../DoctorList/Doctor'
import Home from '../Home'
import User from '../UsersList/User'

const UserDashboard =()=>{

  const[user,setUser] = useState({})
  const[prescription,setPrescription] = useState([])
  useEffect(()=>{

   console.log(getCurrentUserDetail())
   setUser(getCurrentUserDetail())

   //loading prescription userwise from backend
   loadPrescriptionUserWise(getCurrentUserDetail().id)
   .then(data=>{
    console.log(data)
    setPrescription([...data])
   }).catch(error=>{
    console.log(error)
    toast.error("Kuch to gadbadi hai prescription ke user laane mein")
   })
  },[])

  return (
   <Base>
    <Container>
      {/* <ProfileInfo /> */}
      {/* <AddPrescription /> */}
      <Home /> 
      {/* <h1 className='my-3'>Count({prescription.length})</h1>
      {
        prescription.map((prescription,index)=>{
          return(
            //since User is logged in so he should see his diff docs
            <Doctor prescription={prescription} key={index} />
          )
        })
      } */}
   </Container>
   </Base>
  )
}

export default UserDashboard
