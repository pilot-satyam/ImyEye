// import React, { useEffect, useState } from 'react'
// import { Card,Container,CardBody, CardFooter, Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap'
// import { updateUser } from '../services/user-service' // import the API function to update the user

// const ViewUserProfile = ({ user }) => {
//   const [showModal, setShowModal] = useState(false) // state to toggle the modal
//   const [userData, setUserData] = useState({
//     name: user.name,
//     age: user.age,
//     email: user.email,
//     contact: user.contact,
//     address: user.address,
//     weight: user.weight,
//     height: user.height
//   }) // state to store the updated user data

//   const toggleModal = () => setShowModal(!showModal) // function to toggle the modal

//   const handleInputChange = (event) => {
//     setUserData({
//       ...userData,
//       [event.target.name]: event.target.value
//     })
//   } // function to handle input changes in the form

//   // const handleSubmit = async (event) => {
//   //   event.preventDefault()
//   //   try {
//   //     const response = await updateUser(user.id, userData) // call the API function to update the user
//   //     if (response.status === 200) {
//   //       setShowModal(false) // close the modal
//   //       console.log('User updated successfully')
//   //     } else {
//   //       console.error('Error updating user')
//   //     }
//   //   } catch (error) {
//   //     console.error(error)
//   //   }
//   // }

//   useEffect(()=>{
//     updateUser(userId,updatedUserData)
//   })

//   return (
//     <div>
//       <Card className='mt-2 border-0 rounded-0 shadow-sm'>
//         <CardBody>
//           <h3 className='text-uppercase'>User Information</h3>
//           <Container className='text-center'>
//               <img style={{maxWidth:'250px',maxHeight:'250px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU" alt="user profile picture" className='image-fluid rounded-circle' />
//             </Container>
//           <Table responsive striped hover bordered={true} className='mt-5'>
//             <tbody>
//               {/* display the user information in the table */}
//               <tr>
//                 <td>Patient Id</td>
//                 <td>{user.id}</td>
//               </tr>
//               <tr>
//                 <td>Patient Name</td>
//                 <td>{userData.name}</td>
//               </tr>
//               <tr>
//                 <td>Age</td>
//                 <td>{userData.age}</td>
//               </tr>
//               <tr>
//                 <td>Patient Email Id</td>
//                 <td>{userData.email}</td>
//               </tr>
//               <tr>
//                 <td>Contact</td>
//                 <td>{userData.contact}</td>
//               </tr>
//               <tr>
//                 <td>Address</td>
//                 <td>{userData.address}</td>
//               </tr>
//               <tr>
//                 <td>Patient Weight</td>
//                 <td>{userData.weight}Kgs</td>
//               </tr>
//               <tr>
//                 <td>Patient Height</td>
//                 <td>{userData.height}Kgs</td>
//                 </tr>
//         </tbody>
//       </Table>
//     </CardBody>
//     <CardFooter>
//       <Button onClick={toggleModal} color='primary' className='float-right'>Update User</Button>
//     </CardFooter>
//   </Card>
//   <Modal isOpen={showModal} toggle={toggleModal}>
//     <ModalHeader toggle={toggleModal}>Update User</ModalHeader>
//     <ModalBody>
//       <Form onSubmit={handleSubmit}>
//         <FormGroup>
//           <Label for='name'>Name</Label>
//           <Input type='text' name='name' id='name' value={userData.name} onChange={handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for='age'>Age</Label>
//           <Input type='number' name='age' id='age' value={userData.age} onChange={handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for='email'>Email</Label>
//           <Input type='email' name='email' id='email' value={userData.email} onChange={handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for='contact'>Contact</Label>
//           <Input type='text' name='contact' id='contact' value={userData.contact} onChange={handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for='address'>Address</Label>
//           <Input type='text' name='address' id='address' value={userData.address} onChange={handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for='weight'>Weight (in Kgs)</Label>
//           <Input type='number' name='weight' id='weight' value={userData.weight} onChange={handleInputChange} />
//         </FormGroup>
//         <FormGroup>
//           <Label for='height'>Height (in cm)</Label>
//           <Input type='number' name='height' id='height' value={userData.height} onChange={handleInputChange} />
//         </FormGroup>
//         <Container className='text-center'>
//         <ModalFooter className='text-center'>
//           <Button color='primary' type='submit' className='center'>Update</Button>{' '}
//           <Button color='secondary' onClick={toggleModal}>Cancel</Button>
//         </ModalFooter>
//         </Container>
//       </Form>
//     </ModalBody>
//   </Modal>
// </div>
// )}

// export default ViewUserProfile
import React from 'react'
import { useState,useEffect } from 'react'
import { Card, CardBody, CardFooter, Col, Container, Row, Table,Button } from 'reactstrap'
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
      <Card className='mt-2 border-0 rounded-0 shadow-sm'>
          <CardBody>
            <h3 className='text-uppercase'>User Information</h3>
            <Container className='text-center'>
              <img style={{maxWidth:'250px',maxHeight:'250px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJxA5cTf-5dh5Eusm0puHbvAhOrCRPtckzjA&usqp=CAU" alt="user profile picture" className='image-fluid rounded-circle' />
            </Container>
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
            {/* if current user is logged in then only the user can update the details */}
           {currentUser ? (currentUser.id == user.id) ? (
             <CardFooter className='text-center'>
             <Button onClick={updateProfileClick} color='warning'>Update Profile</Button>
         </CardFooter>) 
         : '' 
         : ''}
          </CardBody>
        </Card>
    </div>
  )
}

export default ViewUserProfile