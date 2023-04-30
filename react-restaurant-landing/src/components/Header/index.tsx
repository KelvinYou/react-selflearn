import React, { FC, useRef, useState } from 'react'

import { Button, Container, Nav, Navbar, Offcanvas } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ABOUT_PATH, CONTACT_PATH, HOME_PATH, MENU_PATH, SERVICES_PATH } from './../../contants/routes';

import MenuIcon from '@mui/icons-material/Menu';
import StoreIcon from '@mui/icons-material/Store';

import "./Header.scss";
import HomeHero from './heros/HomeHero';
import AboutHero from './heros/AboutHero';
import ServicesHero from './heros/ServicesHero';
import MenuHero from './heros/MenuHero';
import ContactHero from './heros/ContactHero';

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
  },
  {
    name: "Services",
    path: SERVICES_PATH
  },
  {
    name: "Menu",
    path: MENU_PATH
  },
  {
    name: "Contact",
    path: CONTACT_PATH
  }
]

const Header: FC = () => {
  const navigate = useNavigate();
  const headerSize = "lg";
  const brandName = "Restaurant";

  const [expand, setExpanded] = useState(false);
  const [navColour, setNavColour] = useState(false);
    // const currentActivePath = location.location;

  const handleNavigate = (path: string) => {
    setExpanded(false);
    navigate(path);
  }

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setNavColour(true);
    } else {
      setNavColour(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);
  
  const currentActivePath = location.hash.replace("#", "");

  return (
    <div className="navbar-and-hero">
      <Navbar 
        expand= { headerSize } 
        // fixed="top"
        expanded={expand} 
        className={`navbar-dark px-4 px-lg-5 py-3 py-lg-0 ${navColour ? "sticky" : "navbar"}`}
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
                <Nav.Item key={index}>
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
      {(currentActivePath === HOME_PATH || currentActivePath === "") && <HomeHero />}
      {currentActivePath === ABOUT_PATH && <AboutHero />}
      {currentActivePath === SERVICES_PATH && <ServicesHero />}
      {currentActivePath === MENU_PATH && <MenuHero />}
      {currentActivePath === CONTACT_PATH && <ContactHero />}
      
    </div>
    
  )
}

export default Header