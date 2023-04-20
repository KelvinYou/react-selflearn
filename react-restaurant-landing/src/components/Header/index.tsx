import React, { FC } from 'react'
import StoreIcon from '@mui/icons-material/Store';
import { Nav, Navbar } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { ABOUT_PATH, HOME_PATH } from './../../contants/routes';

const Header: FC = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
      <Navbar.Brand href="" className="navbar-brand"><StoreIcon /> Restaurant</Navbar.Brand>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav ms-auto py-0 pe-4">
          
          <Nav.Link onClick={() => navigate(HOME_PATH)} className="nav-link">Home</Nav.Link>
          <Nav.Link onClick={() => navigate(ABOUT_PATH)} className="nav-link">About</Nav.Link>
          {/* <a href="service.html" className="nav-item nav-link">Service</a>
          <a href="menu.html" className="nav-item nav-link">Menu</a>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0">
              <a href="booking.html" className="dropdown-item">Booking</a>
              <a href="team.html" className="dropdown-item">Our Team</a>
              <a href="testimonial.html" className="dropdown-item">Testimonial</a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">Contact</a> */}
        </div>
        {/* <a href="" className="btn btn-primary py-2 px-4">Book A Table</a> */}
      </div>
    </nav>
  )
}

export default Header