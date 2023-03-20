import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import { useForm } from 'react-hook-form';
import { loadAllDoctors } from "../../services/doctor-service";
import { getCurrentUserDetail } from "../../auth";
import { createAppointment } from "../../services/appointment-service";
import { toast } from "react-toastify";
import { Card, CardBody, CardFooter, CardHeader, CardText, Container } from "reactstrap";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function AppointmentPage() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('10:00');
  const [doctors, setDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [currentUser, setCurrentUser] = useState(undefined);
  const { register, handleSubmit, formState: { errors } } = useForm();

  useEffect(() => {
    setCurrentUser(getCurrentUserDetail());
    loadAllDoctors()
      .then((data) => {
        console.log(data); //data comes here in log
        setDoctors(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const onSubmit = (data) => {
    const appointmentData = {
      id: data.patientId,
      doctorId: selectedDoctor,
      date: selectedDate.toISOString(),
      time: selectedTime
    };
    createAppointment(appointmentData)
      .then((response) => {
        console.log('Appointment created:', response);
        toast.success("Appointment Created");
        // clear form and show success message
      })
      .catch((error) => {
        toast.error("Appointment not created due to some error.It's not you it's Us :(")
        console.error('Failed to create appointment:', error);
        // show error message
      });
  };

  const disabledDates = [/* array of dates with 30 appointments already scheduled */];

  const isDateDisabled = (date) => {
    return disabledDates.some(disabledDate => date.getTime() === disabledDate.getTime());
  };

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
  };

  return (


    <MDBRow>
    <MDBCol md='8' >



    <div className="mt-5" style={{width:"60%", height:"70%", marginLeft:"150px"}}>
      <Card >
        <CardHeader className="text-center">
        <h2>Book an Appointment</h2>
        </CardHeader>
        <CardBody>


        <form onSubmit={handleSubmit(onSubmit)}>
        <div className="text-center">
          <label htmlFor="patientId" >Patient ID:</label><br/>
          <input id="patientId" type="text" {...register("patientId", { required: true })} />
          {errors.patientId && <span>This field is required</span>}
        </div>
        <div className="my-3 text-center">
          <label htmlFor="doctor">Select Doctor</label><br/>
          <select
            id="doctor"
            name="doctorId"
            onChange={handleDoctorChange}
            value={selectedDoctor}
          >
            {/* getting the data from database */}
            <option disabled value="">---Select Doctor---</option>
            {doctors.map((doctor) => (
              <option key={doctor.doctorId} value={doctor.doctorId}>
                {doctor.name}
              </option>
            ))}
          </select>
        </div>
        <div className="text-center">
         
           <label>Appointment Date:</label><br/>
          
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            tileDisabled={({ date, view }) => view === 'month' && isDateDisabled(date)}
          />
         
         <label className="mb-2 mt-2">Appointment Time:</label><br/>
          <TimePicker
            value={selectedTime}
            onChange={setSelectedTime}
            disableClock={true}
            format='hh:mm a'
            minTime='10:00'
            maxTime='18:00'
            interval={30}
          /> 
          <br/>
         <div className="text-center mt-4">
         <button type="submit" className="btn btn-success">Book Appointment</button>

         </div>
         
         
         
        </div>
        {/* <Container className="text-center">
        <button type="submit" className="btn btn-success">Book Appointment</button>
        </Container> */}
        </form>


        </CardBody>
     
      </Card>
     
     
    </div>




    </MDBCol>
    <MDBCol md='4' className ="text-center text-md-start d-flex flex-column justify-content-center">
    <img src ="appoitment.webp"></img>
    </MDBCol>
  </MDBRow>

    
    
  );
}
export default AppointmentPage;
