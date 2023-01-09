import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {authenticationService} from '../../services';
import { createBrowserHistory } from 'history';
import SearchBar from './searchbar';

const browserHistory = createBrowserHistory();

export default function Header() {
  console.log("Cusrrent User " + authenticationService.currentUser);
  return (
    <Navbar collapseOnSelect expand="lg" bg="header" variant="header">
      <Navbar.Brand href="#home">metaResource</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#features">Features</Nav.Link>
          <Nav.Link href="#pricing">Pricing</Nav.Link>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
          
        </Nav>
        <Nav>
          <SearchBar />
          <NavDropdown title="Settings" id="collasible-nav-dropdown">
            <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="/profile">Edit Profile</NavDropdown.Item>
            <NavDropdown.Item href="/settings">App Settings</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

