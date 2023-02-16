import React from 'react';
import "../Style/Global.css"

const Grid = () => {
  return (
    <container className="centerIt">
            <div className="col-container mt-5 outer">
               <div className="col mt-4 bg1 box cardGridLight " style={{ marginLeft: "0rem", height: "200px", width: "350px" }}>
                    <br/>
                    <br/>
                    <i style={{fontSize:"24px"}} className="fa" >&#xf0f8;</i>
                    <h3>20+</h3>
                    <hr/>
                    <hr/>
                   
                    <h4>Hospitals & Growing</h4>
                    
                </div>

                {/* <div className="col bg2"> */}
                <div className="col mt-4 bg2 box cardGridDark" style={{ marginRight: "1rem", height: "200px", width: "350px" }}>
                    <br/>
                    <br/>
                    <i style={{fontSize:"24px"}} className="fa">&#xf0c0;</i>
                    <h3>
                    
                      70+
                      <hr />
                    <hr/>
                    </h3>
                    
                
                    <h4>Doctors</h4>
                    
                    <br/>
                    <br/>
                </div>

                {/* <div className="col bg1"> */}
                <div className="col mt-4 bg1 box cardGridLight" style={{ marginRight: "1rem", height: "200px", width: "350px"}}>
                    <br/>
                    <br/>
                    <i style={{fontSize:"24px"}} className="fa">&#xf06e;</i>
                    <h3>
                      1 Million
                    </h3>
                    <hr/>
                    <hr/>
                    
                    <h4>Eyes treated</h4>
                   
                </div>
            </div>

        </container>
  );
};

export default Grid;
