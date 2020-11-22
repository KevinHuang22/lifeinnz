import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(){
    return (
        <Navbar bg="light" variant="light" fixed="top">
            <Navbar.Brand href="#home">Life in NZ</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Study</Nav.Link>
                <Nav.Link href="#features">Visit</Nav.Link>
                <Nav.Link href="#pricing">Work</Nav.Link>
                <Nav.Link href="#pricing">Live</Nav.Link>
                <NavDropdown title="Other Info" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Contact us</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">About us</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Other Info</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default Header;