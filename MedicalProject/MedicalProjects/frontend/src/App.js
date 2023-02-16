import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './pages/Login';
import PhysicianLogin from './pages/PhysicianLogin';
import DoctorSignup from './pages/DoctorSignup';
import Signup from './pages/Signup';
import Home from './pages/Home';
import { Container } from 'react-bootstrap';
import Services from './pages/Services';
import FormForPatient from './pages/FormForPatient';
import ErrorPage from './pages/ErrorPage';
import Contact from './pages/Contact';
import Address from './pages/Address';
import FooterOne from './Components/FooterOne';

import PatientDetails from './pages/Physician/PatientDetails';
import PatientProblemDetails from './pages/Physician/PatientProblemDetails';
import Prescription from './pages/Physician/Prescription';
import PatientInformation from './pages/Physician/PatientInformation';

import{ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from './Components/PrivateRoute';
import UserDashboard from './pages/user-routes/UserDashboard';
import ProfileInfo from './pages/user-routes/ProfileInfo';
import NewFeed from './pages/DoctorList/NewFeed';
import AddPrescription from './Components/AddPrescription';
import Doctors from './pages/Doctors';
import { AppointmentPage } from './pages/AppointmentPage/AppoitmentPage';
import Edit from './pages/Edit'
import { Navigate } from 'react-router-dom';

import NewsEvent from './pages/NewsEvent';

import { Chat } from './pages/Chat';
import UserProvider from './context/UserProvider';
import FeedPlusMenu from './pages/DoctorList/FeedPlusMenu';
import MoreDetails from './pages/MoreDetails';
import UserFeed from './pages/UsersList/UserFeed';
import SingleUserVisible from './pages/UsersList/SingleUserVisible';
import PrescriptionFeed from './pages/PrescriptionList/PrescriptionFeed';
import Address2 from './pages/Address2';
import DemoLogin from './pages/DemoLogin'
import Forgot from './pages/Forgot/Forgot';


function App() {
  return (
  <UserProvider>
  <Container> 
  <BrowserRouter>
  <Chat />
  <ToastContainer />
  <Routes>   
  <Route path="/" element={<Home />} />    
  <Route  path="/home" element= {<Home />} />
  <Route exact path="/login" element= {<DemoLogin />} />
  <Route exact path ="/signup" element={<Signup />} />
  <Route exact path="/physicianlogin" element={<PhysicianLogin />} />
  <Route exact path="/doctorsignup" element={<DoctorSignup />} />
  <Route exact path="/editProfile" element={<Edit/>}/>

  {/* <Route exact path='/patientForm' render={() => (
          <FormProvider>
            <FormForPatient />
          </FormProvider>
        )} /> */}
    <Route exact path ="/patientForm" element ={<FormForPatient />} />
 
  <Route exact path="/services" element={<Services />} />
  <Route exact path="/contactUs" element={<Contact />}/>
  <Route exact path="/address" element={<Address/>}/>  
  <Route path ="/branch2" element={<Address2/>}/>
  <Route exact path="/symptomForm" element={<PatientInformation/>}/>
  <Route exact path="/patientDetails" element={<PatientDetails/>}/>
  <Route exact path ="/patientProblemDetails" element={<PatientProblemDetails/>}/>
  <Route exact path="/prescription" element={<Prescription/>}/>
  <Route exact path ="/appointmentForm" element={<AppointmentPage/>}/>

  <Route exact path='/doctors' element={<NewFeed />}/>
  <Route exact path ='addPrescription' element={<AddPrescription/>}/>
  <Route exact path='/doctors/:doctorId' element={<Doctors />}/>
  <Route exact path='/users/:userId' element={<SingleUserVisible/>} />
  <Route exact path ='/news&Event' element ={<NewsEvent/>}/>
  <Route exact path= "*" element ={<ErrorPage />} />
  <Route path='/feedplusmenu' element={<FeedPlusMenu/>} />
  <Route path='/feedplusmenu/:doctorId' element={<MoreDetails/>} />
  <Route path="/users" element={<UserFeed/>} />
  <Route path="/prescriptions/:Id" element={<PrescriptionFeed />} />
  <Route path="/forgot" element={<Forgot/>} />

  <Route path="/user" element={<PrivateRoute />} >
  <Route path="dashboard" element={<UserDashboard />} />
  <Route path="profile-info/:userId" element={<ProfileInfo />} />
  </Route>
   </Routes>
  <FooterOne />
  </BrowserRouter>
  </Container>
  </UserProvider>
  );
}

export default App;
