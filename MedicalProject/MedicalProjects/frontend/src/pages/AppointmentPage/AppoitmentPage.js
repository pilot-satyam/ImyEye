
import React ,{Component }from "react";
import { Card,CardHeader, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
import Base from '../../Components/Base'
 export class AppointmentPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      patientsForToday: 0,
      maxPatientsPerDay: 2,
      formData: {
        patientName: '',
        symptoms: '',
        age: '',
        date: '',
        time: ''
      }
    };
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value
      }
    }));
  }

  
  bookAppointment(e) {
    e.preventDefault();
    if(this.state.patientsForToday >= this.state.maxPatientsPerDay) {
      alert("Appointments are full for today, please try again tomorrow.");
    } else {
      
      console.log(this.state.formData);
      this.setState({ patientsForToday: this.state.patientsForToday + 1,
        formData: {
          patientName: '',
          symptoms: '',
          age: '',
          date: '',
          time: ''
        },
        success: true
        },()=>{alert("Appointment created successfully")});
     
      // collect form data
      const formData = new FormData(e.target);
      // make appointment
      fetch("API", {
        method: "POST",
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to create appointment");
        }
        this.setState({ patientsForToday: this.state.patientsForToday + 1 });
      })
      .catch(error => {
        console.log(error);
      });
    }
  }

  render() {
    return (
      
<Base>
<MDBContainer fluid className='p-4'>

<MDBRow>

  <MDBCol md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>

  <img src ="appoitment.webp"></img>

  </MDBCol>

  <MDBCol md='4' className='position-relative' style={{marginLeft:"150px"}}>

    

    <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
    <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>

    <MDBCard className='my-5 bg-glass' style={{ width: '100%', height:"83%" }}>
          <CardHeader>
              <h3 className="center">Book your appoitment</h3>
              <i style={{fontSize:"24px"}} className="fa center">&#xf274;</i>
          </CardHeader>
    <MDBCardBody >

    {this.state.patientsForToday >= this.state.maxPatientsPerDay ? (
          <p>Appointments are full for today, please try again tomorrow.</p>
        ) : (
          
          <CardBody>
            <Form onSubmit={this.bookAppointment.bind(this)}>
            <div className="row">
              <div className="col">
              <FormGroup>
                <Label for="patientName">Patient Name</Label>
                <Input className="inputLogin" type="text" name="patientName" id="patientName" value={this.state.formData.patientName} onChange={this.handleChange.bind(this)} required />
              </FormGroup>
             
              <FormGroup>
                <Label for="symptoms">Symptoms</Label>
                <Input  className="inputLogin" type="textarea" name="symptoms" id="symptoms" value={this.state.formData.symptoms} onChange={this.handleChange.bind(this)} required />
              </FormGroup>

              </div>
            </div>
           
              <FormGroup>
                <Label for="age">Age</Label>
                <Input className="inputLogin" type="number" name="age" id="age" value={this.state.formData.age} onChange={this.handleChange.bind(this)} min="1" required />
            </FormGroup>
           

            <div className="row">
              <div className="col">
            <FormGroup>
              <Label for="date">Date</Label>
              <Input  className="inputLogin" type="date" name="date" id="date" value={this.state.formData.date} onChange={this.handleChange.bind(this)} required />
            </FormGroup>
            <FormGroup>
              <Label for="time">Time</Label>
              <Input className="inputLogin" type="time" name="time" id="time" value={this.state.formData.time} onChange={this.handleChange.bind(this)} required />
            </FormGroup>
            </div>
            </div>
            
            <FormGroup style={{display: "flex", justifyContent: "center"}}>
              <Button  style={{backgroundColor: "#7955bc"}} className="buttonStyle">Book Appointment</Button>
            </FormGroup>
            
          </Form>
        </CardBody>
     
        )}

         
    </MDBCardBody> 
  </MDBCard>

</MDBCol>

</MDBRow>
</MDBContainer>
        </Base>
  
    );
  }
}
