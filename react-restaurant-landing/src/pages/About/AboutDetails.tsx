import React, { useEffect, useRef } from 'react';

import CountUp from 'react-countup';

import Button from "@mui/material/Button";
import { Row, Col, Container } from 'react-bootstrap';

import AboutImg1 from "./../../assets/about/about-1.jpg";
import AboutImg2 from "./../../assets/about/about-2.jpg";
import AboutImg3 from "./../../assets/about/about-3.jpg";
import AboutImg4 from "./../../assets/about/about-4.jpg";


import "./About.scss";
import FadeInSection from '../../components/FadeInSection';

const AboutDetails = () => {
  return (
    <Container fluid className="py-5">
      <FadeInSection>
        <Container>
          <Row className="g-5 align-items-center">
            <Col lg={6}>
              <Row className="g-3">
                <Col xs={6} className="text-start">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.1s" src={ AboutImg1 }/>
                </Col>
                <Col xs={6} className="text-start">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.3s" src={ AboutImg2 } style={{ marginTop: "25%" }}/>
                </Col>
                <Col xs={6} className="text-end">
                  <img className="img-fluid rounded w-75 wow zoomIn" data-wow-delay="0.5s" src={ AboutImg3 }/>
                </Col>
                <Col xs={6} className="text-end">
                  <img className="img-fluid rounded w-100 wow zoomIn" data-wow-delay="0.7s" src={ AboutImg4 }/>
                </Col>
              </Row>
            </Col>
            <Col lg={6}>
              <h5 className="section-title secondary-title ff-secondary text-start fw-normal">About Us</h5>
              <h1 className="mb-4">Welcome to Restaurant</h1>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
              <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>

              <Row className="g-4 mb-4">
                <Col sm={6}>
                  <div className="d-flex align-items-center border-start border-5 num-container px-3">
                    <h1 className="flex-shrink-0 display-5 mb-0" data-toggle="counter-up">15</h1>
                    <div className="ps-4">
                      <p className="mb-0">Years of</p>
                      <h6 className="text-uppercase mb-0">Experience</h6>
                    </div>
                  </div>
                </Col>
                <Col sm={6}>
                  <div className="num-container d-flex align-items-center border-start border-5 px-3">
                    <h1 className="flex-shrink-0 display-5 mb-0" data-toggle="counter-up">50</h1>
                    <div className="ps-4">
                      <p className="mb-0">Popular</p>
                      <h6 className="text-uppercase mb-0">Master Chefs</h6>
                    </div>
                  </div>
                </Col>
              </Row>

              <Button variant="contained" className="py-3 px-5 mt-2 read-more-button">Read More</Button>
            </Col>
          </Row>
          
        </Container>
      </FadeInSection>

    </Container>
  )
}

export default AboutDetails