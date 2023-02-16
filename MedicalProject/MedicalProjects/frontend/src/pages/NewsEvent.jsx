import React from 'react'
import { useState } from 'react';
import Base from '../Components/Base'
import "../../src/Style/Global.css"
import "../Style/movingBg.css"
export default function NewsEvent() {
  const [isHovered, setIsHovered] = useState(false);



  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    
    <Base>
    <div className='newbg'>
      <div className="news-events mt-5" >

        
        <div className="section mt-4 cardNews">
            <h2>Upcoming Events</h2>
            <ul>
                <li>Open House Event - February 1st</li>
                <li>Eye Health Seminar - March 15th</li>
                <li>Workshop on Glaucoma - April 22nd</li>
            </ul>
        </div>

        <div className="section cardNews">
            <h2>News Articles</h2>
                <ul>
                    <li>
                      <a href='#' style={{textDecoration: 'none'}} className="">
                                                                        New Treatment for Macular Degeneration
                      </a>
                    </li>
                    <li>
                      <a href='#' style={{textDecoration: 'none'}}>
                        Clinic Adopts Cutting-Edge Technology
                      </a>
                    </li>
                    <li>
                      <a href='#' style={{textDecoration: 'none'}} 
                      className="">
                        Research Findings on Cataracts
                      </a>
                    </li>
                </ul>
        </div>

        <div className="section cardNews">
            <h2>Press Releases</h2>
                <ul>
                    <li>Clinic Receives Award for Excellence</li>
                    <li>New Doctor Joins the Team</li>
                    <li>Expansion of Services Announced</li>
                 </ul>
        </div>


    </div>

    <div className="news-events" >
        <div className="section cardNews">
            <h2>Newsletter Archive</h2>
                <ul>
                    <li>Summer 2022</li>
                    <li>Spring 2022</li>
                    <li>Winter 2021</li>
                </ul>
        </div>

        <div className="section cardNews">
            <h2>Social Media Updates</h2>
                <ul>
                    <li>Follow us on <a href="https://twitter.com/" style={{textDecoration: 'none'}}>Twitter</a></li>
                    <li>Like us on <a href="https://www.facebook.com/" style={{textDecoration: 'none'}}>Facebook</a></li>
                </ul>
  </div>

  <div className="section cardNews">
    <h2>Blog Articles</h2>
    <ul>
      <li>5 Ways to Protect Your Eyes</li>
      <li>Understanding Macular Degeneration</li>
      <li>The Importance of Regular Eye Exams</li>
    </ul>
  </div>
  </div>
   
    </div>
    </Base>
  )
}
