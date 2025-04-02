import React, {useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {authenticationService, restService} from '../../services';
import { createBrowserHistory } from 'history';
import SearchBar from './searchbar';
import Logo from '../../images/favicon.ico';
const browserHistory = createBrowserHistory();

export default function MainHeader(props) {

  const logout = () => {
   
    
  }
  useEffect(() => {
  },[])
  return (
    <Navbar collapseOnSelect expand="lg" bg="header" variant="light">

       <Navbar.Brand href="/" className="logo">
            <img
        alt=" BML MUNJAL UNIVERSITY  "
        src={Logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
        BML MUNJAL UNIVERSITY  
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
        <div className="container">
          <div className="row  col-sm-12 " style={{
            "width": "50vw"
          }}  >
          <div className="col-lg-12 text-center">
          {/* <SearchBar /> */}
          </div>
          </div>
          </div>
          
        </Nav>
        <Nav variant="tabs" className="ml-auto">
          
        {/* <NavDropdown renderMenuOnMount={true} alignRight  aria-controls="responsive-navbar-nav"  data-toggle="dropdown" title={
       
       <span className="material-icons">
            person
        </span>
      }>
           
            <NavDropdown.Item  onClick={() => {
              logout();

            }}>Logout</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/profile">Edit Profile</NavDropdown.Item>
            <NavDropdown.Item href="/user-manage">User Management</NavDropdown.Item>
            <NavDropdown.Item href="/settings">Account Settings</NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

