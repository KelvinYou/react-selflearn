import React, { FC, useRef, useState } from 'react'

import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ABOUT_PATH, HOME_PATH } from './../../contants/routes';

import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';

const Header: FC = () => {
  const navigate = useNavigate();
  const headerSize = "lg";
  const brandName = "Restaurant";

  const [expand, setExpanded] = useState(false);
  
  const handleNavigate = (path: string) => {
    console.info("expand: " + expand);
    setExpanded(false);
    console.info("expand: " + expand);
    navigate(path);
  }

  return (
    <Navbar expand= { headerSize } expanded={expand} className="navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Container fluid>
        <Navbar.Brand href="" className="navbar-brand"><StoreIcon /> { brandName }</Navbar.Brand>

        <Navbar.Toggle 
          aria-controls={`offcanvasNavbar-expand-${ headerSize }`} 
          onClick={() => {
            setExpanded(expand ? false : true);
          }}
        />

        <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${ headerSize }`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${ headerSize }`}
            placement="end"
          >
          
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${ headerSize }`}>
              { brandName }
            </Offcanvas.Title>
          </Offcanvas.Header>
          
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link onClick={() => handleNavigate(HOME_PATH)} className="nav-link">Home</Nav.Link>
              <Nav.Link onClick={() => handleNavigate(ABOUT_PATH)} className="nav-link">About</Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
      
    </Navbar>
  )
}

export default Header