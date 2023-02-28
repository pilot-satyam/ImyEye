import React from 'react'
import Base from "../Components/Base";
function Address() {
  return (
    <Base>  
    <div className="container-fluid mt-5">
         <div className="row">
             <div className="col-6">
             
                <h2 className='common-heading  d-flex align-items-center justify-content-center '>Branch-1 Address &nbsp;
                    <i style={{fontSize:'24px'}} className='fas'>&#xf3c5;</i>
                </h2>
                <p className='common-heading  d-flex align-items-center justify-content-center '>Visit our Branch!</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src='location.png' style={{width:"50%",height:"50%"}}></img>
                <p className=' d-flex align-items-center justify-content-center'>Shivaji Chowk<br/> Phase 1, Hinjewadi Rajiv Gandhi Infotech Park,<br/> Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057</p>
             </div>
             <div className="col-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.678167433704!2d73.73566711371699!3d18.588542671946087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbe789036745%3A0x5cec70e9d75d43db!2sPersistent%20Systems!5e0!3m2!1sen!2sin!4v1671006525096!5m2!1sen!2sin"
                  width="500" height="400" 
                 style={{border:"0"}} 
                 allowFullScreen="" loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"></iframe>
             </div>
         </div>
    </div>  
    </Base>   
  )
}

export default Address
