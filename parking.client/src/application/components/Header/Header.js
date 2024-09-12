import React from 'react';
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logoImage from "application/assets/images/logo.png";
import "./Header.css";
import { BsList } from "react-icons/bs";

const Header = ({handleShowSidebar}) => {
  return (
    <Navbar expand="lg" className="bg-primary header pt-0 pb-0">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img width="35px" src={logoImage} alt="Logo" />
        </Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link className="me-4" onClick={handleShowSidebar} href="#">
              <b>
              <BsList size={20} />
              </b>
            </Nav.Link>
            <NavDropdown title="Select Company" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Company 1</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Company 2</NavDropdown.Item>
            </NavDropdown>
          </Nav>
      </Container>
    </Navbar>
  );
};

export default Header;