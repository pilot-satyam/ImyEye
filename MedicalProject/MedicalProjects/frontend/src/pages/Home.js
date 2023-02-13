// import CustomNavbar from "../components/CustomNavbar";
import Base from "../Components/Base";
import Content from "../Components/Content"
import { Component } from "react";
import React from 'react'
import Grid from "./Grid";
import '../Style/Global.css';
import SliderAuto from "../pages/SliderAuto";

import Testimonial from "../pages/Testimonial"

function Home() {

    const data = {
        name: "ImyEYE Care Center",
      };
      const slideStyles = {
        width: "100%",
        height: "90%",
        borderRadius: "10px",
        // backgroundSize :""
        backgroundPosition: "center",
      };
  return (
    <div style={{width: "auto", height:"auto"}} className="mt-5">
    <Base><br/>
    {/* <FontAwesomeIcon icon={['fab', 'twitter']} />

<FontAwesomeIcon icon={['fab', 'facebook']} />

<FontAwesomeIcon icon={['fab', 'linkedin']} />

<FontAwesomeIcon icon={['fab', 'github']} /> */}

        <div >
          <h2 className="centerIt body">Welcome to<br/> 
          <h1 style={{fontWeight:'bold',fontSize:'47px'}}>
            ImyEYE Care Center &nbsp;
          </h1>
            <i style={{fontSize:"24px"}} className='far'>&#xf06e;</i>
          </h2>
          <p className="centerIt">We provide the best cure that you are looking for!</p>
        </div>
        <div>
        
            <SliderAuto/>
         
            <Content myData={data} />
        </div>
        
        <div>
          <Grid/>
        </div>


        <br/><br/><br/>
        <div style={{backgroundColor:'#7657b1'}}>
          <br/><br/>
          <h3 className="centerIt">Testimonial</h3>
          <Testimonial/>
        </div>

    </Base>
    </div>
  )
}

export default Home

