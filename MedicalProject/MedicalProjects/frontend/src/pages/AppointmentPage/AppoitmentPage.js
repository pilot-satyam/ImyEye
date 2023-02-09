
import React ,{Component }from "react";
import { Card, CardBody, Form, FormGroup, Label, Input, Button } from 'reactstrap';
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
      <div>
        <Base>
        {this.state.patientsForToday >= this.state.maxPatientsPerDay ? (
          <p>Appointments are full for today, please try again tomorrow.</p>
        ) : (
          
          <Card style={{ width: '40%', margin: 'auto' }} className="mt-5 formStyle">
          <CardBody>
            <Form onSubmit={this.bookAppointment.bind(this)}>
              <FormGroup>
                <Label for="patientName">Patient Name</Label>
                <Input type="text" name="patientName" id="patientName" value={this.state.formData.patientName} onChange={this.handleChange.bind(this)} required />
              </FormGroup>
              <FormGroup>
                <Label for="symptoms">Symptoms</Label>
                <Input type="textarea" name="symptoms" id="symptoms" value={this.state.formData.symptoms} onChange={this.handleChange.bind(this)} required />
              </FormGroup>
              <FormGroup>
                <Label for="age">Age</Label>
                <Input type="number" name="age" id="age" value={this.state.formData.age} onChange={this.handleChange.bind(this)} min="1" required />
            </FormGroup>
            <FormGroup>
              <Label for="date">Date</Label>
              <Input type="date" name="date" id="date" value={this.state.formData.date} onChange={this.handleChange.bind(this)} required />
            </FormGroup>
            <FormGroup>
              <Label for="time">Time</Label>
              <Input type="time" name="time" id="time" value={this.state.formData.time} onChange={this.handleChange.bind(this)} required />
            </FormGroup>
            <FormGroup style={{display: "flex", justifyContent: "center"}}>
              <Button  style={{backgroundColor: "lightviolet"}}>Book Appointment</Button>
            </FormGroup>
            
          </Form>
        </CardBody>
      </Card>
        )}
        </Base>
      </div>
    );
  }
}
