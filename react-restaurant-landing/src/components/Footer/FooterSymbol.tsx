import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";

import "./Footer.scss";

const FooterSymbol = () => {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer-last">
        <Row>
          <Col md="4" className="footer-copywright">
            <h3>Designed and Developed by Kelvin You</h3>
          </Col>
          <Col md="4" className="footer-copywright">
            <h3>Copyright © {year} Kelvin</h3>
          </Col>
          <Col md="4" className="footer-body">
            <ul className="footer-icons">
              <li className="social-icons">
                <a
                  href="https://kelvinyou.vercel.app/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <CgProfile />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://github.com/KelvinYou"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kelvin-you-a29644198/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/kelvinyou0220/"
                  style={{ color: "white" }}
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
  )
}

export default FooterSymbol