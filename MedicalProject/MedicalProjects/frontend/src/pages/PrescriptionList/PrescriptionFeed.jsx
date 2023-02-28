import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { loadSinglePrescription } from '../../services/prescription-service';
import { toast } from 'react-toastify';

function PrescriptionFeed() {
  const [prescription, setPrescription] = useState({});

  const { Id } = useParams();
  console.log(Id)

  useEffect(() =>
        {
        loadSinglePrescription(Id).then((data)=>{
            console.log(data)
            setPrescription(data)
        }).catch(error=>{
            console.log(error)
            toast.error("Unable to fetch prescriptions,Kripya thoda samay dein");
        })
        }, []);

  return (
    // <div>
    //  <h2>Doctor Information</h2>
    //  <p>Name: {prescription.doctor?.name}</p>
    //  <p>Email: {prescription.doctor?.email}</p>
    //  <p>Qualification: {prescription.doctor?.qualification}</p>
    //  <p>Experience: {prescription.doctor?.experience}</p>
    //  <p>Fees: {prescription.doctor?.fees}</p>
    //  <p>Doctor ID: {prescription.doctor?.doctorId}</p>

    //  <h2>User Information</h2>
    //  <p>ID: {prescription.user?.id}</p>
    //  <p>Name: {prescription.user?.name}</p>
    //  <p>Email: {prescription.user?.email}</p>
    //  <p>Age: {prescription.user?.age}yrs</p>
    //  <p>Weight: {prescription.user?.weight}Kgs</p>
    //  <p>Height: {prescription.user?.height}Cms</p>
    //  <p>Contact: {prescription.user?.contact}</p>
    //  <p>Address: {prescription.user?.address}</p>
    //  <p>Role: {prescription.user?.roles[0]?.name}</p>

    //  <h2>Health Information</h2>
    //  <p>Alcohol: {prescription.alcohol}</p>
    //  <p>Smoke: {prescription.smoke}</p>
    //  <p>Operations: {prescription.operations}</p>
    //  <p>ID: {prescription.id}</p>
    //  <p>Report Image: {prescription.reportImage}</p>
    //  <p>Added Date: {prescription.addedDate}</p>
    //  <p>Old Remarks: {prescription.oldRemarks}</p>
    //  <p>New Remarks: {prescription.newRemarks}</p>
    // // </div>


  
      

      <container className="centerIt">
        <br/><br/>
            <div className="col-container mt-5 outer">
               <div className="col mt-4 bg1 box cardGridLight " style={{ marginLeft: "0rem", height: "440px", width: "350px" }}>
               <br/><br/>
               <h2>Doctor Information</h2>
     <p>Name: {prescription.doctor?.name}</p>
     <p>Email: {prescription.doctor?.email}</p>
     <p>Qualification: {prescription.doctor?.qualification}</p>
     <p>Experience: {prescription.doctor?.experience}</p>
      <p>Fees: {prescription.doctor?.fees}</p>
      <p>Doctor ID: {prescription.doctor?.doctorId}</p>
                    
                </div>

                {/* <div className="col bg2"> */}
                <div className="col mt-4 bg2 box cardGridDark" style={{ marginRight: "1rem", height: "440px", width: "350px" }}>
                <br/><br/>
                
                <h2>User Information</h2>
     <p>ID: {prescription.user?.id}</p>
     <p>Name: {prescription.user?.name}</p>
     <p>Email: {prescription.user?.email}</p>
     <p>Age: {prescription.user?.age}yrs</p>
     <p>Weight: {prescription.user?.weight}Kgs</p>
     <p>Height: {prescription.user?.height}Cms</p>
     <p>Contact: {prescription.user?.contact}</p>
     <p>Address: {prescription.user?.address}</p>
     <p>Role: {prescription.user?.roles[0]?.name}</p>
                   
                </div>

                {/* <div className="col bg1"> */}
                <div className="col mt-4 bg1 box cardGridLight" style={{ marginRight: "1rem", height: "440px", width: "350px"}}>
                <br/><br/>
                <h2>Health Information</h2>
     <p>Alcohol: {prescription.alcohol}</p>
     <p>Smoke: {prescription.smoke}</p>
     <p>Operations: {prescription.operations}</p>
     <p>ID: {prescription.id}</p>
     <p>Report Image: {prescription.reportImage}</p>
     <p>Added Date: {prescription.addedDate}</p>
     <p>Old Remarks: {prescription.oldRemarks}</p>
     <p>New Remarks: {prescription.newRemarks}</p>
                </div>
            </div>

        </container>
  

  );
}

export default PrescriptionFeed;
