import { useState } from "react";
import { useEffect } from "react";
import { Card,CardBody, Input,Form, Label,Container,Button } from "reactstrap";
import Base from '../Components/Base'
import { loadAllDoctors } from "../services/doctor-service";
// import JoditEditor from "jodit-react";
import {toast} from 'react-toastify'
import { useRef } from "react";
import { loadAllUsers } from "../services/user-service";
import { getCurrentUserDetail } from "../auth";
import { createPrescription as doCreatePrescription, uploadImage } from "../services/prescription-service";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'; // import the styles
// import { error } from "jodit/types/core/helpers";



const AddPrescription=()=>{

    // const editor = useRef(0)
    const [content,setContent] = useState('')
    const [content2,setContent2] = useState('')

    //use to destructure array so that data can be fetched from backend
   const [doctors,setDoctors] = useState([])
   const[users,setUsers] = useState([])
   const[currentUser,setCurrentUser] = useState(undefined)
   //since we need to pass it to server that's why using it as object initially

   const[Image,setImage] = useState(null)

   const[prescription,setPrescription] = useState({
      oldRemarks : '',
      newRemarks : '',
      doctorId : '',
      id:'',
      alcohol:'',
      smoke:'',
      operations:'',
    //   Image : ''
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


    //handling file change event
    const handleFileChange=(event)=>{
        console.log(event.target.files[0])
        setImage(event.target.files[0])
    }

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
        console.log(prescription);
        // prescription['id'] = currentUser.id
        prescription['id'] = currentUser ? currentUser.id : '';

        doCreatePrescription(prescription).then(data=>{
            uploadImage(Image,data.id).then(data=>{
                 toast.success("Image Uploaded");
            }).catch(error=>{
                toast.error("Error in uploading the image");
                console.log(error);
            })

            toast.success("Prescription Created")
             console.log(prescription)


            setPrescription({
                oldRemarks : '',
                newRemarks : '',
                doctorId : '',
                id:'',
                alcohol:'',
                smoke:'',
                operations:'',
                // Image : ''
            })
        }).catch((error)=>{
            toast.error("Prescription Not Created Due To Some Error Caused!!!")
             console.log(error)
        })
    }

    return(
        <Base>

        <div className="mt-5">
            {/* className="wrapper contact-page"   -- className but not usefull here*/}
        <Card className="shadow-sm">
            <CardBody>
                {/* {JSON.stringify(prescription)} */}
                <h1 style={{textAlign: 'center'}}> User's Prescription </h1>
                <Form onSubmit={createPrescription}>
                    <div className="my-3">
                        <Label for="oldRemarks">Old Remarks</Label>
                        <Input 
                        type="text" 
                        id="oldRemarks"
                        placeholder="Old Remarks" 
                        onChange={fieldChanged}
                        name="oldRemarks"
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
                        name="newRemarks"
                        />
                        {/* <ReactQuill value={content2} onChange={setContent2}/> */}
                      

                       
                    </div>
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
                    </div>
                    <div className="my-3">
                        <Label for="alcohol">Alcohol</Label>
                        <Input 
                        type="text" 
                        id="alcohol"
                        placeholder="alcohol" 
                        onChange={fieldChanged}
                        name="alcohol"
                        />
                    </div>
                    <div className="my-3">
                        <Label for="smoke">Smoke</Label>
                        <Input 
                        type="text" 
                        id="smoke"
                        placeholder="smoke" 
                        onChange={fieldChanged}
                        name="smoke"
                        />
                    </div>
                    <div className="my-3">
                        <Label for="operations">Operations</Label>
                        <Input 
                        type="text" 
                        id="operations"
                        placeholder="operations" 
                        onChange={fieldChanged}
                        name="operations"
                        />
                    </div>
                  {/* file field for uploading of scanning images */}
                    <div className="mt-3">
                        <Label for="Image">Upload Reports</Label>
                        <Input id="Image" type="file" onChange={handleFileChange} />  
                    </div>
                    <Container className="text-center mt-3">
                        <Button type="submit" color="primary">Create Prescription</Button>
                        <Button className="ms-2" color="danger">Reset Button</Button>
                    </Container>
                </Form>
            </CardBody>
        </Card>
        </div>
        </Base>

    );
}
export default AddPrescription;