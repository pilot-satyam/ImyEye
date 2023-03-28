
//this component is responsible to view single user

import React from 'react'
import { Link } from 'react-router-dom'

import "../../Style/UserCard.css"

function User({user={name:"THis is default user",age:"Default age"}}  ){
  return (


<div className="container mt-5 d-flex justify-content-center">

<div className="Usercard p-3">

    <div className="d-flex align-items-center">

        <div className="image">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU" className="rounded" width="155" />
        </div>

    <div className="ml-3 w-100">
        
       <h4 className="mb-0 mt-0">&nbsp;&nbsp;{user.name}     </h4>
       

       <div className="p-2 mt-2 ml-4 bg-primary d-flex justify-content-between rounded text-white stats">
  
        <div className="d-flex flex-column">

            <span className="articles">Age : </span>
            <span className="number1">{user.age}</span>
            
        </div>

        <div className="d-flex flex-column">

            <span className="followers">Weight : </span>
            <span className="number2">{user.weight}</span>
            
        </div>


        <div className="d-flex flex-column">

            <span className="rating">Height : </span>
            <span className="number3">{user.height}</span>
            
        </div>
           
       </div>


       <div className="button mt-2 d-flex flex-row align-items-center">

        
        <button className="btn btn-sm btn-secondary w-100 ml-2"><Link style={{textDecoration:"none"}}  to={'/users/'+user.id}>Details Of Patient</Link></button>

           
       </div>


    </div>

        
    </div>
    
</div>
 
</div>
  )
}

export default User
