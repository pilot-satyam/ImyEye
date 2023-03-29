//this component is responsible to view single doctor

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Card,CardBody, CardFooter, CardHeader, Table } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../../auth'

function Doctor({doctor={id:-1,name:"THis is default doctor",qualification:"Default qualification"}}){

  const[user,setUser] = useState(null)
  const[login,setLogin] = useState(null)
  useEffect(()=>{
       setUser(getCurrentUserDetail())
       setLogin(isLoggedIn())
  },[])

  return (
  
    



<div className="container d-flex justify-content-center align-items-center">
             
             <div className="card">

              {/* <div className="upper">

                <img src="https://i.imgur.com/Qtrsrk5.jpg" className="img-fluid"/>
                
              </div> */}

              <div className="user text-center">

                <div className="profile mt-3" >

                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU" className="rounded-circle" width="80"/>
                  
                </div>

              </div>


              <div className="mt-2 text-center">

                <h2 className="mb-0">{doctor.name}</h2>
                <span className="text-muted d-block mb-2">Doctor@IMyCare</span>

                <button className="btn btn-primary btn-sm">
                  <Link style={{textDecoration:"none", color:"white"}} to={'/doctors/'+doctor.doctorId}>Details Of Doc</Link>
                </button>


                <div className="d-flex justify-content-between align-items-center mt-4 px-1">


                  <Table hover stripped >
                    <tr>
                      <td>
                      Qualification
                      </td>
                      <td>
                      {doctor.qualification}
                      </td>
                    </tr>

                    <tr>
                      <td>
                      Experience
                      </td>
                      <td>
                      {doctor.experience} 
                      </td>
                    </tr>

                    <tr>
                      <td>
                      Fees
                      </td>
                      <td>
                      Rs. {doctor.fees}
                      </td>
                    </tr>
                  </Table>
                  
                </div>
                
              </div>
               
             </div>

           </div>

  )
}

export default Doctor
