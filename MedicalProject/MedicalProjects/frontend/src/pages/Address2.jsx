import React from 'react'
import { Container } from 'react-bootstrap';
import Base from "../Components/Base";
import "../Style/Global.css"
function Address2() {
  return (
    <Base>
    <div className="container-fluid mt-5">
         <div className="row">
             <div className="col-6">
             
                <h2 className='common-heading  d-flex align-items-center justify-content-center '>Branch-2 Address &nbsp;
                    <i style={{fontSize:'24px'}} className='fas'>&#xf3c5;</i>
                </h2>
                <p className='common-heading  d-flex align-items-center justify-content-center '>Visit our Branch!</p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <img src='location.png' style={{width:"50%",height:"50%"}}></img>
                <p className=' d-flex align-items-center justify-content-center'>BlueRidge Area<br/> Phase 1, Hinjewadi Rajiv Gandhi Infotech Park,<br/> Hinjawadi, Pimpri-Chinchwad, Maharashtra 411057</p>
             </div>
             <div className="col-6">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7297.130535180662!2d73.73218812402165!3d18.578874329723334!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bb55dda7cfa3%3A0x9c23713251c2a98e!2sPersistent%20learning%20center!5e0!3m2!1sen!2sin!4v1675687343950!5m2!1sen!2sin" 
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

export default Address2
