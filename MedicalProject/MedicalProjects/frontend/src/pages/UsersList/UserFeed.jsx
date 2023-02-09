import React, { useState } from 'react'
import '../../Style/Global.css';
import { useEffect } from 'react';
import User from './User';
import { loadAllUsers } from '../../services/user-service';

import { Card, CardBody, CardText,Row,Col } from 'reactstrap';

function UserFeed() {

    //here we use useState so that we can save the data cmng from useEffect
    const[users,setUsers] = useState([]) //initializing the state with an empty array
    const[error,setError] = useState(null)

    useEffect(()=>{

        //---->load all users from server<------
        loadAllUsers()
            .then((data)=>{
                console.log(data)
                setUsers(data)
            })
            .catch((error)=>{
                console.log(error)
                setError(error)
            })

    },[])

   return(
        
    <div className='container-fluid'>
        <Row>
            <Col md={{
                size:10,
                offset:1
            }}>
                {/* <h1>
                    Doctors List Length: {users.length} 
                </h1> */}
                {error && <p>{error}</p>}
                {
                    users.map((user)=>(
                        <User key={user.id} user={user} /> //passing the user object as a prop
                    ))
                }   
            </Col>
        </Row>
    </div>
    
   )
}

export default UserFeed
