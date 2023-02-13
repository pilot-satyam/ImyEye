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
    // <Navbar bg="primary" expand="lg" expand={props.expand} variant="light" fixed="top"  className={`navbar navbar-${theme}`} fixed={props.fixed}>
    <Navbar bg={props.bg} className={`navbar navbar-${theme}`} fixed="top" expand="lg">
      <Container>
        <img src ="favicon-32x32.png" alt="Image of eye for the navBar" className='rounded-circle'/>

        <Navbar.Brand href="/home">I-myEYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        {/* basic-navbar-nav */}
        <Navbar.Collapse id="responsive-navbar-nav">

         <Nav className="me-auto space">
            <NavLink to="/home" style={{textDecoration: 'none'}} className="nav-content"> HOME &nbsp;&nbsp;&nbsp;</NavLink>
            <NavLink to="/services" style={{textDecoration: 'none'}}> SERVICES &nbsp;&nbsp;&nbsp;</NavLink>
            <NavLink to="/contactUs" style={{textDecoration: 'none'}}>  CONTACT US &nbsp;&nbsp;&nbsp;</NavLink>
        
            
            {/* <Link to="/address">
              <NavDropdown.Item className='navbar-dropdown-item'>Branch-1</NavDropdown.Item> 
            </Link>
            <Link to="/branch2">
               <NavDropdown.Item className='navbar-dropdown-item'>Branch-2</NavDropdown.Item>
            </Link> */}
            <NavDropdown title="Address" id="basic-nav-dropdown" className='navbar-dropdown'>
              <NavDropdown.Item href="/address" className='black-dropdown'>Branch-1</NavDropdown.Item>
              <NavDropdown.Item href="/branch2" className='black-dropdown'>Branch-2</NavDropdown.Item>
            </NavDropdown>
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