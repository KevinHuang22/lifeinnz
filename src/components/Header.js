import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header(){
    return (
        <Navbar bg="light" variant="light" sticky="top">
            <Navbar.Brand href="/">Life in NZ</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="/Study">Study</Nav.Link>
                <Nav.Link href="/Visit">Visit</Nav.Link>
                <Nav.Link href="/Work">Work</Nav.Link>
                <Nav.Link href="/Live">Live</Nav.Link>
                <NavDropdown title="Other Info" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/Contact">Contact us</NavDropdown.Item>
                    <NavDropdown.Item href="About">About us</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="OtherInfo">Other Info</NavDropdown.Item>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

export default Header;