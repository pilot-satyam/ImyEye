import React from 'react'
import { useState,useEffect } from 'react'
import { Card, CardBody, CardFooter, Col, Container, Row, Table,Button, CardHeader } from 'reactstrap'
import { getCurrentUserDetail, isLoggedIn } from '../auth'
import { updateUser } from '../services/user-service'
//making component reusable
//Whenever u write ViewUserProfile just pass on user props to access and hence no need to write it again
const ViewUserProfile = ({user,updateProfileClick}) => {

 const[currentUser,setCurrentUser] = useState(null)
 const[login,setLogin] = useState(false)
 useEffect(()=>{
    setCurrentUser(getCurrentUserDetail())
    setLogin(isLoggedIn())
 },[])

  return (
    <div>
      <Card className='mt-5 border-0 rounded-0 shadow-sm'>
        <CardHeader>
          <h3 className='text-uppercase text-center'>User Information</h3>
            <Container className='text-center'>
              <img style={{maxWidth:'150px',maxHeight:'150px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU" alt="user profile picture" className='image-fluid rounded-circle' />
            </Container>
        </CardHeader>
          <CardBody>
           
            <Table responsive striped hover bordered={true} className='mt-5'>
              <tbody>
                <tr>
                  <td>
                   Patient Id
                  </td>
                  <td>
                    {user.id}
                  </td>
                </tr>
                <tr> 
                  <td>
                   Patient Name 
                  </td>
                  <td>
                    {user.name}
                  </td>
                </tr>
                <tr>
                  <td>
                   Age 
                  </td>
                  <td>
                    {user.age}
                  </td>
                </tr>
                <tr>
                  <td>
                   Patient Email Id 
                  </td>
                  <td>
                    {user.email}
                  </td>
                </tr>
                <tr>
                  <td>
                   Contact
                  </td>
                  <td>
                    {user.contact}
                  </td>
                </tr>
                <tr>
                  <td>
                   Address
                  </td>
                  <td>
                    {user.address}
                  </td>
                </tr>
                <tr>
                  <td>
                   Patient Weight
                  </td>
                  <td>
                    {user.weight}Kgs
                  </td>
                </tr>
                <tr>
                  <td>
                   Patient Height
                  </td>
                  <td>
                    {user.height}cms
                  </td>
                </tr>
              </tbody>
            </Table>
          </CardBody>
            {/* if current user is logged in then only the user can update the details */}
           {currentUser ? (currentUser.id == user.id) ? (
             <CardFooter className='text-center'>
             <Button onClick={updateProfileClick} color='warning'>Update Profile</Button>
         </CardFooter>) 
         : '' 
         : ''}
         
        </Card>
    </div>
  )
}

export default ViewUserProfile