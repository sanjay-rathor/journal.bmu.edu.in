import React, { useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { authenticationService, restService } from '../../services';
import { createBrowserHistory } from 'history';
import SearchBar from './searchbar';
import Logo from '../../images/favicon.ico';
const browserHistory = createBrowserHistory();

export default function Footer(props) {

    return (
        <Navbar sticky="bottom" expand="lg" >
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
         {/*   <Nav.Item>
                <Nav.Link href="/right-and-permissions" className="footer-link">
                    Rights & Permissions
     </Nav.Link>
            </Nav.Item>
             <Nav.Item>
                <Nav.Link href="/" className="footer-link">
                    Copyright
     </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/" className="footer-link">
                    Privacy Issue
     </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/" className="footer-link">
                    Terms of Use
     </Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="/" className="footer-link">
                    Cookie Policy
     </Nav.Link>
            </Nav.Item> */}
        </Navbar>
    );
}

