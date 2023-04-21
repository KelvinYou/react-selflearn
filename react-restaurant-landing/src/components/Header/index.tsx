import React, { FC, useRef, useState } from 'react'

import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ABOUT_PATH, HOME_PATH } from './../../contants/routes';

import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';

import "./Header.scss";
import HomeHero from './heros/HomeHero';
import AboutHero from './heros/AboutHero';

interface navbarItemProps {
  name: string,
  path: any,
}

const navbarItems: navbarItemProps[] = [
  {
    name: "Home",
    path: HOME_PATH
  },
  {
    name: "About",
    path: ABOUT_PATH
  }
]

const Header: FC = () => {
  const navigate = useNavigate();
  const headerSize = "lg";
  const brandName = "Restaurant";

  const [expand, setExpanded] = useState(false);
  
  const handleNavigate = (path: string) => {
    setExpanded(false);
    navigate(path);
  }
  
  const currentActivePath = location.pathname;

  return (
    <div className="navbar-and-hero">
      <Navbar 
        expand= { headerSize } 
        expanded={expand} 
        className="navbar-dark px-4 px-lg-5 py-3 py-lg-0"
      >
        <Container fluid>
          <Navbar.Brand href="" className="navbar-brand">
            <StoreIcon /> <span className="brand-name">{ brandName }</span>
          </Navbar.Brand>

          <Navbar.Toggle 
            aria-controls={`offcanvasNavbar-expand-${ headerSize }`} 
            onClick={() => {
              setExpanded(expand ? false : true);
            }}
          >
            <span></span>
            <span></span>
            <span></span>
          </Navbar.Toggle>

          <Navbar.Collapse id="navbar-collapse">
            <Nav className="ms-auto" defaultActiveKey="#home">
              {navbarItems.map((navbarItem, index) => (
                <Nav.Item>
                  <Nav.Link 
                    onClick={() => handleNavigate(navbarItem.path)} 
                    className={currentActivePath == navbarItem.path ? 
                      "nav-link-active" : "nav-link-inactive"
                    }>
                      { navbarItem.name }
                    </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>

        </Container>
        
      </Navbar>
      {currentActivePath === HOME_PATH && <HomeHero />}
      {currentActivePath === ABOUT_PATH && <AboutHero />}
      
    </div>
    
  )
}

export default Header