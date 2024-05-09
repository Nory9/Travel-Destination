// import { React } from "react";
 import './Header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from "react-router-dom"

function Header(props){
    return(
        <Navbar expand="lg" className="bg-body-tertiary header">
        <Container className='test'>
          <Navbar.Brand href="#home">LOGO</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" >
            <Nav className="me-auto ">
            <Link className='nav' to="/">Home</Link>
            <Link className='nav' to="/about">About</Link>
              {/* <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="#link">About</Nav.Link>
               */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default Header;