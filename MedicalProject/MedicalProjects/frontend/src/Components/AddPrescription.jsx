import { useState } from "react";
import { useEffect } from "react";
import { Card,CardBody, Input,Form, Label,Container,Button, CardHeader } from "reactstrap";
import Base from '../Components/Base'
import { loadAllDoctors } from "../services/doctor-service";
// import JoditEditor from "jodit-react";
import {toast} from 'react-toastify'
import { useRef } from "react";
import { loadAllUsers } from "../services/user-service";
import { getCurrentUserDetail } from "../auth";
import { createPrescription as doCreatePrescription } from "../services/prescription-service";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCheckbox,
    MDBIcon
  } from 'mdb-react-ui-kit';
  import {Row,Col} from 'react-bootstrap'

const AddPrescription=()=>{

    // const editor = useRef(0)
    const [content,setContent] = useState('')
    const [content2,setContent2] = useState('')

    //use to destructure array so that data can be fetched from backend
   const [doctors,setDoctors] = useState([])
   const[users,setUsers] = useState([])
   const[currentUser,setCurrentUser] = useState(undefined)
   //since we need to pass it to server that's why using it as object initially
   const[prescription,setPrescription] = useState({
      oldRemarks : '',
      newRemarks : '',
      doctorId : '',
      id:'',
      alcohol:'',
      smoke:'',
      operations:''
   })

    useEffect(
        ()=>{
            setCurrentUser(getCurrentUserDetail())
            loadAllDoctors().then((data)=>{
                console.log(data) //data comes here in log
                setDoctors(data)
            }).catch(error=>{
                console.log(error)
            })
        },[] //passing blank because it should only run in starting,otherwise server wil keep running till infinity
    )

    useEffect(
        ()=>{
            loadAllUsers().then((data)=>{
                console.log(data)
                setUsers(data)
            }).catch(error=>{
                console.log(error)
            })
        },[]
    )

    //field changed fn
    const fieldChanged=(event)=>{
        setPrescription({...prescription,[event.target.name]:event.target.value})
    }

    //create prescription function

    const createPrescription = (event)=>{
        event.preventDefault();
        // console.log("form submitted")
        console.log(prescription)
        if(prescription.oldRemarks.trim() === ''){
            toast.error("Old Remarks Required");
        }
        if(prescription.newRemarks.trim() === ''){
            toast.error("New Remarks Required");
        }
        if(prescription.DoctorId === ''){
            toast.error("Select A Doctor");
        }
        if(prescription.id ===''){
            toast.error("Select Patient")
        }
        if(prescription.alcohol === ''){
            toast.error("Required alcohol consumption")
        }
        if(prescription.smoke === ''){
            toast.error("Required smoke consumption")
        }
        if(prescription.operations === ''){
            toast.error("Required operations history")
        }

        //submit the form on server
        prescription['id'] = currentUser.id
        doCreatePrescription(prescription).then(data=>{
            toast.success("Prescription Created")
            // console.log(prescription)


            setPrescription({
                oldRemarks : '',
                newRemarks : '',
                doctorId : '',
                id:'',
                alcohol:'',
                smoke:'',
                operations:''
            })
        }).catch((error)=>{
            toast.error("Prescription Not Created Due To Some Error Caused!!!")
            // console.log(error)
        })
    }

    return(
        <Base>





<MDBContainer fluid className='p-4 '>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

  <img src ="prescriptionImage.svg"></img>

  </MDBCol>

  <MDBCol md='4' className='position-relative' style={{marginLeft:"150px"}}>

    

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass'>
          <CardHeader>
          <h1 style={{textAlign: 'center'}}> Prescription </h1>
          </CardHeader>
    <MDBCardBody className='p-4'>


          <CardBody>
             
                     {/* {JSON.stringify(prescription)} */}
              
                <Form onSubmit={createPrescription}>

                   
                        <div className="my-3">
                         <Label for="oldRemarks">Old Remarks</Label>
                            <Input 
                            type="text" 
                            id="oldRemarks"
                            placeholder="Old Remarks" 
                            onChange={fieldChanged}
                            name="oldRemarks" className="inputLogin"
                        />
                        {/* <ReactQuill value={content} onChange={setContent}/> */}
                        </div>
                       

                        <div className="my-3">
                        <Label for="newRemarks">New Remarks</Label>
                        <Input 
                        type="text" 
                        id="newRemarks"
                        placeholder="New Remarks" 
                        onChange={fieldChanged}
                        name="newRemarks" className="inputLogin"
                        />
                        {/* <ReactQuill value={content2} onChange={setContent2}/> */}
                      

                       
                    </div>

                   
                    <Row>
                        <Col md={6}>

                        <div className="my-3">
                        <Label for="doctor">Select Doctor</Label>
                        <Input 
                        type="select" 
                        id="doctor"
                        name="doctorId"
                      
                        onChange={fieldChanged}
                        placeholder="Doctor" 
                        defaultValue={0}
                        >
                            {/* getting the data from database */}

                            <option disabled value={0}>---Select Doctor---</option>
                       {
                        doctors.map((doctor)=>(
                            <option value={doctor.doctorId} key={doctor.doctorId}>
                                {doctor.name}
                            </option>
                        ))
                       }
                        </Input>
                    </div>

                        </Col>
                        <Col md ={6}>
                        <div className="my-3">
                        <Label for="users">Select Patient</Label>
                        <Input 
                        type="select" 
                        id="user"
                        name="id"
                      
                        onChange={fieldChanged}
                        placeholder="Patient" 
                        defaultValue={0}
                        >
                            {/* getting the data from database */}
                            <option disabled value={0}>---Select Patient---</option>
                       {
                        users.map((user)=>(
                            <option value={user.id} key={user.id}>
                                {user.name}
                            </option>
                        ))
                       }
                        </Input>
                    </div>  
                        </Col>
                    </Row>
                    <Row>
                        <Col md={6}>
                        <div className="my-3">
                        <Label for="alcohol">Alcohol</Label>
                        <Input 
                        type="text" 
                        id="alcohol"
                        className="inputLogin"
                        placeholder="alcohol" 
                        onChange={fieldChanged}
                        name="alcohol"
                        />
                        </div>
                        </Col>
                        <Col md ={6}>
                        <div className="my-3">
                        <Label for="smoke">Smoke</Label>
                        <Input 
                        type="text" 
                        id="smoke"
                        className="inputLogin"
                        placeholder="smoke" 
                        onChange={fieldChanged}
                        name="smoke"
                        />
                    </div>  
                        </Col>
                    </Row>
               
               
                    <div className="my-3">
                        <Label for="operations">Operations</Label>
                        <Input 
                        type="text" 
                        id="operations"
                        className="inputLogin"
                        placeholder="operations" 
                        onChange={fieldChanged}
                        name="operations"
                        />
                    </div>
                   

                        <Container className="text-center">
                        <Button type="submit" color="primary">Create Prescription</Button>
                        <br/>
                        <br/>
                        <Button className="ms-2" color="danger">Reset Button</Button>
                        </Container>

                  
                    
                 
                </Form>
           

          </CardBody>
    </MDBCardBody>
  </MDBCard>

</MDBCol>

</MDBRow>
</MDBContainer>



 
        </Base>

    );
}
export default AddPrescription;