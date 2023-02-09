// import React, { useState } from 'react';
// import { FormGroup, Label, Input, Button } from 'reactstrap';

// const EditProfileForm = ({ user, onCancel, onSave }) => {
//   const [updateData, setUpdateData] = useState({
//     name: user.name,
//     age: user.age,
//     email: user.email,
//     contact: user.contact,
//     address: user.address,
//     weight: user.weight,
//     height: user.height
//   });

//   const handleUpdate = (event) => {
//     setUpdateData({
//       ...updateData,
//       [event.target.name]: event.target.value
//     });
//   };

//   const handleSave = (event) => {
//     event.preventDefault();
//     onSave(user.id, updateData);
//     onCancel();
//   };

//   return (
//     <form onSubmit={handleSave}>
//       <FormGroup>
//         <Label for='name'>Name</Label>
//         <Input type='text' name='name' id='name' value={updateData.name} onChange={handleUpdate} />
//       </FormGroup>
//       <FormGroup>
//         <Label for='age'>Age</Label>
//         <Input type='text' name='age' id='age' value={updateData.age} onChange={handleUpdate} />
//       </FormGroup>
//       <FormGroup>
//         <Label for='email'>Email</Label>
//         <Input type='email' name='email' id='email' value={updateData.email} onChange={handleUpdate} />
//       </FormGroup>
//       <FormGroup>
//         <Label for='contact'>Contact</Label>
//         <Input type='text' name='contact' id='contact' value={updateData.contact} onChange={handleUpdate} />
//       </FormGroup>
//       <FormGroup>
//         <Label for='address'>Address</Label>
//         <Input type='text' name='address' id='address'value={updateData.address} onChange={handleUpdate} />
//     </FormGroup>
//     <FormGroup>
//     <Label for='weight'>Weight (Kgs)</Label>
//     <Input type='text' name='weight' id='weight' value={updateData.weight} onChange={handleUpdate} />
//     </FormGroup>
//     <FormGroup>
//     <Label for='height'>Height (Cms)</Label>
//     <Input type='text' name='height' id='height' value={updateData.height} onChange={handleUpdate} />
//     </FormGroup>
//     <FormGroup className='text-center mt-4'>
//     <Button color='warning'>Update Profile</Button>
//     </FormGroup>
//     )
