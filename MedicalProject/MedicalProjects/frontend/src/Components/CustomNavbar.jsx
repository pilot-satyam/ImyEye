import React from 'react';
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { doLogout, getCurrentUserDetail,isLoggedIn } from '../auth';
import '../Style/NavBar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons'
import '../Style/Global.css'
const CustomNavbar =(props)=> {

  let navigate = useNavigate()
  const [isOpen, setIsOpen] = useState(false)
  const [login, setLogin] = useState(false)
  const [user, setUser] = useState(undefined)
  const [theme, setTheme] = useState('dark');

  useEffect(() => {

      setLogin(isLoggedIn())
      setUser(getCurrentUserDetail())

  }, [login])

  const logout=()=>{
    doLogout(()=>{
      //logged out
      setLogin(false)
      navigate("/")
    })
  }

  return (
    <Navbar bg="dark" expand="lg"  variant="dark" fixed="top"  >
   
      <Container>
        <img src ="favicon-32x32.png" alt="Image of eye for the navBar" className='rounded-circle'/>

        <Navbar.Brand href="/home">I-myEYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* basic-navbar-nav */}
        <Navbar.Collapse id="responsive-navbar-nav">

         <Nav className="me-auto space">
            <NavLink to="/home" style={{textDecoration: 'none'}} className="nav-content"> HOME &nbsp;&nbsp;&nbsp;</NavLink>
            <NavLink to="/services" style={{textDecoration: 'none'}}> SERVICES &nbsp;&nbsp;&nbsp;</NavLink>
            <NavLink to="/contactUs" style={{textDecoration: 'none'}}>  CONTACT US </NavLink>
           
            
          
            
            <div className="me-auto space dropdown navbar-dropdown">
  <button className="dropbtn text-white bg-dark">ADDRESS</button>
  <div className="dropdown-content " id='address_dropdown'>
    <a href="/address" id="address_options">Branch 1</a>
    <a href="/branch2" id="">Branch 2</a>
  </div>
</div>
&nbsp;&nbsp;&nbsp;
<NavLink to="/news&Event" style={{textDecoration: 'none'}}>  NEWS & EVENT &nbsp;&nbsp;&nbsp;</NavLink>

<div className="me-auto space dropdown navbar-dropdown">
  <button className="dropbtn text-white bg-dark">TREATMENT</button>
  <div className="dropdown-content " id='address_dropdown'>
    <a href="/cornea" id="address_options"> CORNEA</a>
    <a href="/retina" id="">RETINA</a>
    <a href="/cataract" id=""> CATARACT</a>
  </div>
</div>
          
          </Nav>

          <Nav>
            {
              login && ( 
                <>
                <Nav.Link href={`/user/profile-info/${user.id}`}>
                  Profile Info
                </Nav.Link>
                <Nav.Link href="/user/dashboard">{user.email}</Nav.Link>
              <Nav.Link onClick = {logout}> LogOut &nbsp;&nbsp;&nbsp; </Nav.Link>
              </>
              )
            }
            {
              !login && (
                <>
                <NavLink to="/login" style={{textDecoration: 'none'}}> NEW ADMISSION&nbsp;&nbsp;&nbsp; </NavLink>
          <NavLink to='/physicianlogin' style={{textDecoration: 'none' }}>PHYSICIAN LOGIN &nbsp;&nbsp;&nbsp;</NavLink>
                </>
              )
            }
          {/* <NavLink to="/login" style={{textDecoration: 'none'}}> New Admission &nbsp;&nbsp;&nbsp; </NavLink>
          <NavLink to='/physicianlogin' style={{textDecoration: 'none'}}>Physician Login &nbsp;&nbsp;&nbsp;</NavLink> */}
          </Nav>
       
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default CustomNavbar;