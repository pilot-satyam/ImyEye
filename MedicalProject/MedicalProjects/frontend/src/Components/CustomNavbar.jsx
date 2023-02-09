import React from 'react';
import { useState,useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink, useNavigate } from 'react-router-dom';
import "../Style/Global.css";
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
    // <Navbar bg="primary" expand="lg" expand={props.expand} variant="light" fixed="top"  className={`navbar navbar-${theme}`} fixed={props.fixed}>
    <Navbar bg={props.bg} className={`navbar navbar-${theme}`} fixed="top" expand="lg">
      <Container>
        <img src ="favicon-32x32.png" alt="Image of eye for the navBar" className='rounded-circle'/>
{/* .........................
        <Navbar.Brand href="#">I-myEYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" /> 
        {/* basic-navbar-nav */}
        {/* <Navbar.Collapse id="navbarScroll">
          <Nav className="mr-auto my-2 my-lg-0">
            <NavLink to="/" style={{textDecoration: 'none'}}> Home &nbsp;&nbsp;&nbsp;</NavLink> */}
            {/* <Nav className='me-auto'>  */}
            {/* <NavLink to="/login" style={{textDecoration: 'none'}}> New Admission &nbsp;&nbsp;&nbsp;</NavLink>
            <NavLink to='/physicianlogin' style={{textDecoration: 'none'}}>Physician Login &nbsp;&nbsp;&nbsp;</NavLink>
.......................... */} 




        <Navbar.Brand href="/home">I-myEYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* basic-navbar-nav */}
        <Navbar.Collapse id="responsive-navbar-nav">

         <Nav className="me-auto space">
            <NavLink to="/home" style={{textDecoration: 'none'}} className="nav-content"> HOME &nbsp;&nbsp;&nbsp;</NavLink>
            {/* color:'#FFFFFF' */}
            {/* <Nav className='me-auto'> */}
            


            <NavLink to="/services" style={{textDecoration: 'none'}}> SERVICES &nbsp;&nbsp;&nbsp;</NavLink>
            <NavLink to="/contactUs" style={{textDecoration: 'none'}}>  CONTACT US &nbsp;&nbsp;&nbsp;</NavLink>
            <NavLink to="/address" style={{textDecoration: 'none'}}> ADDRESS &nbsp;&nbsp;&nbsp;</NavLink>
            <NavLink to ="/news&Event" style={{textDecoration: 'none'}}> NEWS/EVENTS &nbsp;&nbsp;&nbsp;</NavLink>
            

            {/* <NavDropdown title="More" id="basic-nav-dropdown" className='nav'>
              <NavDropdown.Item href="/services" >Services</NavDropdown.Item>
              <NavDropdown.Item href="/contactUs">
                Contact Us
              </NavDropdown.Item>
              <NavDropdown.Item href="/address" >Address</NavDropdown.Item>
            </NavDropdown> */}
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
        <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
          <FontAwesomeIcon icon={theme === 'light' ? faMoon : faSun} />
      </button>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );
}

export default CustomNavbar;