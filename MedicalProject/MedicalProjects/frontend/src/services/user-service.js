import { myAxios } from "./helper";
import { privateAxios } from "./helper";
export const signUp = (user)=>{
    //keeping in response.data so that the data which we are getting from the promise can be then pass to 
    //them of promise and will be used in signup
    return myAxios
    .post("/auth/register",user)
    .then((response)=>response.data)
};
export default signUp;


export const loginUser = (loginDetail)=>{
    return myAxios
    .post('/auth/login',loginDetail)
    .then((response)=>response.data)
}

export const loadAllUsers=()=>{
    return myAxios
    .get(`/users/`)
    .then(response=>{return response.data})
}

export const loadUser = (userId) => {
      return myAxios
        .get(`/users/${userId}`)
        .then(response => {
          return response.data;
        });
    // return Promise.reject("User ID is undefined");
  };


  //update the user
  export const updateUser = (userId, updatedUserData) => {
    return privateAxios
      .put(`/users/${userId}`, updatedUserData)
      .then(response => {
        return response.data.updatedAt;
      });
  };
  
  
  




// import axios from 'axios';
// import React, { Component } from 'react';

// axios.post('http://localhost:9090/api/register',request_data, {
//           headers: {
//               'Content-Type': 'application/json',
//               'Authorization': 'Bearer '+token
//           },      
//       })      
//       .then((response) => {
//         console.log('response',response.data)

//       })
//       .catch((error) => {
//         alert('error',error.response)

//       })

//   // console.log('----cheers---------',data)
// // dispatch(userUpdateProfileSuccess(data))