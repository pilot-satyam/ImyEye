import React from 'react'
import { Outlet,Navigate } from 'react-router-dom'
import { isLoggedIn } from '../auth';

const PrivateRoute=()=> {

    return isLoggedIn() ? <Outlet /> : <Navigate to={"/login"} />
    // return (
    //     <div>
    //     <h1>private route</h1>
    //     <Outlet/>
    // </div>
    // )
   

}

export default PrivateRoute
