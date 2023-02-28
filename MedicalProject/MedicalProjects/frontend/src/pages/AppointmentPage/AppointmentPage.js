import React, { useState, useEffect } from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import TimePicker from 'react-time-picker';
import { useForm } from 'react-hook-form';
import { loadAllDoctors } from "../../services/doctor-service";
import { getCurrentUserDetail } from "../../auth";
import { createAppointment } from "../../services/appointment-service";
import { toast } from "react-toastify";
import { Card, CardBody, CardText, Container } from "reactstrap";

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
    <div>
      <h1>Book an Appointment</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="patientId">Patient ID:</label>
          <input id="patientId" type="text" {...register("patientId", { required: true })} />
          {errors.patientId && <span>This field is required</span>}
        </div>
        <div className="my-3">
          <label htmlFor="doctor">Select Doctor</label>
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
        <div>
          <Card>
            <CardText className="text-center"><h3>Appointment Date:</h3></CardText>
          <CardBody>
          <Calendar
            value={selectedDate}
            onChange={setSelectedDate}
            tileDisabled={({ date, view }) => view === 'month' && isDateDisabled(date)}
          />
          </CardBody>
          <CardText className="text-center">Appointment Time:
          <TimePicker
            value={selectedTime}
            onChange={setSelectedTime}
            disableClock={true}
            format='hh:mm a'
            minTime='10:00'
            maxTime='18:00'
            interval={30}
          /> 
          </CardText>
          <CardBody>
          <button type="submit" className="btn btn-success">Book Appointment</button>
          </CardBody>
          </Card>
        </div>
        {/* <Container className="text-center">
        <button type="submit" className="btn btn-success">Book Appointment</button>
        </Container> */}
        </form>
    </div>
  );
}
export default AppointmentPage;
