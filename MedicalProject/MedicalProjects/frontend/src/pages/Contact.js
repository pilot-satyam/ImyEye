import React from 'react';
import Base from "../Components/Base";
import '../Style/Global.css';

import userContext from '../context/userContext';
const Contact=()=>{

  return (
<Base>

    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6">
          <img src="call-center.gif" alt="COntact Image" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <form   action="https://formspree.io/f/myyvrrwa"
                  method="POST"
                  className="contact-inputs formLogin"
                  style={{width:"80%",height:"90%"}}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input type="text" className="form-control inputLogin" id="name" name="username" required
                    autoComplete="off"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" className="form-control inputLogin" id="email" name="Email" required
                    autoComplete="off" />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea className="form-control inputLogin" id="message" rows="3" name="Message" required
                    autoComplete="off"></textarea>
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


