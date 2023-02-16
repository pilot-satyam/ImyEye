import React from 'react';
import Base from "../Components/Base";
import '../Style/Global.css';

import userContext from '../context/userContext';
const Contact=()=>{

  return (
    
// <div>
//   <Base >
// <div className='contact'>
// <h1 className="common-heading d-flex align-items-center justify-content-center mt-5">Contact page &nbsp;
//   <i style={{fontSize:"24px"}} className='far'>&#xf086;</i>
// </h1>



// <div className="container col-4 d-flex align-items-center justify-content-center">
 
//   <div className="contact-form form-container">
//     <form 
//       action="https://formspree.io/f/myyvrrwa"
//       method="POST"
//       className="contact-inputs form">

//     <div className="user-input-wrp">   
//       <input
//         type="text"
//         name="username"
//         required
//         autoComplete="off"
//         className='mt-3'
//       />
//          <span className="floating-label">UserName</span>
//     </div>

//     <div className="user-input-wrp">

//       <input
//         type="email"
//         name="Email"
//         autoComplete="off"
//         required
//         className='mt-3'
//       />
//       <span className="floating-label">Email</span>
//     </div>
    

//     <div className="user-input-wrp">
//       <textarea
//         name="Message"
//         cols="30"
//         rows="10"
//         required
//         autoComplete="off"
//         className='mt-3'>
        
//       </textarea>
//       <span className="floating-label">Enter Text</span>
//     </div>

//       <div className="text-center">
//         <button className ="button mb-5"type="submit" value="send" >
//           Submit
//         </button>
//       </div>
//     </form>
//   </div>
// </div>
// </div>
// </Base>
// </div>


<Base>

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src="call-center.gif" alt="COntact Image" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <form action="https://formspree.io/f/myyvrrwa"
                  method="POST"
                  className="contact-inputs formLogin"
                  style={{width:"80%",height:"90%"}}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control inputLogin" id="name" name="username"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control inputLogin" id="email" name="Email" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control inputLogin" id="message" rows="3" name="Message"></textarea>
            </div>
            <br/>
            <button type="submit" className ="btn btn-primary mb-5 " value="send">Submit</button>
          </form>
        </div>
      </div>
    </div>
</Base>
  )
}

export default Contact


