import React from 'react'
import { useState } from 'react';
import  '../../Style/Global.css';
import Base from '../../Components/Base';

function PatientDetails(props)
{
    const [prescription, setPrescription] = useState('');

    const handlePrescription =(e)=>{
        setPrescription(e.target.value)
    }  
    
    const handleSubmit=()=>{
        
    }

    return (

        

            <Base>

                <table className="table table-bordered">
                    <h3 className = "text-center">Patient Details</h3>
                    <tr className="col">
                        <td className="col-6">Name of Patient</td>
                        <td className="col-6">Name from the backend</td>
                    </tr>
                    <tr>
                        <td>Id</td>
                        <td>Age from backend</td>
                    </tr>
                    <tr>
                        <td>Age</td>
                        <td>Age from backend</td>
                    </tr>
                    <tr>
                        <td>Gender</td>
                        <td>Gender from backend</td>
                    </tr>
                    <tr>
                        <td>Old remarks</td>
                        <td>this will be fetched from patient form</td>
                    </tr>
                    <tr>
                        <td>New Remarks</td>
                        <td>
                            <div className="form-group text-center">
                                {/* <label htmlFor="exampleFormControlTextarea1"></label> */}
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Uploaded Images</td>
                        <td>??</td>
                    </tr>
                    
                  </table>

             {/* this is only editable for the doctor    */}
            <form onSubmit={(e) => {handleSubmit(e)}} >
                

                <div className="col-12 text-center mb-3">
                    <button type="submit" className="button btn-primary">submit</button>
                </div>

            </form>







                        {/* <form className="" onSubmit={(e) => {handleSubmit(e)}} >
                            <div className="" >
                                <label className="">Prescription</label>
                                <input type="text" className="form-control" placeholder="Prescription" rows="3" required onChange={(e)=>{handlePrescription(e)}}  />
                            </div>
                        </form> */}

                        {/* <form className="" onSubmit={(e) => {handleSubmit(e)}} >

                            <div className="" >

                                <label className="text-center">Prescription</label>

                                <input type="text" className="form-control" placeholder="Prescription" rows="3" required onChange={(e)=>{handlePrescription(e)}}  />

                            </div>

                            <div className="col-12 text-center mt-3">

                            <button type="submit" className="button btn-primary">submit</button>
                            </div> */}
                            {/* <Button >Submit</Button> */}

                           

                        {/* </form> */}

</Base>
              
    )
}

export default PatientDetails